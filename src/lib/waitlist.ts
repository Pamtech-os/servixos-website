import type { WaitlistPersona } from '@/content/home';

// Called straight from the browser: the backend rate-limits per visitor IP,
// so proxying through our server would make every visitor share one limit.
const API_BASE_URL = (process.env.NEXT_PUBLIC_API_BASE_URL ?? '').replace(/\/+$/, '');

const GENERIC_ERROR_MESSAGE =
  "We couldn't add you to the waitlist right now. Please try again in a moment.";
const UNSUBSCRIBE_ERROR_MESSAGE = "We couldn't unsubscribe you right now. Please try again in a moment.";
const RATE_LIMIT_MESSAGE = 'Too many attempts. Please wait a minute and try again.';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const FIRST_NAME_MAX_LENGTH = 50;
export const EMAIL_MAX_LENGTH = 254;

export type WaitlistSignup = {
  firstName: string;
  email: string;
  persona: WaitlistPersona['value'];
};

export type WaitlistResult = {
  // 409 from the API: the email is already registered, which is fine for the visitor.
  alreadyJoined: boolean;
  message: string;
};

type WaitlistResponse = {
  success: boolean;
  statusCode: number;
  message?: string;
};

export class WaitlistError extends Error {}

// Mirrors the API's rules so obvious mistakes never cost a request; the API re-validates.
export function validateWaitlistSignup(signup: WaitlistSignup): string | null {
  if (!signup.firstName) return 'First name is required';
  if (signup.firstName.length > FIRST_NAME_MAX_LENGTH) {
    return `First name must be at most ${FIRST_NAME_MAX_LENGTH} characters`;
  }
  if (!signup.email) return 'Email address is required';
  if (signup.email.length > EMAIL_MAX_LENGTH) {
    return `Email address must be at most ${EMAIL_MAX_LENGTH} characters`;
  }
  if (!EMAIL_PATTERN.test(signup.email)) return 'Please enter a valid email address';
  if (!signup.persona) return 'Please tell us what best describes you';
  return null;
}

export async function unsubscribeFromWaitlist(token: string): Promise<void> {
  if (!API_BASE_URL) {
    console.error('[waitlist] NEXT_PUBLIC_API_BASE_URL is not set.');
    throw new WaitlistError(UNSUBSCRIBE_ERROR_MESSAGE);
  }

  let response: Response;

  try {
    response = await fetch(`${API_BASE_URL}/api/waitlist/unsubscribe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
    });
  } catch {
    throw new WaitlistError(UNSUBSCRIBE_ERROR_MESSAGE);
  }

  if (response.status === 429) {
    throw new WaitlistError(RATE_LIMIT_MESSAGE);
  }

  const result = (await response.json().catch(() => null)) as WaitlistResponse | null;

  if (!response.ok || !result?.success) {
    throw new WaitlistError(result?.message || UNSUBSCRIBE_ERROR_MESSAGE);
  }
}

export async function joinWaitlist(signup: WaitlistSignup): Promise<WaitlistResult> {
  if (!API_BASE_URL) {
    console.error('[waitlist] NEXT_PUBLIC_API_BASE_URL is not set.');
    throw new WaitlistError(GENERIC_ERROR_MESSAGE);
  }

  let response: Response;

  try {
    response = await fetch(`${API_BASE_URL}/api/waitlist`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(signup),
    });
  } catch {
    throw new WaitlistError(GENERIC_ERROR_MESSAGE);
  }

  const result = (await response.json().catch(() => null)) as WaitlistResponse | null;

  if (response.status === 409) {
    return { alreadyJoined: true, message: result?.message || '' };
  }

  if (response.status === 429) {
    throw new WaitlistError(RATE_LIMIT_MESSAGE);
  }

  if (!response.ok || !result?.success) {
    throw new WaitlistError(result?.message || GENERIC_ERROR_MESSAGE);
  }

  return { alreadyJoined: false, message: result.message || "You're on the list!" };
}
