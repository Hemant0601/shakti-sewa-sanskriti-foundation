import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/volunteer', label: 'Volunteer' },
  { path: '/donate', label: 'Donate' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-white/80 backdrop-blur-sm py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg transition-all duration-500 bg-saffron group-hover:scale-110 animate-pulse-glow ${scrolled ? 'scale-100' : 'scale-110'}`}>
              S3F
            </div>
            <div className="hidden sm:block">
              <span className="font-heading font-bold text-maroon text-lg leading-tight block transition-colors duration-300 group-hover:text-saffron">
                Shakti Sewa Sanskriti
              </span>
              <span className="text-xs text-gray-500 -mt-1 block">Foundation</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.path ? 'text-saffron' : 'text-gray-700 hover:text-saffron'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-saffron rounded-full transition-all duration-300 ${location.pathname === link.path ? 'w-6' : 'w-0'}`} />
              </Link>
            ))}
            <Link to="/donate" className="ml-2 bg-saffron hover:bg-saffron-dark text-white px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg btn-ripple">
              Donate
            </Link>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md text-gray-600 hover:text-saffron hover:bg-gray-100 transition-colors" aria-label="Toggle menu">
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current rounded transition-all duration-300 origin-left ${open ? 'rotate-45 translate-x-px' : ''}`} />
              <span className={`w-full h-0.5 bg-current rounded transition-all duration-300 ${open ? 'opacity-0 translate-x-4' : ''}`} />
              <span className={`w-full h-0.5 bg-current rounded transition-all duration-300 origin-left ${open ? '-rotate-45 translate-x-px' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white/95 backdrop-blur-md border-t px-4 py-3 space-y-1">
          {navLinks.map((link, i) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-all duration-300 ${
                location.pathname === link.path
                  ? 'text-saffron bg-saffron/10'
                  : 'text-gray-700 hover:text-saffron hover:bg-saffron/5 hover:translate-x-2'
              }`}
              style={{ transitionDelay: open ? `${i * 50}ms` : '0ms' }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
