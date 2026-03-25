import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { UserPlus, Wand2, Rocket } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: UserPlus,
    title: 'Sign Up & Tell Us About Your Business',
    description:
      'Create your account in seconds. Answer a few simple questions about what you want to build.',
  },
  {
    num: '02',
    icon: Wand2,
    title: 'AI Builds Everything For You',
    description:
      'Our AI creates your business setup, website, documents, and workflows—automatically.',
  },
  {
    num: '03',
    icon: Rocket,
    title: 'Launch & Grow With AI Support',
    description:
      'Go live instantly. Your AI assistant helps you manage operations, clients, and growth every day.',
  },
];

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id='how-it-works'
      className='relative overflow-hidden py-20 md:py-32'
    >
      {/* Background accent */}
      <div className='pointer-events-none absolute inset-0 bg-muted/30' />

      <div className='container relative mx-auto px-4' ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className='mx-auto mb-16 max-w-2xl text-center'
        >
          <span className='mb-3 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent'>
            How It Works
          </span>
          <h2 className='font-display text-3xl font-bold md:text-4xl lg:text-5xl'>
            Three Steps to{' '}
            <span className='gradient-text'>Launch Your Business</span>
          </h2>
          <p className='mt-4 text-lg text-muted-foreground'>
            From idea to live business in minutes, not months.
          </p>
        </motion.div>

        <div className='relative mx-auto grid max-w-5xl gap-8 md:grid-cols-3'>
          {/* Connecting line */}
          <div className='pointer-events-none absolute left-0 right-0 top-16 hidden h-0.5 gradient-bg md:block' />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className='relative flex flex-col items-center text-center'
            >
              <div className='relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl gradient-bg text-primary-foreground shadow-lg'>
                <step.icon size={28} />
              </div>
              <span className='mb-2 font-display text-sm font-bold text-primary'>
                {step.num}
              </span>
              <h3 className='mb-2 font-display text-lg font-bold md:text-xl'>
                {step.title}
              </h3>
              <p className='text-sm text-muted-foreground md:text-base'>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
