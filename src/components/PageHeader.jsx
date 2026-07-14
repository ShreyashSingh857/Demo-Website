import Reveal from './Reveal'

export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <section className="pt-36 pb-16 bg-navy-900 text-white">
      <div className="container-xl">
        <Reveal>
          {eyebrow && <span className="eyebrow text-gold-400 before:bg-gold-400 mb-3 block w-fit">{eyebrow}</span>}
          <h1 className="font-serif text-4xl sm:text-5xl font-bold">{title}</h1>
          {subtitle && <p className="mt-4 max-w-xl text-white/70">{subtitle}</p>}
        </Reveal>
      </div>
    </section>
  )
}
