import { Instagram, Facebook, MapPin, Phone, Music } from 'lucide-react'
import { Link } from 'react-router-dom'
import { LogoBadge } from '../ui/LogoBadge'
import { siteInfo } from '../../data/siteInfo'

export function Footer() {
  return (
    <footer className="relative bg-wood-deep texture-wood pt-24 pb-12 text-parchment">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <LogoBadge className="h-12 w-12" />
              <span className="font-serif text-3xl font-bold uppercase">La Braceria</span>
            </div>
            <p className="font-script text-2xl text-straw">Food &amp; Music</p>
            <p className="mt-3 leading-relaxed text-parchment/60">
              «Il fuoco di legna, la carne giusta e un po’ di buona musica.»
            </p>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-straw">Navigazione</h4>
            <ul className="space-y-3 font-light text-parchment/70">
              <li><Link to="/" className="transition hover:text-ember">Home</Link></li>
              <li><Link to="/menu" className="transition hover:text-ember">Menu</Link></li>
              <li><a href="/#storia" className="transition hover:text-ember">Chi siamo</a></li>
              <li><a href="/#musica" className="transition hover:text-ember">Musica dal vivo</a></li>
              <li><a href="/#gallery" className="transition hover:text-ember">Gallery</a></li>
              <li><a href="/#contatti" className="transition hover:text-ember">Contatti</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-straw">La cucina</h4>
            <ul className="space-y-3 font-light text-parchment/70">
              <li><Link to="/menu#brace" className="transition hover:text-ember">Carne alla brace</Link></li>
              <li><Link to="/menu#primi" className="transition hover:text-ember">Pasta fresca</Link></li>
              <li><Link to="/menu#antipasti" className="transition hover:text-ember">Taglieri &amp; salumi</Link></li>
              <li><Link to="/menu#dolci" className="transition hover:text-ember">Dolci artigianali</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-straw">Contatti</h4>
            <ul className="space-y-4 font-light text-parchment/70">
              <li className="flex items-start gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-ember" />{siteInfo.address}, {siteInfo.city} ({siteInfo.province})</li>
              <li className="flex items-center gap-3"><Phone size={18} className="shrink-0 text-ember" /><a href={siteInfo.phoneHref} className="hover:text-ember">{siteInfo.phone}</a></li>
              <li className="flex items-center gap-3"><Music size={18} className="shrink-0 text-ember" />{siteInfo.liveMusic}</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a href={siteInfo.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full border border-straw/30 transition hover:bg-straw hover:text-wood-deep">
                <Instagram size={18} />
              </a>
              <a href={siteInfo.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-11 w-11 items-center justify-center rounded-full border border-straw/30 transition hover:bg-straw hover:text-wood-deep">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-parchment/10 pt-8 text-center text-xs uppercase tracking-widest text-parchment/40">
          © {new Date().getFullYear()} La Braceria · Food &amp; Music · Castel Maggiore (BO) · Tutti i diritti riservati
        </div>
      </div>
    </footer>
  )
}
