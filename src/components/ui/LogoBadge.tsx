import { withBase } from '../../lib/paths'

/** The real La Braceria logo (from the client's Facebook profile picture) inside a round badge — used across the site. */
export function LogoBadge({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center justify-center overflow-hidden rounded-full bg-parchment ${className}`}>
      <img src={withBase('/logo.webp')} alt="La Braceria" className="h-[94%] w-[94%] rounded-full object-cover" />
    </span>
  )
}
