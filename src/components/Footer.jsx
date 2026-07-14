import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import { SITE } from '../data/content'

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
    <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.87.24-1.46 1.49-1.46H16.5V4.4c-.26-.03-1.15-.11-2.19-.11-2.17 0-3.66 1.32-3.66 3.75v2.46H8.1v3h2.55V21h2.85z"/>
  </svg>
)
const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none"/>
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white/70 pt-16 pb-6">
      <div className="container-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-11 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 font-serif font-bold text-xl text-white mb-3">
              <span className="w-2 h-2 rounded-full bg-gold-500 inline-block" />
              {SITE.name}
            </div>
            <p className="text-sm max-w-[280px]">
              Empowering students in Nerul with focused, personal coaching since 1990.
            </p>
            <div className="flex gap-2.5 mt-4">
              <a href={SITE.facebook} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold-500 flex items-center justify-center transition-colors"><FacebookIcon /></a>
              <a href={SITE.instagram} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold-500 flex items-center justify-center transition-colors"><InstagramIcon /></a>
              <a href={`tel:${SITE.phoneRaw}`} className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold-500 flex items-center justify-center transition-colors"><Phone size={16} /></a>
            </div>
          </div>
          <div>
            <h4 className="text-white text-xs tracking-wider uppercase mb-4">Explore</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="hover:text-gold-300">About Us</Link></li>
              <li><Link to="/teachers" className="hover:text-gold-300">Teachers</Link></li>
              <li><Link to="/gallery" className="hover:text-gold-300">Gallery</Link></li>
              <li><Link to="/testimonials" className="hover:text-gold-300">Testimonials</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xs tracking-wider uppercase mb-4">Courses</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/courses" className="hover:text-gold-300">CBSE</Link></li>
              <li><Link to="/courses" className="hover:text-gold-300">ICSE</Link></li>
              <li><Link to="/courses" className="hover:text-gold-300">NEET / JEE</Link></li>
              <li><Link to="/courses" className="hover:text-gold-300">MHT-CET</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xs tracking-wider uppercase mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm">
              <li>{SITE.phone}</li>
              <li>{SITE.email}</li>
              <li>Sector-10, Nerul (W), Navi Mumbai</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center gap-2 pt-6 text-xs">
          <span>© 2026 {SITE.name}. All rights reserved.</span>
          <span>Design concept — sample content, ready for your details.</span>
        </div>
      </div>
    </footer>
  )
}
