import { motion } from 'framer-motion'
import { Music, Facebook } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { fadeUp, inView, stagger } from '../../lib/motion'
import { eventPhotos } from '../../data/events'
import { siteInfo } from '../../data/siteInfo'

/**
 * "Musica dal vivo" — a dedicated section with real photos from past concert
 * nights (downloaded from the client's own Facebook page). Each photo carries
 * a permanent dark gradient overlay ("oscuramento") so its caption stays
 * legible regardless of how bright or busy the shot underneath is.
 */
export function LiveMusic() {
  return (
    <section
      id="musica"
      className="relative overflow-hidden border-t border-parchment/10 bg-wood-deep texture-wood py-24 text-parchment md:py-32"
    >
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-12">
        <SectionHeading
          eyebrow="Food & Music"
          title="Musica dal vivo"
          light
          className="mb-10"
        />

        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-lg font-light leading-relaxed text-parchment/80">
            Il giovedì e il venerdì la sala — e, quando il tempo lo permette, il nostro giardino — si accendono con
            band dal vivo: blues, rock, latin, reggae e tanta buona musica italiana. Serate informali, ingresso
            libero, tra un bicchiere di vino e l’ultimo giro di brace.
          </p>
        </Reveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2"
        >
          {eventPhotos.map((photo) => (
            <motion.div
              key={photo.src}
              variants={fadeUp}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-warm"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* oscuramento: permanent dark gradient so the caption always reads clearly */}
              <div className="absolute inset-0 bg-gradient-to-t from-wood-deep/90 via-wood-deep/10 to-transparent" />
              <div className="absolute inset-0 bg-wood-deep/15 transition-colors duration-500 group-hover:bg-wood-deep/0" />
              <span className="absolute bottom-4 left-5 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-parchment">
                <Music size={15} className="text-ember-soft" />
                {photo.caption}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <Reveal delay={0.1} className="mt-12 flex justify-center">
          <a
            href={siteInfo.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-straw/40 bg-parchment/5 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-parchment backdrop-blur-sm transition hover:bg-parchment/15"
          >
            <Facebook size={18} />
            Scopri i prossimi eventi
          </a>
        </Reveal>
      </div>
    </section>
  )
}
