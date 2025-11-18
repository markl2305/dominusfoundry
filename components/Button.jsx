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
}

export default function Button({
  href,
  children,
  variant = 'primary',
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
