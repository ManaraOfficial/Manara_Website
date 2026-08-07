import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { urlFor } from '../gallery/sanity'

export default function GalleryCardView({ title, categoryValue, albums, loading }) {
  const { t } = useTranslation()
  const navigate = useNavigate()

  // Grab preview images across albums for the carousel card
  const previewImages = albums
    .flatMap((album) => album.images || [])
    .slice(0, 6)

  return (
    <div className="h-full flex flex-col justify-between">
      {/* Category Card Title */}
      <div className="mb-4 pb-2 border-b border-slate-100 flex items-center justify-between">
        <h3 className="text-xl font-bold text-[#404040]">{title}</h3>
        <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full">
          {albums.length} {albums.length === 1 ? t('common.album') : t('common.albums')}
        </span>
      </div>

      {loading ? (
        <div className="h-full flex items-center justify-center text-slate-400 font-medium">
          {t('common.loadingPreview')}
        </div>
      ) : previewImages.length === 0 ? (
        <div className="h-full flex items-center justify-center text-slate-400 font-medium">
          {t('common.noAlbums')}
        </div>
      ) : (
        <>
          {/* 6-Photo Preview Grid */}
          <div className="grid grid-cols-3 gap-3 overflow-y-auto max-h-[380px] p-1">
            {previewImages.map((img, idx) => (
              <div
                key={idx}
                className="w-full h-36 rounded-xl overflow-hidden bg-slate-100 shadow-sm"
              >
                <img
                  src={urlFor(img).width(400).url()}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* Navigate to Dedicated Category Page */}
          <div className="flex justify-center pt-3">
            <button
              onClick={() => navigate(`/gallery/${categoryValue}`)}
              className="bg-gradient-to-r from-[#EC8134] to-[#D34A32] text-white text-xs font-semibold px-6 py-2.5 rounded-full shadow-md hover:opacity-95 transition-all"
            >
              {t('common.loadMoreViewAlbums')}
            </button>
          </div>
        </>
      )}
    </div>
  )
}
