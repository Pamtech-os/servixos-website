'use client';

import * as m from 'framer-motion/m';

import SectionHeading from '@/components/shared/SectionHeading';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqs } from '@/content/home';

export default function FAQSection() {
  return (
    <section id='faq' className='py-20 md:py-32'>
      <div className='container mx-auto px-4'>
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            badge='FAQ'
            title='Frequently Asked'
            highlight='Questions'
            badgeClassName='bg-accent/10 text-accent'
            className='mb-12'
          />
        </m.div>

        <div className='mx-auto max-w-3xl'>
          <Accordion type='single' collapsible>
            {faqs.map((faq, index) => (
              <m.div
                key={faq.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: index * 0.03, duration: 0.3 }}
              >
                <AccordionItem value={`faq-${index}`}>
                  <AccordionTrigger className='gap-4 py-5 text-left font-display text-sm font-semibold hover:no-underline hover:text-primary md:text-base'>
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className='pb-5 text-sm leading-relaxed text-muted-foreground'>
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </m.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
