import { Star } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { TESTIMONIALS } from '../data/content'
import CTABand from '../components/CTABand'

export default function Testimonials() {
  return (
    <>
      <PageHeader
        eyebrow="What Parents & Students Say"
        title="Trusted across Nerul for 34 years"
        subtitle="Real words from the families we've worked with — swap in Google Reviews once the live site is connected."
      />

      <section className="py-24">
        <div className="container-xl grid sm:grid-cols-2 gap-7">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 90} className="p-8 rounded-2xl bg-white shadow-sm2">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => <Star key={j} size={15} className="fill-gold-500 text-gold-500" />)}
                {Array.from({ length: 5 - t.rating }).map((_, j) => <Star key={j} size={15} className="text-navy-100" />)}
              </div>
              <p className="font-serif text-lg leading-relaxed text-navy-900">"{t.quote}"</p>
              <p className="mt-5 text-sm font-bold text-gold-600">{t.name}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  )
}
