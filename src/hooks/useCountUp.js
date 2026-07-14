import { useEffect, useRef, useState } from 'react'
import { useReveal } from './useReveal'

// Animates 0 -> target once the element scrolls into view.
export function useCountUp(target, duration = 1400) {
  const [ref, inView] = useReveal(0.4)
  const [value, setValue] = useState(0)
  const started = useRef(false)
  useEffect(() => {
    if (!inView || started.current) return
    started.current = true
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, target, duration])
  return [ref, value]
}

export default useCountUp
