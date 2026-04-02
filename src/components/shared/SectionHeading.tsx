import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type SectionHeadingProps = {
  badge: string;
  title: string;
  highlight?: string;
  description?: string;
  badgeClassName?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  align?: 'left' | 'center';
  titleSuffix?: ReactNode;
};

const alignmentClasses = {
  left: 'text-left',
  center: 'text-center',
};

export default function SectionHeading({
  badge,
  title,
  highlight,
  description,
  badgeClassName,
  className,
  titleClassName,
  descriptionClassName,
  align = 'center',
  titleSuffix,
}: SectionHeadingProps) {
  return (
    <div className={cn('mx-auto max-w-2xl', alignmentClasses[align], className)}>
      <span
        className={cn(
          'mb-3 inline-block rounded-full px-4 py-1.5 text-sm font-medium',
          badgeClassName,
        )}
      >
        {badge}
      </span>
      <h2 className={cn('font-display text-3xl font-bold md:text-4xl lg:text-5xl', titleClassName)}>
        {title}{' '}
        {highlight ? <span className='gradient-text'>{highlight}</span> : null}
        {titleSuffix}
      </h2>
      {description ? (
        <p className={cn('mt-4 text-lg text-muted-foreground', descriptionClassName)}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
