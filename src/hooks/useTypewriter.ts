import { useState, useEffect, useRef } from 'react'

interface UseTypewriterOptions {
  words: string[]
  typeSpeed?: number
  deleteSpeed?: number
  pauseAfterType?: number
  pauseAfterDelete?: number
}

export function useTypewriter({
  words,
  typeSpeed = 80,
  deleteSpeed = 40,
  pauseAfterType = 1500,
  pauseAfterDelete = 500,
}: UseTypewriterOptions) {
  const [text, setText] = useState('')
  const wordIndexRef = useRef(0)
  const phaseRef = useRef<'typing' | 'pausing' | 'deleting'>('typing')
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const currentWord = words[wordIndexRef.current]
    if (!currentWord) return

    const phase = phaseRef.current

    if (phase === 'typing') {
      if (text.length < currentWord.length) {
        const timer = setTimeout(() => {
          setText(currentWord.slice(0, text.length + 1))
        }, typeSpeed)
        return () => clearTimeout(timer)
      } else {
        phaseRef.current = 'pausing'
        const timer = setTimeout(() => {
          setTick((t) => t + 1)
        }, pauseAfterType)
        return () => clearTimeout(timer)
      }
    }

    if (phase === 'pausing') {
      phaseRef.current = 'deleting'
      setTick((t) => t + 1)
    }

    if (phase === 'deleting') {
      if (text.length > 0) {
        const timer = setTimeout(() => {
          setText(text.slice(0, -1))
        }, deleteSpeed)
        return () => clearTimeout(timer)
      } else {
        wordIndexRef.current = (wordIndexRef.current + 1) % words.length
        phaseRef.current = 'typing'
        const timer = setTimeout(() => {
          setTick((t) => t + 1)
        }, pauseAfterDelete)
        return () => clearTimeout(timer)
      }
    }
  }, [text, tick, words, typeSpeed, deleteSpeed, pauseAfterType, pauseAfterDelete])

  return { text, isTyping: phaseRef.current === 'typing' }
}
