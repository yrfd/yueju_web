import SectionTitle from '../components/common/SectionTitle'
import Accordion from '../components/common/Accordion'
import ImagePlaceholder from '../components/common/ImagePlaceholder'

const roles = [
  {
    name: '文武生',
    desc: '文武双全的当家男主角，须兼具唱功与武打功底。',
    photo: '/images/role-wenwusheng.jpg',
  },
  {
    name: '小生',
    desc: '温文尔雅的青年男性角色，唱腔清越、举止斯文。',
    photo: '/images/role-xiaosheng.webp',
  },
  {
    name: '正印花旦',
    desc: '头牌女主角，唱做俱佳，是戏班的核心旦角。',
    photo: '/images/role-zhengyin.jpg',
  },
  {
    name: '二帮花旦',
    desc: '次席旦角，多为正印花旦的搭档或配角，戏路灵活。',
    photo: '/images/role-erbang.jpg',
  },
  {
    name: '丑生',
    desc: '喜剧担当，插科打诨、针砭时弊，极具亲和力。',
    photo: '/images/role-chousheng.jpg',
  },
  {
    name: '武生',
    desc: '武打担当，工架扎实、身手矫健，多演英雄好汉。',
    photo: '/images/role-wusheng.jpg',
  },
]

const singingSystems = [
  { name: '梆子', desc: '板式变化体，节奏明快、高亢激越，是粤剧最主要的声腔之一。' },
  { name: '二黄', desc: '曲调舒缓婉转，长于抒情，与梆子并称粤剧两大板腔。' },
  { name: '南音', desc: '民间说唱，缠绵悱恻，常用于抒发幽怨之情。' },
  { name: '粤讴', desc: '广府民间歌谣，浅白通俗，多写市井悲欢。' },
  { name: '木鱼', desc: '说唱体，节奏灵活，常由盲艺人演唱。' },
  { name: '龙舟', desc: '节庆说唱，旋律昂扬，富有民间色彩。' },
  { name: '板眼', desc: '带强烈节拍的说唱，常用于叙事。' },
]

const wenChang = [
  { name: '高胡', role: '主奏乐器' },
  { name: '扬琴', role: '弹拨' },
  { name: '琵琶', role: '弹拨' },
  { name: '笛子', role: '吹管' },
]

const wuChang = [
  { name: '板鼓', role: '指挥节奏' },
  { name: '大锣', role: '武场主奏' },
  { name: '钹', role: '击节' },
  { name: '堂鼓', role: '渲染气氛' },
]

const programs = [
  { icon: '唱', name: '唱', desc: '以声传情，唱腔是粤剧的灵魂。' },
  { icon: '念', name: '念', desc: '念白讲究韵味与节奏，是“无唱的唱”。' },
  { icon: '做', name: '做', desc: '做功细腻传神，以形体刻画人物。' },
  { icon: '打', name: '打', desc: '武打与程式化动作，讲究工架与美感。' },
  { icon: '手', name: '手', desc: '手势变化万千，指事传情。' },
  { icon: '眼', name: '眼', desc: '眼神顾盼生辉，是心灵的窗户。' },
  { icon: '身', name: '身', desc: '身段圆活舒展，气韵贯通。' },
  { icon: '法', name: '法', desc: '程式法度，规范着表演的章法。' },
  { icon: '步', name: '步', desc: '台步轻盈稳重，各有程式。' },
]

export default function Basics() {
  return (
    <div className="container-page py-10">
      <SectionTitle title="粤剧入门" subtitle="3 分钟建立基本认知" />

      <Accordion
        items={[
          {
            title: '什么是粤剧',
            defaultOpen: true,
            children: (
              <div className="grid gap-6 md:grid-cols-2">
                <div className="leading-relaxed text-ink/70">
                  <p>
                    粤剧，又称「广东大戏」「广府戏」，是用粤语演唱的戏曲剧种，流行于粤方言区及海外华人社区。它融合了唱、做、念、打等表演程式，唱腔以梆子、二黄为主，是岭南文化的重要代表。
                  </p>
                  <p className="mt-3">
                    2006 年粤剧入选首批国家级非物质文化遗产名录，2009 年粤港澳联合申报，成功列入联合国教科文组织「人类非物质文化遗产代表作名录」。
                  </p>
                </div>
                <ImagePlaceholder
                  label="粤剧演出 · 图片待替换"
                  src="/images/basics-opera.jpg"
                  aspect="wide"
                />
              </div>
            ),
          },
          {
            title: '行当体系',
            children: (
              <div>
                <p className="mb-4 text-ink/70">
                  粤剧传统有「十大行当」之说，后来精简为以「六柱制」为核心的表演体系，即文武生、小生、正印花旦、二帮花旦、丑生、武生六大台柱。
                </p>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {roles.map((r) => (
                    <div key={r.name} className="rounded-lg border border-ink/10 p-4">
                      <div className="mb-2 flex items-center gap-3">
                        <ImagePlaceholder label={r.name} src={r.photo} aspect="square" className="!h-12 !w-12 shrink-0 !rounded-md" />
                        <h4 className="font-serif font-bold text-ink">{r.name}</h4>
                      </div>
                      <p className="text-sm leading-relaxed text-ink/60">{r.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ),
          },
          {
            title: '唱腔体系',
            children: (
              <div>
                <p className="mb-4 text-ink/70">
                  粤剧唱腔以梆子、二黄为主体，同时吸纳南音、粤讴、木鱼、龙舟、板眼等民间说唱，形成丰富多元的声腔体系。
                </p>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {singingSystems.map((s) => (
                    <div key={s.name} className="rounded-lg bg-rice/60 p-4">
                      <h4 className="mb-1 font-serif font-bold text-ink">{s.name}</h4>
                      <p className="text-sm text-ink/60">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ),
          },
          {
            title: '乐器',
            children: (
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border border-ink/10 p-4">
                  <h4 className="mb-3 font-serif font-bold text-china-red">文场（管弦乐）</h4>
                  <ul className="space-y-2">
                    {wenChang.map((i) => (
                      <li key={i.name} className="flex items-center justify-between border-b border-ink/5 pb-2 text-sm">
                        <span className="font-medium text-ink">{i.name}</span>
                        <span className="text-ink/50">{i.role}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg border border-ink/10 p-4">
                  <h4 className="mb-3 font-serif font-bold text-china-red">武场（打击乐）</h4>
                  <ul className="space-y-2">
                    {wuChang.map((i) => (
                      <li key={i.name} className="flex items-center justify-between border-b border-ink/5 pb-2 text-sm">
                        <span className="font-medium text-ink">{i.name}</span>
                        <span className="text-ink/50">{i.role}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ),
          },
          {
            title: '表演程式',
            children: (
              <div>
                <p className="mb-4 text-ink/70">
                  粤剧表演讲究「唱念做打」四功与「手眼身法步」五法，二者结合构成一套高度程式化的表演语言。
                </p>
                <div className="grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-9">
                  {programs.map((p) => (
                    <div key={p.name} className="flex flex-col items-center rounded-lg bg-rice/60 p-3 text-center">
                      <span className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-china-red/10 font-serif text-lg font-bold text-china-red">
                        {p.icon}
                      </span>
                      <span className="text-sm font-medium text-ink">{p.name}</span>
                      <span className="mt-1 text-xs leading-snug text-ink/50">{p.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            ),
          },
        ]}
      />
    </div>
  )
}
