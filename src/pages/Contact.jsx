import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, MessageCircle, Info } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import Toast from '../components/Toast'
import { SITE } from '../data/content'

const COURSE_OPTIONS = ['State Board', 'CBSE', 'ICSE', 'NEET', 'JEE', 'MHT-CET']

export default function Contact() {
  const [toast, setToast] = useState('')
  const [form, setForm] = useState({ name: '', phone: '', course: '', message: '' })

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    setToast(`Thanks ${form.name || 'there'}! In the live site, this enquiry saves straight to a Google Sheet and emails the owner instantly.`)
    setForm({ name: '', phone: '', course: '', message: '' })
  }

  return (
    <>
      <PageHeader
        eyebrow="Get In Touch"
        title="Book a free demo class"
        subtitle="Fill the form, call, or message us on WhatsApp — whichever is easiest for you."
      />

      <section className="py-24">
        <div className="container-xl grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <Reveal className="lg:col-span-3">
            <form onSubmit={onSubmit} className="bg-white rounded-2xl shadow-sm2 p-8 space-y-5">
              <div className="flex items-start gap-2.5 bg-gold-500/10 text-navy-800 text-xs rounded-xl px-4 py-3 leading-relaxed">
                <Info size={15} className="mt-0.5 shrink-0 text-gold-600" />
                In the live site, this form saves every entry to a Google Sheet and emails you instantly — no dashboard needed.
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wide text-navy-400">Parent / Student Name</label>
                  <input required name="name" value={form.name} onChange={onChange}
                    className="mt-1.5 w-full rounded-lg border border-navy-100 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                    placeholder="e.g. Rahul Sharma" />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-wide text-navy-400">Phone Number</label>
                  <input required name="phone" value={form.phone} onChange={onChange} type="tel"
                    className="mt-1.5 w-full rounded-lg border border-navy-100 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                    placeholder="98xxxxxxxx" />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wide text-navy-400">Course Interested In</label>
                <select name="course" value={form.course} onChange={onChange}
                  className="mt-1.5 w-full rounded-lg border border-navy-100 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 bg-white">
                  <option value="">Select a course</option>
                  {COURSE_OPTIONS.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wide text-navy-400">Message (optional)</label>
                <textarea name="message" value={form.message} onChange={onChange} rows={4}
                  className="mt-1.5 w-full rounded-lg border border-navy-100 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                  placeholder="Any specific questions before the demo class?" />
              </div>
              <button type="submit" className="w-full bg-navy-900 text-white font-bold py-3.5 rounded-full hover:bg-navy-800 hover:-translate-y-0.5 transition-all">
                Request Free Demo Class
              </button>
            </form>
          </Reveal>

          {/* Info */}
          <Reveal delay={120} className="lg:col-span-2 space-y-5">
            <div className="bg-navy-900 text-white rounded-2xl p-7 space-y-5">
              <a href={`tel:${SITE.phoneRaw}`} className="flex items-start gap-3 group">
                <Phone size={18} className="text-gold-400 mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs uppercase tracking-wide text-white/50">Call Us</div>
                  <div className="font-semibold group-hover:text-gold-300">{SITE.phone}</div>
                </div>
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-start gap-3 group">
                <Mail size={18} className="text-gold-400 mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs uppercase tracking-wide text-white/50">Email</div>
                  <div className="font-semibold group-hover:text-gold-300">{SITE.email}</div>
                </div>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-gold-400 mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs uppercase tracking-wide text-white/50">Location</div>
                  <div className="font-semibold">{SITE.address}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-gold-400 mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs uppercase tracking-wide text-white/50">Hours</div>
                  {SITE.hours.map((h) => <div key={h} className="font-semibold">{h}</div>)}
                </div>
              </div>
              <a
                href={`https://wa.me/${SITE.phoneRaw}?text=Hi, I'd like to know more about admissions.`}
                target="_blank" rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3 rounded-full hover:-translate-y-0.5 transition-transform"
              >
                <MessageCircle size={17} /> Chat on WhatsApp
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm2 aspect-[4/3]">
              <iframe
                title="Location map"
                src={SITE.mapsEmbed}
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <Toast message={toast} onClose={() => setToast('')} />
    </>
  )
}
