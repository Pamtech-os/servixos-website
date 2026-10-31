import type { ReactNode } from 'react';

const CONTACT_EMAIL = 'contact@servixos.com';

export const legalLinkClassName = 'font-medium text-primary hover:underline';

export function LegalSection({
  id,
  title,
  children,
}: Readonly<{ id?: string; title: string; children: ReactNode }>) {
  return (
    <section id={id} className='mt-10 scroll-mt-24 flex flex-col gap-4'>
      <h2 className='font-display text-2xl font-bold text-foreground'>{title}</h2>
      {children}
    </section>
  );
}

export function ContactLink() {
  return (
    <a href={`mailto:${CONTACT_EMAIL}`} className={legalLinkClassName}>
      {CONTACT_EMAIL}
    </a>
  );
}
