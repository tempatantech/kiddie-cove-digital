'use client'

import { useState, type FormEvent } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export function VisitCta() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="visit" className="bg-primary py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:px-6">
        <div className="flex flex-col gap-6">
          <div>
            <p className="mb-3 font-serif text-lg font-semibold text-accent">Visit Us</p>
            <h2 className="font-serif text-3xl font-bold text-primary-foreground text-balance md:text-4xl">
              Come see the Cove for yourself
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-primary-foreground/80 text-pretty">
              Private tours are held one family at a time, by appointment only.
              Meet our educators, walk the garden, and ask us anything &mdash;
              including the hard questions about safety and privacy.
            </p>
          </div>

          <ul className="flex flex-col gap-4 text-primary-foreground">
            <li className="flex items-start gap-3">
              <MapPin className="mt-1 size-5 shrink-0 text-accent" aria-hidden="true" />
              <span>Iskandar Puteri, Johor, Malaysia (full address shared upon tour confirmation)</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="size-5 shrink-0 text-accent" aria-hidden="true" />
              <span>Monday &ndash; Friday, 8:00 am &ndash; 3:00 pm</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="size-5 shrink-0 text-accent" aria-hidden="true" />
              <a href="tel:+60123456789" className="hover:underline">+60 12-345 6789</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-5 shrink-0 text-accent" aria-hidden="true" />
              <a href="mailto:hello@kiddiecove.my" className="hover:underline">hello@kiddiecove.my</a>
            </li>
          </ul>
        </div>

        <div className="rounded-3xl bg-background p-8">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
              <span className="flex size-16 items-center justify-center rounded-full bg-secondary font-serif text-3xl">
                🌊
              </span>
              <h3 className="font-serif text-2xl font-bold text-primary">Thank you!</h3>
              <p className="max-w-xs leading-relaxed text-muted-foreground">
                We&apos;ve received your enquiry and will be in touch within one
                working day to arrange your private tour.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <h3 className="font-serif text-2xl font-bold text-primary">Enquire about a place</h3>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="parent-name" className="text-sm font-bold text-foreground">
                  Your name
                </label>
                <input
                  id="parent-name"
                  name="name"
                  required
                  autoComplete="name"
                  className="rounded-xl border border-input bg-card px-4 py-3 text-foreground outline-none ring-ring focus:ring-2"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-bold text-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="rounded-xl border border-input bg-card px-4 py-3 text-foreground outline-none ring-ring focus:ring-2"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="child-age" className="text-sm font-bold text-foreground">
                  Child&apos;s age
                </label>
                <select
                  id="child-age"
                  name="childAge"
                  required
                  className="rounded-xl border border-input bg-card px-4 py-3 text-foreground outline-none ring-ring focus:ring-2"
                >
                  <option value="">Select an age group</option>
                  <option value="rock-pool">18 months &ndash; 3 years (Rock Pool)</option>
                  <option value="little-sailors">3 &ndash; 4 years (Little Sailors)</option>
                  <option value="wayfinders">5 &ndash; 6 years (Wayfinders)</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-bold text-foreground">
                  Anything you&apos;d like us to know? <span className="font-normal text-muted-foreground">(optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="rounded-xl border border-input bg-card px-4 py-3 text-foreground outline-none ring-ring focus:ring-2"
                />
              </div>
              <button
                type="submit"
                className="mt-2 rounded-full bg-accent px-7 py-3.5 font-bold text-accent-foreground transition-transform hover:scale-[1.02]"
              >
                Request a Private Tour
              </button>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Your details are used only to respond to this enquiry, in line
                with our privacy promise and Malaysia&apos;s PDPA.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
