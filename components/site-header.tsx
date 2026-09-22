'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Shell } from 'lucide-react'

const navLinks = [
  { href: '#philosophy', label: 'Our Philosophy' },
  { href: '#programmes', label: 'Programmes' },
  { href: '#privacy', label: 'Privacy & Safety' },
  { href: '#day', label: 'A Day at the Cove' },
  { href: '#visit', label: 'Visit Us' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="#top" className="flex items-center gap-2">
          <span className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Shell className="size-5" aria-hidden="true" />
          </span>
          <span className="font-serif text-xl font-bold text-primary">Kiddie Cove</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#visit"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground transition-transform hover:scale-105"
          >
            Book a Tour
          </Link>
        </nav>

        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-full text-primary md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-4 pb-6 pt-2 md:hidden" aria-label="Mobile navigation">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-3 font-semibold text-foreground/80 hover:bg-secondary"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <Link
                href="#visit"
                className="block rounded-full bg-accent px-5 py-3 text-center font-bold text-accent-foreground"
                onClick={() => setOpen(false)}
              >
                Book a Tour
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
