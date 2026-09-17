import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { SectionHeading } from '../ui/SectionHeading'
import { fadeUp, inView, stagger } from '../../lib/motion'

const specialties = [
  { title: 'Le grigliate', img: '/images/meat/grigliata.webp', text: 'La grigliata del Fuochista: tagli assortiti cotti sulla brace di legna.' },
  { title: 'I grandi tagli', img: '/images/meat/tagliata.webp', text: 'Tagliata, picanha e bistecca. Carni selezionate, cottura a puntino.' },
  { title: 'Pasta fresca', img: '/images/primi/amatriciana.webp', text: 'Primi fatti in casa ogni giorno, dalla tradizione italiana.' },
  { title: 'Taglieri & salumi', img: '/images/antipasti/tagliere.webp', text: 'Salumi ricercati, formaggi e antipasti rustici da condividere.' },
]

export function Specialties() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-32">
      <SectionHeading eyebrow="Le nostre specialità" title="Il cuore de La Braceria" className="mb-16" />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={inView}
        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
      >
        {specialties.map((s) => (
          <motion.div key={s.title} variants={fadeUp}>
            <Link to="/menu" className="card-wood group block overflow-hidden">
              <div className="h-56 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-7 text-center">
                <h3 className="mb-3 font-serif text-2xl font-semibold">{s.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-ink/60">{s.text}</p>
                <span className="text-xs font-bold uppercase tracking-widest text-ember transition group-hover:text-ember-deep">
                  Scopri di più →
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
