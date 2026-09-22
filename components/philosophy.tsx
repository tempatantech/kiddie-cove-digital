import Image from 'next/image'
import { Sprout, Palette, TreePine } from 'lucide-react'

const pillars = [
  {
    icon: Sprout,
    title: 'The child leads',
    origin: 'Inspired by Reggio Emilia, Italy',
    body: "Our educators observe each child's curiosities and build projects around them. Learning is never rushed — it unfolds at each child's own pace, documented gently and shared privately with you.",
  },
  {
    icon: TreePine,
    title: 'Nature every day',
    origin: 'Inspired by Scandinavian forest schools',
    body: 'Rain or shine, children spend hours outdoors — gardening, climbing, and exploring our shaded tropical garden. Resilience, balance, and confidence grow best under the open sky.',
  },
  {
    icon: Palette,
    title: 'A hundred languages',
    origin: 'Atelier-based expression',
    body: 'Clay, paint, music, light, and movement — children express ideas in many ways before they can write them. Our dedicated atelier gives every idea a place to take shape.',
  },
]

export function Philosophy() {
  return (
    <section id="philosophy" className="bg-primary py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 font-serif text-lg font-semibold text-accent">Our Philosophy</p>
          <h2 className="font-serif text-3xl font-bold text-primary-foreground text-balance md:text-4xl">
            The best of European early childhood, rooted in Johor
          </h2>
          <p className="mt-4 leading-relaxed text-primary-foreground/80 text-pretty">
            We studied the world&rsquo;s most respected early-years traditions
            &mdash; from the ateliers of Reggio Emilia to the forest
            kindergartens of Denmark and Norway &mdash; and brought their heart
            to Iskandar Puteri.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="flex flex-col gap-4 rounded-3xl bg-background p-8"
            >
              <span className="flex size-14 items-center justify-center rounded-2xl bg-secondary text-primary">
                <pillar.icon className="size-7" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-serif text-xl font-bold text-primary">{pillar.title}</h3>
                <p className="text-sm font-semibold text-accent">{pillar.origin}</p>
              </div>
              <p className="leading-relaxed text-muted-foreground">{pillar.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/images/atelier-art.png"
              alt="Children painting with watercolours in the Kiddie Cove atelier"
              width={640}
              height={420}
              className="h-64 w-full object-cover md:h-80"
            />
          </div>
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/images/outdoor-garden.png"
              alt="Children gardening in the Kiddie Cove tropical outdoor garden"
              width={640}
              height={420}
              className="h-64 w-full object-cover md:h-80"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
