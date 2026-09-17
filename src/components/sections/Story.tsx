import { Reveal } from '../ui/Reveal'

export function Story() {
  return (
    <section id="storia" className="relative overflow-hidden bg-wood-deep texture-wood py-24 text-parchment md:py-32">
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 md:px-12 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.25em] text-straw">Chi siamo</span>
          <h2 className="text-4xl font-bold leading-tight md:text-6xl">
            Un’osteria dove comandano il fuoco e la buona compagnia.
          </h2>
          <div className="mt-8 space-y-6 text-lg font-light leading-relaxed text-parchment/80">
            <p>
              La Braceria nasce a Castel Maggiore come un’osteria rustica e informale: banconi di legno, foto di
              gruppi musicali alle pareti, vinili e strumenti. E, al centro di tutto, la brace.
            </p>
            <p>
              Carni selezionate, pasta fresca fatta in casa, salumi ricercati e dolci artigianali. Il giovedì e il
              venerdì la musica dal vivo accende la sala: qui si mangia, si beve e si sta insieme, come si deve.
            </p>
          </div>
          <div className="mt-10 flex items-center gap-5">
            <span className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-parchment ring-2 ring-straw">
              <img src="/logo.webp" alt="La Braceria" className="h-[94%] w-[94%] rounded-full object-cover" />
            </span>
            <div>
              <span className="block font-serif text-2xl">La Braceria</span>
              <span className="font-script text-2xl text-straw">Food &amp; Music</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg">
            <img
              src="/images/locale/interior-bar.webp"
              alt="Il bancone in legno e la sala de La Braceria"
              loading="lazy"
              className="relative z-20 aspect-[4/5] w-full rounded-[1.5rem] object-cover shadow-2xl"
            />
            <div className="absolute -left-6 -top-6 z-10 h-full w-full rounded-[1.5rem] border-2 border-straw/30" />
            {/* the brand roundel as a signature detail */}
            <div className="absolute -bottom-8 -right-6 z-30 h-32 w-32 overflow-hidden rounded-full border-4 border-parchment shadow-warm">
              <img src="/logo.webp" alt="La Braceria" className="h-full w-full object-cover" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
