import type { Metadata } from 'next';
import Link from 'next/link';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';
import { ContactLink, LegalSection, legalLinkClassName } from '@/components/shared/LegalContent';
import MotionProvider from '@/components/shared/MotionProvider';

const LAST_UPDATED = 'October 31, 2026';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'The terms that apply when you use the Servix OS website or join the Servix OS waitlist.',
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsPage() {
  return (
    <main>
      <MotionProvider>
        <Navbar />
        <article className='container mx-auto max-w-3xl px-4 pt-28 pb-20 text-muted-foreground md:pt-32'>
          <h1 className='font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl'>
            Terms of Service
          </h1>
          <p className='mt-3 text-sm'>Last updated: {LAST_UPDATED}</p>
          <p className='mt-6'>
            These terms apply when you use this website or join the waitlist for Servix OS. Servix
            OS (&quot;we&quot;), a company registered in Nova Scotia, Canada, operates this website.
            By using the website or joining the waitlist, you agree to these terms. If you don&apos;t agree, please don&apos;t use the website.
          </p>

          <LegalSection title='Pre-launch product'>
            <p>
              Servix OS is not yet generally available. Features, plans, prices, free trials, and
              timelines described on this website show what we plan to offer and may change before
              launch. Nothing on this website is an offer you can accept, and you can&apos;t buy a
              subscription here.
            </p>
            <p>
              Using the Servix OS product will be covered by separate terms, which we&apos;ll
              provide before you start using it.
            </p>
          </LegalSection>

          <LegalSection title='The waitlist'>
            <p>
              The details you give us when you join the waitlist must be accurate. Joining is free. It doesn&apos;t guarantee early access, a place in any
              program, or any particular price, and it doesn&apos;t oblige you to buy anything.
            </p>
            <p>
              You can leave at any time using the unsubscribe link in our emails or by emailing{' '}
              <ContactLink />. We may remove
              signups that are false or abusive, and we may change or end the waitlist.
            </p>
            <p>
              Our{' '}
              <Link href='/privacy' className={legalLinkClassName}>
                Privacy &amp; Cookie Policy
              </Link>{' '}
              explains how we handle your personal data.
            </p>
          </LegalSection>

          <LegalSection title='Using this website'>
            <p>You agree not to:</p>
            <ul className='flex list-disc flex-col gap-2 pl-5'>
              <li>break any law or anyone else&apos;s rights while using the website;</li>
              <li>submit someone else&apos;s details without their permission;</li>
              <li>interfere with the website, its security, or its signup limits; or</li>
              <li>send automated signups or scrape the website in a way that harms it.</li>
            </ul>
          </LegalSection>

          <LegalSection title='Our content'>
            <p>
              The Servix OS name, logo, and the content of this website belong to us or our
              licensors. You may view and share pages for personal or internal business purposes,
              but you may not copy, sell, or reuse our content or branding without our written
              permission.
            </p>
          </LegalSection>

          <LegalSection title='No professional advice'>
            <p>
              Information on this website is general and isn&apos;t legal, financial, tax, or other
              professional advice. We don&apos;t promise that any business idea, income, or result
              described here will be achieved.
            </p>
          </LegalSection>

          <LegalSection title='Other websites'>
            <p>
              This website may link to services we don&apos;t control. We aren&apos;t responsible for
              their content or practices.
            </p>
          </LegalSection>

          <LegalSection title='Disclaimer and liability'>
            <p>
              We provide this website &quot;as is&quot; and &quot;as available&quot;. To the extent
              the law allows, we make no promises that it will be uninterrupted, error-free, or
              accurate at all times, and we aren&apos;t liable for indirect or consequential loss
              arising from your use of the website or the waitlist.
            </p>
            <p>
              Nothing in these terms limits liability that can&apos;t legally be limited, or affects
              rights you have under consumer law that can&apos;t be waived.
            </p>
          </LegalSection>

          <LegalSection title='Governing law'>
            <p>
              These terms are governed by the laws of the Province of Nova Scotia and the federal
              laws of Canada that apply there, and disputes will be handled by the courts of Nova
              Scotia. If you live
              elsewhere, this doesn&apos;t remove any consumer rights or right to bring a claim that
              your local law gives you and that can&apos;t be waived.
            </p>
          </LegalSection>

          <LegalSection title='Changes to these terms'>
            <p>
              If these terms change, we&apos;ll update them on this page and change the date at the
              top. Continuing to use the website after that means you accept the updated terms.
            </p>
          </LegalSection>

          <LegalSection title='Contact'>
            <p>
              Questions about these terms can be sent to <ContactLink />.
            </p>
          </LegalSection>
        </article>
        <Footer />
        <ScrollToTop />
      </MotionProvider>
    </main>
  );
}
