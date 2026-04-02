'use client';

import { AnimatePresence } from 'framer-motion';
import * as m from 'framer-motion/m';
import { ArrowUp } from 'lucide-react';

import { useScrollThreshold } from '@/hooks/use-scroll-threshold';

export default function ScrollToTop() {
  const visible = useScrollThreshold(400);

  return (
    <AnimatePresence>
      {visible ? (
        <m.button
          type='button'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label='Scroll to top'
          className='fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full gradient-bg text-primary-foreground shadow-lg transition-transform hover:scale-110'
        >
          <ArrowUp size={20} />
        </m.button>
      ) : null}
    </AnimatePresence>
  );
}
