import Link from 'next/link';
import { ArrowLeft, Compass, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <main className='hero-gradient relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24'>
      <div className='pointer-events-none absolute -left-28 -top-28 h-80 w-80 rounded-full bg-primary/15 blur-3xl' />
      <div className='pointer-events-none absolute -right-28 bottom-0 h-80 w-80 rounded-full bg-secondary/15 blur-3xl' />

      <section className='glass card-shadow relative z-10 w-full max-w-2xl rounded-3xl border p-8 text-center md:p-12'>
        <div className='mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl gradient-bg text-primary-foreground'>
          <Compass size={26} />
        </div>

        <p className='font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary'>
          Error 404
        </p>
        <h1 className='mt-3 font-display text-4xl font-bold md:text-5xl'>
          This Page Took a <span className='gradient-text'>Wrong Turn</span>
        </h1>
        <p className='mx-auto mt-4 max-w-xl text-base text-muted-foreground md:text-lg'>
          The page you are looking for does not exist or may have been moved.
          Let&apos;s get you back to something useful.
        </p>

        <div className='mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row'>
          <Link
            href='/'
            className='gradient-bg inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105'
          >
            <Home size={16} />
            Back to Home
          </Link>
          <Link
            href='/#features'
            className='inline-flex items-center gap-2 rounded-full border bg-card px-6 py-3 text-sm font-semibold transition-shadow hover:card-shadow-hover'
          >
            <ArrowLeft size={16} />
            Explore Features
          </Link>
        </div>
      </section>
    </main>
  );
}
