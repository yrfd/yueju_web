import { useState } from 'react'
import { useClipboard } from '../../hooks/useClipboard'

interface QuizQuestion {
  question: string
  options: string[]
  answer: number
  explain: string
}

const questions: QuizQuestion[] = [
  {
    question: '粤剧又被称为「广东大戏」和什么？',
    options: ['广府戏', '潮剧', '汉剧', '正字戏'],
    answer: 0,
    explain: '粤剧又称「广东大戏」「广府戏」，用粤语演唱，流行于粤方言区及海外华人社区。',
  },
  {
    question: '粤剧于哪一年入选中国首批国家级非物质文化遗产名录？',
    options: ['2009年', '2006年', '1956年', '2013年'],
    answer: 1,
    explain: '2006年粤剧入选首批国家级非遗，2009年由粤港澳联合申报列入人类非遗。',
  },
  {
    question: '粤剧是哪一年由粤港澳联合申报、列入人类非物质文化遗产代表作名录的？',
    options: ['2006年', '2009年', '2010年', '2015年'],
    answer: 1,
    explain: '2009年，广东、香港、澳门三地联合申报成功。',
  },
  {
    question: '粤剧「六柱制」不包括以下哪个行当？',
    options: ['文武生', '正印花旦', '丑生', '老旦'],
    answer: 3,
    explain: '六柱制为文武生、小生、正印花旦、二帮花旦、丑生、武生，不含老旦。',
  },
  {
    question: '粤剧唱腔以哪两种板腔为主体？',
    options: ['梆子和二黄', '西皮和二黄', '南音和粤讴', '木鱼和龙舟'],
    answer: 0,
    explain: '粤剧唱腔以梆子、二黄为主，兼有南音、粤讴、木鱼等民间说唱。',
  },
  {
    question: '粤剧乐队中的主奏乐器（头架）通常是？',
    options: ['高胡', '二胡', '琵琶', '笛子'],
    answer: 0,
    explain: '高胡是粤剧「文场」的主奏乐器，音色明亮柔美。',
  },
  {
    question: '「红船时代」指的是什么？',
    options: [
      '清代戏班乘红船沿珠江水系巡回演出',
      '民国时期粤剧电影拍摄热潮',
      '戏班用红布装饰戏台',
      '粤剧红腔流行的时期',
    ],
    answer: 0,
    explain: '清代戏班以涂红漆的船只巡回演出，故称「红船班」。',
  },
  {
    question: '粤剧《帝女花》的编剧是？',
    options: ['马师曾', '唐涤生', '薛觉先', '白驹荣'],
    answer: 1,
    explain: '《帝女花》由唐涤生改编，1957年首演，是粤剧经典名剧。',
  },
  {
    question: '红线女创立的唱腔流派是？',
    options: ['红腔', '马腔', '虾腔', '薛腔'],
    answer: 0,
    explain: '红线女创立「红腔」，被誉为粤剧一代宗师。',
  },
  {
    question: '「薛马争雄」指的是哪两位名伶的争锋？',
    options: ['薛觉先与马师曾', '罗家宝与马师曾', '薛觉先与红线女', '任剑辉与白雪仙'],
    answer: 0,
    explain: '薛觉先与马师曾各创流派、双雄并立，称「薛马争雄」。',
  },
]

function getRating(score: number, total: number): string {
  const ratio = score / total
  if (ratio >= 0.9) return '粤剧达人'
  if (ratio >= 0.7) return '粤剧爱好者'
  if (ratio >= 0.5) return '粤剧入门'
  return '粤剧小白'
}

export default function KnowledgeQuiz() {
  const [stage, setStage] = useState<'start' | 'question' | 'result'>('start')
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null))
  const [copied, copy] = useClipboard()

  const score = answers.filter((a, i) => a === questions[i].answer).length

  const start = () => {
    setStage('question')
    setCurrent(0)
    setAnswers(Array(questions.length).fill(null))
  }

  const choose = (index: number) => {
    const next = [...answers]
    next[current] = index
    setAnswers(next)
    if (current + 1 < questions.length) {
      setCurrent(current + 1)
    } else {
      setStage('result')
    }
  }

  const shareText = `我在「粤韵新生」知识问答中答对了 ${score}/${questions.length} 题，评级：${getRating(score, questions.length)}！`

  const wrongList = questions
    .map((q, i) => ({ q, i, chosen: answers[i] }))
    .filter((item) => item.chosen !== null && item.chosen !== item.q.answer)

  return (
    <div className="rounded-xl bg-white p-6 shadow-card sm:p-8">
      {stage === 'start' && (
        <div className="text-center">
          <h3 className="mb-3 font-serif text-2xl font-bold text-ink">知识问答</h3>
          <p className="mb-6 text-ink/60">10 道粤剧知识题，测测你的粤剧知识水平</p>
          <button
            type="button"
            onClick={start}
            className="rounded-full bg-china-red px-8 py-3 text-sm font-medium text-rice transition-colors hover:bg-china-red-dark"
          >
            开始答题
          </button>
        </div>
      )}

      {stage === 'question' && (
        <div>
          <div className="mb-4 flex items-center justify-between text-sm text-ink/50">
            <span>第 {current + 1} / {questions.length} 题</span>
            <div className="flex gap-1">
              {questions.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 w-4 rounded-full ${i < current ? 'bg-china-red' : i === current ? 'bg-china-red/50' : 'bg-ink/15'}`}
                />
              ))}
            </div>
          </div>
          <h4 className="mb-5 font-serif text-xl font-bold text-ink">{questions[current].question}</h4>
          <div className="flex flex-col gap-3">
            {questions[current].options.map((opt, i) => (
              <button
                key={opt}
                type="button"
                onClick={() => choose(i)}
                className="rounded-lg border border-ink/15 px-4 py-3 text-left transition-all hover:border-china-red hover:bg-china-red/5"
              >
                <span className="mr-2 font-serif font-bold text-china-red">{String.fromCharCode(65 + i)}.</span>
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {stage === 'result' && (
        <div>
          <div className="mb-6 text-center">
            <p className="mb-2 text-sm text-ink/50">答题结果</p>
            <p className="mb-1 font-serif text-4xl font-black text-china-red">
              {score} / {questions.length}
            </p>
            <p className="font-serif text-lg text-ink">{getRating(score, questions.length)}</p>
          </div>

          {wrongList.length > 0 && (
            <div className="mb-6">
              <h5 className="mb-3 font-serif font-bold text-ink">错题回顾</h5>
              <div className="space-y-3">
                {wrongList.map(({ q, i, chosen }) => (
                  <div key={i} className="rounded-lg bg-rice/60 p-4">
                    <p className="mb-1 font-medium text-ink">{i + 1}. {q.question}</p>
                    <p className="text-sm text-china-red">你的答案：{q.options[chosen as number]}</p>
                    <p className="text-sm text-green-700">正确答案：{q.options[q.answer]}</p>
                    <p className="mt-1 text-sm text-ink/55">{q.explain}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

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
