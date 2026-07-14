import { CheckCircle2 } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import ImagePlaceholder from '../components/ImagePlaceholder'
import CTABand from '../components/CTABand'

const TIMELINE = [
  { year: '1990', text: 'Rema\'s Tuitions founded in Nerul with a handful of students and a single classroom.' },
  { year: '2000s', text: 'Expanded into State Board, ICSE and CBSE coaching as demand grew across Navi Mumbai.' },
  { year: '2010s', text: 'Introduced NEET, JEE and MHT-CET batches alongside weekly testing for all students.' },
  { year: 'Today', text: '5,000+ students later, still run on the same principle: know every student personally.' },
]

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="34 years of personal, results-driven coaching"
        subtitle="Rema's Tuitions has been a fixture in Nerul (W) since 1990 — built on the belief that every student learns best when someone is paying close attention."
      />

      <section className="py-24">
        <div className="container-xl grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <ImagePlaceholder label="Mrs. Rema Nair, founder" ratio="aspect-[4/5]" className="max-w-md" />
          </Reveal>
          <Reveal delay={120}>
            <span className="eyebrow">The Mentor</span>
            <h2 className="mt-3 font-serif text-3xl font-bold">Mrs. Rema Nair</h2>
            <p className="mt-4 text-navy-400 leading-relaxed">
              What began as one teacher's commitment to her students has grown into one of Nerul's
              most trusted coaching institutes — without losing the personal touch that started it.
              Every batch stays small enough that no student is just a name on a register.
            </p>
            <ul className="mt-6 space-y-3">
              {['Prime location, 2 minutes from Nerul station', 'State Board, CBSE, ICSE, NEET, JEE & MHT-CET', 'Weekly tests with individual feedback', 'Doubt-clearing sessions after every class'].map((i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-navy-800">
                  <CheckCircle2 size={16} className="text-gold-500 mt-0.5 shrink-0" /> {i}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-paper-100/60">
        <div className="container-xl">
          <Reveal className="max-w-xl mx-auto text-center">
            <span className="eyebrow before:hidden justify-center">Our Journey</span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold">Three decades, one classroom philosophy</h2>
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.year} delay={i * 100} className="p-7 rounded-2xl bg-white shadow-sm2">
                <div className="font-serif text-2xl font-bold text-gold-600">{t.year}</div>
                <p className="mt-3 text-sm text-navy-400 leading-relaxed">{t.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
