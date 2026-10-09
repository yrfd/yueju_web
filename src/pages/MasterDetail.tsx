import { Link, useParams } from 'react-router-dom'
import ImagePlaceholder from '../components/common/ImagePlaceholder'
import SectionTitle from '../components/common/SectionTitle'
import { masters } from '../data/masters'
import { guideClips } from '../data/guideClips'

function findClip(playTitle: string) {
  const clean = playTitle.replace(/[《》]/g, '')
  return guideClips.find((c) => c.playTitle === clean)
}

export default function MasterDetail() {
  const { id } = useParams()
  const master = masters.find((m) => m.id === id)

  if (!master) {
    return (
      <div className="container-page py-20 text-center">
        <p className="mb-4 text-lg text-ink/60">未找到该名家</p>
        <Link to="/masters" className="text-china-red hover:underline">返回名家列表</Link>
      </div>
    )
  }

  const videoPlays = master.signaturePlays.filter((p) => findClip(p))
  const otherPlays = master.signaturePlays.filter((p) => !findClip(p))

  return (
    <div className="container-page py-10">
      <Link to="/masters" className="mb-4 inline-block text-sm text-ink/50 hover:text-china-red">
        ← 返回名家列表
      </Link>

      <div className="mb-8 grid gap-6 md:grid-cols-3">
        <div className="md:col-span-1">
          <ImagePlaceholder label={`${master.name}剧照 · 图片待替换`} src={master.photoUrl} aspect="tall" />
        </div>
        <div className="md:col-span-2">
          <h1 className="mb-1 font-serif text-3xl font-black text-ink">{master.name}</h1>
          <p className="mb-2 font-medium text-china-red">{master.role}</p>
          <p className="mb-2 text-sm text-ink/50">
            {master.birthYear} — {master.deathYear ?? '至今'} · {master.troupe}
          </p>
          <p className="mb-4 leading-relaxed text-ink/70">{master.description}</p>
          <div className="flex flex-wrap gap-2">
            {master.signaturePlays.map((p) => (
              <span key={p} className="rounded-full bg-china-red/10 px-3 py-1 text-sm text-china-red">{p}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl bg-white p-6 shadow-card">
          <SectionTitle title="生平时间线" />
          <ol className="relative space-y-6 border-l-2 border-china-red/30 pl-6">
            {master.timeline.map((t) => (
              <li key={t.year} className="relative">
                <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-china-red ring-4 ring-rice" />
                <p className="font-serif font-bold text-china-red">{t.year}</p>
                <p className="text-ink/70">{t.event}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-card">
          <SectionTitle title="师承关系" />
          <div className="flex flex-col items-center gap-3">
            <div className="rounded-full bg-china-red px-6 py-2 font-serif font-bold text-rice">{master.name}</div>
            <div className="h-4 w-px bg-ink/20" />
            <div className="grid w-full gap-3 sm:grid-cols-2">
              {master.lineage.map((l) => (
                <div key={l.name} className="rounded-lg border border-ink/10 p-3 text-center">
                  <p className="font-medium text-ink">{l.name}</p>
                  <p className="text-xs text-ink/50">{l.relation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {videoPlays.length > 0 && (
        <div className="mt-6 rounded-xl bg-white p-6 shadow-card">
          <SectionTitle title="代表唱段" subtitle="点击观看导赏片段" />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {videoPlays.map((p) => {
              const clip = findClip(p)!
              return (
                <Link
                  key={p}
                  to={`/guide/${clip.id}`}
                  className="flex items-center gap-3 rounded-lg border border-china-red/30 bg-china-red/5 p-3 transition-all hover:border-china-red hover:bg-china-red/10"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-china-red text-rice">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-ink">{p}</p>
                    <p className="text-xs text-china-red">《{clip.ariaTitle}》 · 观看导赏</p>
                  </div>
                </Link>
              )
            })}
          </div>
          {otherPlays.length > 0 && (
            <p className="mt-4 text-sm text-ink/50">其他代表剧目：{otherPlays.join('、')}</p>
          )}
        </div>
      )}
    </div>
  )
}
