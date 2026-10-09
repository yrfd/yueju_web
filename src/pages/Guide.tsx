import { Link } from 'react-router-dom'
import SectionTitle from '../components/common/SectionTitle'
import { guideClips } from '../data/guideClips'

export default function Guide() {
  return (
    <div className="container-page py-10">
      <SectionTitle title="经典片段导赏" subtitle="逐句读懂粤剧唱段" />

      <div className="overflow-hidden rounded-xl bg-white shadow-card">
        {guideClips.map((clip, i) => (
          <Link
            key={clip.id}
            to={`/guide/${clip.id}`}
            className={`flex flex-col gap-3 p-5 transition-colors hover:bg-rice/60 sm:flex-row sm:items-center sm:justify-between ${
              i > 0 ? 'border-t border-ink/5' : ''
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-china-red/10 text-china-red">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-ink">《{clip.playTitle}》· {clip.ariaTitle}</h3>
                <p className="text-sm text-ink/50">{clip.performer}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:gap-5">
              <span className="text-sm text-ink/50">{clip.duration}</span>
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  clip.difficulty === '入门' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                }`}
              >
                {clip.difficulty}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
