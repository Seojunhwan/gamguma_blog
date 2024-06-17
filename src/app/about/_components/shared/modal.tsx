'use client';

import { useControllableState } from '@/hooks/useControllableState';
import { cn } from '@/utils/cn';
import { createContext } from '@/utils/context';
import * as Dialog from '@radix-ui/react-dialog';
import { AnimatePresence, Variants, motion } from 'framer-motion';

/**
 * radix with framer motion reference
 * @see - https://codesandbox.io/p/sandbox/radix-ui-framer-motion-p64hw?file=%2Fsrc%2FApp.js%3A18%2C11
 *
 * 이상하게도 "next": "14.3.0-canary.14" 버전은 "framer-motion": "12.0.0-alpha.0" 버전을 사용해야 한다.
 */

type ModalMode = 'full' | 'overlay';

const [ModalContextProvider, useModalContext] = createContext<{
  open: boolean;
  mode: ModalMode;
}>('Modal');

interface ModalProps extends Dialog.DialogProps, Dialog.DialogPortalProps {
  mode?: ModalMode;
}

export function Modal({
  children,
  onOpenChange,
  open: openFromProps,
  defaultOpen: defaultOpenProps,
  mode = 'full',
  ...props
}: ModalProps) {
  const [open = false, setOpen] = useControllableState({
    prop: openFromProps,
    defaultProp: defaultOpenProps,
    onChange: onOpenChange,
  });

  return (
    <ModalContextProvider open={open} mode={mode}>
      <Dialog.Root open={open} onOpenChange={setOpen} {...props} modal={false}>
        {children}
      </Dialog.Root>
    </ModalContextProvider>
  );
}

interface ModalTriggerProps extends Dialog.DialogTriggerProps {}

export function ModalTrigger({ children, asChild = true, ...props }: ModalTriggerProps) {
  return (
    <Dialog.Trigger asChild={asChild} {...props}>
      {children}
    </Dialog.Trigger>
  );
}

interface DialogOverlayProps extends Dialog.DialogOverlayProps {}

const DialogOverlay = ({ ...props }: DialogOverlayProps) => {
  return (
    <Dialog.Overlay {...props}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className='fixed inset-0 bg-black/50'
      />
    </Dialog.Overlay>
  );
};

DialogOverlay.displayName = 'DialogOverlay';

interface ModalContentProps extends Dialog.DialogContentProps {
  overlay?: React.ReactNode;
}

const dialogVariants: Variants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
};

/**
 * radix와 framer motion을 함께 사용할 때 exit 애니메이션이 제대로 작동하지 않는 문제 관련 참고 자료
 * @see https://github.com/radix-ui/primitives/discussions/1058
 */

export const ModalContent = ({ asChild = true, overlay, children, ...props }: ModalContentProps) => {
  const { open, mode } = useModalContext('ModalContent');

  return (
    <AnimatePresence>
      {open && (
        <Dialog.Portal forceMount>
          {overlay}
          <Dialog.Content asChild={asChild} forceMount {...props}>
            <motion.div
              variants={dialogVariants}
              initial='closed'
              animate='open'
              exit='closed'
              className={cn(
                'fixed left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-4 shadow-lg dark:bg-neutral-900',
                {
                  'max-h-[100vh] max-w-[100vw]': mode === 'full',
                  'lg:max-h-[90vh] lg:max-w-[50vw]': mode === 'overlay',
                },
              )}
            >
              {children}
            </motion.div>
          </Dialog.Content>
        </Dialog.Portal>
      )}
    </AnimatePresence>
  );
};

export const ModalClose = ({ children, asChild = true, ...props }: Dialog.DialogCloseProps) => {
  return (
    <Dialog.Close asChild={asChild} {...props}>
      {children}
    </Dialog.Close>
  );
};

ModalContent.displayName = 'ModalContent';
