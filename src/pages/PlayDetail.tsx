import { Link, useParams } from 'react-router-dom'
import SectionTitle from '../components/common/SectionTitle'
import ImagePlaceholder from '../components/common/ImagePlaceholder'
import { plays } from '../data/plays'

export default function PlayDetail() {
  const { id } = useParams()
  const play = plays.find((p) => p.id === id)

  if (!play) {
    return (
      <div className="container-page py-20 text-center">
        <p className="mb-4 text-lg text-ink/60">未找到该剧目</p>
        <Link to="/plays" className="text-china-red hover:underline">返回名剧库</Link>
      </div>
    )
  }

  return (
    <div className="container-page py-10">
      <Link to="/plays" className="mb-4 inline-block text-sm text-ink/50 hover:text-china-red">
        ← 返回名剧库
      </Link>

      <div className="mb-8 grid gap-6 md:grid-cols-3">
        <div className="md:col-span-1">
          <ImagePlaceholder label={`《${play.title}》剧照 · 图片待替换`} src={play.photoUrl} aspect="tall" />
        </div>
        <div className="md:col-span-2">
          <h1 className="mb-1 font-serif text-3xl font-black text-ink">《{play.title}》</h1>
          <p className="mb-2 text-ink/50">{play.playwright}</p>
          <div className="mb-4 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-lg bg-rice p-3">
              <p className="text-xs text-ink/50">首演年代</p>
              <p className="font-medium text-ink">{play.premiereYear}</p>
            </div>
            <div className="rounded-lg bg-rice p-3">
              <p className="text-xs text-ink/50">主要角色</p>
              <p className="font-medium text-ink">{play.mainRoles.join('、')}</p>
            </div>
          </div>
          <h2 className="mb-2 font-serif text-lg font-bold text-ink">剧情梗概</h2>
          <p className="leading-relaxed text-ink/70">{play.synopsis}</p>
        </div>
      </div>

      <div className="rounded-xl bg-white p-6 shadow-card">
        <SectionTitle title="经典唱词摘录" subtitle={play.id === 'dinvhua' ? '《香夭》全段 · 逐句注释' : undefined} />
        <ol className="space-y-4">
          {play.lyrics.map((l, i) => (
            <li key={i} className="border-b border-ink/5 pb-4 last:border-0 last:pb-0">
              <p className="font-serif text-lg text-ink">{l.text}</p>
              {l.note && <p className="mt-1 text-sm text-ink/55">注：{l.note}</p>}
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
