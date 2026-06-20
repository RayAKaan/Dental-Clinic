import { cn } from "@/utils/cn"
import { ChevronDown } from "lucide-react"

interface AccordionItemProps {
  title: string
  content: string
  isOpen: boolean
  onClick: () => void
}

export function AccordionItem({ title, content, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className="border-b border-neutral-200 last:border-b-0">
      <button
        onClick={onClick}
        className="flex items-start justify-between w-full py-5 px-6 text-left transition-all hover:bg-neutral-50/50 gap-4"
      >
        <span className="text-base lg:text-lg font-medium text-neutral-900 leading-snug">{title}</span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-neutral-500 transition-transform duration-200 flex-shrink-0 mt-0.5",
            isOpen && "transform rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-6 pb-6">
          <p className="text-neutral-600 leading-relaxed text-sm lg:text-base">{content}</p>
        </div>
      </div>
    </div>
  )
}
