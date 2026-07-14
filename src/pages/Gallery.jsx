import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import ImagePlaceholder from '../components/ImagePlaceholder'
import { GALLERY } from '../data/content'
import CTABand from '../components/CTABand'

export default function Gallery() {
  return (
    <>
      <PageHeader
        eyebrow="Moments"
        title="Life at Rema's Tuitions"
        subtitle="Classroom sessions, Annual Day, and everything in between — swap these placeholders for your own photos any time."
      />

      <section className="py-24">
        <div className="container-xl columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {GALLERY.map((label, i) => (
            <Reveal key={label} delay={(i % 4) * 80} className="mb-6 break-inside-avoid">
              <ImagePlaceholder label={label} ratio={i % 3 === 0 ? 'aspect-[3/4]' : 'aspect-[4/3]'} />
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  )
}
