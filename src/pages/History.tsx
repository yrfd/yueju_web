import { useState } from 'react'
import {
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ReferenceLine,
  Tooltip,
} from 'recharts'
import SectionTitle from '../components/common/SectionTitle'
import { historyNodes } from '../data/historyNodes'
import type { HistoryNode } from '../types'

interface ChartNode extends HistoryNode {
  x: number
  y: number
}

const chartData: ChartNode[] = historyNodes.map((n, i) => ({ ...n, x: i, y: 0 }))

interface DotProps {
  cx?: number
  cy?: number
  payload?: ChartNode
}

function TimelineDot({ cx, cy, payload, selected, onSelect }: DotProps & { selected: boolean; onSelect: (id: string) => void }) {
  if (cx === undefined || cy === undefined) return null
  return (
    <g onClick={() => payload && onSelect(payload.id)} className="cursor-pointer">
      <circle
        cx={cx}
        cy={cy}
        r={selected ? 10 : 7}
        fill={selected ? '#1A1A1A' : '#C41E3A'}
        stroke="#F5F0E8"
        strokeWidth={2.5}
      />
      <circle cx={cx} cy={cy} r={selected ? 4 : 3} fill="#F5F0E8" />
    </g>
  )
}

export default function History() {
  const [selectedId, setSelectedId] = useState(historyNodes[0].id)
  const selected = historyNodes.find((n) => n.id === selectedId) ?? historyNodes[0]

  return (
    <div className="container-page py-10">
      <SectionTitle title="历史时间轴" subtitle="从红船到数字时代" />

      <div className="mb-6 rounded-xl bg-white p-4 shadow-card">
        <p className="mb-2 text-xs text-ink/50">左右滚动浏览 · 点击节点查看详情</p>
        <div className="overflow-x-auto">
          <div className="min-w-[840px]">
            <ResponsiveContainer width="100%" height={160}>
              <ScatterChart margin={{ top: 40, right: 30, bottom: 30, left: 30 }}>
                <XAxis
                  type="number"
                  dataKey="x"
                  domain={[0, historyNodes.length - 1]}
                  ticks={historyNodes.map((_, i) => i)}
                  tickFormatter={(v: number) => historyNodes[v]?.year ?? ''}
                  tick={{ fill: '#1A1A1A', fontSize: 12 }}
                  interval={0}
                  axisLine={{ stroke: '#1A1A1A', strokeOpacity: 0.2 }}
                  tickLine={false}
                />
                <YAxis type="number" dataKey="y" domain={[-1, 1]} hide />
                <ReferenceLine y={0} stroke="#C41E3A" strokeOpacity={0.35} strokeWidth={2} />
                <Tooltip
                  cursor={false}
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const d = payload[0].payload as ChartNode
                      return (
                        <div className="rounded-lg bg-ink px-3 py-2 text-xs text-rice">
                          <p className="font-bold">{d.title}</p>
                          <p className="text-rice/70">{d.era} · {d.year}</p>
                        </div>
                      )
                    }
                    return null
                  }}
                />
                <Scatter
                  data={chartData}
                  shape={(props: DotProps) => (
                    <TimelineDot {...props} selected={props.payload?.id === selectedId} onSelect={setSelectedId} />
                  )}
                />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="rounded-xl bg-white p-6 shadow-card sm:p-8">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-china-red px-3 py-1 text-xs font-medium text-rice">{selected.era}</span>
          <span className="font-serif text-2xl font-bold text-ink">{selected.title}</span>
          <span className="text-sm text-ink/50">{selected.year}</span>
        </div>
        <p className="text-base leading-loose text-ink/75">{selected.description}</p>
      </div>
    </div>
  )
}
