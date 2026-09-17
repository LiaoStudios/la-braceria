// Dati del menu, separati dal frontend per una facile modifica.
// Basato sulle proposte reali de La Braceria (carne alla brace, cucina rustica).
// TODO(cliente): confermare/aggiornare nomi, descrizioni e prezzi reali.

export interface MenuItem {
  name: string
  description?: string
  price: string
  allergens?: string[]
  image?: string
  tag?: 'novità' | 'specialità' | 'vegetariano'
}

export interface MenuGroup {
  /** sottocategoria opzionale */
  label?: string
  items: MenuItem[]
}

export interface MenuCategory {
  id: string
  title: string
  blurb?: string
  groups: MenuGroup[]
}

export const menu: MenuCategory[] = [
  {
    id: 'antipasti',
    title: 'Antipasti',
    blurb: 'Salumi ricercati, formaggi e stuzzichini della casa.',
    groups: [
      {
        items: [
          { name: 'Tagliere della Braceria', description: 'Salumi selezionati, formaggi e sottaceti della casa.', price: '€14,00', image: '/images/antipasti/tagliere.webp', tag: 'specialità' },
          { name: 'Antipasto misto rustico', description: 'Selezione di salumi, uova, olive e verdure.', price: '€12,00', image: '/images/antipasti/misto.webp' },
          { name: 'Bruschette miste', description: 'Pane caldo, pomodoro, olio EVO.', price: '€6,00' },
          { name: 'Fritto misto', description: 'Calamari e verdure in pastella croccante.', price: '€10,00', image: '/images/fritto/fritto.webp' },
        ],
      },
    ],
  },
  {
    id: 'primi',
    title: 'Primi',
    blurb: 'Pasta fresca fatta in casa, ogni giorno.',
    groups: [
      {
        items: [
          { name: 'Bucatini all’Amatriciana', description: 'Guanciale, pomodoro, pecorino.', price: '€11,00', image: '/images/primi/amatriciana.webp', tag: 'specialità' },
          { name: 'Spaghetti aglio, olio e peperoncino', description: 'Semplici e decisi, come tradizione.', price: '€9,00', image: '/images/primi/spaghetti.webp' },
          { name: 'Pasta allo scoglio', description: 'Frutti di mare freschi e pomodorino.', price: '€14,00', image: '/images/primi/scoglio.webp' },
          { name: 'Cacio e pepe', description: 'Pecorino romano e pepe nero.', price: '€10,00' },
        ],
      },
    ],
  },
  {
    id: 'brace',
    title: 'La Brace',
    blurb: 'Il cuore del locale: carni selezionate sulla brace di legna.',
    groups: [
      {
        label: 'Le grigliate',
        items: [
          { name: 'Grigliata del Fuochista', description: 'La nostra grigliata mista: tagli assortiti alla brace.', price: '€22,00', image: '/images/meat/grigliata.webp', tag: 'specialità' },
          { name: 'Misto brace per due', description: 'Abbondante selezione di carni per due persone.', price: '€40,00', image: '/images/meat/misto.webp' },
        ],
      },
      {
        label: 'I tagli',
        items: [
          { name: 'Tagliata di Manzo', description: 'Servita con rucola e scaglie di grana.', price: '€18,00', image: '/images/meat/tagliata.webp', tag: 'specialità' },
          { name: 'Picanha alla brace', description: 'Il taglio sudamericano, tenero e saporito.', price: '€19,00', image: '/images/meat/picanha.webp' },
          { name: 'Bistecca alla griglia', description: 'Alta e succosa, cottura a scelta.', price: '€24,00', image: '/images/meat/bistecca.webp' },
          { name: 'Costolette d’agnello', description: 'Profumate al rosmarino, croccanti fuori.', price: '€17,00', image: '/images/meat/agnello.webp' },
        ],
      },
      {
        label: 'Dalla griglia',
        items: [
          { name: 'Costine di maiale caramellate', description: 'Glassate e cotte lentamente sulla brace.', price: '€15,00', image: '/images/meat/costine.webp', tag: 'specialità' },
          { name: 'Salsiccia con verdure', description: 'Salsiccia alla brace con contorno di verdure.', price: '€12,00', image: '/images/meat/salsiccia.webp' },
        ],
      },
    ],
  },
  {
    id: 'contorni',
    title: 'Contorni',
    groups: [
      {
        items: [
          { name: 'Patate mpacchiuse', description: 'Patate stufate alla calabrese con peperoni.', price: '€6,00', image: '/images/contorni/patate-mpacchiuse.webp', tag: 'specialità' },
          { name: 'Patatine fritte', price: '€4,00' },
          { name: 'Verdure grigliate', price: '€5,00', tag: 'vegetariano' },
          { name: 'Insalata mista', price: '€4,00', tag: 'vegetariano' },
        ],
      },
    ],
  },
  {
    id: 'dolci',
    title: 'Dolci',
    blurb: 'Dolci artigianali fatti in casa.',
    groups: [
      {
        items: [
          { name: 'Tiramisù della casa', price: '€5,00', image: '/images/dolci/tiramisu.webp' },
          { name: 'Tortino al cioccolato', price: '€5,50', image: '/images/dolci/cioccolato.webp' },
          { name: 'Panna cotta', price: '€4,50', image: '/images/dolci/pannacotta.webp' },
          { name: 'Dolce ai frutti di bosco', price: '€5,00', image: '/images/dolci/frutti.webp' },
        ],
      },
    ],
  },
  {
    id: 'bevande',
    title: 'Bevande',
    groups: [
      {
        label: 'Vini & birre',
        items: [
          { name: 'Vino della casa (½ l)', price: '€6,00' },
          { name: 'Vino in bottiglia', description: 'Carta dei vini disponibile in sala.', price: 'da €12,00' },
          { name: 'Birra media', price: '€4,50' },
        ],
      },
      {
        label: 'Aperitivi & analcoliche',
        items: [
          { name: 'Spritz', price: '€5,00', image: '/images/drinks/spritz.webp' },
          { name: 'Acqua (½ l / 1 l)', price: '€1,50 / €2,50' },
          { name: 'Bibite', price: '€3,00' },
          { name: 'Caffè', price: '€1,50' },
        ],
      },
    ],
  },
]
