import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts'
import SectionTitle from '../components/common/SectionTitle'
import ImagePlaceholder from '../components/common/ImagePlaceholder'
import { masters } from '../data/masters'

function categorize(role: string): string {
  if (role.includes('文武生')) return '文武生'
  if (role.includes('小生')) return '小生'
  if (role.includes('丑生')) return '丑生'
  if (role.includes('武生')) return '武生'
  return '旦角'
}

export default function Masters() {
  const distribution = useMemo(() => {
    const buckets: Record<string, number> = { 文武生: 0, 小生: 0, 旦角: 0, 丑生: 0 }
    masters.forEach((m) => {
      const key = categorize(m.role)
      buckets[key] = (buckets[key] ?? 0) + 1
    })
    return Object.entries(buckets).map(([name, count]) => ({ name, count }))
  }, [])

  return (
    <div className="container-page py-10">
      <SectionTitle title="名家名剧" subtitle="粤剧史上的一代宗师" />

      <div className="mb-8 rounded-xl bg-white p-5 shadow-card">
        <h3 className="mb-3 font-serif text-lg font-bold text-ink">行当／流派分布</h3>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={distribution} margin={{ top: 10, right: 20, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1A1A1A" strokeOpacity={0.08} />
            <XAxis dataKey="name" tick={{ fill: '#1A1A1A', fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis allowDecimals={false} tick={{ fill: '#1A1A1A', fontSize: 12 }} axisLine={false} tickLine={false} />
            <Tooltip
              cursor={{ fill: '#F5F0E8' }}
              contentStyle={{ borderRadius: 8, border: '1px solid #EDE6D8', fontSize: 12 }}
            />
            <Bar dataKey="count" name="人数" fill="#C41E3A" radius={[6, 6, 0, 0]} barSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {masters.map((m) => (
          <Link
            key={m.id}
            to={`/masters/${m.id}`}
            className="group overflow-hidden rounded-xl bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
          >
            <ImagePlaceholder label={`${m.name}剧照 · 图片待替换`} src={m.photoUrl} aspect="wide" className="!rounded-none !rounded-t-xl" />
            <div className="p-5">
              <div className="mb-2 flex items-baseline justify-between">
                <h3 className="font-serif text-xl font-bold text-ink group-hover:text-china-red">{m.name}</h3>
                <span className="text-xs text-ink/45">
                  {m.birthYear}—{m.deathYear ?? '至今'}
                </span>
              </div>
              <p className="mb-2 text-sm font-medium text-china-red">{m.role}</p>
              <p className="mb-3 text-sm text-ink/50">{m.troupe}</p>
              <p className="line-clamp-3 text-sm leading-relaxed text-ink/70">{m.description}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {m.signaturePlays.slice(0, 2).map((p) => (
                  <span key={p} className="rounded-full bg-rice px-2.5 py-1 text-xs text-ink/60">{p}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
