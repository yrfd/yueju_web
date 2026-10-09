import { useState } from 'react'
import { useClipboard } from '../../hooks/useClipboard'

type RoleType = '文武生' | '小生' | '花旦' | '丑生' | '武生'

interface Option {
  text: string
  role: RoleType
}

interface Question {
  text: string
  options: Option[]
}

const questions: Question[] = [
  {
    text: '在团队里，你更愿意扮演什么角色？',
    options: [
      { text: '统筹全局的领队', role: '文武生' },
      { text: '出谋划策的智囊', role: '小生' },
      { text: '活跃气氛的开心果', role: '丑生' },
      { text: '冲锋在前的行动派', role: '武生' },
      { text: '细腻体贴的照顾者', role: '花旦' },
    ],
  },
  {
    text: '遇到困难时，你的第一反应是？',
    options: [
      { text: '沉着冷静，谋定后动', role: '文武生' },
      { text: '正面迎战，毫不退缩', role: '武生' },
      { text: '笑着化解，乐观以对', role: '丑生' },
      { text: '设身处地，体谅他人', role: '花旦' },
      { text: '细心推敲，巧思求解', role: '小生' },
    ],
  },
  {
    text: '你更偏爱哪种气质风格？',
    options: [
      { text: '儒雅书卷，温润如玉', role: '小生' },
      { text: '英气豪迈，雷厉风行', role: '武生' },
      { text: '俏皮灵动，机敏幽默', role: '丑生' },
      { text: '柔美深情，婉约动人', role: '花旦' },
      { text: '刚柔并济，大家风范', role: '文武生' },
    ],
  },
  {
    text: '朋友眼中的你更接近哪一种？',
    options: [
      { text: '可靠的大哥大姐', role: '文武生' },
      { text: '聪明的学霸', role: '小生' },
      { text: '搞笑的活宝', role: '丑生' },
      { text: '暖心的知己', role: '花旦' },
      { text: '靠谱的守护者', role: '武生' },
    ],
  },
  {
    text: '登台表演，你最想挑战什么？',
    options: [
      { text: '慷慨激昂的慷慨陈词', role: '文武生' },
      { text: '高难度的武打身段', role: '武生' },
      { text: '妙趣横生的滑稽戏', role: '丑生' },
      { text: '缠绵细腻的内心戏', role: '花旦' },
      { text: '风流儒雅的言情戏', role: '小生' },
    ],
  },
]

interface RoleResult {
  name: RoleType
  description: string
  line: string
}

const roleResults: Record<RoleType, RoleResult> = {
  文武生: {
    name: '文武生',
    description: '文武双全的当家男主角，文能唱作俱佳、武能开打翻腾，是粤剧舞台上的核心人物。',
    line: '「一腔热血酬知己，半生肝胆照乾坤。」',
  },
  小生: {
    name: '小生',
    description: '温文尔雅的青年才俊，唱腔清越、举止斯文，多演风流儒雅的书生与公子。',
    line: '「书中自有颜如玉，情丝难断是书生。」',
  },
  花旦: {
    name: '花旦',
    description: '粤剧舞台上的女主角，扮相俏丽、唱腔甜美，善于刻画女性的细腻情感。',
    line: '「落花满天蔽月光，情到深处自难忘。」',
  },
  丑生: {
    name: '丑生',
    description: '机智幽默的喜剧担当，插科打诨、针砭时弊，是粤剧中最接地气的行当。',
    line: '「嬉笑怒骂皆文章，丑角也有真肝胆。」',
  },
  武生: {
    name: '武生',
    description: '身手矫健的武打担当，工架扎实、动作利落，多演侠肝义胆的英雄好汉。',
    line: '「路见不平一声吼，该出手时就出手。」',
  },
}

export default function RoleTest() {
  const [stage, setStage] = useState<'start' | 'question' | 'result'>('start')
  const [current, setCurrent] = useState(0)
  const [scores, setScores] = useState<Record<RoleType, number>>({
    文武生: 0,
    小生: 0,
    花旦: 0,
    丑生: 0,
    武生: 0,
  })
  const [result, setResult] = useState<RoleType>('文武生')
  const [copied, copy] = useClipboard()

  const start = () => {
    setStage('question')
    setCurrent(0)
    setScores({ 文武生: 0, 小生: 0, 花旦: 0, 丑生: 0, 武生: 0 })
  }

  const choose = (role: RoleType) => {
    const next = { ...scores, [role]: scores[role] + 1 }
    setScores(next)
    if (current + 1 < questions.length) {
      setCurrent(current + 1)
    } else {
      const top = (Object.keys(next) as RoleType[]).reduce((a, b) => (next[a] >= next[b] ? a : b))
      setResult(top)
      setStage('result')
    }
  }

  const shareText = `我在「粤韵新生」的行当测试中测出了【${roleResults[result].name}】！${roleResults[result].description} ${roleResults[result].line}`

  return (
    <div className="rounded-xl bg-white p-6 shadow-card sm:p-8">
      {stage === 'start' && (
        <div className="text-center">
          <h3 className="mb-3 font-serif text-2xl font-bold text-ink">行当测试</h3>
          <p className="mb-6 text-ink/60">5 道题，测测你最接近哪个粤剧行当</p>
          <button
            type="button"
            onClick={start}
            className="rounded-full bg-china-red px-8 py-3 text-sm font-medium text-rice transition-colors hover:bg-china-red-dark"
          >
            开始测试
          </button>
        </div>
      )}

      {stage === 'question' && (
        <div>
          <div className="mb-4 flex items-center justify-between text-sm text-ink/50">
            <span>第 {current + 1} / {questions.length} 题</span>
            <div className="flex gap-1">
              {questions.map((_, i) => (
                <span key={i} className={`h-1.5 w-6 rounded-full ${i <= current ? 'bg-china-red' : 'bg-ink/15'}`} />
              ))}
            </div>
          </div>
          <h4 className="mb-5 font-serif text-xl font-bold text-ink">{questions[current].text}</h4>
          <div className="flex flex-col gap-3">
            {questions[current].options.map((opt) => (
              <button
                key={opt.text}
                type="button"
                onClick={() => choose(opt.role)}
                className="rounded-lg border border-ink/15 px-4 py-3 text-left transition-all hover:border-china-red hover:bg-china-red/5"
              >
                {opt.text}
              </button>
            ))}
          </div>
        </div>
      )}

      {stage === 'result' && (
        <div className="text-center">
          <p className="mb-2 text-sm text-ink/50">你的粤剧行当是</p>
          <h3 className="mb-2 font-serif text-3xl font-black text-china-red">{roleResults[result].name}</h3>
          <p className="mb-4 text-ink/70">{roleResults[result].description}</p>
          <p className="mb-6 rounded-lg bg-rice px-4 py-3 font-serif text-ink/80">{roleResults[result].line}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => copy(shareText)}
              className="rounded-full border border-china-red px-6 py-2.5 text-sm font-medium text-china-red transition-colors hover:bg-china-red hover:text-rice"
            >
              {copied ? '已复制到剪贴板' : '复制结果文案'}
            </button>
            <button
              type="button"
              onClick={start}
              className="rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-rice transition-colors hover:bg-ink/80"
            >
              再测一次
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
