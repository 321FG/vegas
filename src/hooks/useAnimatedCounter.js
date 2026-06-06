import { useEffect, useRef, useState } from 'react'
import { useInView, useMotionValue, useTransform, animate } from 'framer-motion'

export function useAnimatedCounter(to, duration = 2) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration, ease: 'easeOut' })
      const unsubscribe = rounded.on('change', setDisplay)
      return () => {
        controls.stop()
        unsubscribe()
      }
    }
  }, [inView, to, duration, count, rounded])

  return { ref, display }
}
