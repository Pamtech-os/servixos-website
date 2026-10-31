export type CookieConsent = 'granted' | 'denied' | null;

const STORAGE_KEY = 'cookie-consent';

const listeners = new Set<() => void>();
// Keeps the choice for this visit when the browser blocks localStorage.
let fallbackConsent: CookieConsent = null;

export function getCookieConsent(): CookieConsent {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'granted' || stored === 'denied' ? stored : null;
  } catch {
    return fallbackConsent;
  }
}

// Passing null clears the choice, which brings the banner back.
export function setCookieConsent(consent: CookieConsent) {
  fallbackConsent = consent;
  try {
    if (consent) localStorage.setItem(STORAGE_KEY, consent);
    else localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Storage is blocked: fallbackConsent covers this visit.
  }
  listeners.forEach((listener) => listener());
}

export function subscribeToCookieConsent(listener: () => void) {
  listeners.add(listener);
  window.addEventListener('storage', listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener('storage', listener);
  };
}
