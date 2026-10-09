interface ImagePlaceholderProps {
  label?: string
  src?: string
  className?: string
  aspect?: 'video' | 'square' | 'wide' | 'tall'
}

const aspectMap: Record<string, string> = {
  video: 'aspect-video',
  square: 'aspect-square',
  wide: 'aspect-[16/7]',
  tall: 'aspect-[3/4]',
}

export default function ImagePlaceholder({
  label = '图片待替换',
  src,
  className = '',
  aspect = 'video',
}: ImagePlaceholderProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={label}
        loading="lazy"
        className={`w-full rounded-lg object-cover ${aspectMap[aspect]} ${className}`}
      />
    )
  }
  return (
    <div
      className={`flex w-full items-center justify-center overflow-hidden rounded-lg border border-dashed border-ink/25 bg-ink/5 ${aspectMap[aspect]} ${className}`}
      role="img"
      aria-label={label}
    >
      <span className="flex flex-col items-center gap-1 px-4 text-center text-xs text-ink/45">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
        <span>{label}</span>
      </span>
    </div>
  )
}
