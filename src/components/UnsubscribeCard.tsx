'use client';

import { useState } from 'react';

import { Loader2, MailCheck, MailX } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

import { ContactLink } from '@/components/shared/LegalContent';
import { unsubscribeFromWaitlist } from '@/lib/waitlist';

type UnsubscribeStatus = 'idle' | 'submitting' | 'success' | 'error';

const iconClassName =
  'mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl gradient-bg text-primary-foreground';
const headingClassName = 'font-display text-2xl font-bold md:text-3xl';

export default function UnsubscribeCard() {
  const token = useSearchParams().get('token');
  const [status, setStatus] = useState<UnsubscribeStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Waits for a click because email scanners open links automatically.
  const handleUnsubscribe = async () => {
    if (!token) return;
    setStatus('submitting');

    try {
      await unsubscribeFromWaitlist(token);
      setStatus('success');
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : 'Something went wrong. Please try again.'
      );
      setStatus('error');
    }
  };

  if (!token) {
    return (
      <>
        <div className={iconClassName}>
          <MailX size={26} />
        </div>
        <h1 className={headingClassName}>Use the link in your email</h1>
        <p className='mt-3 text-muted-foreground'>
          To unsubscribe, select the unsubscribe link in any email from Servix OS, or email{' '}
          <ContactLink /> and we&apos;ll remove you.
        </p>
      </>
    );
  }

  if (status === 'success') {
    return (
      <div role='status' aria-live='polite'>
        <div className={iconClassName}>
          <MailCheck size={26} />
        </div>
        <h1 className={headingClassName}>You&apos;re unsubscribed</h1>
        <p className='mt-3 text-muted-foreground'>
          We&apos;ve removed your details from the waitlist and won&apos;t send you any more
          waitlist emails.
        </p>
      </div>
    );
  }

  const isSubmitting = status === 'submitting';

  return (
    <>
      <div className={iconClassName}>
        <MailX size={26} />
      </div>
      <h1 className={headingClassName}>Unsubscribe from Servix OS?</h1>
      <p className='mt-3 text-muted-foreground'>
        This removes your details from the waitlist and stops our waitlist emails. You can join
        again at any time.
      </p>

      {status === 'error' ? (
        <p
          role='alert'
          className='mt-5 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive dark:text-red-300'
        >
          {errorMessage} You can also email <ContactLink /> and we&apos;ll remove you.
        </p>
      ) : null}

      <button
        type='button'
        onClick={handleUnsubscribe}
        disabled={isSubmitting}
        className='gradient-bg mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-3.5 text-base font-semibold text-primary-foreground disabled:cursor-not-allowed disabled:opacity-80'
      >
        {isSubmitting ? (
          <>
            <Loader2 size={18} className='animate-spin' /> Unsubscribing…
          </>
        ) : (
          'Unsubscribe'
        )}
      </button>
    </>
  );
}
