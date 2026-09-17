import type { ReactNode } from 'react'

type Variant = 'primary' | 'accent' | 'ghost' | 'outline'

const base =
  'inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 rounded-full'

const variants: Record<Variant, string> = {
  primary: 'bg-ember text-parchment shadow-warm hover:bg-ember-deep hover:-translate-y-0.5',
  accent: 'bg-ember text-parchment shadow-cta hover:bg-brace hover:-translate-y-0.5',
  ghost: 'bg-parchment/10 backdrop-blur-md border border-white/25 text-parchment hover:bg-parchment/20',
  outline: 'border border-ember text-ember hover:bg-ember hover:text-parchment',
}

interface CommonProps {
  variant?: Variant
  children: ReactNode
  className?: string
}

interface LinkButton extends CommonProps {
  href: string
  onClick?: never
  type?: never
}
interface ClickButton extends CommonProps {
  href?: never
  onClick?: () => void
  type?: 'button' | 'submit'
}

export function Button(props: LinkButton | ClickButton) {
  const { variant = 'primary', children, className = '' } = props
  const cls = `${base} ${variants[variant]} ${className}`
  if ('href' in props && props.href) {
    return (
      <a href={props.href} className={cls}>
        {children}
      </a>
    )
  }
  return (
    <button type={props.type ?? 'button'} onClick={props.onClick} className={cls}>
      {children}
    </button>
  )
}
