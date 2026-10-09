interface SectionTitleProps {
  title: string
  subtitle?: string
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-6 flex items-baseline gap-3">
      <span className="h-6 w-1.5 shrink-0 rounded-full bg-china-red" />
      <h2 className="text-2xl font-bold text-ink sm:text-3xl">{title}</h2>
      {subtitle && <p className="text-sm text-ink/55">{subtitle}</p>}
    </div>
  )
}
