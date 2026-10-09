import { useState } from 'react'
import SectionTitle from '../components/common/SectionTitle'
import { glossary } from '../data/glossary'
import { watchList, readingList } from '../data/resources'
import { inheritors, measures, digitalArchive } from '../data/heritage'
import { masks, costumes } from '../data/visual'

type Tab = 'glossary' | 'resources' | 'heritage' | 'visual'

const tabs: { key: Tab; label: string }[] = [
  { key: 'glossary', label: '术语词典' },
  { key: 'resources', label: '片单书单' },
  { key: 'heritage', label: '非遗档案' },
  { key: 'visual', label: '粤剧视觉' },
]

const tierStyle = (tier: string) =>
  tier === '入门' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'

export default function Culture() {
  const [tab, setTab] = useState<Tab>('glossary')

  return (
    <div className="container-page py-10">
      <SectionTitle title="文化百科" subtitle="术语 · 学习资源 · 非遗档案 · 视觉艺术" />

      <div className="mb-6 flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => setTab(t.key)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              tab === t.key ? 'bg-china-red text-rice' : 'bg-white text-ink/70 shadow-card hover:text-china-red'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'glossary' && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {glossary.map((g) => (
            <div key={g.term} className="rounded-xl bg-white p-5 shadow-card">
              <div className="mb-2 flex items-center gap-2">
                <h3 className="font-serif text-lg font-bold text-ink">{g.term}</h3>
                <span className="rounded-full bg-china-red/10 px-2 py-0.5 text-xs text-china-red">{g.category}</span>
              </div>
              <p className="text-sm leading-relaxed text-ink/65">{g.definition}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'resources' && (
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl bg-white p-6 shadow-card">
            <h3 className="mb-4 font-serif text-lg font-bold text-ink">推荐片单（从易到难）</h3>
            <ol className="space-y-4">
              {watchList.map((w, i) => (
                <li key={w.title} className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-china-red font-serif text-sm font-bold text-rice">
                    {i + 1}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-medium text-ink">{w.title}</p>
                      <span className={`rounded-full px-2 py-0.5 text-xs ${tierStyle(w.tier)}`}>{w.tier}</span>
                    </div>
                    <p className="mt-1 text-sm text-ink/60">{w.note}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-card">
            <h3 className="mb-4 font-serif text-lg font-bold text-ink">推荐书单 / 学习资源</h3>
            <ul className="space-y-4">
              {readingList.map((r) => (
                <li key={r.title} className="border-b border-ink/5 pb-4 last:border-0 last:pb-0">
                  <p className="font-medium text-ink">{r.title}{r.author ? <span className="ml-2 text-sm font-normal text-ink/45">{r.author}</span> : null}</p>
                  <p className="mt-1 text-sm text-ink/60">{r.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {tab === 'heritage' && (
        <div className="space-y-6">
          <div className="rounded-xl bg-white p-6 shadow-card">
            <h3 className="mb-4 font-serif text-lg font-bold text-ink">传承人名录</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {inheritors.map((p) => (
                <div key={p.name} className="rounded-lg border border-ink/10 p-4">
                  <div className="mb-1 flex items-baseline gap-2">
                    <p className="font-serif font-bold text-ink">{p.name}</p>
                    {p.years && <span className="text-xs text-ink/45">{p.years}</span>}
                  </div>
                  <p className="text-sm text-ink/60">{p.note}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl bg-white p-6 shadow-card">
              <h3 className="mb-4 font-serif text-lg font-bold text-ink">保护措施</h3>
              <ul className="space-y-3">
                {measures.map((m) => (
                  <li key={m.title} className="border-b border-ink/5 pb-3 last:border-0 last:pb-0">
                    <p className="font-medium text-china-red">{m.title}</p>
                    <p className="mt-1 text-sm text-ink/60">{m.note}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-card">
              <h3 className="mb-4 font-serif text-lg font-bold text-ink">数字典藏成果</h3>
              <ul className="space-y-3">
                {digitalArchive.map((d) => (
                  <li key={d.title} className="border-b border-ink/5 pb-3 last:border-0 last:pb-0">
                    <p className="font-medium text-china-red">{d.title}</p>
                    <p className="mt-1 text-sm text-ink/60">{d.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {tab === 'visual' && (
        <div className="space-y-6">
          <div className="rounded-xl bg-white p-6 shadow-card">
            <h3 className="mb-1 font-serif text-lg font-bold text-ink">脸谱</h3>
            <p className="mb-4 text-sm text-ink/55">粤剧脸谱以颜色与纹样寓意人物性格与身份。</p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {masks.map((m) => (
                <div key={m.name} className="flex flex-col items-center rounded-lg border border-ink/10 p-4 text-center">
                  <span
                    className="mb-3 h-16 w-16 rounded-full border-2 border-ink/20 shadow-inner"
                    style={{ backgroundColor: m.color }}
                  />
                  <p className="font-serif font-bold text-ink">{m.name}</p>
                  <p className="mt-1 text-xs font-medium text-china-red">{m.meaning}</p>
                  <p className="mt-1 text-xs text-ink/50">{m.example}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-card">
            <h3 className="mb-1 font-serif text-lg font-bold text-ink">头饰与服饰</h3>
            <p className="mb-4 text-sm text-ink/55">粤剧戏服与头饰精美考究，是舞台视觉的重要组成。</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {costumes.map((c) => (
                <div key={c.name} className="rounded-lg border border-ink/10 p-4">
                  <div className="mb-1 flex items-center gap-2">
                    <p className="font-serif font-bold text-ink">{c.name}</p>
                    <span className="rounded-full bg-rice px-2 py-0.5 text-xs text-ink/50">{c.category}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-ink/60">{c.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
