'use client';

import * as m from 'framer-motion/m';

import SectionHeading from '@/components/shared/SectionHeading';
import { aiDemoSteps } from '@/content/home';

export default function AIDemoSection() {
  return (
    <section id='demo' className='relative overflow-hidden py-20 md:py-32'>
      <div className='pointer-events-none absolute inset-0 bg-muted/30' />

      <div className='container relative mx-auto px-4'>
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            badge='See It In Action'
            title='From Insight to Action-'
            highlight='Not Just Advice'
            description="Here's how the Servix OS AI engine is designed to support a real situation: an overdue invoice."
            badgeClassName='bg-accent/10 text-accent'
            className='mb-16'
          />
        </m.div>

        <div className='mx-auto max-w-2xl'>
          <ol className='relative flex flex-col gap-8 border-l border-border pl-8'>
            {aiDemoSteps.map((step, index) => (
              <m.li
                key={step.num}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className='relative'
              >
                <span className='absolute -left-[42px] top-0 flex h-8 w-8 items-center justify-center rounded-full gradient-bg font-display text-xs font-bold text-primary-foreground'>
                  {step.num}
                </span>
                <h3 className='mb-1 font-display text-lg font-bold md:text-xl'>
                  {step.title}
                </h3>
                <p className='text-sm leading-relaxed text-muted-foreground md:text-base'>
                  {step.description}
                </p>
              </m.li>
            ))}
          </ol>

          <p className='mt-10 text-center text-sm text-muted-foreground'>
            This walkthrough reflects how Servix OS is designed to work today. You can
            always edit, approve, or ignore any AI suggestion or draft.
          </p>
        </div>
      </div>
    </section>
  );
}
