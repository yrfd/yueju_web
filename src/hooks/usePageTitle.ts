import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function usePageTitle(suffix = '南国红豆 · 粤韵新生'): void {
  const location = useLocation()

  useEffect(() => {
    const names: Record<string, string> = {
      '/': '首页',
      '/basics': '粤剧入门',
      '/history': '历史时间轴',
      '/masters': '名家名剧',
      '/plays': '名剧库',
      '/guide': '经典片段导赏',
      '/interactive': '互动体验',
      '/map': '粤剧地图',
      '/culture': '文化百科',
    }
    const base = names[location.pathname] ?? '粤剧数字文化平台'
    document.title = `${base} · ${suffix}`
  }, [location.pathname, suffix])
}
