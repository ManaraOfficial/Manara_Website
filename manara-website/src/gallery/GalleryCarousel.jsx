import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { client } from '../gallery/sanity'
import GalleryCardView from './GalleryCardView'
import SectionHeader from '../components/reusableComp/SectionHeader'

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
  const { t } = useTranslation()
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
    <section className="min-h-screen bg-gradient-to-b from-[deeppink]/5 via-[#F8FAFC] to-white dark:from-[deeppink]/10 dark:via-[#0c0c0c] dark:to-[#0a0a0a] pb-20 px-4 flex flex-col items-center justify-start overflow-hidden"  id="gallery">
      {/* Title Header */}
      <SectionHeader
        title={t('home.gallery.title')}
        subtitle={t('home.gallery.subtitle')}
      />

      {/* Top Pill Navigation Bar */}
      <div className="flex gap-2 bg-slate-200/60 dark:bg-white/5 backdrop-blur-md p-1.5 rounded-full mb-10 shadow-inner border border-slate-200/80 dark:border-white/15">
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
                  : 'bg-transparent text-[#404040] dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-white/10 hover:text-black dark:hover:text-white'
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
            'translate-x-0 scale-100 opacity-100 z-10 shadow-xl shadow-slate-200/80 dark:shadow-none border border-slate-100 dark:border-white/15'
          if (offset === -1) {
            transformStyles =
              '-translate-x-1/4 scale-90 opacity-60 z-0 cursor-pointer shadow-lg dark:shadow-none border border-slate-200/60 dark:border-white/15'
          } else if (offset === 1) {
            transformStyles =
              'translate-x-1/4 scale-90 opacity-60 z-0 cursor-pointer shadow-lg dark:shadow-none border border-slate-200/60 dark:border-white/15'
          }

          const categoryAlbums = albums.filter((alb) => alb.category === cat.value)

          return (
            <div
              key={cat.value}
              onClick={() => offset !== 0 && setActiveCategory(cat.value)}
              className={`absolute w-full max-w-3xl h-full bg-white dark:bg-[#1c1c1c] rounded-3xl p-6 transition-all duration-500 ease-out ${transformStyles}`}
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
