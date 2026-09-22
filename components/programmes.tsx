import { Waves, Sailboat, Compass } from 'lucide-react'

const programmes = [
  {
    icon: Waves,
    name: 'Rock Pool',
    ages: '18 months – 3 years',
    blurb:
      'Gentle first steps away from home. Sensory play, music, and secure attachment with a consistent key educator for every child.',
    highlights: ['Key-person care model', 'Sensory & water play', 'Flexible half-day settling'],
  },
  {
    icon: Sailboat,
    name: 'Little Sailors',
    ages: '3 – 4 years',
    blurb:
      'Curiosity sets sail. Child-led projects, early bilingual immersion in English and Mandarin, and daily garden exploration.',
    highlights: ['Project-based learning', 'English & Mandarin', 'Daily outdoor hours'],
  },
  {
    icon: Compass,
    name: 'Wayfinders',
    ages: '5 – 6 years',
    blurb:
      'Confident, school-ready explorers. Early literacy and numeracy woven through play, plus leadership of the Cove garden.',
    highlights: ['School readiness', 'Atelier deep-dives', 'Community projects'],
  },
]

export function Programmes() {
  return (
    <section id="programmes" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 font-serif text-lg font-semibold text-accent">Programmes</p>
          <h2 className="font-serif text-3xl font-bold text-primary text-balance md:text-4xl">
            Three coves, one unhurried journey
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
            Small classes of no more than ten, each led by degree-qualified
            educators. Children move between coves when they are ready &mdash;
            never simply when the calendar says so.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {programmes.map((programme) => (
            <article
              key={programme.name}
              className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-8 transition-shadow hover:shadow-lg"
            >
              <span className="flex size-14 items-center justify-center rounded-full bg-accent/15 text-accent">
                <programme.icon className="size-7" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-serif text-2xl font-bold text-primary">{programme.name}</h3>
                <p className="font-semibold text-accent">{programme.ages}</p>
              </div>
              <p className="leading-relaxed text-muted-foreground">{programme.blurb}</p>
              <ul className="mt-auto flex flex-col gap-2">
                {programme.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
