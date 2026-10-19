'use client';

import { useEffect, useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import * as m from 'framer-motion/m';
import type { LucideIcon } from 'lucide-react';
import { CheckCircle, Eye, Lightbulb, Loader2 } from 'lucide-react';

import SectionHeading from '@/components/shared/SectionHeading';
import StatusBadge from '@/components/shared/StatusBadge';
import { suggestionCards, suggestionLifecycleStages } from '@/content/home';

const STAGE_INTERVAL_MS = 2600;

const stageIcons: Record<(typeof suggestionLifecycleStages)[number]['icon'], LucideIcon> = {
  lightbulb: Lightbulb,
  eye: Eye,
  loader: Loader2,
  checkCircle: CheckCircle,
};

function SuggestionLifecycleDemo() {
  const [stageIndex, setStageIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setStageIndex((current) => (current + 1) % suggestionLifecycleStages.length);
    }, STAGE_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, []);

  const stage = suggestionLifecycleStages[stageIndex];
  const Icon = stageIcons[stage.icon];
  const isExecuting = stage.key === 'executing';
  const isTracked = stage.key === 'tracked';

  return (
    <div className='mx-auto max-w-md rounded-2xl border bg-card p-6 glow-shadow md:p-8'>
      <div className='mb-5 flex items-center justify-between'>
        <span className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>
          Suggestion Panel · Live preview
        </span>
        <AnimatePresence mode='wait' initial={false}>
          <m.span
            key={stage.key}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.3 }}
            className='inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary'
          >
            <Icon size={12} className={isExecuting ? 'animate-spin' : ''} />
            {stage.label}
          </m.span>
        </AnimatePresence>
      </div>

      <AnimatePresence mode='wait' initial={false}>
        <m.div
          key={stage.key}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <h3 className='mb-2 font-display text-lg font-bold md:text-xl'>
            Invoice #1042 is overdue
          </h3>
          <p className='mb-6 text-sm leading-relaxed text-muted-foreground'>
            {stage.caption}
          </p>

          <button
            type='button'
            disabled
            className='gradient-bg inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-primary-foreground disabled:cursor-default'
            style={{ opacity: isTracked ? 0.6 : 1 }}
          >
            {isTracked ? (
              <>
                <CheckCircle size={16} /> Result tracked
              </>
            ) : (
              'Review & Execute'
            )}
          </button>
        </m.div>
      </AnimatePresence>
    </div>
  );
}

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
          <SuggestionLifecycleDemo />
        </m.div>

        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
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
        </div>

        <p className='mx-auto mt-12 max-w-2xl text-center text-sm text-muted-foreground'>
          These cards use illustrative data to preview how the Suggestion Panel is designed
          to work. It's a separate, in-progress part of the AI engine-not yet live-built on
          top of the AI Insights you see today.
        </p>
      </div>
    </section>
  );
}
