// Optimizes the curated real photos of La Braceria into public/images/*.
// Run with: npm run images
import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'

const SRC = path.resolve('GoogleBusiness')
const g = (n) => `${SRC}/labraceria_googlebusiness_${String(n).padStart(2, '0')}.jpg`

// Real assets downloaded from the client's own Facebook page
// (facebook.com/labraceriafoodandmusic): the profile picture (real logo)
// and a curated set of live-music-night photos.
const FB = path.resolve('FacebookSource')
const fb = (name) => `${FB}/${name}`

const OUT = path.resolve('public/images')

// Curated selection (source number -> category/name). Chosen for subject & quality.
const SELECTION = [
  // Carne alla brace — il cuore del locale
  { n: 101, cat: 'meat', name: 'grigliata' },
  { n: 99, cat: 'meat', name: 'tagliata' },
  { n: 102, cat: 'meat', name: 'picanha' },
  { n: 97, cat: 'meat', name: 'costine' },
  { n: 76, cat: 'meat', name: 'bistecca' },
  { n: 2, cat: 'meat', name: 'agnello' },
  { n: 111, cat: 'meat', name: 'salsiccia' },
  { n: 108, cat: 'meat', name: 'misto' },
  { n: 81, cat: 'meat', name: 'costine-caramel' },
  { n: 90, cat: 'meat', name: 'platter' },
  // Primi — pasta fresca
  { n: 33, cat: 'primi', name: 'amatriciana' },
  { n: 27, cat: 'primi', name: 'scoglio' },
  { n: 73, cat: 'primi', name: 'spaghetti' },
  // Antipasti
  { n: 72, cat: 'antipasti', name: 'tagliere' },
  { n: 34, cat: 'antipasti', name: 'misto' },
  { n: 28, cat: 'fritto', name: 'fritto' },
  // Contorni
  { n: 29, cat: 'contorni', name: 'patate-mpacchiuse' },
  { n: 71, cat: 'contorni', name: 'patate-peperoni' },
  // Dolci & drinks
  { n: 8, cat: 'dolci', name: 'tiramisu' },
  { n: 23, cat: 'dolci', name: 'cioccolato' },
  { n: 30, cat: 'dolci', name: 'frutti' },
  { n: 79, cat: 'dolci', name: 'pannacotta' },
  { n: 80, cat: 'drinks', name: 'spritz' },
  // Locale
  { n: 11, cat: 'locale', name: 'facade-day' },
  { n: 24, cat: 'locale', name: 'facade-night' },
  { n: 7, cat: 'locale', name: 'interior-bar' },
  { n: 16, cat: 'locale', name: 'interior-sala' },
  { n: 19, cat: 'locale', name: 'interior-warm' },
  { n: 84, cat: 'locale', name: 'brace-station' },
  { n: 59, cat: 'locale', name: 'veranda-night' },
  { n: 1, cat: 'locale', name: 'garden-day' },
  { n: 12, cat: 'locale', name: 'outdoor-lights' },
]

async function run() {
  await mkdir(OUT, { recursive: true })
  const cats = [...new Set(SELECTION.map((s) => s.cat))]
  for (const c of cats) await mkdir(path.join(OUT, c), { recursive: true })

  let ok = 0
  let missing = 0
  for (const { n, cat, name } of SELECTION) {
    const src = g(n)
    if (!existsSync(src)) {
      console.warn('MISSING:', src)
      missing++
      continue
    }
    const base = path.join(OUT, cat, name)
    await sharp(src).rotate().resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 80 }).toFile(`${base}.webp`)
    await sharp(src).rotate().resize({ width: 800, withoutEnlargement: true }).webp({ quality: 78 }).toFile(`${base}-sm.webp`)
    ok++
  }

  // Hero — landscape grilled-meat shot (#100)
  const HERO = g(100)
  if (existsSync(HERO)) {
    await mkdir(path.join(OUT, 'hero'), { recursive: true })
    await sharp(HERO).rotate().resize({ width: 2000, withoutEnlargement: true }).webp({ quality: 82 }).toFile(path.join(OUT, 'hero/brace.webp'))
    await sharp(HERO).rotate().resize({ width: 1000, withoutEnlargement: true }).webp({ quality: 78 }).toFile(path.join(OUT, 'hero/brace-sm.webp'))
  }

  // The brace fire (#96) is a tall phone photo with a review sticker at the
  // bottom; a centred 16:10 crop keeps the fire + grill and drops the sticker.
  const FIRE = g(96)
  if (existsSync(FIRE)) {
    await sharp(FIRE).rotate().resize({ width: 1200, height: 750, fit: 'cover', position: 'centre' }).webp({ quality: 80 }).toFile(path.join(OUT, 'locale/brace-fire.webp'))
    await sharp(FIRE).rotate().resize({ width: 700, height: 440, fit: 'cover', position: 'centre' }).webp({ quality: 78 }).toFile(path.join(OUT, 'locale/brace-fire-sm.webp'))
  }

  // The real logo — the client's own Facebook profile picture. It's already a
  // clean circular badge (taupe roundel, cream "La Braceria / Food & Music"
  // wordmark, gradient flame mark) that fills its square frame edge-to-edge,
  // so we only need a feathered circular alpha mask to drop the 4 corner
  // background triangles and get a clean transparent-background roundel.
  const LOGO_SRC = fb('logo-fb-profile.jpg')
  if (existsSync(LOGO_SRC)) {
    const LOGO_OUT = 1000
    const base = await sharp(LOGO_SRC).resize(LOGO_OUT, LOGO_OUT).png().toBuffer()
    const r = LOGO_OUT / 2 - 3
    const maskSvg = Buffer.from(
      `<svg width="${LOGO_OUT}" height="${LOGO_OUT}"><defs><filter id="b"><feGaussianBlur stdDeviation="2"/></filter></defs>` +
        `<circle cx="${LOGO_OUT / 2}" cy="${LOGO_OUT / 2}" r="${r}" fill="white" filter="url(%23b)"/></svg>`,
    )
    const mask = await sharp(maskSvg).resize(LOGO_OUT, LOGO_OUT).toBuffer()
    const logoRounded = await sharp(base).composite([{ input: mask, blend: 'dest-in' }]).png().toBuffer()

    await sharp(logoRounded).webp({ quality: 92 }).toFile(path.resolve('public/logo.webp'))

    // Favicon: same logo, composited onto an opaque parchment square so it
    // reads cleanly as a tiny browser-tab icon.
    await sharp({ create: { width: 256, height: 256, channels: 4, background: '#F5EBD8' } })
      .composite([{ input: await sharp(logoRounded).resize(256, 256).toBuffer() }])
      .png()
      .toFile(path.resolve('public/favicon.png'))
  } else {
    console.warn('MISSING LOGO SOURCE:', LOGO_SRC)
  }

  // Musica dal vivo — real photos from past concert nights, for the dedicated
  // "Eventi" section (dark-overlay gallery treatment).
  const EVENTI = [
    { file: 'concert-02-cover-band.jpg', name: 'live-band-sax' },
    { file: 'concert-06-garden-evening.jpg', name: 'giardino-serale' },
    { file: 'concert-01-entusiasmo.jpg', name: 'entusiasmo-band' },
    { file: 'concert-03-trio-mandili.jpg', name: 'trio-mandili' },
  ]
  await mkdir(path.join(OUT, 'eventi'), { recursive: true })
  for (const { file, name } of EVENTI) {
    const src = fb(file)
    if (!existsSync(src)) {
      console.warn('MISSING EVENTO PHOTO:', src)
      continue
    }
    const base = path.join(OUT, 'eventi', name)
    await sharp(src).rotate().resize({ width: 1400, withoutEnlargement: true }).webp({ quality: 82 }).toFile(`${base}.webp`)
    await sharp(src).rotate().resize({ width: 700, withoutEnlargement: true }).webp({ quality: 78 }).toFile(`${base}-sm.webp`)
  }

  // OG image from the hero, darkened band for text legibility
  const ogSrc = existsSync(HERO) ? HERO : g(101)
  await sharp(ogSrc).rotate().resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82 }).toFile(path.resolve('public/og-image.jpg'))

  console.log(`Done. ${ok} images optimized, ${missing} missing.`)
}

run().catch((e) => {
  console.error(e)
  process.exit(1)
})
