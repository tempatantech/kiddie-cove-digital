import Image from 'next/image'
import Link from 'next/link'
import { MapPin } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:px-6 md:py-20">
        <div className="flex flex-col items-start gap-6">
          <p className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-bold text-secondary-foreground">
            <MapPin className="size-4" aria-hidden="true" />
            Iskandar Puteri, Johor
          </p>
          <h1 className="font-serif text-4xl font-bold leading-tight text-primary text-balance md:text-5xl lg:text-6xl">
            Where little explorers grow, at their own tide.
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
            Kiddie Cove is a boutique, European-inspired play school where
            children aged 18 months to 6 years learn through wonder, nature,
            and unhurried play &mdash; in a campus designed to protect their
            childhood and their privacy.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#visit"
              className="rounded-full bg-primary px-7 py-3.5 font-bold text-primary-foreground transition-transform hover:scale-105"
            >
              Book a Private Tour
            </Link>
            <Link
              href="#philosophy"
              className="rounded-full border-2 border-primary px-7 py-3.5 font-bold text-primary transition-colors hover:bg-secondary"
            >
              Our Philosophy
            </Link>
          </div>
          <dl className="mt-2 flex gap-8">
            <div>
              <dt className="text-sm text-muted-foreground">Class ratio</dt>
              <dd className="font-serif text-2xl font-bold text-primary">1 : 5</dd>
            </div>
            <div>
              <dt className="text-sm text-muted-foreground">Ages</dt>
              <dd className="font-serif text-2xl font-bold text-primary">18m &ndash; 6y</dd>
            </div>
            <div>
              <dt className="text-sm text-muted-foreground">Outdoor time daily</dt>
              <dd className="font-serif text-2xl font-bold text-primary">2 hrs+</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2.5rem] rounded-tl-[6rem]">
            <Image
              src="/images/hero-children-playing.png"
              alt="Children playing with wooden blocks in a bright, airy Kiddie Cove classroom"
              width={720}
              height={560}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-2xl bg-accent px-5 py-3 font-serif text-lg font-bold text-accent-foreground shadow-lg md:-left-8">
            Play is serious learning
          </div>
        </div>
      </div>
    </section>
  )
}
