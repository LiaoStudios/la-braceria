import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

interface SplitProps {
  img: string
  alt: string
  eyebrow: string
  title: string
  text: string
  reverse?: boolean
}

function Split({ img, alt, eyebrow, title, text, reverse }: SplitProps) {
  return (
    <div className={`grid items-center gap-0 overflow-hidden md:grid-cols-2 ${reverse ? 'md:[direction:rtl]' : ''}`}>
      <div className="h-[340px] overflow-hidden md:h-[500px] [direction:ltr]">
        <img src={img} alt={alt} loading="lazy" className="h-full w-full object-cover" />
      </div>
      <Reveal className="[direction:ltr]">
        <div className="px-6 py-12 md:px-14 md:py-0">
          <span className="mb-3 block text-xs font-bold uppercase tracking-[0.25em] text-ember">{eyebrow}</span>
          <h3 className="font-serif text-3xl font-semibold md:text-4xl">{title}</h3>
          <p className="mt-5 text-lg font-light leading-relaxed text-ink/75">{text}</p>
        </div>
      </Reveal>
    </div>
  )
}

export function RestaurantSplit() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-32">
      <SectionHeading
        eyebrow="Non solo carne"
        title="Dai grandi tagli alla musica dal vivo"
        className="mb-16"
      />
      <div className="space-y-12 md:space-y-0">
        <Split
          img="/images/meat/picanha.webp"
          alt="Picanha e tagliata alla brace"
          eyebrow="I grandi tagli"
          title="Tagliata, picanha e bistecca"
          text="Dalla tagliata di manzo alla picanha sudamericana, fino alla bistecca alta e succosa. Serviamo i tagli migliori, cotti sulla brace e conditi con semplicità, per esaltarne il sapore."
        />
        <Split
          reverse
          img="/images/locale/interior-warm.webp"
          alt="La sala rustica con strumenti musicali"
          eyebrow="Food & Music"
          title="Buona tavola e musica dal vivo"
          text="Tra legno, vinili e strumenti alle pareti, il giovedì e il venerdì sera la sala si accende con la musica dal vivo. Un’osteria dove si mangia bene e si sta in compagnia, fino a tardi."
        />
      </div>
    </section>
  )
}
