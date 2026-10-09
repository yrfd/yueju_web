import { useState } from 'react'
import SectionTitle from '../components/common/SectionTitle'

interface MapMarker {
  id: string
  name: string
  city: string
  address: string
  description: string
  details: string
  x: number
  y: number
}

const markers: MapMarker[] = [
  {
    id: 'foshan',
    name: '佛山祖庙万福台',
    city: '佛山',
    address: '佛山市禅城区祖庙路',
    description: '华南地区保存最完好的古戏台之一，素有“粤剧发源地”之称。',
    details:
      '万福台始建于清顺治年间，是佛山祖庙内的古戏台，也是华南地区现存最古老、保存最完好的古戏台之一。明清以来，佛山是粤剧的重要发祥地，本地戏班常在此酬神演剧，故万福台素有“粤剧发源地”之称，见证了粤剧从本地班到红船班的演进历程。',
    x: 150,
    y: 82,
  },
  {
    id: 'gzyueju-museum',
    name: '广州粤剧艺术博物馆',
    city: '广州',
    address: '广州市荔湾区恩宁路',
    description: '集粤剧展示、研究与体验于一体的专题博物馆。',
    details:
      '位于广州市荔湾区恩宁路，依托永庆坊历史街区而建，是一座园林式建筑的粤剧专题博物馆。馆内收藏大量粤剧戏服、头饰、乐器与文献资料，并设有展演空间，常年举办粤剧演出与公众教育活动，是了解粤剧艺术与广府文化的重要窗口。',
    x: 205,
    y: 120,
  },
  {
    id: 'bahue',
    name: '广州八和会馆',
    city: '广州',
    address: '广州市荔湾区恩宁路',
    description: '粤剧行会组织，见证了粤剧艺人的行业传统。',
    details:
      '八和会馆是粤剧艺人的行会组织，创立于清光绪年间，取“八方和合”之意，下分八堂以涵盖生旦净丑各行当。会馆既维护艺人权益、又规范行业行规，是粤剧行业团结与传承的象征，至今在粤剧界仍具重要地位。',
    x: 248,
    y: 138,
  },
  {
    id: 'sunbeam',
    name: '香港新光戏院',
    city: '香港',
    address: '香港北角英皇道',
    description: '香港现存历史最悠久的粤剧戏院之一，被誉为“粤剧殿堂”。',
    details:
      '位于香港北角英皇道，1972年开业，是香港现存少数仍以粤剧演出为主的大型戏院之一。数十年来，任剑辉、白雪仙、林家声等一代名伶均曾在此登台，无数戏迷在此看戏听曲，新光戏院因而被誉为“粤剧殿堂”，承载着香港粤剧的黄金记忆。',
    x: 322,
    y: 195,
  },
  {
    id: 'winglok',
    name: '澳门永乐戏院',
    city: '澳门',
    address: '澳门新桥区',
    description: '澳门重要的粤剧演出场所，承载本地粤剧文化记忆。',
    details:
      '位于澳门新桥区，是澳门历史悠久的戏院之一，长期是本地粤剧、曲艺演出的重要阵地。每逢神诞节庆与粤剧汇演，戏院常座无虚席，是澳门街坊感受粤剧魅力的重要场所，见证了粤剧在澳门民间的传承与延续。',
    x: 252,
    y: 232,
  },
  {
    id: 'hongchuan',
    name: '红船遗迹',
    city: '珠江水域',
    address: '西江·珠江水道',
    description: '粤剧“红船时代”的象征，戏班曾沿此水道巡回演出。',
    details:
      '红船是清代至民国粤剧戏班的标志性交通工具。因岭南水网密布，戏班将船身涂成红色，载着演员、戏箱与行头沿珠江、西江水系巡回演出，故称“红船班”。红船遗迹承载着粤剧“红船时代”的流动演出传统，是理解粤剧传播史的重要符号。',
    x: 118,
    y: 165,
  },
]

export default function Map() {
  const [selected, setSelected] = useState<MapMarker | null>(null)

  return (
    <div className="container-page py-10">
      <SectionTitle title="粤剧地图" subtitle="粤港澳大湾区 · 手绘简化示意" />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-xl bg-white p-4 shadow-card lg:col-span-2">
          <svg viewBox="0 0 400 300" className="w-full" role="img" aria-label="粤港澳大湾区粤剧地标示意图">
            <rect width="400" height="300" fill="#EDE6D8" />
            <path
              d="M60 120 C70 60 120 40 160 55 C200 70 230 55 250 75 C280 55 330 80 355 120 C380 160 370 210 340 235 C310 260 260 265 230 250 C200 235 160 245 130 220 C95 195 60 180 60 120 Z"
              fill="#D8CBB4"
              stroke="#1A1A1A"
              strokeOpacity="0.15"
              strokeWidth="2"
            />
            <path
              d="M120 165 C170 175 210 160 250 150"
              fill="none"
              stroke="#9AA7B0"
              strokeWidth="5"
              strokeLinecap="round"
              opacity="0.7"
            />
            <path
              d="M60 120 C70 60 120 40 160 55"
              fill="none"
              stroke="#9AA7B0"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.6"
            />

            {markers.map((m) => (
              <g
                key={m.id}
                onClick={() => setSelected(m)}
                className="cursor-pointer"
              >
                <circle
                  cx={m.x}
                  cy={m.y}
                  r={selected?.id === m.id ? 9 : 7}
                  fill={selected?.id === m.id ? '#1A1A1A' : '#C41E3A'}
                  stroke="#F5F0E8"
                  strokeWidth={2}
                />
                <circle cx={m.x} cy={m.y} r={3} fill="#F5F0E8" />
                <text
                  x={m.x}
                  y={m.y - 14}
                  textAnchor="middle"
                  fontSize="11"
                  fill="#1A1A1A"
                  fontWeight="600"
                >
                  {m.name}
                </text>
              </g>
            ))}
          </svg>
          <p className="mt-2 text-center text-xs text-ink/45">地图为手绘简化示意图，非精确地理位置</p>
        </div>

        <div className="flex flex-col">
          {selected ? (
            <div className="rounded-xl bg-white p-5 shadow-card">
              <span className="mb-2 inline-block rounded-full bg-china-red px-3 py-1 text-xs font-medium text-rice">
                {selected.city}
              </span>
              <h3 className="mb-1 font-serif text-xl font-bold text-ink">{selected.name}</h3>
              <p className="mb-3 text-sm text-ink/50">{selected.address}</p>
              <p className="mb-3 leading-relaxed text-ink/70">{selected.description}</p>
              <p className="text-sm leading-relaxed text-ink/60">{selected.details}</p>
            </div>
          ) : (
            <div className="flex flex-1 items-center justify-center rounded-xl border border-dashed border-ink/20 p-6 text-center text-sm text-ink/45">
              点击地图上的标注查看地点简介
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
