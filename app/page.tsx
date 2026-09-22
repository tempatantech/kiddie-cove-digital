import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { ImmersiveCove } from '@/components/immersive-cove'
import { Philosophy } from '@/components/philosophy'
import { Programmes } from '@/components/programmes'
import { PrivacySafety } from '@/components/privacy-safety'
import { DailyRhythm } from '@/components/daily-rhythm'
import { Testimonials } from '@/components/testimonials'
import { VisitCta } from '@/components/visit-cta'
import { SiteFooter } from '@/components/site-footer'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ImmersiveCove />
        <Philosophy />
        <Programmes />
        <PrivacySafety />
        <DailyRhythm />
        <Testimonials />
        <VisitCta />
      </main>
      <SiteFooter />
    </>
  )
}
