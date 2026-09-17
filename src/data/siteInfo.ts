// Single source of truth for contact / hours / social.
// Dati reali: Bar Hostaria La Braceria, Castel Maggiore (BO).
export const siteInfo = {
  name: 'La Braceria',
  tagline: 'Food & Music',

  phone: '+39 051 0567806',
  phoneHref: 'tel:+390510567806',
  email: '',
  address: 'Via San Giuseppe, 2/A',
  city: 'Castel Maggiore',
  province: 'BO',
  zip: '40013',
  country: 'Italia',

  mapsEmbed:
    'https://www.google.com/maps?q=La+Braceria+Via+San+Giuseppe+2a+Castel+Maggiore+Bologna&output=embed',
  mapsDirections:
    'https://www.google.com/maps/dir/?api=1&destination=La+Braceria+Via+San+Giuseppe+2a+Castel+Maggiore+Bologna',

  hours: [
    { days: 'Lunedì', value: 'Chiuso' },
    { days: 'Martedì', value: '12:00 – 14:00 · 20:00 – 23:00' },
    { days: 'Mercoledì', value: '12:00 – 14:00 · 20:00 – 23:00' },
    { days: 'Giovedì', value: '12:00 – 14:00 · 20:00 – 23:00' },
    { days: 'Venerdì', value: '12:00 – 14:00 · 20:00 – 23:00' },
    { days: 'Sabato', value: '12:00 – 14:00 · 20:00 – 23:00' },
    { days: 'Domenica', value: '20:00 – 23:00' },
  ],

  // Serate di musica dal vivo
  liveMusic: 'Musica dal vivo ogni giovedì e venerdì',

  social: {
    instagram: 'https://www.instagram.com/explore/locations/la-braceria/',
    facebook: 'https://www.facebook.com/labraceriafoodandmusic/',
    google:
      'https://www.google.com/search?q=La+Braceria+Castel+Maggiore+Recensioni',
  },
} as const

export type SiteInfo = typeof siteInfo
