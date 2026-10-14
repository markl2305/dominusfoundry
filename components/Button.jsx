"use client";

import Link from 'next/link'

/* 2026-10-14: the site-wide redesign (components/site/site.css). Same API as
   before; the variants map onto the two button forms the redesign has — solid
   (copper, press feedback) and ghost (hairline). */
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const variantStyles = {
  primary: 'btn-solid',
  forge: 'btn-solid',
  secondary: 'btn-ghost',
  forgeSecondary: 'btn-ghost',
  ghost: 'btn-ghost',
}

export default function Button({
  href,
  children,
  variant = 'forge',
  className = '',
  type = 'button',
  ...props
}) {
  const classes = classNames('btn', variantStyles[variant] || variantStyles.primary, className)

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
