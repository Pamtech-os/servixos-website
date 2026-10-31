'use client';

import { setCookieConsent } from '@/lib/cookie-consent';

export default function CookieSettingsButton() {
  return (
    <button
      type='button'
      onClick={() => setCookieConsent(null)}
      className='text-xs text-muted-foreground transition-colors hover:text-foreground'
    >
      Cookie Settings
    </button>
  );
}
