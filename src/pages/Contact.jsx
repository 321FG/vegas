import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  MapPin,
  Building2,
  Mail,
  Phone,
  Handshake,
  FileBadge,
  Send,
  MessageSquare,
  CheckCircle2,
} from 'lucide-react'
import styles from './Contact.module.css'
import { staggerContainer, staggerItem } from '../motion.js'
import heroBg from '../assets/IMG-20260601-WA0187.jpg'
import CoverageMap from '../components/CoverageMap.jsx'

const contactCards = [
  {
    Icon: MapPin,
    title: 'Siège principal',
    body: 'Bangui, République centrafricaine',
  },
  {
    Icon: Building2,
    title: 'Sous-bureau',
    body: 'Sibut · Ouverture en 2019',
  },
  {
    Icon: Mail,
    title: 'Email',
    body: <a href="mailto:coordo@fondation-vegas.org">coordo@fondation-vegas.org</a>,
    gold: true,
  },
  {
    Icon: Phone,
    title: 'Téléphone',
    body: <a href="tel:+23672597980">+23672597980</a>,
  },
  {
    Icon: Handshake,
    title: 'Partenariats',
    body: 'Pour collaborations institutionnelles, ONG ou bailleurs.',
    gold: true,
  },
  {
    Icon: FileBadge,
    title: 'Reconnaissance légale',
    body: 'Agrément N°077/MATDDL · N°0053/22/MEPCI/DIRCAB/SPONG/UCDP',
  },
]

const coverage = [
  { area: 'Kemo', detail: 'Préfecture · accréditation Préfet' },
  { area: "Ombelle M'Poko", detail: 'Préfecture' },
  { area: 'Nana-Gribizi', detail: 'Préfecture · accréditation Préfet' },
  { area: 'Mbomou', detail: 'Préfecture' },
  { area: 'Ouham-Fafa', detail: 'Préfecture' },
  { area: 'Lim-Pendé', detail: 'Préfecture' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(form.subject || 'Contact via fvjd.org')
    const body = encodeURIComponent(
      `Nom : ${form.name}\nEmail : ${form.email}\n\n${form.message}`
    )
    window.location.href = `mailto:coordo@fondation-vegas.org?subject=${subject}&body=${body}`
    setSent(true)
  }

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
              <MessageSquare size={14} /> Contact · Partenariats
            </span>
            <h1 className={styles.heroTitle}>
              Travaillons <span>ensemble.</span>
            </h1>
            <p className={styles.heroLede}>
              Partenaires, donateurs, médias ou communautés : nous serons
              heureux d'échanger avec vous autour des actions de la FVJD en
              République centrafricaine.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.layout}>
            {/* Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
            >
              <span className="eyebrow">Coordonnées</span>
              <h2 className="section-heading">Comment nous joindre</h2>
              <motion.div
                className={styles.cards}
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: '-30px' }}
              >
                {contactCards.map((c) => (
                  <motion.div
                    key={c.title}
                    className={`${styles.card} ${c.gold ? styles.cardGold : ''}`}
                    variants={staggerItem}
                    whileHover={{ y: -3 }}
                  >
                    <div className={styles.icon} aria-hidden>
                      <c.Icon size={22} strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className={styles.cardTitle}>{c.title}</h3>
                      <p className={styles.cardBody}>{c.body}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="eyebrow">Message</span>
              <h2 className="section-heading">Écrivez-nous</h2>
              <form className={styles.form} onSubmit={onSubmit}>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="name">Nom complet</label>
                    <input
                      id="name" type="text" required
                      value={form.name} onChange={update('name')}
                      placeholder="Votre nom"
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="email">Email</label>
                    <input
                      id="email" type="email" required
                      value={form.email} onChange={update('email')}
                      placeholder="vous@exemple.org"
                    />
                  </div>
                </div>
                <div className={styles.field}>
                  <label htmlFor="subject">Sujet</label>
                  <input
                    id="subject" type="text"
                    value={form.subject} onChange={update('subject')}
                    placeholder="Partenariat, presse, candidature..."
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message" rows="6" required
                    value={form.message} onChange={update('message')}
                    placeholder="Décrivez votre demande..."
                  />
                </div>
                <p className={styles.note}>
                  Ce formulaire ouvre votre messagerie pour envoyer le message
                  à <strong>coordo@fondation-vegas.org</strong>.
                </p>
                {sent && (
                  <motion.div
                    className={styles.success}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <CheckCircle2 size={18} />
                    Merci ! Votre messagerie vient de s'ouvrir.
                  </motion.div>
                )}
                <button type="submit" className="btn btn--primary">
                  Envoyer le message
                  <Send size={16} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">Zones d'intervention</span>
            <h2 className="section-heading">Où nous opérons</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '1.5rem' }}
          >
            <CoverageMap />
          </motion.div>
          <motion.div
            className={styles.bandGrid}
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-30px' }}
          >
            {coverage.map((c) => (
              <motion.div
                key={c.area}
                className={styles.band}
                variants={staggerItem}
                whileHover={{ y: -4 }}
              >
                <MapPin size={18} className={styles.bandIcon} />
                <h4>{c.area}</h4>
                <p>{c.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
