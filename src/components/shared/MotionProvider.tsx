'use client';

import type { ReactNode } from 'react';
import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion';

type MotionProviderProps = {
  children: ReactNode;
};

export default function MotionProvider({ children }: MotionProviderProps) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion='user'>{children}</MotionConfig>
    </LazyMotion>
  );
}
