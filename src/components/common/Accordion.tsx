import { useState, type ReactNode } from 'react'

interface AccordionItemProps {
  title: string
  children: ReactNode
  defaultOpen?: boolean
}

interface AccordionProps {
  items: AccordionItemProps[]
  singleOpen?: boolean
}

export default function Accordion({ items, singleOpen = false }: AccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(
    () => new Set(items.map((it, i) => (it.defaultOpen ? i : -1)).filter((i) => i >= 0)),
  )

  const toggle = (index: number) => {
    setOpenIndexes((prev) => {
      const next = new Set(prev)
      if (singleOpen) {
        next.clear()
        if (!prev.has(index)) next.add(index)
      } else {
        if (next.has(index)) next.delete(index)
        else next.add(index)
      }
      return next
    })
  }

  return (
    <div className="divide-y divide-ink/10 rounded-xl bg-white shadow-card">
      {items.map((item, i) => {
        const open = openIndexes.has(i)
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => toggle(i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-rice/60"
              aria-expanded={open}
            >
              <span className="font-serif text-lg font-semibold text-ink">{item.title}</span>
              <svg
                viewBox="0 0 24 24"
                className={`h-5 w-5 shrink-0 text-china-red transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5">{item.children}</div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
