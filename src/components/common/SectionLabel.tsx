interface SectionLabelProps {
  index:   string
  title:   string
  accent?: string
}

export function SectionLabel({ index, title, accent = '#FFE500' }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <span className="font-mono text-xs text-brutal-red">[{index}]</span>
      <div
        className="h-px flex-1 border-t-3 border-brutal-black max-w-[60px]"
        style={{ borderColor: accent }}
      />
      <h2 className="font-display font-black text-sm uppercase tracking-[0.2em]">
        {title}
      </h2>
      <div className="h-px flex-1 border-t-3 border-brutal-black opacity-20" />
    </div>
  )
}
