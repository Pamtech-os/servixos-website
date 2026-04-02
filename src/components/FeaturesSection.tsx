'use client';

import type { LucideIcon } from 'lucide-react';
import * as m from 'framer-motion/m';
import {
  Building2,
  FileText,
  Globe,
  Sparkles,
  TrendingUp,
  Users,
} from 'lucide-react';

import SectionHeading from '@/components/shared/SectionHeading';
import { features } from '@/content/home';

const featureIcons: Record<(typeof features)[number]['icon'], LucideIcon> = {
  sparkles: Sparkles,
  globe: Globe,
  building2: Building2,
  fileText: FileText,
  users: Users,
  trendingUp: TrendingUp,
};

export default function FeaturesSection() {
  return (
    <section id='features' className='py-20 md:py-32'>
      <div className='container mx-auto px-4'>
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            badge='Features'
            title='Everything You Need to'
            highlight='Build & Grow'
            description='Six powerful tools working together so you can focus on what matters-your business.'
            badgeClassName='bg-primary/10 text-primary'
            className='mb-16'
          />
        </m.div>

        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {features.map((feature, index) => {
            const Icon = featureIcons[feature.icon];

            return (
              <m.article
                key={feature.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className='group relative rounded-2xl border bg-card p-6 transition-all duration-300 hover:card-shadow-hover md:p-8'
              >
                <div
                  className={`mb-4 inline-flex rounded-xl bg-linear-to-br ${feature.gradient} p-3`}
                >
                  <Icon size={24} className='text-primary-foreground' />
                </div>
                <h3 className='mb-2 font-display text-lg font-bold md:text-xl'>
                  {feature.title}
                </h3>
                <p className='text-sm leading-relaxed text-muted-foreground md:text-base'>
                  {feature.description}
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
