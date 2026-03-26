'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 29,
    description: 'Perfect for launching your first business',
    features: [
      'AI-Driven Business Setup',
      'AI Website Builder (1 site)',
      'Basic Online Office',
      'Invoices (up to 50/mo)',
      'Client Management (up to 100)',
      'Basic AI Insights',
      'Email Support',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Growth',
    price: 79,
    description: 'For growing businesses that need more power',
    features: [
      'Everything in Starter, plus:',
      'AI Website Builder (3 sites)',
      'Full Online Office Suite',
      'Unlimited Invoices & Contracts',
      'Client Management (up to 1,000)',
      'Advanced AI Insights & Suggestions',
      'Team Collaboration (up to 5)',
      'Priority Support',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Pro',
    price: 100,
    description: 'For teams and scaling businesses',
    features: [
      'Everything in Growth, plus:',
      'Unlimited Websites',
      'Advanced Online Office',
      'Custom Contracts & Templates',
      'Unlimited Clients',
      'Premium AI Strategy & Forecasting',
      'Unlimited Team Members',
      'Dedicated Account Manager',
      'API Access',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
];

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id='pricing' className='py-20 md:py-32'>
      <div className='container mx-auto px-4' ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className='mx-auto mb-16 max-w-2xl text-center'
        >
          <span className='mb-3 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary'>
            Pricing
          </span>
          <h2 className='font-display text-3xl font-bold md:text-4xl lg:text-5xl'>
            Simple, Transparent <span className='gradient-text'>Pricing</span>
          </h2>
          <p className='mt-4 text-lg text-muted-foreground'>
            Start free. Scale as you grow. No hidden fees.
          </p>
        </motion.div>

        <div className='mx-auto grid max-w-5xl gap-8 lg:grid-cols-3'>
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 hover:card-shadow-hover ${
                plan.popular
                  ? 'gradient-bg scale-[1.02] border-transparent text-primary-foreground shadow-lg lg:scale-105'
                  : 'bg-card'
              }`}
            >
              {plan.popular && (
                <span className='absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-card px-4 py-1 text-xs font-bold text-foreground shadow'>
                  Most Popular
                </span>
              )}

              <h3 className='font-display text-xl font-bold'>{plan.name}</h3>
              <p
                className={`mt-1 text-sm ${plan.popular ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}
              >
                {plan.description}
              </p>

              <div className='my-6 flex items-baseline gap-1'>
                <span className='font-display text-5xl font-bold'>
                  ${plan.price}
                </span>
                <span
                  className={`text-sm ${plan.popular ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}
                >
                  /month
                </span>
              </div>

              <ul className='mb-8 flex flex-1 flex-col gap-3'>
                {plan.features.map((feat) => (
                  <li key={feat} className='flex items-start gap-2 text-sm'>
                    <Check size={16} className='mt-0.5 shrink-0' />
                    {feat}
                  </li>
                ))}
              </ul>

              <motion.a
                href='#hero'
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`block rounded-full py-3 text-center text-sm font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-card text-foreground hover:bg-card/90'
                    : 'gradient-bg text-primary-foreground'
                }`}
              >
                {plan.cta}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
