export type DrumType = 'cha' | 'duk' | 'cang'

let ctx: AudioContext | null = null

export function getAudioContext(): AudioContext {
  if (!ctx) {
    const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
    ctx = new AC()
  }
  if (ctx.state === 'suspended') {
    void ctx.resume()
  }
  return ctx
}

function playCha(ac: AudioContext, time: number): void {
  const duration = 0.12
  const bufferSize = Math.floor(ac.sampleRate * duration)
  const buffer = ac.createBuffer(1, bufferSize, ac.sampleRate)
  const data = buffer.getChannelData(0)
  for (let i = 0; i < bufferSize; i++) {
    data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize)
  }
  const source = ac.createBufferSource()
  source.buffer = buffer
  const filter = ac.createBiquadFilter()
  filter.type = 'highpass'
  filter.frequency.value = 6000
  const gain = ac.createGain()
  gain.gain.setValueAtTime(0.5, time)
  gain.gain.exponentialRampToValueAtTime(0.001, time + duration)
  source.connect(filter)
  filter.connect(gain)
  gain.connect(ac.destination)
  source.start(time)
  source.stop(time + duration)
}

function playDuk(ac: AudioContext, time: number): void {
  const osc = ac.createOscillator()
  osc.type = 'triangle'
  osc.frequency.setValueAtTime(720, time)
  osc.frequency.exponentialRampToValueAtTime(380, time + 0.09)
  const gain = ac.createGain()
  gain.gain.setValueAtTime(0.6, time)
  gain.gain.exponentialRampToValueAtTime(0.001, time + 0.1)
  osc.connect(gain)
  gain.connect(ac.destination)
  osc.start(time)
  osc.stop(time + 0.12)
}

function playCang(ac: AudioContext, time: number): void {
  const osc = ac.createOscillator()
  osc.type = 'sine'
  osc.frequency.setValueAtTime(160, time)
  osc.frequency.exponentialRampToValueAtTime(120, time + 0.5)
  const gain = ac.createGain()
  gain.gain.setValueAtTime(0.7, time)
  gain.gain.exponentialRampToValueAtTime(0.001, time + 0.7)
  osc.connect(gain)
  gain.connect(ac.destination)
  osc.start(time)
  osc.stop(time + 0.75)
}

export function playDrum(type: DrumType, time?: number): void {
  const ac = getAudioContext()
  const at = time ?? ac.currentTime
  if (type === 'cha') playCha(ac, at)
  else if (type === 'duk') playDuk(ac, at)
  else playCang(ac, at)
}

const BAR_PATTERN: DrumType[] = ['cha', 'duk', 'cang', 'cang']

export function buildRhythm(bars: number): DrumType[] {
  const pattern: DrumType[] = []
  for (let i = 0; i < bars; i++) {
    pattern.push(...BAR_PATTERN)
  }
  return pattern
}

export function scheduleRhythm(pattern: DrumType[], bpm: number): number[] {
  const ac = getAudioContext()
  const beatMs = (60 / bpm) * 1000
  const beatSec = beatMs / 1000
  const start = ac.currentTime + 0.15
  const beatTimes: number[] = []
  pattern.forEach((drum, i) => {
    const t = start + i * beatSec
    playDrum(drum, t)
    beatTimes.push(t)
  })
  return beatTimes
}
