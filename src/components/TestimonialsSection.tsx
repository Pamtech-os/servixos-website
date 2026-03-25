import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Founder, BrightPath Coaching',
    text: 'Servix OS helped me launch my coaching business in a single afternoon. The AI set up everything—website, invoices, client portal. I was blown away.',
    rating: 5,
  },
  {
    name: 'Marcus Johnson',
    role: 'E-Commerce Seller',
    text: 'I used to juggle Shopify, QuickBooks, and three other tools. Now everything is in one place. The AI suggestions actually helped me double my revenue.',
    rating: 5,
  },
  {
    name: 'Priya Patel',
    role: 'Freelance Designer',
    text: 'As a solo freelancer, Servix OS is like having a business partner. It handles contracts, invoicing, and even reminds me to follow up with clients.',
    rating: 5,
  },
  {
    name: 'David Kim',
    role: 'CEO, GrowthStack Agency',
    text: "We moved our entire team to Servix OS. The online office and AI insights save us at least 15 hours a week. Best decision we've made.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id='testimonials'
      className='relative overflow-hidden py-20 md:py-32'
    >
      <div className='pointer-events-none absolute inset-0 bg-muted/30' />

      <div className='container relative mx-auto px-4' ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className='mx-auto mb-16 max-w-2xl text-center'
        >
          <span className='mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary'>
            Testimonials
          </span>
          <h2 className='font-display text-3xl font-bold md:text-4xl lg:text-5xl'>
            Loved by <span className='gradient-text'>Entrepreneurs</span>
          </h2>
          <p className='mt-4 text-lg text-muted-foreground'>
            See what business owners are saying about Servix OS.
          </p>
        </motion.div>

        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className='flex flex-col rounded-2xl border bg-card p-6 transition-all duration-300 hover:card-shadow-hover'
            >
              <div className='mb-4 flex gap-1'>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    className='fill-primary text-primary'
                  />
                ))}
              </div>
              <p className='mb-6 flex-1 text-sm leading-relaxed text-muted-foreground'>
                "{t.text}"
              </p>
              <div>
                <p className='font-display text-sm font-bold'>{t.name}</p>
                <p className='text-xs text-muted-foreground'>{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
