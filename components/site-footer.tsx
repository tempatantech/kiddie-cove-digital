import Link from 'next/link'
import { Shell } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center md:flex-row md:justify-between md:px-6 md:text-left">
        <div className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Shell className="size-4" aria-hidden="true" />
          </span>
          <div>
            <p className="font-serif font-bold text-primary">Kiddie Cove</p>
            <p className="text-xs text-muted-foreground">Iskandar Puteri, Johor, Malaysia</p>
          </div>
        </div>

        <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold text-foreground/70">
          <Link href="#philosophy" className="hover:text-primary">Philosophy</Link>
          <Link href="#programmes" className="hover:text-primary">Programmes</Link>
          <Link href="#privacy" className="hover:text-primary">Privacy &amp; Safety</Link>
          <Link href="#visit" className="hover:text-primary">Visit</Link>
        </nav>

        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Kiddie Cove. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
