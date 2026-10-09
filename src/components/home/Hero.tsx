export default function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-ink text-rice">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(circle at 30% 40%, rgba(196,30,58,0.5), transparent 55%), radial-gradient(circle at 70% 60%, rgba(196,30,58,0.35), transparent 50%), #1A1A1A',
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-full w-full items-center justify-center px-6 text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-rice/50">经典剧照 · 图片待替换</span>
        </div>
      </div>

      <div className="container-page relative z-10 py-20 text-center">
        <p className="mb-4 text-sm tracking-[0.5em] text-rice/60">粤剧数字文化馆 · 互动学习 · 青年社区</p>
        <h1 className="mb-4 font-serif text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
          南国红豆 · 粤韵新生
        </h1>
        <p className="mx-auto mb-10 max-w-xl text-base text-rice/75 sm:text-lg">
          从红船到数字时代的粤剧之旅
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#/basics"
            className="rounded-full bg-china-red px-8 py-3 text-sm font-medium text-rice transition-colors hover:bg-china-red-dark"
          >
            开始认识粤剧
          </a>
          <a
            href="#/guide"
            className="rounded-full border border-rice/40 px-8 py-3 text-sm font-medium text-rice transition-colors hover:border-china-red hover:text-china-red-light"
          >
            欣赏经典片段
          </a>
        </div>
      </div>
    </section>
  )
}
