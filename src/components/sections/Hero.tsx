import { motion } from 'framer-motion'
import { UtensilsCrossed, Phone, Flame } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteInfo } from '../../data/siteInfo'

export function Hero() {
  return (
    <section id="home" className="relative flex h-[100svh] min-h-[600px] items-center justify-center overflow-hidden bg-wood-deep">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/brace.webp"
          alt="Carne selezionata cotta sulla brace di legna"
          className="h-full w-full object-cover"
        />
        {/* overall darken for legibility */}
        <div className="absolute inset-0 bg-wood-deep/60" />
        {/* focused scrim behind the title */}
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(65% 55% at 50% 42%, rgba(24,15,9,0.66), rgba(24,15,9,0) 72%)' }}
        />
        {/* bottom fade into the parchment section below */}
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-parchment via-parchment/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-straw/40 bg-wood/40 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-straw-soft backdrop-blur-sm"
        >
          <Flame size={15} className="text-ember-soft" />
          Braceria · Food &amp; Music · Castel Maggiore
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-serif font-bold uppercase leading-[0.92] tracking-tight text-parchment drop-shadow-[0_3px_24px_rgba(0,0,0,0.7)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Il sapore
          <br />
          della <span className="font-script text-ember-soft normal-case tracking-normal">brace</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mx-auto mt-6 max-w-xl text-lg font-light text-parchment drop-shadow-[0_2px_10px_rgba(0,0,0,0.75)]"
        >
          Carni selezionate, fuoco di legna e cotture sapienti. Sapori decisi in un’osteria rustica, con la musica dal vivo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            to="/menu"
            className="btn-brand inline-flex items-center gap-2 bg-ember px-10 py-4 text-sm font-bold uppercase tracking-wider text-parchment shadow-cta"
          >
            <UtensilsCrossed size={18} /> Scopri il Menu
          </Link>
          <a
            href={siteInfo.phoneHref}
            className="btn-brand inline-flex items-center gap-2 border border-straw/50 bg-parchment/10 px-10 py-4 text-sm font-bold uppercase tracking-wider text-parchment backdrop-blur-md hover:bg-parchment/20"
          >
            <Phone size={18} /> Prenota un tavolo
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-wood/60"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        <span className="text-xs uppercase tracking-[0.3em]">Scorri</span>
      </motion.div>
    </section>
  )
}
