import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, MessageCircle } from 'lucide-react'
import { SITE, NAV_LINKS } from '../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock page scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const navClass = ({ isActive }) =>
    `relative text-sm font-semibold pb-1 transition-colors ${
      isActive
        ? 'text-gold-400'
        : scrolled
          ? 'text-navy-800 hover:text-navy-900'
          : 'text-white/85 hover:text-white'
    } after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:bg-gold-500 after:transition-all ${
      isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
    }`

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-paper-50/95 backdrop-blur-md shadow-sm2 py-3' : 'py-5'
      }`}
    >
      <div className="container-xl flex items-center justify-between gap-6">
        <Link
          to="/"
          className={`flex items-center gap-2 font-serif font-bold text-xl transition-colors ${
            scrolled ? 'text-navy-900' : 'text-white'
          }`}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-gold-500 inline-block" />
          {SITE.name}
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={navClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`https://wa.me/${SITE.phoneRaw}`}
            target="_blank" rel="noreferrer"
            className="flex items-center gap-2 bg-[#25D366] text-white text-sm font-bold px-4 py-2.5 rounded-full shadow-[0_10px_26px_-10px_rgba(37,211,102,0.55)] hover:-translate-y-0.5 transition-transform"
          >
            <MessageCircle size={16} /> WhatsApp
          </a>
          <Link
            to="/contact"
            className={`text-sm font-bold px-4 py-2.5 rounded-full hover:-translate-y-0.5 transition-all ${
              scrolled ? 'bg-navy-900 text-white hover:bg-navy-800' : 'bg-gold-500 text-navy-900 hover:bg-gold-400'
            }`}
          >
            Book Free Demo
          </Link>
        </div>

        <button
          className={`lg:hidden p-2 transition-colors ${scrolled ? 'text-navy-900' : 'text-white'}`}
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={26} />
        </button>
      </div>

      {/* Mobile drawer — solid background, own scroll, above everything */}
      <div
        className={`fixed inset-0 z-[100] bg-navy-900 flex flex-col items-start justify-center gap-7 px-10 transition-transform duration-300 ease-out lg:hidden ${
          open ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
      >
        <button
          className="absolute top-6 right-6 text-white p-2"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          <X size={26} />
        </button>

        {NAV_LINKS.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === '/'}
            onClick={() => setOpen(false)}
            className={({ isActive }) => `text-xl font-semibold ${isActive ? 'text-gold-400' : 'text-paper-100'}`}
          >
            {l.label}
          </NavLink>
        ))}

        <div className="flex flex-col gap-3 w-full max-w-xs mt-4">
          <a
            href={`https://wa.me/${SITE.phoneRaw}`}
            target="_blank" rel="noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 bg-[#25D366] text-white text-sm font-bold px-4 py-3 rounded-full"
          >
            <MessageCircle size={16} /> WhatsApp
          </a>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="text-center bg-gold-500 text-navy-900 text-sm font-bold px-4 py-3 rounded-full"
          >
            Book Free Demo
          </Link>
        </div>
      </div>
    </header>
  )
}
