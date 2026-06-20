import { Phone, MessageCircle } from 'lucide-react'

export function MobileCTA() {
  const phoneNumber = '+918012345678'
  const whatsappNumber = '918012345678'
  const message = 'Hello! I would like to book an appointment at White Pearl Dental Studio.'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 z-40 lg:hidden shadow-lg">
      <div className="grid grid-cols-2 gap-0">
        <a
          href={`tel:${phoneNumber}`}
          className="flex items-center justify-center gap-2 py-4 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span className="font-medium">Call Now</span>
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-4 bg-[#25D366] text-white hover:bg-[#20BA5A] transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="font-medium">WhatsApp</span>
        </a>
      </div>
    </div>
  )
}
