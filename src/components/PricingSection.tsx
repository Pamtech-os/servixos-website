'use client';

import * as m from 'framer-motion/m';
import { useMemo, useState } from 'react';
import { Check } from 'lucide-react';

import SectionHeading from '@/components/shared/SectionHeading';
import { pricingPlans } from '@/content/home';
import { cn } from '@/lib/utils';

const YEARLY_DISCOUNT_RATE = 0.2;
const YEARLY_DISCOUNT_PERCENT = YEARLY_DISCOUNT_RATE * 100;

type BillingCycle = 'monthly' | 'annual';

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');
  const isAnnual = billingCycle === 'annual';

  const displayedPrices = useMemo(() => {
    return pricingPlans.map((plan) => {
      if (!isAnnual) return plan.price;
      return Math.round(plan.price * 12 * (1 - YEARLY_DISCOUNT_RATE));
    });
  }, [isAnnual]);

  return (
    <section id='pricing' className='py-20 md:py-32'>
      <div className='container mx-auto px-4'>
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            badge='Pricing'
            title='Simple, Transparent'
            highlight='Pricing'
            description='Start free. Scale as you grow. No hidden fees.'
            badgeClassName='bg-secondary/10 text-secondary'
            className='mb-16'
          />
        </m.div>

        <div className='mb-10 flex justify-center'>
          <div className='inline-flex rounded-full border bg-card p-1'>
            <button
              type='button'
              onClick={() => setBillingCycle('monthly')}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-semibold transition-colors',
                !isAnnual
                  ? 'gradient-bg text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground',
              )}
              aria-pressed={!isAnnual}
            >
              Monthly
            </button>
            <button
              type='button'
              onClick={() => setBillingCycle('annual')}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-semibold transition-colors',
                isAnnual
                  ? 'gradient-bg text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground',
              )}
              aria-pressed={isAnnual}
            >
              Yearly
            </button>
          </div>
        </div>
        <div
          className={cn(
            'overflow-hidden text-center transition-all duration-300 ease-out',
            isAnnual
              ? 'mb-8 max-h-10 translate-y-0 opacity-100'
              : 'mb-0 max-h-0 -translate-y-1 opacity-0',
          )}
          aria-hidden={!isAnnual}
        >
          <p className='text-sm font-semibold text-secondary'>
            Save {YEARLY_DISCOUNT_PERCENT}% with annual billing
          </p>
        </div>

        <div className='mx-auto grid max-w-5xl gap-8 lg:grid-cols-3'>
          {pricingPlans.map((plan, index) => (
            <m.article
              key={plan.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ duration: 0.45, delay: index * 0.12 }}
              className={cn(
                'relative flex flex-col rounded-2xl border p-8 transition-all duration-300 hover:card-shadow-hover',
                plan.popular
                  ? 'gradient-bg scale-[1.02] border-transparent text-primary-foreground shadow-lg lg:scale-105'
                  : 'bg-card',
              )}
            >
              {plan.popular ? (
                <span className='absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-card px-4 py-1 text-xs font-bold text-foreground shadow'>
                  Most Popular
                </span>
              ) : null}

              <h3 className='font-display text-xl font-bold'>{plan.name}</h3>
              <p
                className={cn(
                  'mt-1 text-sm',
                  plan.popular
                    ? 'text-primary-foreground/80'
                    : 'text-muted-foreground',
                )}
              >
                {plan.description}
              </p>

              <div className='my-6 flex items-baseline gap-1'>
                <span className='font-display text-5xl font-bold'>
                  ${displayedPrices[index]}
                </span>
                <span
                  className={cn(
                    'text-sm',
                    plan.popular
                      ? 'text-primary-foreground/70'
                      : 'text-muted-foreground',
                  )}
                >
                  /{isAnnual ? 'year' : 'month'}
                </span>
              </div>
              {isAnnual ? (
                <p
                  className={cn(
                    '-mt-3 mb-6 text-sm font-medium',
                    plan.popular
                      ? 'text-primary-foreground/80'
                      : 'text-muted-foreground',
                  )}
                >
                  {YEARLY_DISCOUNT_PERCENT}% off annual plan
                </p>
              ) : null}

              <ul className='mb-8 flex flex-1 flex-col gap-3'>
                {plan.features.map((feature) => (
                  <li key={feature} className='flex items-start gap-2 text-sm'>
                    <Check size={16} className='mt-0.5 shrink-0' />
                    {feature}
                  </li>
                ))}
              </ul>

              <m.a
                href='#waitlist'
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={cn(
                  'block rounded-full py-3 text-center text-sm font-semibold transition-colors',
                  plan.popular
                    ? 'bg-card text-foreground hover:bg-card/90'
                    : 'gradient-bg text-primary-foreground',
                )}
              >
                {plan.cta}
              </m.a>
            </m.article>
          ))}
        </div>
      </div>
    </section>
  );
}
