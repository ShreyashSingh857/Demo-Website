import { Link } from 'react-router-dom'
import { CheckCircle2, MessageCircle, Star } from 'lucide-react'
import { SITE, STATS, COURSES, TESTIMONIALS } from '../data/content'
import { useCountUp } from '../hooks/useCountUp'
import Reveal from '../components/Reveal'
import ImagePlaceholder from '../components/ImagePlaceholder'
import CTABand from '../components/CTABand'

const CHECKLIST = [
  '34 Years of Trusted Coaching in Nerul',
  '5,000+ Students Mentored',
  'Weekly Tests & Progress Tracking',
  'Personal, Small-Batch Attention',
  'Digital Classroom Resources',
]

function StatCounter({ value, suffix, label }) {
  const [ref, count] = useCountUp(value)
  return (
    <div ref={ref} className="text-center">
      <div className="font-serif text-4xl sm:text-5xl font-bold text-white">
        {count.toLocaleString('en-IN')}{suffix}
      </div>
      <div className="mt-1 text-xs sm:text-sm text-white/60 tracking-wide uppercase">{label}</div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{
          backgroundImage: 'radial-gradient(circle at 15% 25%, #e0b25a 0, transparent 40%), radial-gradient(circle at 85% 15%, #e0b25a 0, transparent 35%)'
        }} />
        <div className="container-xl relative grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <span className="eyebrow text-gold-400 before:bg-gold-400">Std IX & X CBSE Admissions Open</span>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] font-bold text-white">
              Empowering Students<br />Since 1990
            </h1>
            <p className="mt-5 text-white/70 max-w-md leading-relaxed">
              A trusted Nerul institute for State Board, CBSE, ICSE, NEET, JEE and MHT-CET —
              built on personal attention, weekly testing, and 34 years of results.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="bg-gold-500 text-navy-900 font-bold px-7 py-3.5 rounded-full hover:bg-gold-400 hover:-translate-y-0.5 transition-all shadow-card">
                Book Free Demo
              </Link>
              <a
                href={`https://wa.me/${SITE.phoneRaw}?text=Hi, I'd like to book a demo class.`}
                target="_blank" rel="noreferrer"
                className="flex items-center gap-2 bg-white/10 text-white font-bold px-7 py-3.5 rounded-full hover:bg-white/20 transition-all"
              >
                <MessageCircle size={18} /> WhatsApp Us
              </a>
            </div>
            <ul className="mt-9 grid sm:grid-cols-2 gap-3">
              {CHECKLIST.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-white/75">
                  <CheckCircle2 size={16} className="text-gold-400 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={150}>
            <ImagePlaceholder label="classroom, students learning" ratio="aspect-[4/5]" className="max-w-md ml-auto" />
          </Reveal>
        </div>
      </section>

      {/* Stat bar */}
      <section className="bg-navy-800 py-14 border-t border-white/5">
        <div className="container-xl grid grid-cols-2 sm:grid-cols-4 gap-8">
          {STATS.map((s) => <StatCounter key={s.label} {...s} />)}
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-24">
        <div className="container-xl">
          <Reveal className="max-w-xl">
            <span className="eyebrow">Why Rema's</span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold">A teaching style built around each child</h2>
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: 'Small Batches', d: 'Every student gets real, personal attention — not lost in a crowd.' },
              { t: 'Weekly Tests', d: 'Regular testing keeps preparation consistent all year, not just before exams.' },
              { t: 'Prime Location', d: 'Two minutes from Nerul railway station — easy for students and parents alike.' },
              { t: 'Digital Classroom', d: 'Modern teaching aids used alongside traditional board-and-chalk fundamentals.' },
              { t: 'Doubt-Clearing Hours', d: 'Dedicated time after class so no question goes unanswered.' },
              { t: '34 Years of Results', d: 'Three decades of consistent board and entrance exam performance.' },
            ].map((f, i) => (
              <Reveal key={f.t} delay={i * 80} className="p-7 rounded-2xl bg-white shadow-sm2 hover:shadow-card hover:-translate-y-1 transition-all">
                <div className="w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center mb-4">
                  <span className="w-2 h-2 rounded-full bg-gold-500" />
                </div>
                <h3 className="font-serif text-lg font-bold">{f.t}</h3>
                <p className="mt-2 text-sm text-navy-400 leading-relaxed">{f.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Courses preview */}
      <section className="py-24 bg-paper-100/60">
        <div className="container-xl">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="eyebrow">Programs</span>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold">Courses we teach</h2>
            </div>
            <Link to="/courses" className="text-sm font-bold text-navy-900 underline decoration-gold-500 decoration-2 underline-offset-4">
              View all courses →
            </Link>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COURSES.slice(0, 3).map((c, i) => (
              <Reveal key={c.id} delay={i * 100} className="p-7 rounded-2xl bg-white shadow-sm2 hover:shadow-card hover:-translate-y-1 transition-all">
                <span className="text-xs font-bold tracking-wide uppercase text-gold-600">{c.tag}</span>
                <h3 className="mt-2 font-serif text-xl font-bold">{c.name}</h3>
                <p className="mt-2 text-sm text-navy-400 leading-relaxed">{c.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial preview */}
      <section className="py-24">
        <div className="container-xl">
          <Reveal className="max-w-xl mx-auto text-center">
            <span className="eyebrow before:hidden justify-center">What parents say</span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold">Trusted across Nerul</h2>
          </Reveal>
          <Reveal delay={120} className="mt-12 max-w-2xl mx-auto p-9 rounded-2xl bg-navy-900 text-white text-center shadow-card">
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: TESTIMONIALS[0].rating }).map((_, i) => <Star key={i} size={16} className="fill-gold-400 text-gold-400" />)}
            </div>
            <p className="font-serif text-lg leading-relaxed">"{TESTIMONIALS[0].quote}"</p>
            <p className="mt-5 text-sm text-gold-300 font-semibold">{TESTIMONIALS[0].name}</p>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  )
}
