import type { FeatureStatus } from '@/content/home';
import { cn } from '@/lib/utils';

const STATUS_LABEL: Record<FeatureStatus, string> = {
  available: 'Available now',
  'in-development': 'In development',
  planned: 'Planned',
  prototype: 'Prototype preview',
};

const STATUS_CLASSNAME: Record<FeatureStatus, string> = {
  available: 'bg-primary/10 text-primary',
  'in-development': 'bg-muted text-muted-foreground',
  planned: 'bg-muted text-muted-foreground',
  prototype: 'bg-accent/10 text-accent',
};

export default function StatusBadge({
  status,
  className,
}: {
  status: FeatureStatus;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium',
        STATUS_CLASSNAME[status],
        className,
      )}
    >
      {STATUS_LABEL[status]}
    </span>
  );
}
