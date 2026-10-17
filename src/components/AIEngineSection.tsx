'use client';

import type { LucideIcon } from 'lucide-react';
import * as m from 'framer-motion/m';
import { Activity, Brain, Compass, ListChecks, RefreshCw, Zap } from 'lucide-react';

import SectionHeading from '@/components/shared/SectionHeading';
import StatusBadge from '@/components/shared/StatusBadge';
import { aiEngineSteps } from '@/content/home';

const stepIcons: Record<(typeof aiEngineSteps)[number]['icon'], LucideIcon> = {
  brain: Brain,
  listChecks: ListChecks,
  compass: Compass,
  zap: Zap,
  activity: Activity,
  refreshCw: RefreshCw,
};

export default function AIEngineSection() {
  return (
    <section id='ai-engine' className='py-20 md:py-32'>
      <div className='container mx-auto px-4'>
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            badge='The Servix OS AI Engine'
            title='One AI Engine That Works'
            highlight='With You'
            description="Servix OS isn't a pile of business tools with a chatbot bolted on. It's one AI engine built to understand your business, figure out what matters next, and help you act on it."
            badgeClassName='bg-primary/10 text-primary'
            className='mb-16'
          />
        </m.div>

        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {aiEngineSteps.map((step, index) => {
            const Icon = stepIcons[step.icon];

            return (
              <m.article
                key={step.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className='group relative flex flex-col rounded-2xl border bg-card p-6 transition-all duration-300 hover:card-shadow-hover md:p-8'
              >
                <div className='mb-4 flex items-center justify-between gap-3'>
                  <div className='inline-flex rounded-xl gradient-bg p-3'>
                    <Icon size={24} className='text-primary-foreground' />
                  </div>
                  <StatusBadge status={step.status} />
                </div>
                <h3 className='mb-2 font-display text-lg font-bold md:text-xl'>
                  {index + 1}. {step.title}
                </h3>
                <p className='text-sm leading-relaxed text-muted-foreground md:text-base'>
                  {step.description}
                </p>
                <div
                  className='pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                  style={{ boxShadow: 'var(--shadow-card-hover)' }}
                />
              </m.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
