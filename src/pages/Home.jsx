import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Brain,
  Bird,
  HeartHandshake,
  Baby,
  Briefcase,
  Stethoscope,
  Wheat,
  Droplets,
  Leaf,
  ArrowRight,
  Quote,
  MapPin,
  Calendar,
  Users,
} from 'lucide-react'
import styles from './Home.module.css'
import { staggerContainer, staggerItem, fadeIn } from '../motion.js'
import { useAnimatedCounter } from '../hooks/useAnimatedCounter.js'
import heroImg from '../assets/IMG-20260601-WA0190.jpg'
import missionImg from '../assets/IMG-20260601-WA0186.jpg'
import logoDCA from '../assets/DCA.png'
import logoCR from '../assets/cr.png'
import logoOXFAM from '../assets/oxfam.png'
import logoSNU from '../assets/Nations Unies.png'
import logoUE from '../assets/UE.png'

const domains = [
  { Icon: Brain, title: 'Santé mentale & psychosocial', text: "Promotion du bien-être psychosocial, formation aux premiers secours psychosociaux." },
  { Icon: Bird, title: 'Cohésion sociale & paix', text: "Appui aux mécanismes locaux de paix, dialogue inter-communautaire, prévention des conflits." },
  { Icon: HeartHandshake, title: "Autonomisation des femmes", text: "Lutte contre les VBG, renforcement économique et social, dignité et droits." },
  { Icon: Baby, title: "Protection de l'enfance", text: "Sauvegarde des droits et de la dignité des enfants en contexte de crise." },
  { Icon: Briefcase, title: 'Relèvement économique', text: "Activités génératrices de revenus, AVEC, micro-projets et entrepreneuriat." },
  { Icon: Stethoscope, title: 'Santé & VIH/SIDA', text: "Sensibilisation, prévention et éducation sur les épidémies et pandémies." },
  { Icon: Wheat, title: 'Sécurité alimentaire', text: "Magasins de stockage, appui aux filières agricoles et relèvement rural." },
  { Icon: Droplets, title: 'WASH', text: "Eau, hygiène et assainissement en zone de conflit ou post-conflit." },
  { Icon: Leaf, title: 'Environnement', text: "Éducation à la conservation et à la protection de l'environnement naturel." },
]

const timeline = [
  { year: '2016', text: "Création et démarrage des activités en République centrafricaine (3 janvier 2016)." },
  { year: '2018', text: "Lancement des programmes d'intervention d'urgence humanitaire. Obtention de l'agrément N°077/MATDDL." },
  { year: '2019', text: "Ouverture du sous-bureau de Sibut. Renforcement du réseau communautaire avec leaders locaux et autorités." },
  { year: '2022–23', text: "Déploiement de 4 projets structurants avec DCA, Conciliation Resources et OXFAM. 26 agents mobilisés, 6 zones couvertes.", gold: true },
]

const partners = [
  { name: 'DanChurchAid', short: 'DCA', logo: logoDCA },
  { name: 'Conciliation Resources', short: 'CR', logo: logoCR },
  { name: 'OXFAM', short: 'OXFAM', logo: logoOXFAM },
  { name: 'Système des Nations Unies', short: 'SNU', logo: logoSNU },
  { name: 'Union Européenne (EU-NDICI)', short: 'EU-NDICI', logo: logoUE },
  { name: 'Autorités locales centrafricaines', short: 'Préfets & Maires', textOnly: true },
]

function AnimatedStat({ value, label, Icon, suffix = '+' }) {
  const { ref, display } = useAnimatedCounter(value)
  return (
    <motion.div ref={ref} className={styles.stat} variants={staggerItem}>
      <div className={styles.statIcon}><Icon size={18} /></div>
      <span className={styles.statNum}>
        {display}
        <span className={styles.statPlus}>{suffix}</span>
      </span>
      <span className={styles.statLabel}>{label}</span>
    </motion.div>
  )
}

export default function Home() {
  return (
    <>
      {/* === HERO === */}
      <section className={styles.hero}>
        <motion.div
          className={styles.heroBg}
          style={{ backgroundImage: `url(${heroImg})` }}
          initial={{ scale: 1.18 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 14, ease: 'easeOut' }}
        />
        <div className={styles.heroPattern} />
        <div className={`container ${styles.heroInner}`}>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.span className={styles.heroEyebrow} variants={staggerItem}>
              <span className={styles.pulse} /> ONG centrafricaine · Depuis 2016
            </motion.span>
            <motion.h1 className={styles.heroTitle} variants={staggerItem}>
              Bâtir une jeunesse <br />
              <span>actrice de son avenir.</span>
            </motion.h1>
            <motion.p className={styles.heroSub} variants={staggerItem}>
              La Fondation Vegas Jeunes pour le Développement accompagne la
              jeunesse et les communautés vulnérables de République centrafricaine
              à travers des programmes de paix, de protection, de santé et de
              développement durable.
            </motion.p>
            <motion.div className={styles.heroActions} variants={staggerItem}>
              <Link to="/galerie" className="btn btn--primary">
                Découvrir nos actions
                <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn btn--ghost">
                Nous contacter
              </Link>
            </motion.div>

            <motion.div
              className={styles.heroStats}
              variants={staggerContainer}
            >
              <AnimatedStat value={9} label="années d'action" Icon={Calendar} />
              <AnimatedStat value={6} label="préfectures couvertes" Icon={MapPin} suffix="" />
              <AnimatedStat value={26} label="agents mobilisés" Icon={Users} suffix="" />
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.heroCard}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
          >
            <img src={missionImg} alt="Équipe FVJD sur le terrain" />
            <div className={styles.heroBadge}>
              <Quote size={22} className={styles.badgeIcon} />
              <div>
                <strong>« Ensemble, c'est mieux. »</strong>
                <span>Notre devise, notre méthode.</span>
              </div>
            </div>
            <div className={styles.heroFloat}>
              <span className={styles.heroFloatDot} />
              Présent dans 6 préfectures
            </div>
          </motion.div>
        </div>

      </section>

      {/* === MISSION === */}
      <section className="section section--cream">
        <div className="container">
          <motion.div
            className={styles.split}
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.div className={styles.splitImg} variants={fadeIn('up')}>
              <img src={missionImg} alt="Actions communautaires FVJD" />
              <div className={styles.splitImgTag}>Bangui · RCA</div>
            </motion.div>
            <motion.div variants={staggerItem}>
              <span className="eyebrow">À propos · Mission</span>
              <h2 className="section-heading">Une présence engagée en RCA</h2>
              <p>
                La <strong>Fondation Vegas Jeunes pour le Développement</strong>{' '}
                (FVJD) est une Organisation Non Gouvernementale de droit
                centrafricain, active depuis le 3 janvier 2016. Nous mettons
                en œuvre des programmes d'intervention d'urgence depuis 2018 et
                construisons depuis 2019 des relations étroites avec les
                communautés locales, les leaders communautaires et les
                autorités.
              </p>
              <p>
                Aujourd'hui, la FVJD est l'un des acteurs humanitaires de
                référence en RCA, opérant dans les préfectures de{' '}
                <strong>Kemo, Ombelle M'Poko, Nana-Gribizi, Mbomou,
                Ouham-Fafa et Lim-Pendé</strong>.
              </p>
              <div className={styles.quote}>
                <Quote size={20} className={styles.quoteIcon} aria-hidden />
                <p>
                  Sensibiliser, organiser, protéger, autonomiser — pour une
                  jeunesse centrafricaine actrice de son avenir.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* === DOMAINES === */}
      <section className="section">
        <div className="container">
          <motion.div
            className={styles.sectionHead}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">Secteurs thématiques</span>
            <h2 className="section-heading">Nos domaines d'action</h2>
            <p className={styles.sectionLede}>
              La FVJD intervient dans un large spectre thématique au service
              des populations vulnérables de République centrafricaine.
            </p>
          </motion.div>
          <motion.div
            className={styles.domains}
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
          >
            {domains.map(({ Icon, title, text }, i) => (
              <motion.article
                key={title}
                className={styles.domain}
                variants={staggerItem}
                whileHover={{ y: -6 }}
              >
                <span className={styles.domainIcon} aria-hidden>
                  <Icon size={24} strokeWidth={1.75} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className={styles.domainNum}>0{i + 1}</span>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* === TIMELINE === */}
      <section className="section section--alt">
        <div className="container">
          <motion.div
            className={styles.sectionHead}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">Histoire</span>
            <h2 className="section-heading">Notre frise chronologique</h2>
          </motion.div>
          <motion.div
            className={styles.timeline}
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
          >
            <div className={styles.timelineLine} />
            {timeline.map((t) => (
              <motion.div key={t.year} className={styles.tlItem} variants={staggerItem}>
                <div className={`${styles.tlYear} ${t.gold ? styles.tlYearGold : ''}`}>
                  {t.year}
                </div>
                <div className={styles.tlDot} />
                <div className={styles.tlBody}>{t.text}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* === PARTENAIRES === */}
      <section className="section">
        <div className="container">
          <motion.div
            className={styles.sectionHead}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">Partenaires</span>
            <h2 className="section-heading">Ils nous font confiance</h2>
            <p className={styles.sectionLede}>
              La FVJD travaille en partenariat avec des organisations
              humanitaires et de développement de premier plan.
            </p>
          </motion.div>
          <motion.div
            className={styles.partners}
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
          >
            {partners.map((p) => (
              <motion.div
                key={p.name}
                className={`${styles.partner} ${p.textOnly ? styles.partnerText : ''}`}
                title={p.name}
                variants={staggerItem}
                whileHover={{ y: -4 }}
              >
                {p.logo ? (
                  <img
                    src={p.logo}
                    alt={`Logo ${p.name}`}
                    className={styles.partnerLogo}
                    loading="lazy"
                  />
                ) : (
                  <span className={styles.partnerShort}>{p.short}</span>
                )}
                <span className={styles.partnerName}>{p.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* === CTA === */}
      <section className="section">
        <div className="container">
          <motion.div
            className={styles.cta}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className={styles.ctaContent}>
              <span className={styles.ctaEyebrow}>Rejoignez-nous</span>
              <h2>Soutenez notre mission auprès de la jeunesse centrafricaine</h2>
              <p>
                Partenariat, financement, bénévolat : chaque engagement
                renforce nos actions sur le terrain.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <Link to="/contact" className={`btn ${styles.ctaPrimary}`}>
                Devenir partenaire
                <ArrowRight size={18} />
              </Link>
              <Link to="/galerie" className={`btn ${styles.ctaGhost}`}>
                Voir la galerie
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
