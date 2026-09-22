const rhythm = [
  {
    time: '8:00',
    title: 'A gentle arrival',
    body: 'Quiet drop-off through the garden gate. Children settle with books, puzzles, or a cuddle — whatever the morning calls for.',
  },
  {
    time: '9:00',
    title: 'Morning circle',
    body: 'Songs in English and Mandarin, sharing news, and choosing the day\u2019s explorations together.',
  },
  {
    time: '9:30',
    title: 'Garden hours',
    body: 'Out into the shaded garden — digging, climbing, watering, and wondering. Sun hats on, curiosity out.',
  },
  {
    time: '11:00',
    title: 'Atelier & projects',
    body: 'Deep, uninterrupted work on child-led projects: clay, light tables, construction, paint.',
  },
  {
    time: '12:30',
    title: 'Lunch & rest',
    body: 'Freshly cooked, allergy-aware meals eaten family-style, followed by a calm rest in soft light.',
  },
  {
    time: '14:30',
    title: 'Stories & farewell',
    body: 'Afternoon tea, storytime, and reflections. Children leave with full hearts (and usually muddy knees).',
  },
]

export function DailyRhythm() {
  return (
    <section id="day" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 font-serif text-lg font-semibold text-accent">A Day at the Cove</p>
          <h2 className="font-serif text-3xl font-bold text-primary text-balance md:text-4xl">
            A rhythm, not a timetable
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
            Days at Kiddie Cove flow like the tide &mdash; predictable enough
            to feel safe, flexible enough to follow wonder wherever it leads.
          </p>
        </div>

        <ol className="relative mx-auto flex max-w-3xl flex-col gap-8 border-s-2 border-border ps-8">
          {rhythm.map((moment) => (
            <li key={moment.time} className="relative">
              <span
                className="absolute -start-[41px] top-1 size-4 rounded-full border-4 border-background bg-accent"
                aria-hidden="true"
              />
              <p className="font-serif text-sm font-bold text-accent">{moment.time}</p>
              <h3 className="font-serif text-xl font-bold text-primary">{moment.title}</h3>
              <p className="mt-1 leading-relaxed text-muted-foreground">{moment.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
