'use client';

import * as m from 'framer-motion/m';
import { Star } from 'lucide-react';

import SectionHeading from '@/components/shared/SectionHeading';
import { testimonials } from '@/content/home';

export default function TestimonialsSection() {
  return (
    <section
      id='testimonials'
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
            badge='Testimonials'
            title='Loved by'
            highlight='Entrepreneurs'
            description='See what business owners are saying about Servix OS.'
            badgeClassName='bg-primary/10 text-primary'
            className='mb-16'
          />
        </m.div>

        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {testimonials.map((testimonial, index) => (
            <m.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className='flex flex-col rounded-2xl border bg-card p-6 transition-all duration-300 hover:card-shadow-hover'
            >
              <div className='mb-4 flex gap-1'>
                {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    size={16}
                    className='fill-primary text-primary'
                  />
                ))}
              </div>
              <p className='mb-6 flex-1 text-sm leading-relaxed text-muted-foreground'>
                &quot;{testimonial.text}&quot;
              </p>
              <div>
                <p className='font-display text-sm font-bold'>{testimonial.name}</p>
                <p className='text-xs text-muted-foreground'>{testimonial.role}</p>
              </div>
            </m.article>
          ))}
        </div>
      </div>
    </section>
  );
}
