import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { client } from '../gallery/sanity'
import SectionHeader from '../components/reusableComp/SectionHeader'
import { useTheme } from '../context/ThemeContext'

export default function ReportsPage() {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const [reports, setReports] = useState([])
  const [activeCategory, setActiveCategory] = useState('all')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchReports = async () => {
      try {
        setLoading(true)
        // Fetch report data along with direct CDN URL for the document
        const query = `*[_type == "report"] | order(publishedDate desc) {
          _id,
          title,
          category,
          publishedDate,
          description,
          "fileUrl": file.asset->url
        }`
        const data = await client.fetch(query)
        setReports(data)
      } catch (err) {
        console.error('Error fetching reports:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchReports()
  }, [])

  // Filter reports based on selected category tab
  const filteredReports = activeCategory === 'all'
    ? reports
    : reports.filter((rep) => rep.category === activeCategory)

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0a0a0a] py-12 px-4 md:px-8">
      <SectionHeader
        title={t('reports.title')}
        subtitle={t('reports.subtitle')}
      />
      

      {/* Category Tabs */}
      <div className="max-w-6xl mx-auto mb-8 flex flex-wrap justify-center gap-2">
        {[
          { label: t('reports.categories.all'), value: 'all', color: theme === 'dark' ? '#cbd5e1' : '#404040' },
          { label: t('reports.categories.curiousMinds'), value: 'curious-minds', color: '#366A35' },
          { label: t('reports.categories.project28'), value: 'project28', color: 'deeppink' },
          { label: t('reports.categories.sponsorship'), value: 'sponsorship', color: '#D34A32' },
        ].map((cat) => {
          const isActive = activeCategory === cat.value
          return (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              style={{
                borderColor: cat.color,
                backgroundColor: isActive ? cat.color : 'transparent',
                color: isActive ? '#ffffff' : cat.color,
              }}
              className="px-5 py-2 rounded-full border text-xs md:text-sm font-bold transition-all duration-300 hover:cursor-pointer"
            >
              {cat.label}
            </button>
          )
        })}
      </div>

      {/* Reports List Grid */}
      <div className="max-w-4xl mx-auto mt-8">
        {loading ? (
          <div className="text-center py-20 text-slate-400 dark:text-gray-500 font-medium">
            {t('common.loadingReports')}
          </div>
        ) : filteredReports.length === 0 ? (
          <div className="text-center py-16 text-slate-400 dark:text-gray-500">
            {t('common.noReports')}
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {filteredReports.map((report) => (
              <div
                key={report._id}
                className="bg-white dark:bg-[#1f1f23] p-6 rounded-2xl border border-slate-200/80 dark:border-white/15 shadow-sm dark:shadow-none hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  {/* PDF File Icon */}
                  <div className="p-3 bg-red-50 text-red-500 rounded-xl flex-shrink-0">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 21h10a2 2 0 002-2V7.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 1H7a2 2 0 00-2 2v16a2 2 0 002 2z"
                      />
                    </svg>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-gray-500">
                        {report.category}
                      </span>
                      {report.publishedDate && (
                        <span className="text-[11px] text-slate-400 dark:text-gray-500">• {report.publishedDate}</span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white">{report.title}</h3>
                    {report.description && (
                      <p className="text-xs text-slate-500 dark:text-gray-400 mt-1">{report.description}</p>
                    )}
                  </div>
                </div>

                {/* Download Button */}
                {report.fileUrl && (
                  <a
                    href={report.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="self-start md:self-center px-6 py-2.5 bg-slate-800 text-white text-xs font-bold rounded-xl hover:bg-slate-900 transition-colors flex items-center gap-2 flex-shrink-0"
                  >
                    <span>{t('common.downloadReport')}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
