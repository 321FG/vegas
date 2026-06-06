import { Suspense, lazy, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import { pageVariants } from './motion.js'

const Gallery = lazy(() => import('./pages/Gallery.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])
  return null
}

const Page = ({ children }) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.4, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
)

export default function App() {
  const location = useLocation()
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main style={{ flex: 1 }}>
        <Suspense fallback={null}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Page><Home /></Page>} />
              <Route path="/galerie" element={<Page><Gallery /></Page>} />
              <Route path="/contact" element={<Page><Contact /></Page>} />
              <Route path="*" element={<Page><Home /></Page>} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
