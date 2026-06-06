export const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.6,
    },
  },
}

export const fadeIn = (direction = 'up', delay = 0) => ({
  initial: {
    opacity: 0,
    y: direction === 'up' ? 40 : -40,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.8,
      ease: 'easeOut',
    },
  },
})
