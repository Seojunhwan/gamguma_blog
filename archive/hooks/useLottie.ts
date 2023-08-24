import { useCallback, useEffect, useState } from 'react';
import type { LottiePlayer } from 'lottie-web';

interface UseLottie<T> {
  ref: React.RefObject<T>;
  path: string;
  loop?: boolean;
  autoplay?: boolean;
}

export const useLottie = <T extends HTMLElement>({
  ref,
  path,
  loop = false,
  autoplay = true,
}: UseLottie<T>) => {
  const [lottie, setLottie] = useState<LottiePlayer | null>(null);

  const play = useCallback(() => {
    lottie?.play();
  }, [lottie]);

  const pause = useCallback(() => {
    lottie?.pause();
  }, [lottie]);

  useEffect(() => {
    import('lottie-web').then((lottie) => {
      setLottie(lottie.default);
    });
  }, []);

  useEffect(() => {
    if (!ref.current || !lottie) return;

    lottie.loadAnimation({
      container: ref.current,
      renderer: 'svg',
      loop,
      autoplay,
      path,
    });

    return () => {
      lottie.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lottie]);

  return { play, pause };
};
