import { useState } from 'react'
import { getAllImages, projects } from '../data/projects'

export default function Gallery() {
  const allImages = getAllImages()
  const categories = ['All', ...projects.map((p) => p.name)]
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === 'All' ? allImages : allImages.filter((img) => img.category === active)

  return (
    <>
      <section className="bg-maroon text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-gray-200 text-lg">Moments captured from our Sewa activities</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === cat
                    ? 'bg-saffron text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-saffron/10 hover:text-saffron'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {filtered.map((img, i) => (
              <div
                key={`${img.src}-${i}`}
                className="break-inside-avoid cursor-pointer group"
                onClick={() => setLightbox(img)}
              >
                <div className="relative overflow-hidden rounded-lg shadow hover:shadow-lg transition-shadow">
                  <img
                    src={img.src}
                    alt={img.category}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end">
                    <span className="text-white text-sm font-medium p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      {img.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-gray-500 py-12">No images in this category yet.</p>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img
              src={lightbox.src}
              alt={lightbox.category}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
            <p className="text-white text-center mt-2 text-sm">{lightbox.category}</p>
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-3 -right-3 bg-white text-gray-800 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors text-lg font-bold"
              aria-label="Close"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  )
}
