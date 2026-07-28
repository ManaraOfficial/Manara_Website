import React, { useEffect, useState } from 'react'
import { client } from '../gallery/sanity'
import GalleryCardView from './GalleryCardView'
import SectionHeader from '../../src/components/reusableComp/SectionHeader'

const CATEGORIES = [
  {
    label: 'Curious Minds',
    value: 'curious-minds',
    color: '#366A35',
    shadowClass: 'shadow-[#366A35]/30',
  },
  {
    label: 'Project 28',
    value: 'project28',
    color: 'deeppink',
    shadowClass: 'shadow-[deeppink]/30',
  },
  {
    label: 'Sponsorship',
    value: 'sponsorship',
    color: '#D34A32',
    shadowClass: 'shadow-[#D34A32]/30',
  },
]

export default function GalleryCarousel() {
  const [activeCategory, setActiveCategory] = useState('curious-minds')
  const [albums, setAlbums] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        setLoading(true)
        const query = `*[_type == "gallery"] {
          _id,
          title,
          category,
          images
        }`
        const data = await client.fetch(query)
        setAlbums(data)
      } catch (err) {
        console.error('Error fetching gallery data:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchGalleryData()
  }, [])

  const activeIndex = CATEGORIES.findIndex((cat) => cat.value === activeCategory)
  const totalCategories = CATEGORIES.length

  return (
    <section className="min-h-screen bg-[#F8FAFC] py-12 px-4 flex flex-col items-center justify-start overflow-hidden">
      {/* Title Header */}
      <SectionHeader
        title="Our Gallery"
        subtitle="Explore moments and photos across our initiatives and activities"
      />

      {/* Top Pill Navigation Bar */}
      <div className="flex gap-2 bg-slate-200/60 backdrop-blur-md p-1.5 rounded-full mb-10 shadow-inner border border-slate-200/80">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.value
          return (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              style={
                isActive
                  ? { backgroundColor: cat.color }
                  : undefined
              }
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                isActive
                  ? `text-white shadow-md ${cat.shadowClass}`
                  : 'bg-transparent text-[#404040] hover:bg-slate-200/60 hover:text-black'
              }`}
            >
              <span
                style={
                  !isActive
                    ? { backgroundColor: cat.color }
                    : undefined
                }
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  isActive ? 'bg-white' : ''
                }`}
              />
              {cat.label}
            </button>
          )
        })}
      </div>

      {/* Stacked Cards Container */}
      <div className="relative w-full max-w-4xl h-[540px] flex items-center justify-center">
        {CATEGORIES.map((cat, index) => {
          // Calculate modular offset for infinite carousel looping (-1, 0, 1)
          let offset = (index - activeIndex) % totalCategories
          if (offset < -1) offset += totalCategories
          if (offset > 1) offset -= totalCategories

          let transformStyles =
            'translate-x-0 scale-100 opacity-100 z-10 shadow-xl shadow-slate-200/80 border border-slate-100'
          if (offset === -1) {
            transformStyles =
              '-translate-x-1/4 scale-90 opacity-60 z-0 cursor-pointer shadow-lg border border-slate-200/60'
          } else if (offset === 1) {
            transformStyles =
              'translate-x-1/4 scale-90 opacity-60 z-0 cursor-pointer shadow-lg border border-slate-200/60'
          }

          const categoryAlbums = albums.filter((alb) => alb.category === cat.value)

          return (
            <div
              key={cat.value}
              onClick={() => offset !== 0 && setActiveCategory(cat.value)}
              className={`absolute w-full max-w-3xl h-full bg-white rounded-3xl p-6 transition-all duration-500 ease-out ${transformStyles}`}
            >
              <GalleryCardView
                title={cat.label}
                categoryValue={cat.value}
                themeColor={cat.color} // Dynamic color passed down to action buttons
                albums={categoryAlbums}
                loading={loading}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}