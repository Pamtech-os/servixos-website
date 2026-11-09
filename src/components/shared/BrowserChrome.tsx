import { Lock } from 'lucide-react';

type BrowserChromeProps = {
  url?: string;
};

/** macOS-style browser title bar (traffic-light dots + address bar) for app mockups. */
export default function BrowserChrome({ url = 'app.servixos.com' }: BrowserChromeProps) {
  return (
    <div className='grid grid-cols-[auto_1fr_auto] items-center gap-3 border-b border-black/5 bg-[#f1f2f4] px-3 py-2 sm:gap-4 sm:px-5 sm:py-3 dark:border-white/5 dark:bg-zinc-800'>
      <div className='flex items-center gap-1.5 sm:gap-2' aria-hidden='true'>
        <span className='h-2.5 w-2.5 rounded-full bg-[#ff5f57] sm:h-3 sm:w-3' />
        <span className='h-2.5 w-2.5 rounded-full bg-[#febc2e] sm:h-3 sm:w-3' />
        <span className='h-2.5 w-2.5 rounded-full bg-[#28c840] sm:h-3 sm:w-3' />
      </div>
      <div className='mx-auto flex w-full max-w-md items-center justify-center gap-1.5 rounded-md bg-white px-3 py-1 text-[11px] font-medium text-zinc-400 shadow-sm sm:rounded-lg sm:py-1.5 sm:text-sm dark:bg-zinc-900 dark:text-zinc-500'>
        <Lock className='h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5' aria-hidden='true' />
        <span className='truncate'>{url}</span>
      </div>
      {/* Spacer matching the dots' width keeps the address bar centered */}
      <div className='w-[42px] sm:w-[52px]' aria-hidden='true' />
    </div>
  );
}
