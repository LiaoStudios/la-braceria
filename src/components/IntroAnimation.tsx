import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const REVEAL_MS = 2000 // how long the logo shows before flying up
const HARD_CAP_MS = 4200 // absolute fallback so the intro can NEVER get stuck

type Phase = 'play' | 'handoff' | 'gone'

interface Rect {
  x: number
  y: number
  size: number
}

function prefersReduced() {
  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  } catch {
    return false
  }
}

// Where the intro's own logo currently sits (measured live, since its
// position isn't a fixed fraction of the screen on every viewport).
function introLogoRect(): Rect {
  const el = document.querySelector('[data-intrologo]')
  if (el) {
    const r = el.getBoundingClientRect()
    return { x: r.x + r.width / 2, y: r.y + r.height / 2, size: r.width }
  }
  const vw = window.innerWidth
  const vh = window.innerHeight
  return { x: vw / 2, y: vh * 0.44, size: Math.min(256, Math.max(224, vw * 0.55)) }
}

// Where the navbar logo badge ("pallino") currently is.
function navLogoRect(): Rect {
  const el = document.querySelector('[data-navlogo]')
  if (el) {
    const r = el.getBoundingClientRect()
    return { x: r.x + r.width / 2, y: r.y + r.height / 2, size: r.width }
  }
  return { x: window.innerWidth / 2, y: 48, size: 64 }
}

/**
 * Intro: on a dark ember screen the La Braceria flame emblem flickers to life,
 * then the roundel shrinks and flies up into the navbar badge (the "pallino")
 * while the backdrop fades to reveal the home — a seamless hand-off. Plays on
 * every load (skipped with reduced motion). Timer-driven so it can never hang.
 */
export function IntroAnimation({ onFinish }: { onFinish?: () => void }) {
  const [phase, setPhase] = useState<Phase>(() =>
    typeof window !== 'undefined' && !prefersReduced() ? 'play' : 'gone',
  )
  const [from, setFrom] = useState<Rect | null>(null)
  const [to, setTo] = useState<Rect | null>(null)
  const handedOff = useRef(false)
  const finished = useRef(false)

  const finish = () => {
    if (finished.current) return
    finished.current = true
    setPhase('gone')
    onFinish?.()
  }

  useEffect(() => {
    if (phase === 'gone') onFinish?.()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const startHandoff = () => {
    if (handedOff.current) return
    handedOff.current = true
    setFrom(introLogoRect())
    setTo(navLogoRect())
    setPhase('handoff')
  }

  useEffect(() => {
    if (phase !== 'play') return
    const t = window.setTimeout(startHandoff, REVEAL_MS)
    const cap = window.setTimeout(startHandoff, HARD_CAP_MS)
    return () => {
      window.clearTimeout(t)
      window.clearTimeout(cap)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase])

  if (phase === 'gone') return null

  return (
    <div className="fixed inset-0 z-[200]">
      {/* dark ember backdrop — fades out during the hand-off to reveal the home */}
      <motion.div
        className="absolute inset-0 bg-wood-deep texture-wood"
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === 'handoff' ? 0 : 1 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
      >
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(60% 50% at 50% 44%, rgba(193,68,14,0.35), rgba(24,15,9,0) 70%)' }}
        />
      </motion.div>

      {phase === 'play' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            {/* The real logo (from the client's own Facebook page) — the exact
                same image used everywhere else on the site (navbar, footer,
                story). It's already a circular badge, so nothing wraps it. */}
            <motion.div
              data-intrologo
              animate={{ opacity: [1, 0.86, 0.97, 0.9, 1] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
              style={{ filter: 'drop-shadow(0 0 45px rgba(217,106,43,0.55))' }}
            >
              <img src="/logo.webp" alt="La Braceria" className="h-56 w-56 rounded-full object-cover sm:h-64 sm:w-64" />
            </motion.div>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.35em] text-straw/80">
              Castel Maggiore
            </p>
          </motion.div>
        </div>
      )}

      {phase === 'handoff' && from && to && (
        <motion.div
          className="absolute overflow-hidden rounded-full shadow-ember"
          style={{ x: '-50%', y: '-50%' }}
          initial={{ left: from.x, top: from.y, width: from.size, height: from.size }}
          animate={{ left: to.x, top: to.y, width: to.size, height: to.size }}
          transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
          onAnimationComplete={finish}
        >
          <img src="/logo.webp" alt="La Braceria" className="h-full w-full object-cover" />
        </motion.div>
      )}

      {phase === 'play' && (
        <button
          onClick={startHandoff}
          className="absolute bottom-6 right-6 z-10 rounded-full bg-parchment/15 px-5 py-2 text-xs font-bold uppercase tracking-widest text-parchment backdrop-blur transition hover:bg-parchment/25"
        >
          Salta
        </button>
      )}
    </div>
  )
}
