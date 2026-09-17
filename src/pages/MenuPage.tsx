import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Phone } from 'lucide-react'
import { menu, type MenuItem } from '../data/menu'
import { siteInfo } from '../data/siteInfo'
import { fadeUp, stagger } from '../lib/motion'

const tagStyle: Record<NonNullable<MenuItem['tag']>, string> = {
  specialità: 'bg-ember text-parchment',
  novità: 'bg-ember text-parchment',
  vegetariano: 'bg-straw/25 text-ember-deep',
}

function Item({ item }: { item: MenuItem }) {
  return (
    <motion.div variants={fadeUp} className="flex gap-4 rounded-xl bg-white p-4 shadow-warm ring-1 ring-wood/10">
      {item.image && (
        <img src={item.image} alt={item.name} loading="lazy" className="h-24 w-24 shrink-0 rounded-lg object-cover" />
      )}
      <div className="flex-1">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-serif text-lg font-bold">{item.name}</h3>
          <span className="whitespace-nowrap font-serif text-lg text-ember-deep">{item.price}</span>
        </div>
        {item.description && <p className="mt-1 text-sm leading-relaxed text-ink/60">{item.description}</p>}
        {item.tag && (
          <span className={`mt-2 inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${tagStyle[item.tag]}`}>
            {item.tag}
          </span>
        )}
      </div>
    </motion.div>
  )
}

export function MenuPage() {
  const [active, setActive] = useState(menu[0].id)

  // Deep-link support: /menu#brace selects that category on load.
  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash && menu.some((c) => c.id === hash)) setActive(hash)
    window.scrollTo({ top: 0 })
  }, [])

  const category = menu.find((c) => c.id === active) ?? menu[0]

  return (
    <>
      <Helmet>
        <title>Menu | La Braceria — Castel Maggiore</title>
        <meta name="description" content="Il menu de La Braceria: antipasti e taglieri, pasta fresca, carne alla brace (grigliate, tagliata, picanha, costine), contorni, dolci artigianali e bevande." />
      </Helmet>

      {/* header */}
      <header className="bg-wood-deep texture-wood px-6 pb-14 pt-32 text-center text-parchment md:pt-40">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-straw">Il nostro menu</span>
        <h1 className="mt-3 font-serif text-5xl font-bold md:text-7xl">Dalla brace alla tavola</h1>
        <p className="mx-auto mt-4 max-w-xl font-light text-parchment/70">
          Carne alla brace, pasta fresca fatta in casa e dolci artigianali. Il menu può variare in base alla stagione e alla disponibilità del mercato.
        </p>
      </header>

      {/* category chips */}
      <div className="sticky top-[64px] z-40 border-b border-wood/5 bg-parchment/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1440px] gap-2 overflow-x-auto px-4 py-4 md:justify-center md:px-12">
          {menu.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold transition ${
                active === c.id ? 'bg-ember text-parchment shadow-warm' : 'bg-white text-ink/70 hover:bg-sand'
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>
      </div>

      {/* content */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:px-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            <div className="mb-8 text-center">
              <h2 className="font-serif text-4xl font-bold">{category.title}</h2>
              {category.blurb && <p className="mt-2 text-ink/60">{category.blurb}</p>}
            </div>

            {category.groups.map((group, gi) => (
              <div key={gi} className="mb-10">
                {group.label && (
                  <h3 className="mb-4 flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-ember">
                    <span className="h-px flex-1 bg-wood/10" />
                    {group.label}
                    <span className="h-px flex-1 bg-wood/10" />
                  </h3>
                )}
                <motion.div variants={stagger} initial="hidden" animate="show" className="grid gap-4 md:grid-cols-2">
                  {group.items.map((item) => (
                    <Item key={item.name} item={item} />
                  ))}
                </motion.div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex flex-col items-center gap-4 rounded-xl bg-sand texture-paper p-10 text-center">
          <p className="max-w-md text-ink/70">Hai scelto? Chiamaci e prenota il tuo tavolo: ti aspettiamo a La Braceria.</p>
          <a
            href={siteInfo.phoneHref}
            className="inline-flex items-center gap-2 rounded-md bg-ember px-8 py-4 text-sm font-bold uppercase tracking-wider text-parchment shadow-cta transition hover:bg-ember-deep"
          >
            <Phone size={16} /> {siteInfo.phone}
          </a>
        </div>
      </section>
    </>
  )
}
