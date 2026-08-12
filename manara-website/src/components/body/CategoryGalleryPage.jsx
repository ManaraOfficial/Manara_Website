import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { client, urlFor } from '../../gallery/sanity'
import SectionHeader from '../reusableComp/SectionHeader'

// Lightbox imports & plugins
import Lightbox from 'yet-another-react-lightbox'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import Counter from 'yet-another-react-lightbox/plugins/counter'

import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import 'yet-another-react-lightbox/plugins/counter.css'

export default function CategoryGalleryPage() {
  const { t } = useTranslation()
  const { category } = useParams()
  const navigate = useNavigate()

  const [albums, setAlbums] = useState([])
  const [loading, setLoading] = useState(true)

  // Selected Album for Grid View
  const [selectedAlbum, setSelectedAlbum] = useState(null)

  // Pagination for Grid View (Shows 15 photos at a time)
  const [visiblePhotoCount, setVisiblePhotoCount] = useState(15)

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  useEffect(() => {
    const fetchCategoryAlbums = async () => {
      try {
        setLoading(true)
        const query = `*[_type == "gallery" && category == $category] {
          _id,
          title,
          category,
          images
        }`
        const data = await client.fetch(query, { category })
        setAlbums(data)
      } catch (err) {
        console.error('Error fetching category albums:', err)
      } finally {
        setLoading(false)
      }
    }

    if (category) fetchCategoryAlbums()
  }, [category])

  // Reset pagination when choosing an album
  const handleSelectAlbum = (album) => {
    setSelectedAlbum(album)
    setVisiblePhotoCount(15)
  }

  // Open Lightbox at a specific image index
  const openLightboxAtIndex = (index) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  // Format slides for Lightbox (High Quality)
  const lightboxSlides = (selectedAlbum?.images || []).map((img) => ({
    src: urlFor(img).width(1200).url(),
  }))

  const allImages = selectedAlbum?.images || []
  const visibleImages = allImages.slice(0, visiblePhotoCount)

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#EC8134]/5 via-[#F8FAFC] to-white dark:from-[#EC8134]/10 dark:via-[#0c0c0c] dark:to-[#0a0a0a] py-12 px-4 md:px-8" id="gallery">
      {/* CSS Override to force counter directly above the thumbnail bar */}
      <style>{`
        .yarl__counter {
          position: absolute !important;
          bottom: 20px !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          top: auto !important;
          background: rgba(0, 0, 0, 0.65);
          color: #ffffff;
          padding: 4px 12px;
          border-radius: 9999px;
          font-size: 0.85rem;
          font-weight: 600;
          backdrop-filter: blur(4px);
          z-index: 100;
        }
      `}</style>

      
      <SectionHeader
        title={selectedAlbum ? selectedAlbum.title : t('home.gallery.title')}
        subtitle={
          selectedAlbum
            ? `${t('common.showingPhotos', { count: visibleImages.length, total: allImages.length })}`
            : t('home.gallery.subtitle')
        }
      />
      {/* Back Button Navigation */}
      <div className="max-w-6xl mx-auto mb-6">
        {selectedAlbum ? (
          <button
            onClick={() => setSelectedAlbum(null)}
            className="text-sm font-semibold text-[#404040] dark:text-gray-300 hover:text-[#EC8134] flex items-center gap-1.5 transition-colors"
          >
            {t('common.backToAlbums')}
          </button>
        ) : (
          <button
            onClick={() => navigate(-1)}
            className="text-sm font-semibold text-[#404040] dark:text-gray-300 hover:text-[#EC8134] flex items-center gap-1.5 transition-colors"
          >
            {t('common.back')}
          </button>
        )}
      </div>


      <div className="max-w-6xl mx-auto mt-10" >
        {loading ? (
          <div className="text-center py-20 text-slate-400 dark:text-gray-500 font-medium">
            {t('common.loading')}
          </div>
        ) : selectedAlbum ? (
          /* ======================================================== */
          /* PHOTO GRID VIEW (With 15-photo Limit + Show More)        */
          /* ======================================================== */
          <div className="flex flex-col items-center">
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {visibleImages.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => openLightboxAtIndex(idx)}
                  className="group relative h-40 bg-slate-200 dark:bg-white/5 rounded-xl overflow-hidden cursor-pointer border border-slate-200/80 dark:border-white/15 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <img
                    src={urlFor(img).width(350).height(250).url()}
                    alt={`Photo ${idx + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {visiblePhotoCount < allImages.length && (
              <div className="mt-8 flex flex-col items-center gap-2">
                <button
                  onClick={() => setVisiblePhotoCount((prev) => prev + 15)}
                  className="bg-gradient-to-r from-[#EC8134] to-[#D34A32] text-white text-xs font-bold px-8 py-3 rounded-full shadow-md hover:opacity-95 transition-all"
                >
                  {t('common.loadMorePhotos', { remaining: allImages.length - visiblePhotoCount })}
                </button>
              </div>
            )}
          </div>
        ) : (
          /* ======================================================== */
          /* ALBUM CARDS GRID                                         */
          /* ======================================================== */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {albums.map((album) => {
              const coverImage = album.images?.[0]
              const totalPhotos = album.images?.length || 0

              return (
                <div
                  key={album._id}
                  className="bg-white dark:bg-[#1f1f23] rounded-2xl overflow-hidden border border-slate-200/80 dark:border-white/15 shadow-md dark:shadow-none flex flex-col justify-between"
                >
                  <div
                    className="relative h-56 bg-slate-100 dark:bg-white/5 cursor-pointer overflow-hidden group"
                    onClick={() => handleSelectAlbum(album)}
                  >
                    {coverImage && (
                      <img
                        src={urlFor(coverImage).width(600).height(400).url()}
                        alt={album.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                    <span className="absolute bottom-3 right-3 bg-black/80 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                      {totalPhotos} {t('common.photos')}
                    </span>
                  </div>

                  <div className="p-5 flex flex-col justify-between flex-1">
                    <h3 className="text-lg font-bold text-[#404040] dark:text-white mb-4">
                      {album.title}
                    </h3>
                    <button
                      onClick={() => handleSelectAlbum(album)}
                      className="w-full py-2.5 rounded-xl border border-slate-200 dark:border-white/15 text-[#404040] dark:text-gray-300 text-xs font-bold hover:bg-gradient-to-r hover:from-[#EC8134] hover:to-[#D34A32] hover:text-white transition-all duration-300"
                    >
                      {t('common.viewAlbumPhotos')}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={lightboxSlides}
        plugins={[Zoom, Thumbnails, Counter]}
        counter={{
          separator: ' / ',
        }}
        zoom={{ maxZoomPixelRatio: 3 }}
        thumbnails={{
          position: 'bottom',
          width: 80,
          height: 60,
          border: 2,
          borderRadius: 6,
          padding: 4,
          gap: 8,
        }}
      />
    </div>
  )
}
