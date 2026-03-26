import Image from 'next/image';
import servixLogo from '@/assets/servix-logo.png';

const footerLinks = {
  Product: ['Features', 'Pricing', 'How It Works', 'FAQ'],
  Company: ['About', 'Blog', 'Careers', 'Contact'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
};

const Footer = () => {
  return (
    <footer className='border-t bg-card py-16'>
      <div className='container mx-auto px-4'>
        <div className='grid gap-12 md:grid-cols-2 lg:grid-cols-5'>
          {/* Brand */}
          <div className='lg:col-span-2'>
            <div className='mb-4 flex items-center gap-2'>
              <Image
                src={servixLogo}
                alt='Servix OS'
                className='h-8 w-8'
                width={32}
                height={32}
              />
              <span className='font-display text-lg font-bold'>Servix OS</span>
            </div>
            <p className='max-w-sm text-sm leading-relaxed text-muted-foreground'>
              The AI-powered platform that helps you start, run, and grow your
              business—all in one place.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className='mb-4 font-display text-sm font-bold'>{heading}</h4>
              <ul className='flex flex-col gap-2.5'>
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className='text-sm text-muted-foreground transition-colors hover:text-foreground'
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row'>
          <p className='text-xs text-muted-foreground'>
            © {new Date().getFullYear()} Servix OS. All rights reserved.
          </p>
          <div className='flex gap-6'>
            {['Twitter', 'LinkedIn', 'Facebook'].map((s) => (
              <a
                key={s}
                href='#'
                className='text-xs text-muted-foreground transition-colors hover:text-foreground'
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
