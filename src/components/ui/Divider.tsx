import { cn } from '@/utils/cn'

interface DividerProps {
  className?: string
  color?: string
}

export function Divider({ className, color }: DividerProps) {
  return (
    <div
      className={cn('border-t-3 border-brutal-black w-full', className)}
      style={color ? { borderColor: color } : undefined}
    />
  )
}
