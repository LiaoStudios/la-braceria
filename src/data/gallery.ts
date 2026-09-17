export interface GalleryImage {
  src: string
  category: 'Carne' | 'Cucina' | 'Dolci' | 'Locale'
  alt: string
}

export const galleryCategories = ['Tutte', 'Carne', 'Cucina', 'Dolci', 'Locale'] as const
export type GalleryFilter = (typeof galleryCategories)[number]

export const gallery: GalleryImage[] = [
  // Carne alla brace
  { src: '/images/meat/grigliata.webp', category: 'Carne', alt: 'Grigliata mista alla brace' },
  { src: '/images/meat/tagliata.webp', category: 'Carne', alt: 'Tagliata di manzo con rucola' },
  { src: '/images/meat/picanha.webp', category: 'Carne', alt: 'Picanha alla brace' },
  { src: '/images/meat/costine.webp', category: 'Carne', alt: 'Costine di maiale alla griglia' },
  { src: '/images/meat/bistecca.webp', category: 'Carne', alt: 'Bistecca alla brace' },
  { src: '/images/meat/agnello.webp', category: 'Carne', alt: 'Costolette d’agnello al rosmarino' },
  { src: '/images/meat/salsiccia.webp', category: 'Carne', alt: 'Salsiccia alla brace' },
  { src: '/images/meat/misto.webp', category: 'Carne', alt: 'Misto di carne alla brace' },
  { src: '/images/meat/costine-caramel.webp', category: 'Carne', alt: 'Costine caramellate' },
  { src: '/images/meat/platter.webp', category: 'Carne', alt: 'Piatto di carne mista alla brace' },

  // Cucina
  { src: '/images/primi/amatriciana.webp', category: 'Cucina', alt: 'Bucatini all’amatriciana' },
  { src: '/images/primi/scoglio.webp', category: 'Cucina', alt: 'Pasta allo scoglio' },
  { src: '/images/primi/spaghetti.webp', category: 'Cucina', alt: 'Spaghetti aglio e olio' },
  { src: '/images/antipasti/tagliere.webp', category: 'Cucina', alt: 'Tagliere di salumi e formaggi' },
  { src: '/images/antipasti/misto.webp', category: 'Cucina', alt: 'Antipasto misto rustico' },
  { src: '/images/fritto/fritto.webp', category: 'Cucina', alt: 'Fritto misto' },
  { src: '/images/contorni/patate-mpacchiuse.webp', category: 'Cucina', alt: 'Patate mpacchiuse' },

  // Dolci & drinks
  { src: '/images/dolci/tiramisu.webp', category: 'Dolci', alt: 'Tiramisù della casa' },
  { src: '/images/dolci/cioccolato.webp', category: 'Dolci', alt: 'Dolce al cioccolato' },
  { src: '/images/dolci/frutti.webp', category: 'Dolci', alt: 'Dolce ai frutti di bosco' },
  { src: '/images/dolci/pannacotta.webp', category: 'Dolci', alt: 'Panna cotta' },
  { src: '/images/drinks/spritz.webp', category: 'Dolci', alt: 'Spritz' },

  // Locale
  { src: '/images/locale/brace-fire.webp', category: 'Locale', alt: 'La brace accesa' },
  { src: '/images/locale/brace-station.webp', category: 'Locale', alt: 'La griglia del locale' },
  { src: '/images/locale/interior-bar.webp', category: 'Locale', alt: 'Il bancone in legno' },
  { src: '/images/locale/interior-sala.webp', category: 'Locale', alt: 'La sala interna' },
  { src: '/images/locale/interior-warm.webp', category: 'Locale', alt: 'Sala accogliente' },
  { src: '/images/locale/facade-day.webp', category: 'Locale', alt: 'L’ingresso de La Braceria' },
  { src: '/images/locale/facade-night.webp', category: 'Locale', alt: 'La Braceria di sera' },
  { src: '/images/locale/veranda-night.webp', category: 'Locale', alt: 'La veranda esterna di sera' },
  { src: '/images/locale/garden-day.webp', category: 'Locale', alt: 'Il giardino esterno' },
  { src: '/images/locale/outdoor-lights.webp', category: 'Locale', alt: 'Dehors con luci' },
]
