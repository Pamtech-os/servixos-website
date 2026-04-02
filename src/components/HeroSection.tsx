'use client';

import * as m from 'framer-motion/m';
import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';

import heroImg from '@/assets/hero-illustration.png';

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
};

const heroBubbles = [
  { size: 220, top: '6%', left: '-6%', delay: 0.1, duration: 10, driftX: 36 },
  { size: 140, top: '12%', left: '16%', delay: 0.5, duration: 8, driftX: -24 },
  { size: 180, top: '28%', left: '4%', delay: 0.2, duration: 9, driftX: 22 },
  { size: 110, top: '40%', left: '23%', delay: 0.7, duration: 7, driftX: -20 },
  { size: 170, top: '56%', left: '-2%', delay: 0.4, duration: 10, driftX: 28 },
  { size: 120, top: '70%', left: '14%', delay: 0.9, duration: 8, driftX: -18 },
  { size: 250, top: '8%', right: '-8%', delay: 0.3, duration: 11, driftX: -34 },
  { size: 130, top: '22%', right: '18%', delay: 0.8, duration: 7.5, driftX: 16 },
  { size: 200, top: '38%', right: '-4%', delay: 0.15, duration: 10.5, driftX: -26 },
  { size: 105, top: '54%', right: '20%', delay: 0.6, duration: 7.2, driftX: 18 },
  { size: 160, top: '66%', right: '4%', delay: 0.45, duration: 9.5, driftX: -24 },
  { size: 95, top: '78%', right: '24%', delay: 1, duration: 6.8, driftX: 14 },
];

export default function HeroSection() {
  return (
    <section
      id='hero'
      className='hero-gradient relative min-h-screen overflow-hidden pt-24 pb-14 md:min-h-[auto] md:pt-24 md:pb-14 lg:pt-24 lg:pb-20 xl:min-h-screen xl:pt-28 xl:pb-20'
    >
      <div className='pointer-events-none absolute inset-0 overflow-hidden'>
        {heroBubbles.map((bubble, index) => (
          <m.div
            key={`${bubble.size}-${index}`}
            className='absolute rounded-full border border-primary/20 bg-linear-to-br from-primary/20 via-secondary/15 to-accent/20 blur-[1px] dark:border-primary/25'
            style={{
              width: bubble.size,
              height: bubble.size,
              top: bubble.top,
              left: bubble.left,
              right: bubble.right,
              boxShadow:
                'inset 0 0 22px hsl(var(--background) / 0.35), 0 0 34px hsl(var(--primary) / 0.16)',
            }}
            initial={{ opacity: 0, scale: 0.7, y: 40 }}
            animate={{
              opacity: [0.22, 0.58, 0.24],
              scale: [0.95, 1.06, 0.92, 1],
              y: [14, -36, 10, -22, 14],
              x: [0, bubble.driftX, bubble.driftX * -0.7, 0],
            }}
            transition={{
              delay: bubble.delay,
              duration: bubble.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            }}
          >
            <span className='absolute left-[22%] top-[20%] h-5 w-5 rounded-full bg-white/35 blur-sm' />
          </m.div>
        ))}
      </div>

      <div className='pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl' />
      <div className='pointer-events-none absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-secondary/10 blur-3xl' />

      <div className='container relative z-10 mx-auto px-4'>
        <div className='flex flex-col items-center gap-10 md:gap-10 lg:flex-row lg:gap-10 xl:gap-16'>
          <m.div
            className='flex flex-1 flex-col items-center text-center lg:items-start lg:text-left'
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            <m.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className='mb-6 flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary'
            >
              <Sparkles size={14} />
              AI-Powered Business Platform
            </m.div>

            <m.h1
              className='font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl'
              initial={fadeUp.initial}
              animate={fadeUp.animate}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Create Your Business{' '}
              <span className='gradient-text'>With AI</span>
            </m.h1>

            <m.p
              className='mt-5 max-w-2xl text-lg text-muted-foreground md:text-lg lg:text-lg xl:text-xl'
              initial={fadeUp.initial}
              animate={fadeUp.animate}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Start, run, and grow your business-all in one place. Servix OS
              combines an AI assistant with a complete online office to help you
              launch faster than ever.
            </m.p>

            <div className='mt-7 flex flex-col gap-4 sm:flex-row'>
              <m.a
                href='#pricing'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className='gradient-bg glow-shadow inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-base font-semibold text-primary-foreground'
              >
                Get Started Free <ArrowRight size={18} />
              </m.a>
              <m.a
                href='#how-it-works'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className='inline-flex items-center justify-center gap-2 rounded-full border bg-card px-8 py-3.5 text-base font-semibold transition-shadow hover:card-shadow-hover'
              >
                See How It Works
              </m.a>
            </div>

            <m.div
              className='mt-9 flex items-center gap-4'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <div className='flex -space-x-2'>
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className='h-8 w-8 rounded-full border-2 border-background gradient-bg'
                    style={{ opacity: 0.6 + i * 0.08 }}
                  />
                ))}
              </div>
              <p className='text-sm text-muted-foreground'>
                <span className='font-semibold text-foreground'>2,000+</span>{' '}
                businesses launched
              </p>
            </m.div>
          </m.div>

          <m.div
            className='flex w-full flex-1 justify-center'
            initial={{ opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.25, ease: 'easeOut' }}
          >
            <div className='animate-float'>
              <Image
                src={heroImg}
                alt='Servix OS AI-powered business dashboard showing analytics, invoices, and website builder'
                className='w-full max-w-lg rounded-2xl glow-shadow md:max-w-lg lg:max-w-xl xl:max-w-2xl'
                priority
              />
            </div>
          </m.div>
        </div>
      </div>

      {/* <m.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className='container mx-auto mt-16 px-4 pb-16 lg:mt-24'
      >
        <p className='mb-6 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground'>
          Trusted by forward-thinking companies
        </p>
        <div className='flex flex-wrap items-center justify-center gap-8 opacity-40 md:gap-16'>
          {[
            'TechFlow',
            'LaunchPad',
            'StartUp Inc',
            'GrowthCo',
            'InnovateLab',
          ].map((name) => (
            <span
              key={name}
              className='font-display text-lg font-bold md:text-xl'
            >
              {name}
            </span>
          ))}
        </div>
      </m.div> */}
    </section>
  );
}
