'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What is Servix OS?',
    a: 'Servix OS platform is an AI-powered system that helps you start, run, and grow a business—all in one place. It combines an online office with an AI assistant that helps manage operations, customers, and growth.',
  },
  {
    q: 'How is this different from Shopify or Amazon?',
    a: 'Unlike Shopify (which helps you build a store) or Amazon (which helps you sell products), our platform helps you run the entire business with AI support—from setup to daily operations and decision-making.',
  },
  {
    q: 'Who is this for?',
    a: 'Beginners with no business experience, entrepreneurs who want to save time, service business owners, e-commerce sellers, freelancers, and small teams.',
  },
  {
    q: 'Do I need business experience to use this?',
    a: 'No. The platform is designed so that anyone can start and run a business, even with little to no prior experience.',
  },
  {
    q: 'What does the AI actually do?',
    a: 'Your AI helps you: set up your business, manage tasks and operations, suggest pricing and strategies, track performance, answer questions and guide decisions.',
  },
  {
    q: 'Is the AI running my business completely?',
    a: 'No. You are always in control. The AI acts like a COO or advisor, helping you make smarter and faster decisions.',
  },
  {
    q: "Can I override the AI's decisions?",
    a: 'Yes. You can edit, approve, or ignore any AI suggestion at any time.',
  },
  {
    q: 'Can I start an online store on this platform?',
    a: "Yes. You can create and manage an online store similar to what you'd build on Shopify, but with AI assistance built in.",
  },
  {
    q: 'Does it help me find products to sell?',
    a: 'Yes. The platform can suggest product ideas, trends, and opportunities to help you get started faster.',
  },
  {
    q: 'Does it handle orders and customers?',
    a: 'Yes. You can manage orders, track sales, and communicate with customers—all from one dashboard.',
  },
  {
    q: 'Can I run a service business too?',
    a: 'Yes. You can manage bookings, clients, team members, and projects inside your online office.',
  },
  {
    q: 'Can my team use this platform?',
    a: 'Yes. You can add team members, assign roles, and collaborate within your business workspace.',
  },
  {
    q: 'How much does it cost?',
    a: 'We offer flexible subscription plans based on your needs, with options for individuals, growing businesses, and teams.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Yes. You can try the platform before committing to a paid plan.',
  },
  {
    q: 'Is my business data secure?',
    a: 'Yes. We use industry-standard security practices to keep your data safe.',
  },
  {
    q: 'Do I own my business and data?',
    a: 'Yes. You fully own your business, customers, and data at all times.',
  },
  {
    q: 'How do I get started?',
    a: 'Simply sign up, follow the guided setup, and the AI will help you build and launch your business step by step.',
  },
  {
    q: 'How long does it take to launch a business?',
    a: 'You can get started in minutes and launch much faster than traditional methods, depending on your setup.',
  },
  {
    q: 'What makes this platform unique?',
    a: 'Most platforms give you tools. We give you a system that helps run your business with you.',
  },
];

const FAQItem = ({ faq, index }: { faq: (typeof faqs)[0]; index: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.03 }}
      className='border-b'
    >
      <button
        onClick={() => setOpen(!open)}
        className='flex w-full items-center justify-between gap-4 py-5 text-left font-display text-sm font-semibold transition-colors hover:text-primary md:text-base'
        aria-expanded={open}
      >
        {faq.q}
        <ChevronDown
          size={18}
          className={`shrink-0 text-muted-foreground transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className='overflow-hidden'
      >
        <p className='pb-5 text-sm leading-relaxed text-muted-foreground'>
          {faq.a}
        </p>
      </motion.div>
    </motion.div>
  );
};

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id='faq' className='py-20 md:py-32'>
      <div className='container mx-auto px-4' ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className='mx-auto mb-12 max-w-2xl text-center'
        >
          <span className='mb-3 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent'>
            FAQ
          </span>
          <h2 className='font-display text-3xl font-bold md:text-4xl lg:text-5xl'>
            Frequently Asked <span className='gradient-text'>Questions</span>
          </h2>
        </motion.div>

        <div className='mx-auto max-w-3xl'>
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
