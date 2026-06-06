import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../assets/Logo Fondation Vegas.jpg'
import styles from './Navbar.module.css'

const links = [
  { to: '/', label: 'Accueil', end: true },
  { to: '/galerie', label: 'Galerie' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <span className={styles.accent} aria-hidden />
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.brand} onClick={() => setOpen(false)}>
          <img src={logo} alt="Logo FVJD" className={styles.logo} />
          <span className={styles.brandText}>
            <span className={styles.brandName}>Fondation Vegas</span>
          </span>
        </Link>

        <button
          type="button"
          className={styles.toggle}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
          <ul className={styles.links}>
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.end}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `${styles.link} ${isActive ? styles.linkActive : ''}`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
