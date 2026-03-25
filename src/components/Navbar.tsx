import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import servixLogo from '@/assets/servix-logo.png';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (
      stored === 'dark' ||
      (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle('dark', next);
      localStorage.setItem('theme', next ? 'dark' : 'light');
      return next;
    });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className='container mx-auto flex items-center justify-between px-4 py-3 md:py-4'>
        <a href='#' className='flex items-center gap-2'>
          <img
            src={servixLogo}
            alt='Servix OS Logo'
            className='h-8 w-8 md:h-10 md:w-10'
            loading='lazy'
          />
          <span className='font-display text-lg font-bold md:text-xl'>
            Servix OS
          </span>
        </a>

        {/* Desktop nav */}
        <div className='hidden items-center gap-8 md:flex'>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className='text-sm font-medium text-muted-foreground transition-colors hover:text-foreground'
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            aria-label='Toggle theme'
            className='rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground'
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href='#hero'
            className='gradient-bg rounded-full px-5 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105'
          >
            Get Started
          </a>
        </div>

        {/* Mobile controls */}
        <div className='flex items-center gap-2 md:hidden'>
          <button
            onClick={toggleTheme}
            aria-label='Toggle theme'
            className='rounded-full p-2 text-muted-foreground'
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
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
            className='glass overflow-hidden md:hidden'
          >
            <div className='flex flex-col gap-4 px-6 py-6'>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className='text-base font-medium text-muted-foreground transition-colors hover:text-foreground'
                >
                  {link.label}
                </a>
              ))}
              <a
                href='#hero'
                onClick={() => setIsOpen(false)}
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
