'use client';

import type { MouseEvent } from 'react';
import { AnimatePresence } from 'framer-motion';
import * as m from 'framer-motion/m';
import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import servixLogo from '@/assets/servix-logo.png';
import { navLinks } from '@/content/home';
import { useScrollThreshold } from '@/hooks/use-scroll-threshold';
import { cn } from '@/lib/utils';

const HEADER_OFFSET_FALLBACK = 96;
const MOBILE_MENU_CLOSE_DELAY_MS = 280;

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScrollThreshold(20);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  // Theme declaration
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains('dark');
    const next = !isDark;
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  const getHeaderOffset = () => {
    const header = document.querySelector('[data-site-header="true"]');
    if (!header) return HEADER_OFFSET_FALLBACK;
    return header.getBoundingClientRect().height + 12;
  };

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (!target) {
      // Section lives on the homepage; navigate there instead (e.g. from /waitlist).
      router.push(`/#${id}`);
      return;
    }

    const offset = getHeaderOffset();
    const top = target.getBoundingClientRect().top + window.scrollY - offset;

    window.history.replaceState(null, '', `#${id}`);
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  };

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
    closeMenu = false
  ) => {
    if (!href.startsWith('#')) {
      if (closeMenu) setIsOpen(false);
      return;
    }

    event.preventDefault();
    const id = href.slice(1);

    if (closeMenu) {
      setIsOpen(false);
      window.setTimeout(() => scrollToSection(id), MOBILE_MENU_CLOSE_DELAY_MS);
      return;
    }

    scrollToSection(id);
  };

  return (
    <m.header
      data-site-header='true'
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'glass shadow-sm' : 'bg-transparent'
      )}
    >
      <nav className='container mx-auto flex items-center justify-between px-4 py-3 md:px-5 md:py-4 lg:px-6'>
        <Link href='/' className='flex items-center gap-2 md:gap-2.5'>
          <Image
            src={servixLogo}
            alt='Servix OS Logo'
            className='h-8 w-8 md:h-9 md:w-9 xl:h-10 xl:w-10'
            width={40}
            height={40}
            priority
          />
          <span className='font-display text-base font-bold leading-tight whitespace-nowrap md:text-lg xl:text-xl'>
            Servix OS
          </span>
        </Link>

        <div className='hidden items-center gap-5 lg:flex xl:gap-8'>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => handleNavClick(event, link.href)}
              className='text-sm font-medium text-muted-foreground transition-colors hover:text-foreground lg:text-[15px]'
            >
              {link.label}
            </a>
          ))}
          <button
            type='button'
            onClick={toggleTheme}
            aria-label='Toggle theme'
            className='rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground'
          >
            <Sun size={18} className='hidden dark:block' />
            <Moon size={18} className='block dark:hidden' />
          </button>
          <a
            href='#waitlist'
            onClick={(event) => handleNavClick(event, '#waitlist')}
            className='gradient-bg rounded-full px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 xl:px-5'
          >
            Join the Waitlist
          </a>
        </div>

        <div className='flex items-center gap-2 lg:hidden'>
          <button
            type='button'
            onClick={toggleTheme}
            aria-label='Toggle theme'
            className='rounded-full p-2 text-muted-foreground'
          >
            <Sun size={18} className='hidden dark:block' />
            <Moon size={18} className='block dark:hidden' />
          </button>
          <button
            type='button'
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label='Toggle menu'
            aria-expanded={isOpen}
            className='rounded-full p-2 text-foreground'
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <m.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
            className='glass overflow-hidden lg:hidden'
          >
            <div className='flex flex-col gap-4 px-6 py-6'>
              {navLinks.map((link) => (
                <a
                  key={`mobile-${link.href}`}
                  href={link.href}
                  onClick={(event) => handleNavClick(event, link.href, true)}
                  className='text-base font-medium text-muted-foreground transition-colors hover:text-foreground'
                >
                  {link.label}
                </a>
              ))}
              <a
                href='#waitlist'
                onClick={(event) => handleNavClick(event, '#waitlist', true)}
                className='gradient-bg mt-2 rounded-full px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground'
              >
                Join the Waitlist
              </a>
            </div>
          </m.div>
        ) : null}
      </AnimatePresence>
    </m.header>
  );
}
