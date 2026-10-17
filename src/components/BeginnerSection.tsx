'use client';

import * as m from 'framer-motion/m';
import { ShieldCheck } from 'lucide-react';

import SectionHeading from '@/components/shared/SectionHeading';
import { beginnerFrictionPoints } from '@/content/home';

export default function BeginnerSection() {
  return (
    <section id='beginner-friendly' className='py-20 md:py-32'>
      <div className='container mx-auto px-4'>
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            badge='No Experience Needed'
            title='You Don’t Need To Be a Business Expert'
            highlight='To Start'
            description="Most people who want to become entrepreneurs aren't stuck because they lack ambition. They're stuck because they don't know what to do next."
            badgeClassName='bg-primary/10 text-primary'
            className='mb-16'
          />
        </m.div>

        <div className='mx-auto grid max-w-4xl gap-8 lg:grid-cols-2'>
          <m.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45 }}
            className='rounded-2xl border bg-card p-6 md:p-8'
          >
            <h3 className='mb-4 font-display text-lg font-bold md:text-xl'>
              Sound familiar?
            </h3>
            <ul className='flex flex-col gap-3'>
              {beginnerFrictionPoints.map((point) => (
                <li
                  key={point.text}
                  className='flex items-start gap-3 text-sm text-muted-foreground md:text-base'
                >
                  <span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/50' />
                  {point.text}
                </li>
              ))}
            </ul>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className='flex flex-col justify-center rounded-2xl gradient-bg p-6 text-primary-foreground md:p-8'
          >
            <ShieldCheck size={28} className='mb-4' />
            <h3 className='mb-2 font-display text-lg font-bold md:text-xl'>
              You stay in control
            </h3>
            <p className='text-sm leading-relaxed text-primary-foreground/90 md:text-base'>
              Servix OS gives you structure and guidance at every step-from choosing a
              direction to running daily operations-while you stay fully in control of
              every decision.
            </p>
          </m.div>
        </div>
      </div>
    </section>
  );
}
