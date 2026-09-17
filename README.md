# La Braceria — Food & Music (Castel Maggiore)

Sito web de **La Braceria**, braceria / osteria a Castel Maggiore (BO), costruito con
**Vite + React + TypeScript + Tailwind CSS + Framer Motion + lucide-react**.

Impostazione visiva: stile **old Wild West / rustico** — legno scuro, brace e fuoco,
paglia/grano, pergamena. Costruito riadattando la struttura del sito Le Volpi.

## Avvio

```bash
npm install
npm run dev        # http://localhost:5174 (o la porta assegnata da PORT)
```

Altri comandi:

```bash
npm run build      # build di produzione in dist/
npm run preview    # anteprima della build
npm run images     # ri-genera le foto ottimizzate in public/images/
```

## Struttura

- `src/pages/` — `Home.tsx` (tutte le sezioni) e `MenuPage.tsx` (menu interattivo su `/menu`)
- `src/components/sections/` — Hero, Specialties, **BraceSection**, RestaurantSplit, Story, **LiveMusic**, Gallery, Reviews, Reservation, Contact
- `src/components/layout/` — Navbar (trasparente→solida, hamburger mobile) e Footer
- `src/components/IntroAnimation.tsx` — intro: il logo reale si accende e "vola" nel pallino della navbar (saltata con `prefers-reduced-motion`)
- `src/data/` — **contenuti separati dal codice**, facili da modificare:
  - `menu.ts` — categorie e piatti (Antipasti, Primi, La Brace, Contorni, Dolci, Bevande)
  - `siteInfo.ts` — contatti, orari, social, mappa, nota musica dal vivo
  - `gallery.ts` — foto della gallery
  - `reviews.ts` — recensioni
  - `events.ts` — foto delle serate di musica dal vivo (sezione "Musica dal vivo")
- `scripts/optimize-images.mjs` — seleziona e ottimizza le foto reali (WebP responsive)

## Palette & font

- **Palette** (`tailwind.config.ts` + `src/index.css`): `ember` (brace, primario), `brace`,
  `wood`/`wood-deep`/`bark` (legno scuro), `straw` (paglia), `parchment`/`sand` (pergamena), `brass`.
- **Font** (Google Fonts): `Rye` (western), `Zilla Slab` (titoli slab), `Barlow` (testo),
  `Yellowtail` (script del logo).

## Foto & logo

Le foto reali del locale sono ottimizzate in `public/images/<categoria>/` a partire dalla cartella
`GoogleBusiness/` (accanto al progetto). Per cambiare la selezione, modifica `SELECTION` in
`scripts/optimize-images.mjs` e riesegui `npm run images`.

Il **logo** è quello vero del locale: la foto profilo Facebook ufficiale
(`facebook.com/labraceriafoodandmusic`), scaricata in alta risoluzione e ritagliata in un
roundel trasparente (`public/logo.webp`). È la STESSA immagine ovunque compaia un logo
(intro, navbar, footer, sezione "Chi siamo", favicon) — nessuna ricostruzione grafica.

Le foto della sezione **"Musica dal vivo"** vengono anch'esse dalla pagina Facebook del
locale (serate/concerti passati). Entrambi i set di sorgenti vivono in `FacebookSource/`
(accanto al progetto, stesso pattern di `GoogleBusiness/`); per aggiornarli sostituisci i
file lì e riesegui `npm run images`.

## Dati reali (Bar Hostaria La Braceria)

- Indirizzo: **Via San Giuseppe, 2/A — 40013 Castel Maggiore (BO)**
- Telefono: **+39 051 0567806** (tutti i "Prenota" chiamano questo numero: nessun booking online)
- Orari: Lun chiuso · Mar–Sab 12:00–14:00 e 20:00–23:00 · Dom 20:00–23:00
- **Musica dal vivo** ogni giovedì e venerdì

## ⚠️ Da confermare col cliente

1. **Menu**: nomi, descrizioni e **prezzi** sono ricostruiti dalle proposte note (Grigliata del
   Fuochista, Picanha, Costine caramellate, Tagliata, Patate mpacchiuse…). Da confermare.
2. **Recensioni** (`reviews.ts`): estratti reali da Google/Tripadvisor; media/conteggio indicativi.
3. **Social**: i link puntano a ricerche generiche — sostituire con gli URL ufficiali se esistono.
4. **Mappa**: l'embed usa una query per indirizzo; sostituire con il place ufficiale se disponibile.
