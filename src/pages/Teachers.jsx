import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import ImagePlaceholder from '../components/ImagePlaceholder'
import { TEACHERS } from '../data/content'
import CTABand from '../components/CTABand'

export default function Teachers() {
  return (
    <>
      <PageHeader
        eyebrow="Our Faculty"
        title="Teachers who know your child by name"
        subtitle="Small batches mean our faculty tracks each student's progress personally — not just at test time."
      />

      <section className="py-24">
        <div className="container-xl grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEACHERS.map((t, i) => (
            <Reveal key={t.name + i} delay={i * 90}>
              <ImagePlaceholder label={t.name} ratio="aspect-[3/4]" />
              <h3 className="mt-4 font-serif text-lg font-bold">{t.name}</h3>
              <p className="text-xs font-bold tracking-wide uppercase text-gold-600">{t.role}</p>
              <p className="mt-2 text-sm text-navy-400 leading-relaxed">{t.bio}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  )
}
