import Image from 'next/image';

import servixLogo from '@/assets/servix-logo.png';
import CookieSettingsButton from '@/components/CookieSettingsButton';
import { footerLinkGroups, socialLinks } from '@/content/home';
import { META_PIXEL_ID } from '@/lib/meta-pixel';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='border-t bg-card py-16'>
      <div className='container mx-auto px-4'>
        <div className='grid gap-12 md:grid-cols-2 lg:grid-cols-5'>
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
              business-all in one place.
            </p>
          </div>

          {footerLinkGroups.map((group) => (
            <div key={group.heading}>
              <h4 className='mb-4 font-display text-sm font-bold'>
                {group.heading}
              </h4>
              <ul className='flex flex-col gap-2.5'>
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className='text-sm text-muted-foreground transition-colors hover:text-foreground'
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row'>
          <p className='text-xs text-muted-foreground'>
            © {year} Servix OS. All rights reserved.
          </p>
          <div className='flex gap-6'>
            {META_PIXEL_ID ? <CookieSettingsButton /> : null}
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className='text-xs text-muted-foreground transition-colors hover:text-foreground'
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
