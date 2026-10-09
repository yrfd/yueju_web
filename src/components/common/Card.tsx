import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  hoverable?: boolean
}

export default function Card({ children, className = '', onClick, hoverable = true }: CardProps) {
  const hover = hoverable
    ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover cursor-pointer'
    : ''
  return (
    <div
      onClick={onClick}
      className={`rounded-xl bg-white p-5 shadow-card ${hover} ${className}`}
    >
      {children}
    </div>
  )
}
