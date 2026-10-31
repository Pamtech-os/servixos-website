import { getCookieConsent } from '@/lib/cookie-consent';

declare global {
  interface Window {
    fbq?: (command: 'track' | 'consent', value: string) => void;
  }
}

// Unset outside production so local and preview traffic stays out of the ad data.
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

const metaPixelScript = `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`;

export function enableMetaPixel() {
  if (!META_PIXEL_ID) return;

  // Already loaded on this page, so the visitor is opting back in.
  if (window.fbq) {
    window.fbq('consent', 'grant');
    return;
  }

  const script = document.createElement('script');
  script.text = metaPixelScript;
  document.head.appendChild(script);
}

export function disableMetaPixel() {
  window.fbq?.('consent', 'revoke');

  // Meta sets these on the root domain, so clear them there and on the current host.
  const rootDomain = window.location.hostname.replace(/^www\./, '');
  for (const name of ['_fbp', '_fbc']) {
    document.cookie = `${name}=; Max-Age=0; path=/`;
    document.cookie = `${name}=; Max-Age=0; path=/; domain=.${rootDomain}`;
  }
}

export function trackWaitlistLead() {
  if (getCookieConsent() === 'granted') window.fbq?.('track', 'Lead');
}
