import Hero from '../components/home/Hero'
import QuickLinks from '../components/home/QuickLinks'
import StatsBar from '../components/home/StatsBar'
import SectionTitle from '../components/common/SectionTitle'

export default function Home() {
  return (
    <div>
      <Hero />
      <QuickLinks />
      <StatsBar />

      <section className="container-page pb-8">
        <SectionTitle title="关于本项目" subtitle="大创项目学术成果" />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-white p-6 shadow-card">
            <h3 className="mb-3 font-serif text-lg font-bold text-ink">项目说明</h3>
            <p className="leading-relaxed text-ink/70">
              本平台面向青年受众，以「数字文化馆 + 互动学习 + 青年社区」为定位，通过入门知识、历史时间轴、名家名剧库、经典导赏与互动体验，帮助对粤剧不熟悉的年轻人在 3 分钟内建立基本认知，并产生进一步探索的兴趣。
            </p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-card">
            <h3 className="mb-3 font-serif text-lg font-bold text-ink">大创项目署名</h3>
            <p className="font-medium text-ink">华南农业大学</p>
            <p className="mt-2 leading-relaxed text-ink/70">
              项目名称：我校本科生对岭南本土文化的认同与接受的调查研究——以粤剧为对象
            </p>
            <p className="mt-4 text-sm text-ink/50">制作人：李晨睿</p>
          </div>
        </div>
      </section>
    </div>
  )
}
