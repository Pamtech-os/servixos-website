'use client';

import { useEffect, useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import * as m from 'framer-motion/m';
import { ArrowRight, ShieldCheck, Sparkles, UserCheck } from 'lucide-react';
import Image from 'next/image';

import heroDashboardDark from '@/assets/hero-dashboard-dark.png';
import heroDashboardDarkInsights from '@/assets/hero-dashboard-dark-insights.png';
import heroDashboardDarkPayments from '@/assets/hero-dashboard-dark-payments.png';
import heroDashboardLight from '@/assets/hero-dashboard-light.png';
import heroDashboardLightJobs from '@/assets/hero-dashboard-light-jobs.png';
import heroDashboardLightTeams from '@/assets/hero-dashboard-light-teams.png';

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

const HERO_SLIDE_INTERVAL_MS = 3000;
const HERO_ROTATION_DEGREES = [-2.8, -2.1, -1.4, 1.4, 2.1, 2.8] as const;
type HeroRotation = (typeof HERO_ROTATION_DEGREES)[number];
const DEFAULT_LIGHT_ROTATION = HERO_ROTATION_DEGREES[2];
const DEFAULT_DARK_ROTATION = HERO_ROTATION_DEGREES[5];

const getRandomRotation = (): HeroRotation =>
  HERO_ROTATION_DEGREES[
    Math.floor(Math.random() * HERO_ROTATION_DEGREES.length)
  ];

const lightDashboardSlides = [
  {
    src: heroDashboardLight,
    alt: 'Servix OS light invoices dashboard preview',
  },
  {
    src: heroDashboardLightJobs,
    alt: 'Servix OS light jobs dashboard preview',
  },
  {
    src: heroDashboardLightTeams,
    alt: 'Servix OS light teams dashboard preview',
  },
];

const darkDashboardSlides = [
  {
    src: heroDashboardDark,
    alt: 'Servix OS dark dashboard preview',
  },
  {
    src: heroDashboardDarkPayments,
    alt: 'Servix OS dark payments dashboard preview',
  },
  {
    src: heroDashboardDarkInsights,
    alt: 'Servix OS dark AI insights dashboard preview',
  },
];

export default function HeroSection() {
  const slideCount = Math.min(
    lightDashboardSlides.length,
    darkDashboardSlides.length
  );
  const [slideIndex, setSlideIndex] = useState(0);
  const [lightRotation, setLightRotation] =
    useState<HeroRotation>(DEFAULT_LIGHT_ROTATION);
  const [darkRotation, setDarkRotation] =
    useState<HeroRotation>(DEFAULT_DARK_ROTATION);

  useEffect(() => {
    if (slideCount <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setSlideIndex((currentIndex) => (currentIndex + 1) % slideCount);
      setLightRotation(getRandomRotation());
      setDarkRotation(getRandomRotation());
    }, HERO_SLIDE_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, [slideCount]);

  const activeSlideIndex = slideCount > 0 ? slideIndex % slideCount : 0;
  const activeLightSlide =
    lightDashboardSlides[activeSlideIndex] ?? lightDashboardSlides[0];
  const activeDarkSlide =
    darkDashboardSlides[activeSlideIndex] ?? darkDashboardSlides[0];

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
              AI Entrepreneurship Operating System
            </m.div>

            <m.h1
              className='font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl'
              initial={fadeUp.initial}
              animate={fadeUp.animate}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Start, Run and Grow a Business{' '}
              <span className='gradient-text'>With AI by Your Side</span>
            </m.h1>

            <m.p
              className='mt-5 max-w-2xl text-lg text-muted-foreground md:text-lg lg:text-lg xl:text-xl'
              initial={fadeUp.initial}
              animate={fadeUp.animate}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Servix OS helps you discover business opportunities, build your
              business, understand what needs to happen next, and take
              action-all through one connected AI-powered platform, even if you
              have little to no business experience.
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
                href='#ai-engine'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className='inline-flex items-center justify-center gap-2 rounded-full border bg-card px-8 py-3.5 text-base font-semibold transition-shadow hover:card-shadow-hover'
              >
                See the AI Engine in Action
              </m.a>
            </div>

            <m.div
              className='mt-9 flex flex-wrap items-center gap-x-6 gap-y-3'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                <UserCheck size={16} className='text-primary' />
                No business experience required
              </div>
              <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                <Sparkles size={16} className='text-primary' />
                AI-guided every step
              </div>
              <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                <ShieldCheck size={16} className='text-primary' />
                You stay in control
              </div>
            </m.div>
          </m.div>

          <m.div
            className='flex w-full flex-1 justify-center'
            initial={{ opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.25, ease: 'easeOut' }}
          >
            <div className='animate-float relative w-full max-w-lg md:max-w-lg lg:max-w-xl xl:max-w-2xl'>
              <AnimatePresence mode='wait' initial={false}>
                <m.div
                  key={`light-slide-${activeSlideIndex}`}
                  className='dark:hidden'
                  initial={{
                    opacity: 0,
                    y: 14,
                    scale: 0.985,
                    rotate: lightRotation + (lightRotation > 0 ? 0.8 : -0.8),
                  }}
                  animate={{ opacity: 1, y: 0, scale: 1, rotate: lightRotation }}
                  exit={{
                    opacity: 0,
                    y: -12,
                    scale: 1.015,
                    rotate: lightRotation * -0.35,
                  }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                  <Image
                    src={activeLightSlide.src}
                    alt={activeLightSlide.alt}
                    sizes='(max-width: 768px) 92vw, (max-width: 1280px) 42vw, 40vw'
                    className='relative z-10 w-full rounded-2xl glow-shadow'
                    priority
                  />
                </m.div>
              </AnimatePresence>

              <AnimatePresence mode='wait' initial={false}>
                <m.div
                  key={`dark-slide-${activeSlideIndex}`}
                  className='hidden dark:block'
                  initial={{
                    opacity: 0,
                    y: 14,
                    scale: 0.985,
                    rotate: darkRotation + (darkRotation > 0 ? 0.8 : -0.8),
                  }}
                  animate={{ opacity: 1, y: 0, scale: 1, rotate: darkRotation }}
                  exit={{
                    opacity: 0,
                    y: -12,
                    scale: 1.015,
                    rotate: darkRotation * -0.35,
                  }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                  <Image
                    src={activeDarkSlide.src}
                    alt={activeDarkSlide.alt}
                    sizes='(max-width: 768px) 92vw, (max-width: 1280px) 42vw, 40vw'
                    className='relative z-10 w-full rounded-2xl glow-shadow'
                    priority
                  />
                </m.div>
              </AnimatePresence>
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
