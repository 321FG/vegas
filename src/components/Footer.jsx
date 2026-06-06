import { Link } from 'react-router-dom'
import { MapPin, Building2, Mail, Share2 } from 'lucide-react'
import logo from '../assets/Logo Fondation Vegas.jpg'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <div className={styles.brand}>
              <img src={logo} alt="FVJD" className={styles.logo} />
              <div>
                <p className={styles.brandTitle}>F.V.J.D</p>
                <span className={styles.brandSub}>ONG centrafricaine</span>
              </div>
            </div>
            <p className={styles.about}>
              La Fondation Vegas Jeunes pour le Développement œuvre depuis 2016
              en République centrafricaine pour la jeunesse, la paix, la santé
              et le développement des communautés vulnérables.
            </p>
            <p className={styles.motto}>« Ensemble, c’est mieux. »</p>
          </div>

          <div>
            <h4 className={styles.colTitle}>Navigation</h4>
            <ul className={styles.list}>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/galerie">Galerie</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className={styles.colTitle}>Domaines</h4>
            <ul className={styles.list}>
              <li><span>Santé mentale & psychosocial</span></li>
              <li><span>Cohésion sociale & paix</span></li>
              <li><span>Protection & autonomisation</span></li>
              <li><span>WASH & environnement</span></li>
            </ul>
          </div>

          <div>
            <h4 className={styles.colTitle}>Contact</h4>
            <ul className={styles.list}>
              <li className={styles.contactItem}>
                <MapPin size={16} className={styles.contactIcon} aria-hidden />
                <span>
                  <strong>Siège :</strong> Bangui, République centrafricaine
                </span>
              </li>
              <li className={styles.contactItem}>
                <Building2 size={16} className={styles.contactIcon} aria-hidden />
                <span><strong>Sous-bureau :</strong> Sibut</span>
              </li>
              <li className={styles.contactItem}>
                <Mail size={16} className={styles.contactIcon} aria-hidden />
                <a href="mailto:coordo@fondation-vegas.org">coordo@fondation-vegas.org</a>
              </li>
              <li className={styles.contactItem}>
                <Share2 size={16} className={styles.contactIcon} aria-hidden />
                <a
                  href="https://www.facebook.com/share/18JNy2K9GP/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li className={styles.contactItem}>
                <Share2 size={16} className={styles.contactIcon} aria-hidden />
                <a
                  href="https://www.linkedin.com/in/fondation-vegas-312238355/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {year} Fondation Vegas Jeunes pour le Développement</span>
          <span>NIF M367216J001 · RCCM CA/BG/20211505 · CNSS 5800615</span>
        </div>
      </div>
    </footer>
  )
}
