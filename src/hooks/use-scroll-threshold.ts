'use client';

import { useEffect, useState } from 'react';

export function useScrollThreshold(threshold: number) {
  const [pastThreshold, setPastThreshold] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateState = () => {
      const nextValue = window.scrollY > threshold;
      setPastThreshold((currentValue) =>
        currentValue === nextValue ? currentValue : nextValue,
      );
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateState);
    };

    updateState();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return pastThreshold;
}
