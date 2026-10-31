'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useSyncExternalStore } from 'react';

import {
  getCookieConsent,
  setCookieConsent,
  subscribeToCookieConsent,
} from '@/lib/cookie-consent';
import { disableMetaPixel, enableMetaPixel, META_PIXEL_ID } from '@/lib/meta-pixel';

const buttonClassName =
  'flex-1 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-muted';

export default function CookieConsent() {
  // undefined until hydrated, because the server can't know the visitor's choice.
  const consent = useSyncExternalStore(subscribeToCookieConsent, getCookieConsent, () => undefined);

  // The URL here holds a personal unsubscribe token, which must not reach Meta.
  const isUnsubscribePage = usePathname() === '/unsubscribe';

  useEffect(() => {
    if (consent === undefined || isUnsubscribePage) return;
    if (consent === 'granted') enableMetaPixel();
    else disableMetaPixel();
  }, [consent, isUnsubscribePage]);

  // The pixel is the only non-essential cookie, so without it there's nothing to ask.
  if (!META_PIXEL_ID || consent !== null) return null;

  return (
    <div
      role='region'
      aria-label='Cookie consent'
      className='fixed inset-x-4 bottom-4 z-60 rounded-2xl border bg-card p-5 text-card-foreground shadow-lg md:left-6 md:right-24 md:bottom-6 md:flex md:items-center md:gap-6'
    >
      <p className='text-sm leading-relaxed text-muted-foreground'>
        We&apos;d like to use cookies and the Meta Pixel to measure how our ads perform. This
        shares data about your visit with Meta. It&apos;s off unless you accept, and you can change
        your choice any time from the footer.{' '}
        <Link href='/privacy#cookies' className='font-medium text-primary hover:underline'>
          Learn more
        </Link>
      </p>
      <div className='mt-4 flex shrink-0 gap-3 md:mt-0'>
        <button
          type='button'
          onClick={() => setCookieConsent('denied')}
          className={buttonClassName}
        >
          Decline
        </button>
        <button
          type='button'
          onClick={() => setCookieConsent('granted')}
          className={buttonClassName}
        >
          Accept
        </button>
      </div>
    </div>
  );
}
