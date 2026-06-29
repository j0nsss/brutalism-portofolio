import { cn } from '@/utils/cn'

interface MarqueeProps {
  items:        string[]
  speed?:       'slow' | 'normal' | 'fast'
  direction?:   'left' | 'right'
  separator?:   string
  className?:   string
  bgColor?:     string
  textColor?:   string
}

const speedMap = {
  slow:   'animate-marquee-slow',
  normal: 'animate-marquee',
  fast:   'animate-marquee-fast',
}

export function Marquee({
  items,
  speed      = 'normal',
  direction  = 'left',
  separator  = '★',
  className,
  bgColor    = '#000',
  textColor  = '#FFE500',
}: MarqueeProps) {
  const doubled = [...items, ...items, ...items, ...items]

  return (
    <div
      className={cn(
        'overflow-hidden py-4 border-y-3 border-brutal-black',
        className
      )}
      style={{ backgroundColor: bgColor }}
    >
      <div
        className={cn(
          'flex whitespace-nowrap',
          speedMap[speed],
          direction === 'right' && '[animation-direction:reverse]'
        )}
        style={{ color: textColor }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 px-6 font-display font-black text-base uppercase tracking-widest">
            {item}
            <span className="text-brutal-red opacity-80">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
