import { ChevronLeft, ChevronRight } from 'lucide-react'

interface NavigationProps {
  currentSlide: number
  totalSlides: number
  onNext: () => void
  onPrev: () => void
}

export default function Navigation({ currentSlide, totalSlides, onNext, onPrev }: NavigationProps) {
  return (
    <div className="flex items-center justify-between w-full max-w-4xl mx-auto p-4">
      <button
        onClick={onPrev}
        className="p-2 rounded-full bg-teal-500 text-white hover:bg-teal-600 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <span className="text-lg font-semibold">
        {currentSlide + 1} / {totalSlides}
      </span>
      <button
        onClick={onNext}
        className="p-2 rounded-full bg-teal-500 text-white hover:bg-teal-600 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  )
}

