import type { Metadata } from 'next';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';
import { ContactLink, LegalSection, legalLinkClassName } from '@/components/shared/LegalContent';
import MotionProvider from '@/components/shared/MotionProvider';

const LAST_UPDATED = 'October 31, 2026';

export const metadata: Metadata = {
  title: 'Privacy & Cookie Policy',
  description:
    'How Servix OS collects, uses, and shares personal data, including waitlist signups, cookies, and the Meta Pixel.',
  alternates: {
    canonical: '/privacy',
  },
};

const cookies = [
  {
    name: '_fbp, _fbc',
    type: 'Meta advertising cookies',
    purpose: 'Measure ad performance and recognize visits from Meta ads.',
    duration: 'About 90 days, renewed on each visit',
    when: 'Only if you accept',
  },
  {
    name: 'cookie-consent',
    type: 'Browser storage',
    purpose: 'Remembers whether you accepted or declined cookies.',
    duration: 'Until you clear it or change your choice',
    when: 'Always, once you choose',
  },
  {
    name: 'theme',
    type: 'Browser storage',
    purpose: 'Remembers your light or dark mode preference.',
    duration: 'Until you clear it',
    when: 'Only if you switch theme',
  },
];

export default function PrivacyPage() {
  return (
    <main>
      <MotionProvider>
        <Navbar />
        <article className='container mx-auto max-w-3xl px-4 pt-28 pb-20 text-muted-foreground md:pt-32'>
          <h1 className='font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl'>
            Privacy &amp; Cookie Policy
          </h1>
          <p className='mt-3 text-sm'>Last updated: {LAST_UPDATED}</p>
          <p className='mt-6'>
            This policy explains what personal data Servix OS (&quot;we&quot;), a company registered
            in Nova Scotia, Canada, collects through this website, why we collect it, and the choices
            you have. For any privacy question or request, email <ContactLink />.
          </p>

          <LegalSection title='What we collect'>
            <ul className='flex list-disc flex-col gap-2 pl-5'>
              <li>
                <strong className='text-foreground'>Waitlist details:</strong> your first name,
                email address, and the description you choose for yourself when you join the
                waitlist.
              </li>
              <li>
                <strong className='text-foreground'>Technical data:</strong> your IP address, which
                our systems use to deliver the site and limit repeated signup attempts, and basic
                browser information sent with each request.
              </li>
              <li>
                <strong className='text-foreground'>Advertising data, if you accept cookies:</strong>{' '}
                the pages you visit, whether you joined the waitlist, your IP address, browser
                details, and cookie identifiers, collected by the Meta Pixel.
              </li>
            </ul>
          </LegalSection>

          <LegalSection title='How we use it'>
            <ul className='flex list-disc flex-col gap-2 pl-5'>
              <li>
                To send you launch and early-access updates, based on the consent you give when you
                join the waitlist. You can unsubscribe at any time using the link in our emails.
              </li>
              <li>
                To run and protect the website, including preventing abuse, based on our legitimate
                interest in keeping it working and secure.
              </li>
              <li>To measure how our Meta ads perform, only if you accept cookies.</li>
            </ul>
          </LegalSection>

          <LegalSection title='Who we share it with'>
            <ul className='flex list-disc flex-col gap-2 pl-5'>
              <li>
                <strong className='text-foreground'>Meta Platforms</strong> receives the advertising
                data above if you accept cookies. Meta handles it under its own{' '}
                <a
                  href='https://www.facebook.com/privacy/policy/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={legalLinkClassName}
                >
                  privacy policy
                </a>
                . We don&apos;t send your name or email address to Meta through this website.
              </li>
              <li>
                <strong className='text-foreground'>Service providers</strong> that host this
                website and our systems, or send our email, process data on our behalf.
              </li>
              <li>Authorities or advisers, where the law requires it or to protect our rights.</li>
            </ul>
            <p>
              These companies may process data in countries other than your own, including the
              United States, where it may be subject to local laws and government access.
            </p>
          </LegalSection>

          <LegalSection title='How long we keep it'>
            <p>
              We keep waitlist details until you unsubscribe or ask us to delete them, or until we no
              longer need them for the waitlist and launch updates.
            </p>
          </LegalSection>

          <LegalSection id='cookies' title='Cookies and similar technologies'>
            <p>
              The Meta Pixel and its cookies stay off unless you accept them in the cookie banner.
              To change your choice at any time, select{' '}
              <strong className='text-foreground'>Cookie Settings</strong> in the footer of any page.
              Doing so stops the pixel and clears its cookies.
            </p>
            <div className='overflow-x-auto rounded-xl border'>
              <table className='w-full min-w-xl text-left text-sm'>
                <thead className='bg-muted/50 text-foreground'>
                  <tr>
                    <th scope='col' className='p-3 font-semibold'>Name</th>
                    <th scope='col' className='p-3 font-semibold'>Type</th>
                    <th scope='col' className='p-3 font-semibold'>Purpose</th>
                    <th scope='col' className='p-3 font-semibold'>Duration</th>
                    <th scope='col' className='p-3 font-semibold'>Used</th>
                  </tr>
                </thead>
                <tbody>
                  {cookies.map((cookie) => (
                    <tr key={cookie.name} className='border-t align-top'>
                      <td className='p-3 font-medium text-foreground'>{cookie.name}</td>
                      <td className='p-3'>{cookie.type}</td>
                      <td className='p-3'>{cookie.purpose}</td>
                      <td className='p-3'>{cookie.duration}</td>
                      <td className='p-3'>{cookie.when}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </LegalSection>

          <LegalSection title='Your rights'>
            <p>
              Depending on where you live, you may have the right to access, correct, delete, or
              receive a copy of your personal data, to object to or restrict how we use it, and to
              withdraw consent at any time. To make a request, email <ContactLink />. You may also
              be able to complain to a regulator, such as the Office of the Privacy Commissioner of
              Canada or your local data protection authority.
            </p>
          </LegalSection>


          <LegalSection title='Changes to this policy'>
            <p>
              If this policy changes, we&apos;ll update it on this page and change the date at the
              top.
            </p>
          </LegalSection>

          <LegalSection title='Contact'>
            <p>
              Questions or requests about this policy can be sent to <ContactLink />.
            </p>
          </LegalSection>
        </article>
        <Footer />
        <ScrollToTop />
      </MotionProvider>
    </main>
  );
}
