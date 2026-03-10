import { useEffect, useState } from 'react'
import { useInView } from '../hooks/useInView'

export default function AnimatedCounter({ end, suffix = '', duration = 2000 }) {
  const [ref, isInView] = useInView()
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const num = parseInt(end, 10)
    if (isNaN(num)) {
      setCount(end)
      return
    }

    let start = 0
    const step = Math.ceil(num / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= num) {
        setCount(num)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isInView, end, duration])

  return <span ref={ref}>{typeof count === 'number' ? count : end}{suffix}</span>
}
