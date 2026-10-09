import { Link } from 'react-router-dom'
import SectionTitle from '../components/common/SectionTitle'
import ImagePlaceholder from '../components/common/ImagePlaceholder'
import { plays } from '../data/plays'

export default function Plays() {
  return (
    <div className="container-page py-10">
      <SectionTitle title="名剧库" subtitle="粤剧经典剧目" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {plays.map((p) => (
          <Link
            key={p.id}
            to={`/plays/${p.id}`}
            className="group overflow-hidden rounded-xl bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
          >
            <ImagePlaceholder label={`《${p.title}》剧照 · 图片待替换`} src={p.photoUrl} aspect="wide" className="!rounded-none !rounded-t-xl" />
            <div className="p-5">
              <h3 className="mb-1 font-serif text-xl font-bold text-ink group-hover:text-china-red">《{p.title}》</h3>
              <p className="mb-2 text-sm text-ink/50">{p.playwright} · {p.premiereYear} 首演</p>
              <p className="mb-3 line-clamp-3 text-sm leading-relaxed text-ink/70">{p.synopsis}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.mainRoles.map((r) => (
                  <span key={r} className="rounded-full bg-rice px-2.5 py-1 text-xs text-ink/60">{r}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
