export default function Footer() {
  return (
    <footer className="mt-16 border-t border-ink/10 bg-ink text-rice/80">
      <div className="container-page py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 font-serif text-lg font-bold text-rice">南国红豆 · 粤韵新生</h3>
            <p className="text-sm leading-relaxed text-rice/60">
              面向青年受众的粤剧数字文化平台，致力于让更多年轻人认识粤剧、走近粤剧。
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-rice">快速导航</h4>
            <ul className="space-y-2 text-sm text-rice/60">
              <li><a href="#/basics" className="hover:text-china-red-light">粤剧入门</a></li>
              <li><a href="#/masters" className="hover:text-china-red-light">名家名剧</a></li>
              <li><a href="#/guide" className="hover:text-china-red-light">经典导赏</a></li>
              <li><a href="#/interactive" className="hover:text-china-red-light">互动体验</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-rice">版权与免责声明</h4>
            <ul className="list-inside list-disc space-y-2 text-xs leading-relaxed text-rice/60">
              <li>本网站为大创项目学术成果，所有音视频、图片资源均为占位符，正式上线前需获得授权或替换为公版／开放资源。</li>
              <li>唱词、剧本内容来源于公开出版物，仅用于教学与研究目的。</li>
              <li>本项目不采集任何用户个人信息，投稿表单为纯前端演示。</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-rice/10 pt-6 text-center text-xs text-rice/45">
          <p>大创项目学术成果 · 粤剧数字文化平台</p>
          <p className="mt-1">© {new Date().getFullYear()} 粤韵新生项目组</p>
        </div>
      </div>
    </footer>
  )
}
