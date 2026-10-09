import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[50vh] flex-col items-center justify-center py-20 text-center">
      <p className="font-serif text-6xl font-black text-china-red">404</p>
      <p className="mb-6 mt-2 text-ink/60">页面不存在</p>
      <Link to="/" className="rounded-full bg-china-red px-8 py-3 text-sm font-medium text-rice transition-colors hover:bg-china-red-dark">
        返回首页
      </Link>
    </div>
  )
}
