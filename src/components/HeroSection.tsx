'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import heroImg from '@/assets/hero-illustration.png';

const HeroSection = () => {
  return (
    <section
      id='hero'
      className='hero-gradient relative min-h-screen overflow-hidden pt-24 md:pt-32'
    >
      {/* Decorative blobs */}
      <div className='pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl' />
      <div className='pointer-events-none absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-secondary/10 blur-3xl' />

      <div className='container mx-auto px-4'>
        <div className='flex flex-col items-center gap-12 lg:flex-row lg:gap-16'>
          {/* Text */}
          <motion.div
            className='flex flex-1 flex-col items-center text-center lg:items-start lg:text-left'
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className='mb-6 flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary'
            >
              <Sparkles size={14} />
              AI-Powered Business Platform
            </motion.div>

            <h1 className='font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl'>
              Create Your Business{' '}
              <span className='gradient-text'>With AI</span>
            </h1>

            <p className='mt-6 max-w-xl text-lg text-muted-foreground md:text-xl'>
              Start, run, and grow your business—all in one place. Servix OS
              combines an AI assistant with a complete online office to help you
              launch faster than ever.
            </p>

            <div className='mt-8 flex flex-col gap-4 sm:flex-row'>
              <motion.a
                href='#pricing'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className='gradient-bg glow-shadow inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-base font-semibold text-primary-foreground'
              >
                Get Started Free <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href='#how-it-works'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className='inline-flex items-center justify-center gap-2 rounded-full border bg-card px-8 py-3.5 text-base font-semibold transition-shadow hover:card-shadow-hover'
              >
                See How It Works
              </motion.a>
            </div>

            {/* Social proof */}
            <div className='mt-10 flex items-center gap-4'>
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
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className='flex-1'
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <div className='animate-float'>
              <Image
                src={heroImg}
                alt='Servix OS AI-powered business dashboard showing analytics, invoices, and website builder'
                className='w-full max-w-2xl rounded-2xl glow-shadow'
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trusted by */}
      <motion.div
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
      </motion.div>
    </section>
  );
};

export default HeroSection;
