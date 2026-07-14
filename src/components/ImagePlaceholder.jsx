// Branded navy/gold placeholder panel standing in for a real photo.
export default function ImagePlaceholder({ label = 'Photo', ratio = 'aspect-[4/3]', className = '' }) {
  return (
    <div
      className={`relative ${ratio} rounded-2xl overflow-hidden bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center ${className}`}
    >
      <div className="absolute inset-0 opacity-[0.08]" style={{
        backgroundImage: 'radial-gradient(circle at 20% 20%, #e0b25a 0, transparent 45%), radial-gradient(circle at 80% 80%, #e0b25a 0, transparent 45%)'
      }} />
      <div className="absolute inset-3 border border-gold-500/30 rounded-xl" />
      <span className="relative text-gold-300/90 text-xs sm:text-sm font-semibold tracking-wide text-center px-4">
        Photo — {label}
      </span>
    </div>
  )
}
