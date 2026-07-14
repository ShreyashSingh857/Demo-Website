import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { COURSES } from '../data/content'
import CTABand from '../components/CTABand'

export default function Courses() {
  return (
    <>
      <PageHeader
        eyebrow="Programs"
        title="Courses we teach"
        subtitle="From board fundamentals to competitive entrance exams — every batch is small, tested weekly, and personally tracked."
      />

      <section className="py-24">
        <div className="container-xl grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {COURSES.map((c, i) => (
            <Reveal key={c.id} delay={i * 80} className="p-8 rounded-2xl bg-white shadow-sm2 hover:shadow-card hover:-translate-y-1 transition-all flex flex-col">
              <span className="text-xs font-bold tracking-wide uppercase text-gold-600">{c.tag}</span>
              <h3 className="mt-2 font-serif text-2xl font-bold">{c.name}</h3>
              <p className="mt-3 text-sm text-navy-400 leading-relaxed flex-1">{c.desc}</p>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-navy-900">
                Enquire about this course <ArrowRight size={15} />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  )
}
