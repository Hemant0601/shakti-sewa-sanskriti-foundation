import { useState, useEffect } from 'react'
import { getAllImages, projects } from '../data/projects'
import AnimateIn from '../components/AnimateIn'

export default function Gallery() {
  const allImages = getAllImages()
  const categories = ['All', ...projects.map((p) => p.name)]
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState(null)
  const [lightboxVisible, setLightboxVisible] = useState(false)

  const filtered = active === 'All' ? allImages : allImages.filter((img) => img.category === active)

  const openLightbox = (img) => {
    setLightbox(img)
    requestAnimationFrame(() => setLightboxVisible(true))
  }

  const closeLightbox = () => {
    setLightboxVisible(false)
    setTimeout(() => setLightbox(null), 300)
  }

  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  return (
    <>
      <section className="relative bg-maroon text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/images/sanskriti/sanskriti 5.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon/80 to-maroon" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <AnimateIn variant="fadeUp"><h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">Gallery</h1></AnimateIn>
          <AnimateIn variant="fadeUp" delay={200}><p className="text-gray-200 text-lg">Moments captured from our Sewa activities</p></AnimateIn>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <AnimateIn variant="fadeUp">
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    active === cat
                      ? 'bg-saffron text-white scale-105 shadow-lg shadow-saffron/25'
                      : 'bg-gray-100 text-gray-700 hover:bg-saffron/10 hover:text-saffron hover:scale-105'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimateIn>

          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {filtered.map((img, i) => (
              <div
                key={`${img.src}-${i}`}
                className="break-inside-avoid cursor-pointer group"
                onClick={() => openLightbox(img)}
                style={{ animationDelay: `${(i % 12) * 50}ms` }}
              >
                <div className="relative overflow-hidden rounded-xl shadow hover:shadow-xl transition-all duration-500 card-hover">
                  <img
                    src={img.src}
                    alt={img.category}
                    className="w-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                    <span className="text-white text-sm font-semibold p-4">{img.category}</span>
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
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
            lightboxVisible ? 'bg-black/85 backdrop-blur-sm' : 'bg-black/0'
          }`}
          onClick={closeLightbox}
        >
          <div
            className={`relative max-w-4xl max-h-[90vh] transition-all duration-500 ${
              lightboxVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.category}
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
            />
            <p className="text-white text-center mt-3 text-sm font-medium">{lightbox.category}</p>
            <button
              onClick={closeLightbox}
              className="absolute -top-3 -right-3 bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-saffron hover:text-white transition-all duration-300 text-xl font-bold shadow-lg hover:scale-110"
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
