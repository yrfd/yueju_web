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
            <p className="leading-relaxed text-ink/70">
              本项目为大学生创新创业训练计划（大创）成果，旨在探索粤剧非物质文化遗产的数字化传播与青年化表达。
            </p>
            <p className="mt-4 text-sm text-ink/50">粤剧数字文化平台 · 项目组</p>
          </div>
        </div>
      </section>
    </div>
  )
}
