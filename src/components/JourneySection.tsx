'use client';

import * as m from 'framer-motion/m';

import SectionHeading from '@/components/shared/SectionHeading';
import StatusBadge from '@/components/shared/StatusBadge';
import { journeyStages } from '@/content/home';

export default function JourneySection() {
  return (
    <section id='journey' className='py-20 md:py-32'>
      <div className='container mx-auto px-4'>
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            badge='Your Journey'
            title='Built Around How Entrepreneurship'
            highlight='Actually Works'
            description="Whether you're still deciding what to build or already running a business, Servix OS meets you at your stage."
            badgeClassName='bg-secondary/10 text-secondary'
            className='mb-16'
          />
        </m.div>

        <div className='grid gap-6 lg:grid-cols-3'>
          {journeyStages.map((stage, index) => (
            <m.article
              key={stage.key}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: index * 0.12 }}
              className='flex flex-col rounded-2xl border bg-card p-6 transition-all duration-300 hover:card-shadow-hover md:p-8'
            >
              <span className='mb-3 inline-block w-fit rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent'>
                {stage.badge}
              </span>
              <h3 className='mb-2 font-display text-xl font-bold md:text-2xl'>
                {stage.title}
              </h3>
              <p className='mb-6 text-sm leading-relaxed text-muted-foreground md:text-base'>
                {stage.description}
              </p>

              <ul className='flex flex-1 flex-col gap-4'>
                {stage.items.map((item) => (
                  <li key={item.title} className='border-t pt-4 first:border-t-0 first:pt-0'>
                    <div className='mb-1 flex items-start justify-between gap-2'>
                      <p className='font-display text-sm font-bold md:text-base'>
                        {item.title}
                      </p>
                      {item.status !== 'available' ? (
                        <StatusBadge status={item.status} className='shrink-0' />
                      ) : null}
                    </div>
                    <p className='text-sm text-muted-foreground'>{item.description}</p>
                  </li>
                ))}
              </ul>
            </m.article>
          ))}
        </div>
      </div>
    </section>
  );
}
