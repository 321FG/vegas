import { useCallback, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X, ZoomIn, Camera } from 'lucide-react'
import styles from './Gallery.module.css'
import { galleryImages } from '../data/galleryImages.js'
import { staggerContainer, staggerItem } from '../motion.js'
import heroBg from '../assets/IMG-20260505-WA0033.jpg'

const accents = { 0: 'tall', 3: 'wide', 6: 'tall' }

export default function Gallery() {
  const [active, setActive] = useState(null)

  const close = useCallback(() => setActive(null), [])
  const prev = useCallback(() => {
    setActive((i) => (i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length))
  }, [])
  const next = useCallback(() => {
    setActive((i) => (i === null ? null : (i + 1) % galleryImages.length))
  }, [])

  useEffect(() => {
    if (active === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [active, close, prev, next])

  return (
    <>
      <section className={styles.pageHero}>
        <div
          className={styles.pageHeroBg}
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className={styles.pageHeroPattern} />
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className={styles.heroEyebrow}>
              <Camera size={14} /> Galerie · {galleryImages.length} photos
            </span>
            <h1 className={styles.heroTitle}>
              Nos actions <span>en images</span>
            </h1>
            <p className={styles.heroLede}>
              Un aperçu de nos interventions sur le terrain : actions
              communautaires, formations, distributions, dialogues de paix
              et programmes de protection.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div
            className={styles.grid}
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
          >
            {galleryImages.map((img, idx) => {
              const accent = accents[idx % 9]
              const cls = [
                styles.tile,
                accent === 'tall' ? styles.tileTall : '',
                accent === 'wide' ? styles.tileWide : '',
              ].join(' ')
              return (
                <motion.button
                  key={img.file}
                  className={cls}
                  onClick={() => setActive(idx)}
                  aria-label={`Agrandir l'image ${idx + 1}`}
                  variants={staggerItem}
                  whileHover={{ y: -4 }}
                >
                  <img src={img.src} alt={img.alt} loading="lazy" />
                  <span className={styles.tileLabel}>
                    <ZoomIn size={16} /> Voir en grand
                  </span>
                  <span className={styles.tileNum}>
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </motion.button>
              )
            })}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className={styles.lightbox}
            role="dialog"
            aria-modal="true"
            onClick={close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              className={`${styles.lbBtn} ${styles.lbClose}`}
              onClick={(e) => { e.stopPropagation(); close() }}
              aria-label="Fermer"
            >
              <X size={22} />
            </button>
            <button
              className={`${styles.lbBtn} ${styles.lbPrev}`}
              onClick={(e) => { e.stopPropagation(); prev() }}
              aria-label="Image précédente"
            >
              <ChevronLeft size={26} />
            </button>
            <motion.img
              key={active}
              src={galleryImages[active].src}
              alt={galleryImages[active].alt}
              className={styles.lightboxImg}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
            <button
              className={`${styles.lbBtn} ${styles.lbNext}`}
              onClick={(e) => { e.stopPropagation(); next() }}
              aria-label="Image suivante"
            >
              <ChevronRight size={26} />
            </button>
            <span className={styles.lbCounter}>
              {String(active + 1).padStart(2, '0')} / {String(galleryImages.length).padStart(2, '0')}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
