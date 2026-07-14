import { Link } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import { SITE } from '../data/content'
import Reveal from './Reveal'

export default function CTABand() {
  return (
    <section className="bg-navy-900 py-20">
      <div className="container-xl text-center">
        <Reveal>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Ready to see where your child stands?
          </h2>
          <p className="mt-3 text-white/65 max-w-lg mx-auto">
            Book a free demo class — no commitment, just a chance to meet the teachers and see how we teach.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gold-500 text-navy-900 font-bold px-7 py-3.5 rounded-full hover:bg-gold-400 hover:-translate-y-0.5 transition-all shadow-card"
            >
              Book Free Demo
            </Link>
            <a
              href={`https://wa.me/${SITE.phoneRaw}?text=Hi, I'd like to know more about admissions.`}
              target="_blank" rel="noreferrer"
              className="flex items-center gap-2 bg-white/10 text-white font-bold px-7 py-3.5 rounded-full hover:bg-white/20 transition-all"
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
