import { Link } from 'react-router-dom'

const quickLinks = [
  { to: '/basics', title: '粤剧入门', desc: '3分钟建立粤剧基本认知', icon: '学' },
  { to: '/masters', title: '名家名剧', desc: '认识粤剧史上的大师与经典', icon: '名' },
  { to: '/guide', title: '经典导赏', desc: '逐句读懂经典唱段', icon: '赏' },
  { to: '/interactive', title: '互动体验', desc: '测试你的粤剧行当', icon: '玩' },
]

export default function QuickLinks() {
  return (
    <section className="container-page -mt-10 relative z-20">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {quickLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="group rounded-xl bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
          >
            <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-china-red/10 font-serif text-xl font-bold text-china-red transition-colors group-hover:bg-china-red group-hover:text-rice">
              {link.icon}
            </span>
            <h3 className="mb-1 font-serif text-lg font-bold text-ink">{link.title}</h3>
            <p className="text-sm text-ink/60">{link.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
