'use client';

import type { FormEvent } from 'react';
import { useId, useRef, useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import * as m from 'framer-motion/m';
import Link from 'next/link';
import {
  ArrowRight,
  Check,
  ChevronDown,
  Loader2,
  Mail,
  MailCheck,
  PartyPopper,
  Sparkles,
} from 'lucide-react';

import type { WaitlistPersona } from '@/content/home';
import { waitlistPerks, waitlistPersonas } from '@/content/home';
import { trackWaitlistLead } from '@/lib/meta-pixel';
import { cn } from '@/lib/utils';
import {
  EMAIL_MAX_LENGTH,
  FIRST_NAME_MAX_LENGTH,
  joinWaitlist,
  validateWaitlistSignup,
} from '@/lib/waitlist';

type WaitlistSectionProps = {
  // Use 'page' on the dedicated /waitlist route so the headline is the page's h1.
  variant?: 'section' | 'page';
};

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

const inputClassName =
  'w-full rounded-xl border bg-background/70 px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 disabled:opacity-60 md:text-[15px]';

export default function WaitlistSection({ variant = 'section' }: WaitlistSectionProps) {
  const formId = useId();
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [submittedName, setSubmittedName] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [alreadyJoined, setAlreadyJoined] = useState(false);
  // State updates are async, so a ref blocks a second submit fired before re-render.
  const isSubmittingRef = useRef(false);

  const isPage = variant === 'page';
  const Heading = isPage ? 'h1' : 'h2';
  const isSubmitting = status === 'submitting';

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmittingRef.current) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const signup = {
      firstName: String(formData.get('firstName') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
      persona: String(formData.get('persona') ?? '') as WaitlistPersona['value'],
    };

    const validationError = validateWaitlistSignup(signup);
    if (validationError) {
      setErrorMessage(validationError);
      setStatus('error');
      return;
    }

    const showSuccess = (message: string, isExisting: boolean) => {
      form.reset();
      setSubmittedName(signup.firstName);
      setSuccessMessage(message);
      setAlreadyJoined(isExisting);
      setStatus('success');
    };

    // Honeypot filled in: likely a bot, so pretend it worked without sending anything.
    if (String(formData.get('company') ?? '') !== '') {
      showSuccess('', false);
      return;
    }

    isSubmittingRef.current = true;
    setStatus('submitting');
    setErrorMessage('');

    try {
      const result = await joinWaitlist(signup);
      showSuccess(result.message, result.alreadyJoined);
      // Only new signups count as conversions, not repeat emails or the honeypot path.
      if (!result.alreadyJoined) trackWaitlistLead();
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : 'Something went wrong. Please try again.'
      );
      setStatus('error');
    } finally {
      isSubmittingRef.current = false;
    }
  };

  return (
    <section
      id='waitlist'
      className={cn(
        'relative scroll-mt-24 overflow-hidden',
        isPage ? 'hero-gradient min-h-screen pt-28 pb-20 md:pt-32 lg:pt-36' : 'py-20 md:py-32'
      )}
    >
      <div className='pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl' />
      <div className='pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-secondary/10 blur-3xl' />

      <div className='container relative z-10 mx-auto px-4'>
        <div
          className={cn(
            'mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16',
            !isPage && 'rounded-3xl border bg-card/60 p-6 card-shadow sm:p-10 lg:p-14'
          )}
        >
          <m.div
            className='flex flex-col items-center text-center lg:items-start lg:text-left'
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <span className='mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary'>
              <Sparkles size={14} />
              Early Access Waitlist
            </span>

            <Heading className='font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl'>
              Your Business Journey <span className='gradient-text'>Starts Here.</span>
            </Heading>

            <p className='mt-5 max-w-xl text-lg text-muted-foreground'>
              You don&apos;t need to know everything about business to start one. Servix OS is
              building a smarter way to discover, start, run, and grow a business with AI by your
              side.
            </p>

            <ul className='mt-8 flex flex-col gap-3 text-left'>
              {waitlistPerks.map((perk) => (
                <li key={perk} className='flex items-center gap-3 text-sm md:text-base'>
                  <span className='flex h-6 w-6 shrink-0 items-center justify-center rounded-full gradient-bg text-primary-foreground'>
                    <Check size={14} strokeWidth={3} />
                  </span>
                  {perk}
                </li>
              ))}
            </ul>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='glass glow-shadow relative w-full rounded-3xl p-6 sm:p-8'
          >
            <AnimatePresence mode='wait' initial={false}>
              {status === 'success' ? (
                <m.div
                  key='success'
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className='flex flex-col items-center py-8 text-center'
                  role='status'
                  aria-live='polite'
                >
                  <div className='mb-5 flex h-14 w-14 items-center justify-center rounded-2xl gradient-bg text-primary-foreground'>
                    {alreadyJoined ? <MailCheck size={26} /> : <PartyPopper size={26} />}
                  </div>
                  <h3 className='font-display text-2xl font-bold'>
                    {alreadyJoined ? 'Good news, you’re already in' : 'Welcome aboard'}
                    {submittedName ? `, ${submittedName}` : ''}!
                  </h3>
                  <p className='mt-3 max-w-sm text-muted-foreground'>
                    {alreadyJoined
                      ? "This email is already on the Servix OS waitlist, so there's nothing more to do. We'll let you know when early access becomes available."
                      : successMessage ||
                        "You're on the list! We'll keep you updated on ServixOS and let you know when early access becomes available."}
                  </p>
                  <button
                    type='button'
                    onClick={() => setStatus('idle')}
                    className='mt-6 text-sm font-semibold text-primary hover:underline'
                  >
                    Sign up someone else
                  </button>
                </m.div>
              ) : (
                <m.form
                  key='form'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  onSubmit={handleSubmit}
                  className='flex flex-col gap-5'
                >
                  <div>
                    <h3 className='font-display text-xl font-bold md:text-2xl'>
                      Join the Waitlist
                    </h3>
                    <p className='mt-1.5 text-sm text-muted-foreground'>
                      Be among the first to experience Servix OS. Sign up for early-access updates.
                    </p>
                  </div>

                  <div className='flex flex-col gap-2'>
                    <label htmlFor={`${formId}-first-name`} className='text-sm font-medium'>
                      First name
                    </label>
                    <input
                      id={`${formId}-first-name`}
                      name='firstName'
                      type='text'
                      autoComplete='given-name'
                      placeholder='e.g. Amara'
                      maxLength={FIRST_NAME_MAX_LENGTH}
                      required
                      disabled={isSubmitting}
                      className={inputClassName}
                    />
                  </div>

                  <div className='flex flex-col gap-2'>
                    <label htmlFor={`${formId}-email`} className='text-sm font-medium'>
                      Email address
                    </label>
                    <div className='relative'>
                      <Mail
                        size={18}
                        className='pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground'
                      />
                      <input
                        id={`${formId}-email`}
                        name='email'
                        type='email'
                        autoComplete='email'
                        inputMode='email'
                        placeholder='you@example.com'
                        maxLength={EMAIL_MAX_LENGTH}
                        required
                        disabled={isSubmitting}
                        className={cn(inputClassName, 'pl-11')}
                      />
                    </div>
                  </div>

                  <div className='flex flex-col gap-2'>
                    <label htmlFor={`${formId}-persona`} className='text-sm font-medium'>
                      What best describes you?
                    </label>
                    <div className='relative'>
                      <select
                        id={`${formId}-persona`}
                        name='persona'
                        defaultValue=''
                        required
                        disabled={isSubmitting}
                        className={cn(inputClassName, 'appearance-none pr-11')}
                      >
                        <option value='' disabled>
                          Select an option
                        </option>
                        {waitlistPersonas.map((persona) => (
                          <option key={persona.value} value={persona.value}>
                            {persona.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={18}
                        className='pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground'
                      />
                    </div>
                  </div>

                  {/* Honeypot: hidden from people, tempting for bots. */}
                  <div aria-hidden='true' className='absolute -left h-0 w-0 overflow-hidden'>
                    <label htmlFor={`${formId}-company`}>Company</label>
                    <input
                      id={`${formId}-company`}
                      name='company'
                      type='text'
                      tabIndex={-1}
                      autoComplete='off'
                    />
                  </div>

                  {status === 'error' && errorMessage ? (
                    <p
                      role='alert'
                      className='rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive dark:text-red-300'
                    >
                      {errorMessage}
                    </p>
                  ) : null}

                  <m.button
                    type='submit'
                    disabled={isSubmitting}
                    whileHover={isSubmitting ? undefined : { scale: 1.02 }}
                    whileTap={isSubmitting ? undefined : { scale: 0.98 }}
                    className='gradient-bg glow-shadow inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-3.5 text-base font-semibold text-primary-foreground disabled:cursor-not-allowed disabled:opacity-80'
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className='animate-spin' /> Joining…
                      </>
                    ) : (
                      <>
                        Join the Waitlist <ArrowRight size={18} />
                      </>
                    )}
                  </m.button>

                  <p className='text-xs leading-relaxed text-muted-foreground'>
                    By joining the waitlist, you agree to our{' '}
                    <Link href='/terms' className='font-medium text-primary hover:underline'>
                      Terms of Service
                    </Link>{' '}
                    and to receive emails from Servix OS about our launch and early-access updates.
                    You can unsubscribe at any time. See our{' '}
                    <Link href='/privacy' className='font-medium text-primary hover:underline'>
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </m.form>
              )}
            </AnimatePresence>
          </m.div>
        </div>
      </div>
    </section>
  );
}
