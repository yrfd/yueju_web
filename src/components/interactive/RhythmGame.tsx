import { useRef, useState } from 'react'
import { buildRhythm, getAudioContext, playDrum } from '../../lib/audio'

interface RhythmResult {
  hits: number
  total: number
  accuracy: number
  avgOffset: number
}

const BPM = 90
const PREP_DELAY = 800
const TOLERANCE = 300

export default function RhythmGame() {
  const [stage, setStage] = useState<'idle' | 'playing' | 'result'>('idle')
  const [tapCount, setTapCount] = useState(0)
  const [result, setResult] = useState<RhythmResult | null>(null)
  const tapsRef = useRef<number[]>([])
  const beatsRef = useRef<number[]>([])
  const timerRef = useRef<number | null>(null)

  const start = () => {
    const ac = getAudioContext()
    const t0 = performance.now()
    const acNow = ac.currentTime
    const beatMs = (60 / BPM) * 1000
    const pattern = buildRhythm(2)

    tapsRef.current = []
    const times: number[] = []
    pattern.forEach((drum, i) => {
      const perf = t0 + PREP_DELAY + i * beatMs
      playDrum(drum, acNow + (PREP_DELAY + i * beatMs) / 1000)
      times.push(perf)
    })
    beatsRef.current = times
    setTapCount(0)
    setResult(null)
    setStage('playing')

    const endAt = times[times.length - 1] + 900
    if (timerRef.current) window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(finish, endAt - t0)
  }

  const finish = () => {
    const beats = beatsRef.current
    const taps = [...tapsRef.current].sort((a, b) => a - b)
    let hits = 0
    let offsetSum = 0
    beats.forEach((b) => {
      let best = Number.POSITIVE_INFINITY
      for (const t of taps) {
        const d = Math.abs(t - b)
        if (d < best) best = d
      }
      if (best <= TOLERANCE) {
        hits += 1
        offsetSum += best
      }
    })
    const accuracy = beats.length ? Math.round((hits / beats.length) * 100) : 0
    const avgOffset = hits ? Math.round(offsetSum / hits) : 0
    setResult({ hits, total: beats.length, accuracy, avgOffset })
    setStage('result')
  }

  const tap = () => {
    if (stage !== 'playing') return
    tapsRef.current.push(performance.now())
    setTapCount((c) => c + 1)
  }

  const rating =
    result === null
      ? ''
      : result.accuracy >= 90
        ? '节奏大师！'
        : result.accuracy >= 60
          ? '渐入佳境！'
          : '再接再厉！'

  return (
    <div className="rounded-xl bg-white p-6 shadow-card sm:p-8">
      <div className="mb-6 text-center">
        <h3 className="mb-2 font-serif text-2xl font-bold text-ink">锣鼓节奏游戏</h3>
        <p className="text-ink/60">跟随「查 · 笃 · 撑」的节奏点击，系统将评估你的节拍准确率</p>
      </div>

      {stage === 'idle' && (
        <div className="text-center">
          <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-ink/5 text-ink/40">
            <svg viewBox="0 0 24 24" className="h-12 w-12" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <button
            type="button"
            onClick={start}
            className="rounded-full bg-china-red px-8 py-3 text-sm font-medium text-rice transition-colors hover:bg-china-red-dark"
          >
            开始节奏
          </button>
          <p className="mt-3 text-xs text-ink/45">共 8 拍，点击「开始」后稍候即可跟随节奏点击</p>
        </div>
      )}

      {stage === 'playing' && (
        <div className="text-center">
          <p className="mb-6 text-sm text-ink/60">跟着节奏点击下方鼓面</p>
          <button
            type="button"
            onPointerDown={tap}
            className="mx-auto flex h-44 w-44 items-center justify-center rounded-full bg-gradient-to-b from-china-red to-china-red-dark font-serif text-3xl font-bold text-rice shadow-lg transition-transform active:scale-95"
          >
            查笃撑
          </button>
          <p className="mt-4 text-sm text-ink/50">已点击 {tapCount} 次</p>
        </div>
      )}

      {stage === 'result' && result && (
        <div className="text-center">
          <p className="mb-2 text-sm text-ink/50">评分结果</p>
          <p className="mb-1 font-serif text-4xl font-black text-china-red">{result.accuracy}%</p>
          <p className="mb-4 font-serif text-lg text-ink">{rating}</p>
          <div className="mx-auto mb-6 grid max-w-sm grid-cols-3 gap-3 text-sm">
            <div className="rounded-lg bg-rice p-3">
              <p className="font-bold text-ink">{result.hits}/{result.total}</p>
              <p className="text-xs text-ink/50">命中节拍</p>
            </div>
            <div className="rounded-lg bg-rice p-3">
              <p className="font-bold text-ink">{result.avgOffset}ms</p>
              <p className="text-xs text-ink/50">平均偏差</p>
            </div>
            <div className="rounded-lg bg-rice p-3">
              <p className="font-bold text-ink">{result.accuracy}%</p>
              <p className="text-xs text-ink/50">准确率</p>
            </div>
          </div>
          <button
            type="button"
            onClick={start}
            className="rounded-full bg-ink px-8 py-3 text-sm font-medium text-rice transition-colors hover:bg-ink/80"
          >
            再来一次
          </button>
        </div>
      )}
    </div>
  )
}
