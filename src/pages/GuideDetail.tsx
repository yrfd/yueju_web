import { Link, useParams } from 'react-router-dom'
import ImagePlaceholder from '../components/common/ImagePlaceholder'
import { guideClips } from '../data/guideClips'

function parseBilibiliEmbed(url: string): string | null {
  const match = url.match(/BV[0-9A-Za-z]+/)
  if (!match) return null
  return `https://player.bilibili.com/player.html?bvid=${match[0]}&page=1&autoplay=0&danmaku=0`
}

export default function GuideDetail() {
  const { id } = useParams()
  const clip = guideClips.find((c) => c.id === id)

  if (!clip) {
    return (
      <div className="container-page py-20 text-center">
        <p className="mb-4 text-lg text-ink/60">未找到该导赏内容</p>
        <Link to="/guide" className="text-china-red hover:underline">返回导赏列表</Link>
      </div>
    )
  }

  return (
    <div className="container-page py-10">
      <Link to="/guide" className="mb-4 inline-block text-sm text-ink/50 hover:text-china-red">
        ← 返回导赏列表
      </Link>

      <div className="mb-6">
        <h1 className="font-serif text-3xl font-black text-ink">《{clip.playTitle}》· {clip.ariaTitle}</h1>
        <p className="mt-1 text-ink/50">
          {clip.performer} · {clip.duration} ·{' '}
          <span className={`font-medium ${clip.difficulty === '入门' ? 'text-green-700' : 'text-amber-700'}`}>
            {clip.difficulty}
          </span>
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-xl bg-white p-5 shadow-card">
          <h2 className="mb-4 font-serif text-lg font-bold text-ink">视频片段</h2>
          {clip.videoUrl ? (
            parseBilibiliEmbed(clip.videoUrl) ? (
              <iframe
                src={parseBilibiliEmbed(clip.videoUrl) as string}
                className="aspect-video w-full rounded-lg bg-ink"
                title={`《${clip.playTitle}》· ${clip.ariaTitle}`}
                allowFullScreen
                loading="lazy"
              />
            ) : (
              <video
                className="aspect-video w-full rounded-lg bg-ink"
                controls
                preload="metadata"
                src={clip.videoUrl}
              >
                你的浏览器不支持视频播放。
              </video>
            )
          ) : (
            <ImagePlaceholder label="待替换为授权片段" aspect="video" />
          )}
          <p className="mt-3 text-xs leading-relaxed text-ink/45">
            {clip.videoUrl
              ? '视频来源于公开平台，仅用于教学与研究目的。'
              : '此处为视频占位符，正式上线前需替换为获得授权的演出片段或公版资源。'}
          </p>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-card">
          <h2 className="mb-4 font-serif text-lg font-bold text-ink">唱词逐句</h2>
          <ol className="space-y-4">
            {clip.lyrics.map((l, i) => (
              <li key={i} className="border-b border-ink/5 pb-4 last:border-0 last:pb-0">
                <p className="font-serif text-base font-medium text-ink">{l.text}</p>
                <p className="mt-1 text-sm text-china-red/80">{l.jyutping}</p>
                <p className="text-sm text-ink/55">{l.mandarin}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="flex flex-col gap-6">
          <div className="rounded-xl bg-white p-5 shadow-card">
            <h2 className="mb-3 font-serif text-lg font-bold text-ink">剧情背景</h2>
            <p className="leading-relaxed text-ink/70">{clip.background}</p>
          </div>
          <div className="rounded-xl bg-white p-5 shadow-card">
            <h2 className="mb-3 font-serif text-lg font-bold text-ink">唱腔特点</h2>
            <p className="leading-relaxed text-ink/70">{clip.notes}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
