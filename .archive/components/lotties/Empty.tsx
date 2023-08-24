import { useLottie } from '@hooks/useLottie';
import { useRef } from 'react';

export function Empty({ className }: {} extends React.HTMLAttributes<HTMLDivElement> ? {} : {}) {
  const lottieRef = useRef<HTMLDivElement>(null);

  const {} = useLottie({ ref: lottieRef, path: '/lotties/empty.json', loop: true, autoplay: true });

  return <div className={className} ref={lottieRef} />;
}
