'use client';

import * as m from 'framer-motion/m';

import SectionHeading from '@/components/shared/SectionHeading';
import StatusBadge from '@/components/shared/StatusBadge';
import { suggestionCards } from '@/content/home';

export default function AISuggestionPanelSection() {
  return (
    <section id='ai-suggestions' className='relative overflow-hidden py-20 md:py-32'>
      <div className='pointer-events-none absolute inset-0 bg-muted/30' />

      <div className='container relative mx-auto px-4'>
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            badge='AI Suggestion Panel'
            title='Suggestions You Can'
            highlight='Act On'
            description="AI Insights tell you what's happening in your business. The Suggestion Panel is where Servix OS tells you what to do about it-and helps you do it."
            badgeClassName='bg-primary/10 text-primary'
            className='mb-10'
          />
        </m.div>

        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4 }}
          className='mb-16 flex justify-center'
        >
          <StatusBadge status='prototype' />
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className='mb-16'
        >
          <div className='mx-auto max-w-3xl overflow-hidden rounded-2xl border bg-card glow-shadow'>
            <video
              autoPlay
              muted
              loop
              playsInline
              width={1920}
              height={1200}
              className='block h-auto w-full'
            >
              <source src='/videos/servix-ai-suggestions-flow.webm' type='video/webm' />
              <source src='/videos/servix-ai-suggestions-flow.mp4' type='video/mp4' />
            </video>
          </div>
        </m.div>

        {/* <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {suggestionCards.map((card, index) => (
            <m.article
              key={card.problem}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className='flex flex-col rounded-2xl border bg-card p-6 transition-all duration-300 hover:card-shadow-hover md:p-7'
            >
              <span className='mb-3 inline-block w-fit rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary'>
                {card.tag}
              </span>
              <h3 className='mb-2 font-display text-base font-bold leading-snug md:text-lg'>
                {card.problem}
              </h3>
              <p className='mb-4 flex-1 text-sm leading-relaxed text-muted-foreground'>
                {card.whyItMatters}
              </p>
              <p className='mb-5 text-sm font-medium'>
                <span className='text-muted-foreground'>Recommended: </span>
                {card.action}
              </p>
              <button
                type='button'
                className='gradient-bg inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]'
              >
                Review & Execute
              </button>
            </m.article>
          ))}
        </div> */}

        {/* <p className='mx-auto mt-12 max-w-2xl text-center text-sm text-muted-foreground'>
          This preview uses illustrative data to show how the Suggestion Panel is designed
          to work. It's a separate, in-progress part of the AI engine-not yet live-built on
          top of the AI Insights you see today.
        </p> */}
      </div>
    </section>
  );
}
