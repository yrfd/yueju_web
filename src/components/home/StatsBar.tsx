const stats = [
  { value: '2006年', label: '国家级非遗' },
  { value: '2009年', label: '人类非遗' },
  { value: '400+年', label: '历史传承' },
  { value: '粤港澳', label: '联合申报' },
]

export default function StatsBar() {
  return (
    <section className="container-page py-12">
      <div className="grid grid-cols-2 gap-4 rounded-xl bg-china-red p-6 text-rice md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-serif text-2xl font-bold sm:text-3xl">{s.value}</p>
            <p className="mt-1 text-xs text-rice/80 sm:text-sm">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
