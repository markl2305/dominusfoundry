"use client";

import Link from 'next/link'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const variantStyles = {
  primary:
    'bg-orange-600 text-white shadow-lg hover:bg-orange-700 focus-visible:outline-orange-600',
  secondary:
    'border border-navy-200 bg-white text-navy-800 hover:border-navy-300 hover:bg-tan-100 focus-visible:outline-navy-500',
  ghost:
    'text-navy-800 hover:text-navy-900 hover:bg-tan-100 focus-visible:outline-navy-500',
  forge:
    'bg-gradient-to-b from-forge-500 to-forge-700 text-white ' +
    'border-2 border-forge-800 border-b-4 ' +
    'shadow-[0_2px_0_rgba(0,0,0,0.15)] ' +
    'hover:from-forge-600 hover:to-forge-800 ' +
    'active:border-b-2 active:translate-y-[2px] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] ' +
    'font-semibold tracking-wide uppercase text-xs md:text-sm',
  forgeSecondary:
    'bg-white text-forge-800 ' +
    'border-2 border-forge-600 border-b-4 ' +
    'hover:bg-forge-50 hover:border-forge-700 ' +
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
