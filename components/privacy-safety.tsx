import Image from 'next/image'
import { ShieldCheck, CameraOff, KeyRound, FileLock2, HeartPulse, UserCheck } from 'lucide-react'

const commitments = [
  {
    icon: CameraOff,
    title: 'No public faces, ever',
    body: "We never post children's faces on social media or marketing. Learning moments are shared only with you, through a private, invitation-only family portal.",
  },
  {
    icon: KeyRound,
    title: 'Gated, single-entry campus',
    body: 'Biometric entry for families and staff, a discreet drop-off driveway, and a strict authorised-pickup register verified at every collection.',
  },
  {
    icon: FileLock2,
    title: 'Confidentiality by contract',
    body: "Every educator and staff member signs binding confidentiality agreements. Your family's identity and routines stay within the Cove.",
  },
  {
    icon: UserCheck,
    title: 'Vetted, qualified educators',
    body: 'Background checks, first-aid certification, and safeguarding training for all staff — refreshed annually, without exception.',
  },
  {
    icon: HeartPulse,
    title: 'Nurse on campus',
    body: 'A registered paediatric nurse on site daily, allergy-aware kitchens, and clear medical protocols agreed with each family.',
  },
  {
    icon: ShieldCheck,
    title: 'Personal data, minimised',
    body: "We collect only what we need, store it securely in compliance with Malaysia's PDPA, and never share it with third parties.",
  },
]

export function PrivacySafety() {
  return (
    <section id="privacy" className="bg-secondary py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="mb-3 font-serif text-lg font-semibold text-accent">Privacy &amp; Safety</p>
            <h2 className="font-serif text-3xl font-bold text-primary text-balance md:text-4xl">
              Your child&rsquo;s world stays their own
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-secondary-foreground/80 text-pretty">
              Many of our families lead visible lives. We believe childhood
              should not be. Kiddie Cove is built around a simple promise:
              what happens in the Cove is shared with you &mdash; and no one
              else.
            </p>
            <div className="mt-8 overflow-hidden rounded-3xl">
              <Image
                src="/images/sensory-water-play.png"
                alt="Children's hands exploring a water sensory table with wooden boats"
                width={640}
                height={420}
                className="h-56 w-full object-cover md:h-72"
              />
            </div>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {commitments.map((item) => (
              <li key={item.title} className="rounded-2xl bg-background p-6">
                <span className="mb-3 flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <item.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="font-serif text-lg font-bold text-primary">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
