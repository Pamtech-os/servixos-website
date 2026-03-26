'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import servixLogo from '@/assets/servix-logo.png';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

const HEADER_OFFSET_FALLBACK = 96;
const MOBILE_MENU_CLOSE_DELAY_MS = 280;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDark = stored === 'dark' || (!stored && prefersDark);

    document.documentElement.classList.toggle('dark', initialDark);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
    if (!target) return;

    const offset = getHeaderOffset();
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.history.replaceState(null, '', `#${id}`);
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  };

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    closeMenu = false,
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
    <motion.header
      data-site-header='true'
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-sm' : 'bg-transparent'
      }`}
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

        {/* Desktop nav */}
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
            onClick={toggleTheme}
            aria-label='Toggle theme'
            className='rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground'
          >
            <Sun size={18} className='hidden dark:block' />
            <Moon size={18} className='block dark:hidden' />
          </button>
          <a
            href='#hero'
            onClick={(event) => handleNavClick(event, '#hero')}
            className='gradient-bg rounded-full px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 xl:px-5'
          >
            Get Started
          </a>
        </div>

        {/* Mobile controls */}
        <div className='flex items-center gap-2 lg:hidden'>
          <button
            onClick={toggleTheme}
            aria-label='Toggle theme'
            className='rounded-full p-2 text-muted-foreground'
          >
            <Sun size={18} className='hidden dark:block' />
            <Moon size={18} className='block dark:hidden' />
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label='Toggle menu'
            className='rounded-full p-2 text-foreground'
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className='glass overflow-hidden lg:hidden'
          >
            <div className='flex flex-col gap-4 px-6 py-6'>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(event) => handleNavClick(event, link.href, true)}
                  className='text-base font-medium text-muted-foreground transition-colors hover:text-foreground'
                >
                  {link.label}
                </a>
              ))}
              <a
                href='#hero'
                onClick={(event) => handleNavClick(event, '#hero', true)}
                className='gradient-bg mt-2 rounded-full px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground'
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
