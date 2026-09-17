// Foto reali di serate di musica dal vivo, dalla pagina Facebook del locale
// (facebook.com/labraceriafoodandmusic). Usate nella sezione "Musica dal vivo".
export interface EventPhoto {
  src: string
  alt: string
  caption: string
}

export const eventPhotos: EventPhoto[] = [
  {
    src: '/images/eventi/live-band-sax.webp',
    alt: 'Band dal vivo con cantante e sassofonista su palco a La Braceria',
    caption: 'Live jazz & soul',
  },
  {
    src: '/images/eventi/giardino-serale.webp',
    alt: 'Il giardino allestito di sera per una serata di musica dal vivo',
    caption: 'Serate in giardino',
  },
  {
    src: '/images/eventi/entusiasmo-band.webp',
    alt: 'Gruppo di musicisti e organizzatori sul palco de La Braceria',
    caption: 'La nostra band',
  },
  {
    src: '/images/eventi/trio-mandili.webp',
    alt: 'Artiste ospiti in concerto sotto l’insegna de La Braceria',
    caption: 'Artisti ospiti',
  },
]
