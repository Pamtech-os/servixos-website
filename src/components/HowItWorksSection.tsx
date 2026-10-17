'use client';

import type { LucideIcon } from 'lucide-react';
import * as m from 'framer-motion/m';
import { Rocket, UserPlus, Wand2 } from 'lucide-react';

import SectionHeading from '@/components/shared/SectionHeading';
import { howItWorksSteps } from '@/content/home';

const stepIcons: Record<(typeof howItWorksSteps)[number]['icon'], LucideIcon> = {
  userPlus: UserPlus,
  wand2: Wand2,
  rocket: Rocket,
};

export default function HowItWorksSection() {
  return (
    <section
      id='how-it-works'
      className='relative overflow-hidden py-20 md:py-32'
    >
      <div className='pointer-events-none absolute inset-0 bg-muted/30' />

      <div className='container relative mx-auto px-4'>
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            badge='How It Works'
            title='Getting Started Is'
            highlight='Simple'
            description='From first step to daily operations-with Servix OS guiding the way.'
            badgeClassName='bg-accent/10 text-accent'
            className='mb-16'
          />
        </m.div>

        <div className='relative mx-auto grid max-w-5xl gap-8 md:grid-cols-3'>
          <div className='pointer-events-none absolute left-0 right-0 top-16 hidden h-0.5 gradient-bg md:block' />

          {howItWorksSteps.map((step, index) => {
            const Icon = stepIcons[step.icon];

            return (
              <m.article
                key={step.num}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: index * 0.12 }}
                className='relative flex flex-col items-center text-center'
              >
                <div className='relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl gradient-bg text-primary-foreground shadow-lg'>
                  <Icon size={28} />
                </div>
                <span className='mb-2 font-display text-sm font-bold text-primary'>
                  {step.num}
                </span>
                <h3 className='mb-2 font-display text-lg font-bold md:text-xl'>
                  {step.title}
                </h3>
                <p className='text-sm text-muted-foreground md:text-base'>
                  {step.description}
                </p>
              </m.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
