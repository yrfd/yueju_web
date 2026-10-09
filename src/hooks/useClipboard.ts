import { useCallback, useState } from 'react'

export function useClipboard(timeout = 2000): [boolean, (text: string) => void] {
  const [copied, setCopied] = useState(false)

  const copy = useCallback(
    (text: string) => {
      const fallback = () => {
        const textarea = document.createElement('textarea')
        textarea.value = text
        textarea.style.position = 'fixed'
        textarea.style.opacity = '0'
        document.body.appendChild(textarea)
        textarea.select()
        try {
          document.execCommand('copy')
        } finally {
          document.body.removeChild(textarea)
        }
      }
      const done = () => {
        setCopied(true)
        window.setTimeout(() => setCopied(false), timeout)
      }
      if (navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(text).then(done, () => {
          fallback()
          done()
        })
      } else {
        fallback()
        done()
      }
    },
    [timeout],
  )

  return [copied, copy]
}
