import { Phone, MapPin, Music, ArrowUpRight } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import { siteInfo } from '../../data/siteInfo'

export function Reservation() {
  return (
    <section id="prenota" className="mx-auto max-w-6xl px-6 py-24 md:px-12 md:py-32">
      <Reveal>
        <div className="card-wood flex flex-col gap-12 p-8 md:flex-row md:gap-16 md:p-14">
          {/* Info */}
          <div className="md:w-1/2">
            <span className="mb-3 block text-xs font-bold uppercase tracking-[0.25em] text-ember">Prenotazioni</span>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">Ci vediamo a tavola?</h2>
            <p className="mt-5 text-lg font-light leading-relaxed text-ink/70">
              Ti consigliamo di prenotare in anticipo, soprattutto il fine settimana e nelle serate con musica dal vivo.
            </p>
            <div className="mt-10 space-y-5">
              <a href={siteInfo.phoneHref} className="group flex items-center gap-5">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sand text-ember transition group-hover:bg-ember group-hover:text-parchment">
                  <Phone size={20} />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase text-ink/40">Telefono</span>
                  <span className="text-xl">{siteInfo.phone}</span>
                </span>
              </a>
              <div className="flex items-center gap-5">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sand text-ember">
                  <MapPin size={20} />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase text-ink/40">Indirizzo</span>
                  <span className="text-xl">{siteInfo.address}, {siteInfo.city}</span>
                </span>
              </div>
              <div className="flex items-center gap-5">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sand text-ember">
                  <Music size={20} />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase text-ink/40">Serate</span>
                  <span className="text-xl">Musica dal vivo · giovedì e venerdì</span>
                </span>
              </div>
            </div>
          </div>

          {/* Booking CTA → chiamata diretta */}
          <div className="md:w-1/2">
            <div className="flex h-full flex-col items-center justify-center rounded-xl bg-wood-deep texture-wood p-10 text-center text-parchment">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-ember shadow-ember">
                <Phone size={28} />
              </span>
              <h3 className="mt-6 font-serif text-3xl">Prenota chiamando</h3>
              <p className="mt-3 max-w-xs text-parchment/70">
                Chiamaci per riservare il tuo tavolo: ti diamo noi il posto migliore accanto alla brace.
              </p>
              <a
                href={siteInfo.phoneHref}
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-ember px-9 py-4 text-sm font-bold uppercase tracking-wider text-parchment shadow-cta transition hover:-translate-y-0.5 hover:bg-ember-deep"
              >
                {siteInfo.phone} <ArrowUpRight size={18} />
              </a>
              <span className="mt-4 text-sm text-parchment/60">
                {siteInfo.address} · {siteInfo.city} ({siteInfo.province})
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
