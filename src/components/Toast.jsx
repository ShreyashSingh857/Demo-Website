import { CheckCircle2, X } from 'lucide-react'

export default function Toast({ message, onClose }) {
  if (!message) return null
  return (
    <div className="fixed bottom-6 right-6 z-[100] bg-navy-900 text-white px-5 py-4 rounded-xl shadow-card flex items-start gap-3 max-w-sm animate-fade-up">
      <CheckCircle2 size={20} className="text-gold-400 mt-0.5 shrink-0" />
      <p className="text-sm leading-snug">{message}</p>
      <button onClick={onClose} className="ml-auto text-white/50 hover:text-white shrink-0">
        <X size={16} />
      </button>
    </div>
  )
}
