import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useScrollLock } from '../../lib/useScrollLock'
import { siteInfo } from '../../data/siteInfo'
import { withBase } from '../../lib/paths'

const leftSections = [
  { id: 'home', label: 'Home' },
  { id: 'storia', label: 'Chi siamo' },
  { id: 'musica', label: 'Musica' },
]
const rightSections = [
  { id: 'gallery', label: 'Gallery' },
  { id: 'contatti', label: 'Contatti' },
]
const allSections = [...leftSections, ...rightSections]

export function Navbar({ logoReady = true }: { logoReady?: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const navigate = useNavigate()
  useScrollLock(open)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const solid = scrolled || pathname !== '/'
  const linkColor = solid ? 'text-ink' : 'text-parchment drop-shadow'

  const goToSection = (id: string) => {
    setOpen(false)
    if (pathname === '/') {
      if (id === 'home') window.scrollTo({ top: 0, behavior: 'smooth' })
      else document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/', { state: { scrollTo: id } })
    }
  }

  const Logo = (
    <Link
      to="/"
      onClick={() => goToSection('home')}
      aria-label="La Braceria — Home"
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <span
        data-navlogo
        style={{ opacity: logoReady ? 1 : 0 }}
        className={`flex items-center justify-center rounded-full bg-parchment shadow-warm ring-1 ring-wood/10 transition-[width,height] duration-300 ${
          solid ? 'h-12 w-12' : 'h-16 w-16'
        }`}
      >
        <img src={withBase('/logo.webp')} alt="La Braceria" className="h-[94%] w-[94%] rounded-full object-cover" />
      </span>
    </Link>
  )

  return (
    <>
      <nav
        className={`fixed left-0 top-0 z-[90] flex w-full items-center justify-between px-6 transition-all duration-300 md:px-12 ${
          solid ? 'bg-parchment/90 py-2.5 shadow-warm backdrop-blur-md' : 'py-4'
        }`}
      >
        <div className="hidden items-center gap-8 lg:flex">
          {leftSections.map((s) => (
            <button key={s.id} onClick={() => goToSection(s.id)} className={`nav-link ${linkColor}`}>
              {s.label}
            </button>
          ))}
          <Link to="/menu" className={`nav-link ${linkColor}`} data-active={pathname === '/menu'}>
            Menu
          </Link>
        </div>

        <span className="w-7 lg:hidden" aria-hidden />

        {Logo}

        <div className="hidden items-center gap-8 lg:flex">
          {rightSections.map((s) => (
            <button key={s.id} onClick={() => goToSection(s.id)} className={`nav-link ${linkColor}`}>
              {s.label}
            </button>
          ))}
          <a
            href={siteInfo.phoneHref}
            className="inline-flex items-center gap-2 rounded-md bg-ember px-6 py-3 text-sm font-bold uppercase tracking-wider text-parchment shadow-cta transition hover:-translate-y-0.5 hover:bg-ember-deep"
          >
            <Phone size={16} /> Prenota
          </a>
        </div>

        <button onClick={() => setOpen(true)} aria-label="Apri menu" className={`lg:hidden ${solid ? 'text-ink' : 'text-parchment'}`}>
          <Menu size={28} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex flex-col bg-wood-deep texture-wood text-parchment lg:hidden"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex items-center justify-between px-6 py-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-parchment">
                <img src={withBase('/logo.webp')} alt="La Braceria" className="h-[94%] w-[94%] rounded-full object-cover" />
              </span>
              <button onClick={() => setOpen(false)} aria-label="Chiudi menu">
                <X size={28} />
              </button>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-6 px-8">
              {allSections.map((s, i) => (
                <motion.button
                  key={s.id}
                  onClick={() => goToSection(s.id)}
                  className="text-left font-serif text-3xl"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                >
                  {s.label}
                </motion.button>
              ))}
              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + allSections.length * 0.07 }}>
                <Link to="/menu" onClick={() => setOpen(false)} className="font-serif text-3xl">
                  Menu
                </Link>
              </motion.div>
              <a
                href={siteInfo.phoneHref}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-ember px-8 py-4 text-center text-sm font-bold uppercase tracking-wider text-parchment shadow-cta"
              >
                <Phone size={18} /> Prenota un tavolo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
