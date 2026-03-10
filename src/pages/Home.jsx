import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { projects } from '../data/projects'
import AnimateIn from '../components/AnimateIn'

function HeroSection() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * 0.3)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="relative bg-maroon text-white overflow-hidden min-h-[90vh] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 scale-110"
        style={{
          backgroundImage: "url('/images/sanskriti/sanskriti.jpg')",
          transform: `translateY(${offset}px) scale(1.1)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-maroon/60 via-maroon/40 to-maroon" />

      {/* Decorative floating elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-saffron/10 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-gold/10 rounded-full blur-3xl animate-float-slow" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
        <AnimateIn variant="fadeDown" duration={800}>
          <p className="text-saffron font-heading text-2xl md:text-3xl mb-4 tracking-wider">Om</p>
        </AnimateIn>

        <AnimateIn variant="fadeUp" delay={200} duration={900}>
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Shakti Sewa Sanskriti
            <span className="block text-shimmer mt-2">Foundation</span>
          </h1>
        </AnimateIn>

        <AnimateIn variant="fadeUp" delay={500} duration={800}>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed">
            Working towards making this world a better, healthier, happier and prosperous place
            through <strong className="text-saffron">Shakti</strong>,{' '}
            <strong className="text-saffron">Sewa</strong> &{' '}
            <strong className="text-saffron">Sanskriti</strong>.
          </p>
        </AnimateIn>

        <AnimateIn variant="fadeUp" delay={700} duration={800}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/volunteer"
              className="bg-saffron hover:bg-saffron-dark text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300 text-lg hover:scale-105 hover:shadow-xl hover:shadow-saffron/25 btn-ripple"
            >
              Become a Volunteer
            </Link>
            <Link
              to="/donate"
              className="border-2 border-saffron text-saffron hover:bg-saffron hover:text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300 text-lg hover:scale-105 hover:shadow-xl"
            >
              Donate Now
            </Link>
          </div>
        </AnimateIn>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-saffron rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}

function ThreePillars() {
  const pillars = [
    {
      title: 'Shakti',
      subtitle: 'Empowerment',
      description: 'Upliftment of women in society by educating & empowering them through education, awareness, yoga, and vocational training.',
      image: '/images/shakti/shakti.jpg',
      color: 'from-saffron to-saffron-dark',
    },
    {
      title: 'Sewa',
      subtitle: 'Service',
      description: 'Serving different sectors of society through Anna Sewa, Vastra Sewa, Vidya Sewa, Vriddha Sewa, and many more initiatives.',
      image: '/images/anna-sewa/anna sewa.jpg',
      color: 'from-green-deep to-green-light',
    },
    {
      title: 'Sanskriti',
      subtitle: 'Culture',
      description: 'Preserving cultural heritage through concerts, training programs, classical & folk arts awareness, yoga, and cultural education.',
      image: '/images/sanskriti/sanskriti 2.jpg',
      color: 'from-maroon to-maroon-light',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn variant="fadeUp">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-center text-maroon mb-4">
            Our Three Pillars
          </h2>
        </AnimateIn>
        <AnimateIn variant="fadeUp" delay={100}>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16 text-lg">
            As the name itself indicates, S3F is devoted to Shakti, Sewa & Sanskriti
          </p>
        </AnimateIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <AnimateIn key={pillar.title} variant="fadeUp" delay={i * 200} duration={800}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover group">
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${pillar.color} opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
                </div>
                <div className="p-6">
                  <span className={`inline-block bg-gradient-to-r ${pillar.color} text-white text-xs px-4 py-1.5 rounded-full font-semibold mb-3`}>
                    {pillar.subtitle}
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-maroon mb-2 group-hover:text-saffron transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function MissionSection() {
  return (
    <section className="py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <AnimateIn variant="fadeRight">
            <div>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-maroon mb-6">
                Mission & Vision
              </h2>
              <div className="w-16 h-1 bg-saffron rounded-full mb-6" />
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                S3F was established as a voluntary movement with a vision to bring a positive change in
                society and in people's lives and in making this world a better, healthier, happier and
                prosperous place to live for coming generations as well.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                Main focus is to bring peace and prosperity among people's lives despite of their religion,
                nationality, caste, color or creed and to uplift deprived sectors of society.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-saffron font-semibold text-lg hover:text-saffron-dark transition-all duration-300 group link-underline"
              >
                Learn more about us
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </AnimateIn>
          <AnimateIn variant="fadeLeft" delay={200}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { src: '/images/yog-sewa/yog sewa.jpg', alt: 'Yog Sewa', rotate: '-rotate-2' },
                { src: '/images/vidya-sewa/vidya sewa.jpg', alt: 'Vidya Sewa', rotate: 'rotate-2' },
                { src: '/images/paryavaran-sewa/paryavaran sewa.jpg', alt: 'Paryavaran Sewa', rotate: 'rotate-1' },
                { src: '/images/vriddha-sewa/vriddha sewa s3f volunteers sepnding time at old home  .jpg', alt: 'Vriddha Sewa', rotate: '-rotate-1' },
              ].map((img, i) => (
                <div key={i} className={`${img.rotate} hover:rotate-0 transition-transform duration-500 group`}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="rounded-xl shadow-lg w-full h-44 object-cover group-hover:shadow-2xl transition-shadow duration-500"
                  />
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}

function ProjectsPreview() {
  const featured = projects.slice(0, 6)
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn variant="fadeUp">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-center text-maroon mb-4">
            Our Initiatives
          </h2>
        </AnimateIn>
        <AnimateIn variant="fadeUp" delay={100}>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16 text-lg">
            Under different initiatives, Sewa is being done with resources, time & talent by our volunteers.
          </p>
        </AnimateIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project, i) => (
            <AnimateIn key={project.id} variant="scaleUp" delay={i * 100} duration={600}>
              <Link
                to={`/projects#${project.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow card-hover block"
              >
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={project.images[0]}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute bottom-3 right-3 text-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:-translate-y-1">
                    {project.icon}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl">{project.icon}</span>
                    <h3 className="font-heading text-lg font-bold text-maroon group-hover:text-saffron transition-colors duration-300">
                      {project.name}
                    </h3>
                  </div>
                  <p className="text-saffron text-sm font-medium mb-2">{project.tagline}</p>
                  <p className="text-gray-600 text-sm line-clamp-2">{project.description}</p>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>
        <AnimateIn variant="fadeUp" delay={400}>
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="bg-maroon hover:bg-maroon-light text-white px-10 py-3.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl inline-block btn-ripple"
            >
              View All Projects
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}

function ImpactMarquee() {
  const items = ['Anna Sewa', 'Vastra Sewa', 'Vidya Sewa', 'Vriddha Sewa', 'Paryavaran Sewa', 'Yog Sewa', 'Shakti', 'Sanskriti', 'Vivah Sewa', 'Swachata Sewa']
  return (
    <section className="py-6 bg-maroon overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="text-white/60 text-lg font-heading mx-8">
            {item} <span className="text-saffron mx-2">&bull;</span>
          </span>
        ))}
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="relative bg-gradient-to-br from-saffron via-saffron-dark to-saffron text-white py-20 overflow-hidden animate-gradient">
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <AnimateIn variant="fadeUp">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            Your Little Can Mean a Lot to Someone
          </h2>
        </AnimateIn>
        <AnimateIn variant="fadeUp" delay={200}>
          <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto leading-relaxed">
            For us just a T-shirt can be nothing but for someone it can be something precious.
            Despite your nationality, religion, caste, color, creed, age and gender — you can serve.
          </p>
        </AnimateIn>
        <AnimateIn variant="fadeUp" delay={400}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/volunteer"
              className="bg-white text-saffron hover:bg-cream px-10 py-3.5 rounded-full font-semibold transition-all duration-300 text-lg hover:scale-105 hover:shadow-xl"
            >
              Volunteer With Us
            </Link>
            <Link
              to="/donate"
              className="border-2 border-white hover:bg-white hover:text-saffron px-10 py-3.5 rounded-full font-semibold transition-all duration-300 text-lg hover:scale-105"
            >
              Make a Donation
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <ThreePillars />
      <MissionSection />
      <ImpactMarquee />
      <ProjectsPreview />
      <CTASection />
    </>
  )
}
