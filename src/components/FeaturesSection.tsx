'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Sparkles,
  Globe,
  Building2,
  FileText,
  Users,
  TrendingUp,
} from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'AI-Driven Business Setup',
    description:
      'Create your business automatically with AI. Answer a few questions and watch your business come to life.',
    gradient: 'from-primary to-secondary',
  },
  {
    icon: Globe,
    title: 'AI Website Builder',
    description:
      'Build your professional service website instantly. No coding required—just beautiful, ready-to-launch sites.',
    gradient: 'from-accent to-primary',
  },
  {
    icon: Building2,
    title: 'Online Office',
    description:
      'Everything your business needs in one place with AI. Manage operations, team, and growth from a single dashboard.',
    gradient: 'from-secondary to-accent',
  },
  {
    icon: FileText,
    title: 'Contracts & Invoices',
    description:
      'Automatically generated professional documents. Send invoices and contracts in seconds, not hours.',
    gradient: 'from-primary to-accent',
  },
  {
    icon: Users,
    title: 'Client Management',
    description:
      'Track and manage all your customers effortlessly. Build relationships that drive repeat business.',
    gradient: 'from-accent to-secondary',
  },
  {
    icon: TrendingUp,
    title: 'AI Insights & Suggestions',
    description:
      'Know how your business is doing and get actionable recommendations to improve and grow.',
    gradient: 'from-secondary to-primary',
  },
];

const FeatureCard = ({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className='group relative rounded-2xl border bg-card p-6 transition-all duration-300 hover:card-shadow-hover md:p-8'
    >
      <div
        className={`mb-4 inline-flex rounded-xl bg-linear-to-br ${feature.gradient} p-3`}
      >
        <feature.icon size={24} className='text-primary-foreground' />
      </div>
      <h3 className='mb-2 font-display text-lg font-bold md:text-xl'>
        {feature.title}
      </h3>
      <p className='text-sm leading-relaxed text-muted-foreground md:text-base'>
        {feature.description}
      </p>
      {/* Hover glow */}
      <div
        className='pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100'
        style={{ boxShadow: 'var(--shadow-card-hover)' }}
      />
    </motion.div>
  );
};

const FeaturesSection = () => {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true });

  return (
    <section id='features' className='py-20 md:py-32'>
      <div className='container mx-auto px-4'>
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className='mx-auto mb-16 max-w-2xl text-center'
        >
          <span className='mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary'>
            Features
          </span>
          <h2 className='font-display text-3xl font-bold md:text-4xl lg:text-5xl'>
            Everything You Need to{' '}
            <span className='gradient-text'>Build & Grow</span>
          </h2>
          <p className='mt-4 text-lg text-muted-foreground'>
            Six powerful tools working together so you can focus on what
            matters—your business.
          </p>
        </motion.div>

        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
