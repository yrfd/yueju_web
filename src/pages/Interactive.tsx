import { useState } from 'react'
import SectionTitle from '../components/common/SectionTitle'
import RoleTest from '../components/interactive/RoleTest'
import KnowledgeQuiz from '../components/interactive/KnowledgeQuiz'
import RhythmGame from '../components/interactive/RhythmGame'

type Tab = 'role' | 'quiz' | 'rhythm'

const tabs: { key: Tab; label: string }[] = [
  { key: 'role', label: '行当测试' },
  { key: 'quiz', label: '知识问答' },
  { key: 'rhythm', label: '锣鼓节奏' },
]

export default function Interactive() {
  const [tab, setTab] = useState<Tab>('role')

  return (
    <div className="container-page py-10">
      <SectionTitle title="互动体验" subtitle="边玩边学，走近粤剧" />

      <div className="mb-6 flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => setTab(t.key)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              tab === t.key ? 'bg-china-red text-rice' : 'bg-white text-ink/70 shadow-card hover:text-china-red'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mx-auto max-w-2xl">
        {tab === 'role' && <RoleTest />}
        {tab === 'quiz' && <KnowledgeQuiz />}
        {tab === 'rhythm' && <RhythmGame />}
      </div>
    </div>
  )
}
