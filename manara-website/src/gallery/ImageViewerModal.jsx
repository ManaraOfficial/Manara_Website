import React, { useEffect, useState } from 'react'
import { urlFor } from '../gallery/sanity'

export default function ImageViewerModal({
  isOpen,
  onClose,
  images = [],
  initialIndex = 0,
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  // Sync index when modal opens with a specific image
  useEffect(() => {
    setCurrentIndex(initialIndex)
  }, [initialIndex, isOpen])

  // Keyboard navigation support (Left/Right arrows and Escape key)
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, currentIndex, images.length])

  if (!isOpen || images.length === 0) return null

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const currentImageSrc = urlFor(images[currentIndex]).width(1400).url()

  return (
    <div className="fixed inset-0 z-50 bg-[#222222] flex flex-col justify-between overflow-hidden select-none">
      {/* Top Header / Close Bar */}
      <div className="w-full flex justify-between items-center p-4 bg-black/20 backdrop-blur-sm z-10">
        <span className="text-white/80 text-sm font-medium">
          Photo Gallery
        </span>
        <button
          onClick={onClose}
          className="text-white/80 hover:text-white text-2xl font-bold px-3 py-1 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Close viewer"
        >
          ✕
        </button>
      </div>

      {/* Main Image Stage with Side Navigation Controls */}
      <div className="relative flex-1 flex items-center justify-center p-4 md:p-8">
        {/* Left Arrow Button */}
        <button
          onClick={handlePrev}
          className="absolute left-4 md:left-8 z-20 text-white/70 hover:text-white text-3xl font-light p-3 bg-black/30 hover:bg-black/60 rounded-full transition-all"
          aria-label="Previous image"
        >
          ‹
        </button>

        {/* Display Image */}
        <div className="max-w-5xl max-h-[70vh] flex items-center justify-center">
          <img
            src={currentImageSrc}
            alt={`Gallery image ${currentIndex + 1}`}
            className="max-w-full max-h-[70vh] object-contain rounded-sm shadow-2xl transition-all duration-200"
          />
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={handleNext}
          className="absolute right-4 md:right-8 z-20 text-white/70 hover:text-white text-3xl font-light p-3 bg-black/30 hover:bg-black/60 rounded-full transition-all"
          aria-label="Next image"
        >
          ›
        </button>
      </div>

      {/* Image Counter Bar (e.g. 7 of 19) */}
      <div className="text-center py-2 text-white/80 text-sm font-medium tracking-wide">
        {currentIndex + 1} of {images.length}
      </div>

      {/* Bottom Thumbnail Strip */}
      <div className="w-full bg-[#181818] py-3 px-4 border-t border-white/10">
        <div className="flex gap-2 overflow-x-auto justify-start md:justify-center items-center scrollbar-thin scrollbar-thumb-white/20 p-1">
          {images.map((img, idx) => {
            const isSelected = idx === currentIndex
            const thumbSrc = urlFor(img).width(160).height(120).url()

            return (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative flex-shrink-0 w-20 h-14 rounded overflow-hidden transition-all duration-200 ${
                  isSelected
                    ? 'ring-2 ring-[#EC8134] scale-105 opacity-100'
                    : 'opacity-50 hover:opacity-85'
                }`}
              >
                <img
                  src={thumbSrc}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}