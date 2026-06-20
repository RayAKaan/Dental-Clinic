import { MessageCircle } from 'lucide-react'

export function WhatsAppButton() {
  const phoneNumber = '918012345678' // WhatsApp number without + and spaces
  const message = 'Hello! I would like to book an appointment at White Pearl Dental Studio.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 group"
      aria-label="Book on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute right-16 bg-neutral-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Book on WhatsApp
      </span>
    </a>
  )
}
