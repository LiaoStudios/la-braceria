import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Hero } from '../components/sections/Hero'
import { Specialties } from '../components/sections/Specialties'
import { BraceSection } from '../components/sections/BraceSection'
import { RestaurantSplit } from '../components/sections/RestaurantSplit'
import { Story } from '../components/sections/Story'
import { LiveMusic } from '../components/sections/LiveMusic'
import { Gallery } from '../components/sections/Gallery'
import { Reviews } from '../components/sections/Reviews'
import { Reservation } from '../components/sections/Reservation'
import { Contact } from '../components/sections/Contact'
import { siteInfo } from '../data/siteInfo'

function scrollToId(id: string) {
  if (id === 'home') return window.scrollTo({ top: 0 })
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export function Home() {
  const location = useLocation()

  // Handle navigation from another route (state.scrollTo) or a #hash on load.
  useEffect(() => {
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo
    const hash = location.hash.replace('#', '')
    const id = target || hash
    if (id) {
      const t = setTimeout(() => scrollToId(id), 100)
      return () => clearTimeout(t)
    }
  }, [location])

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'La Braceria',
    servesCuisine: ['Grigliata', 'Steakhouse', 'Italiana', 'Barbecue'],
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteInfo.address,
      addressLocality: siteInfo.city,
      postalCode: siteInfo.zip,
      addressRegion: siteInfo.province,
      addressCountry: 'IT',
    },
    telephone: siteInfo.phone,
    sameAs: [siteInfo.social.instagram, siteInfo.social.facebook],
  }

  return (
    <>
      <Helmet>
        <title>La Braceria | Carne alla brace · Food &amp; Music · Castel Maggiore</title>
        <meta
          name="description"
          content="La Braceria a Castel Maggiore: carne selezionata cotta sulla brace di legna, pasta fresca fatta in casa, salumi e dolci artigianali. Musica dal vivo il giovedì e venerdì."
        />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Hero />
      <Specialties />
      <BraceSection />
      <RestaurantSplit />
      <Story />
      <LiveMusic />
      <Gallery />
      <Reviews />
      <Reservation />
      <Contact />
    </>
  )
}
