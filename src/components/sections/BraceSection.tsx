import { motion, useScroll, useTransform } from 'framer-motion'
import { Flame } from 'lucide-react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Reveal } from '../ui/Reveal'
import { withBase } from '../../lib/paths'

export function BraceSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
  const ySmall = useTransform(scrollYProgress, [0, 1], ['12%', '-12%'])

  return (
    <section ref={ref} className="relative overflow-hidden bg-wood texture-wood py-24 text-parchment md:py-32">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 md:px-12 lg:grid-cols-2 lg:gap-20">
        <div className="order-2 lg:order-1">
          <Reveal>
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-ember-soft">
              <motion.span animate={{ scale: [1, 1.2, 1], rotate: [-4, 4, -4] }} transition={{ repeat: Infinity, duration: 1.6 }}>
                <Flame size={16} className="text-ember-soft" />
              </motion.span>
              Dalla brace di legna
            </span>
            <h2 className="text-4xl font-bold leading-tight md:text-6xl">Il fuoco è il nostro mestiere</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-6 space-y-5 text-lg font-light leading-relaxed text-parchment/80">
              <p>
                Al centro della sala c’è la <strong className="font-semibold text-parchment">brace viva</strong>: legna,
                fiamma e la giusta pazienza. Ogni taglio riposa sulla griglia fino al punto perfetto, per una crosta
                profumata e un cuore tenero.
              </p>
              <p>
                Carni selezionate, sale grosso e rosmarino: nient’altro. Perché il sapore vero nasce dal fuoco, come
                una volta.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <Link
              to="/menu#brace"
              className="mt-8 inline-flex rounded-md bg-ember px-8 py-4 text-sm font-bold uppercase tracking-wider text-parchment shadow-cta transition hover:-translate-y-0.5 hover:bg-ember-deep"
            >
              Scopri la brace
            </Link>
          </Reveal>
        </div>

        <div className="relative order-1 h-[420px] md:h-[520px] lg:order-2">
          <motion.div style={{ y }} className="absolute right-0 top-0 h-[85%] w-[78%] overflow-hidden rounded-[1.5rem] shadow-warm ring-1 ring-black/30">
            <img src={withBase('/images/locale/brace-fire.webp')} alt="La brace accesa nel locale" loading="lazy" className="h-full w-full object-cover" />
          </motion.div>
          <motion.div style={{ y: ySmall }} className="absolute bottom-0 left-0 h-[45%] w-[48%] overflow-hidden rounded-[1.25rem] border-4 border-parchment shadow-warm">
            <img src={withBase('/images/meat/grigliata.webp')} alt="Grigliata mista alla brace" loading="lazy" className="h-full w-full object-cover" />
          </motion.div>
          <div className="absolute -bottom-4 right-8 flex h-24 w-24 items-center justify-center rounded-full bg-ember text-center text-xs font-bold uppercase leading-tight tracking-wide text-parchment shadow-ember">
            Brace<br />di legna
          </div>
        </div>
      </div>
    </section>
  )
}
