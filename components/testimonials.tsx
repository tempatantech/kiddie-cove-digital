const testimonials = [
  {
    quote:
      'We toured six kindergartens across Johor Bahru. Kiddie Cove was the only one that spoke about our daughter\u2019s privacy before we even had to ask.',
    name: 'A parent of a Little Sailor',
    detail: 'Family based in Puteri Harbour',
  },
  {
    quote:
      'Our son used to cling at every drop-off. Three weeks into Rock Pool, he runs to the garden gate. The key-educator model genuinely works.',
    name: 'A parent of a Rock Pool explorer',
    detail: 'Family based in Horizon Hills',
  },
  {
    quote:
      'The learning documentation we receive is beautiful — thoughtful notes and photos shared only with us. It feels like a window into his world, not a broadcast.',
    name: 'A parent of a Wayfinder',
    detail: 'Family based in Bukit Indah',
  },
]

export function Testimonials() {
  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 font-serif text-lg font-semibold text-accent">From Our Families</p>
          <h2 className="font-serif text-3xl font-bold text-primary text-balance md:text-4xl">
            Trusted by families across Johor Bahru
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
            In keeping with our privacy promise, testimonials are shared
            anonymously &mdash; with our families&rsquo; blessing.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="flex flex-col gap-4 rounded-3xl bg-card p-8">
              <blockquote className="leading-relaxed text-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-auto">
                <p className="font-serif font-bold text-primary">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
