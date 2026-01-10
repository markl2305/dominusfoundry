"use client";

import Link from 'next/link'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const variantStyles = {
  primary:
    'bg-[var(--foundry-accent)] text-[var(--foundry-button-text)] shadow-lg hover:bg-[var(--foundry-accent-2)] focus-visible:outline-[var(--foundry-accent-2)]',
  secondary:
    'border border-[var(--foundry-accent)] bg-transparent text-[var(--foundry-accent)] hover:border-[var(--foundry-accent-2)] hover:text-[var(--foundry-accent-2)] hover:bg-transparent focus-visible:outline-[var(--foundry-accent-2)]',
  ghost:
    'text-[var(--foundry-text)] hover:text-[var(--foundry-heading)] hover:bg-[var(--foundry-surface-2)] focus-visible:outline-[var(--foundry-accent-2)]',
  forge:
    'bg-gradient-to-b from-[var(--foundry-accent)] to-[var(--foundry-accent-2)] text-[var(--foundry-button-text)] ' +
    'border-2 border-[var(--foundry-accent-2)] border-b-4 ' +
    'shadow-[0_2px_0_rgba(0,0,0,0.15)] ' +
    'hover:from-[var(--foundry-accent-2)] hover:to-[var(--foundry-accent-2)] ' +
    'active:border-b-2 active:translate-y-[2px] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] ' +
    'font-semibold tracking-wide uppercase text-xs md:text-sm',
  forgeSecondary:
    'bg-transparent text-[var(--foundry-accent-2)] ' +
    'border-2 border-[var(--foundry-accent)] border-b-4 ' +
    'hover:border-[var(--foundry-accent-2)] ' +
    'active:border-b-2 active:translate-y-[2px] ' +
    'font-semibold tracking-wide uppercase text-xs md:text-sm',
}

export default function Button({
  href,
  children,
  variant = 'forge',
  className = '',
  type = 'button',
  ...props
}) {
  const classes = classNames(
    'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-200',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
    props.disabled ? 'opacity-60 cursor-not-allowed' : '',
    variantStyles[variant] || variantStyles.primary,
    className,
  )

  if (href) {
    const isExternal = href.startsWith('http')
    if (isExternal) {
      return (
        <a href={href} className={classes} {...props}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  )
}
