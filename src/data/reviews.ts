// Recensioni reali (Google / Tripadvisor / Sluurpy). Struttura pronta per un
// eventuale collegamento automatico alle recensioni Google in futuro.
export interface Review {
  author: string
  rating: number
  text: string
  source?: 'Google' | 'Facebook' | 'TripAdvisor'
}

export const reviews: Review[] = [
  {
    author: 'Giuseppe',
    rating: 5,
    text: 'Locale caratteristico, ottimo cibo, servizio eccellente e personale squisito. La carne alla brace è davvero di un altro livello.',
    source: 'Google',
  },
  {
    author: 'Silvia',
    rating: 5,
    text: 'Ottima carne alla brace e non solo: possibilità di avere anche piatti vegetariani. Prezzi buoni e atmosfera calda, con la musica dal vivo il weekend.',
    source: 'Google',
  },
  {
    author: 'Marco',
    rating: 4,
    text: 'Buona la grigliata, personale disponibile e simpatico. Le patate mpacchiuse sono una tentazione. Ci tornerò volentieri.',
    source: 'TripAdvisor',
  },
  {
    author: 'Cinzia',
    rating: 5,
    text: 'Picanha tenera e buoni dolci artigianali. Ambiente rustico e genuino, come piace a noi. Consigliato agli amanti della brace.',
    source: 'Google',
  },
]

export const reviewSummary = { average: 4.4, count: 1880 }
