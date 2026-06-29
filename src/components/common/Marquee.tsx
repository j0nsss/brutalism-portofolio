import { useRef, useEffect } from 'react'
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

let marqueeCount = 0

const durationMap = {
  slow:   '45s',
  normal: '25s',
  fast:   '12s',
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
  const uid = `mq-${++marqueeCount}`
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    el.style.animation = 'none'
    el.offsetHeight
    el.style.animation = ''
  }, [items, speed, direction])

  const doubled = [...items, ...items]

  return (
    <div
      className={cn(
        'overflow-hidden py-4 border-y-3 border-brutal-black',
        className
      )}
      style={{ backgroundColor: bgColor }}
    >
      <style>{`
        .mq-track-${uid} {
          display: flex;
          width: max-content;
          flex-shrink: 0;
          animation: mq-scroll-${uid} ${durationMap[speed]} linear infinite;
        }
        ${direction === 'right' ? `.mq-track-${uid} { animation-direction: reverse; }` : ''}
        @keyframes mq-scroll-${uid} {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <div ref={trackRef} className={`mq-track-${uid}`} style={{ color: textColor }}>
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 px-6 font-display font-black text-base uppercase tracking-widest shrink-0 whitespace-nowrap">
            {item}
            <span className="text-brutal-red opacity-80 shrink-0">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
