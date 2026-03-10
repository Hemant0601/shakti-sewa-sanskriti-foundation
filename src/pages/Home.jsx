import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

function HeroSection() {
  return (
    <section className="relative bg-maroon text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/images/sanskriti/sanskriti.jpg')" }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
        <p className="text-saffron font-heading text-xl md:text-2xl mb-2">Om</p>
        <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
          Shakti Sewa Sanskriti
          <span className="block text-saffron">Foundation</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
          Working towards making this world a better, healthier, happier and prosperous place
          through <strong className="text-saffron">Shakti</strong>,{' '}
          <strong className="text-saffron">Sewa</strong> &{' '}
          <strong className="text-saffron">Sanskriti</strong>.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/volunteer"
            className="bg-saffron hover:bg-saffron-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors text-lg"
          >
            Become a Volunteer
          </Link>
          <Link
            to="/donate"
            className="border-2 border-saffron text-saffron hover:bg-saffron hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors text-lg"
          >
            Donate Now
          </Link>
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
      description:
        'Upliftment of women in society by educating & empowering them through education, awareness, yoga, and vocational training.',
      image: '/images/shakti/shakti.jpg',
      color: 'bg-saffron',
    },
    {
      title: 'Sewa',
      subtitle: 'Service',
      description:
        'Serving different sectors of society through Anna Sewa, Vastra Sewa, Vidya Sewa, Vriddha Sewa, and many more initiatives.',
      image: '/images/anna-sewa/anna sewa.jpg',
      color: 'bg-green-deep',
    },
    {
      title: 'Sanskriti',
      subtitle: 'Culture',
      description:
        'Preserving cultural heritage through concerts, training programs, classical & folk arts awareness, yoga, and cultural education.',
      image: '/images/sanskriti/sanskriti 2.jpg',
      color: 'bg-maroon',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-maroon mb-4">
          Our Three Pillars
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          As the name itself indicates, S3F is devoted to Shakti, Sewa & Sanskriti
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`${pillar.color} text-white text-xs px-3 py-1 rounded-full font-semibold`}>
                    {pillar.subtitle}
                  </span>
                </div>
                <h3 className="font-heading text-2xl font-bold text-maroon mb-2">{pillar.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function MissionSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-maroon mb-6">
              Mission & Vision
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              S3F was established as a voluntary movement with a vision to bring a positive change in
              society and in people's lives and in making this world a better, healthier, happier and
              prosperous place to live for coming generations as well.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Main focus is to bring peace and prosperity among people's lives despite of their religion,
              nationality, caste, color or creed and to uplift deprived sectors of society.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center text-saffron font-semibold hover:text-saffron-dark transition-colors"
            >
              Learn more about us
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img
              src="/images/yog-sewa/yog sewa.jpg"
              alt="Yog Sewa"
              className="rounded-lg shadow-md w-full h-40 object-cover"
            />
            <img
              src="/images/vidya-sewa/vidya sewa.jpg"
              alt="Vidya Sewa"
              className="rounded-lg shadow-md w-full h-40 object-cover"
            />
            <img
              src="/images/paryavaran-sewa/paryavaran sewa.jpg"
              alt="Paryavaran Sewa"
              className="rounded-lg shadow-md w-full h-40 object-cover"
            />
            <img
              src="/images/vriddha-sewa/vriddha sewa s3f volunteers sepnding time at old home  .jpg"
              alt="Vriddha Sewa"
              className="rounded-lg shadow-md w-full h-40 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectsPreview() {
  const featured = projects.slice(0, 6)
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-maroon mb-4">
          Our Initiatives
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Under different initiatives, Sewa is being done with resources, time & talent by our volunteers.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project) => (
            <Link
              key={project.id}
              to={`/projects#${project.id}`}
              className="group bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl">{project.icon}</span>
                  <h3 className="font-heading text-lg font-bold text-maroon">{project.name}</h3>
                </div>
                <p className="text-saffron text-sm font-medium mb-2">{project.tagline}</p>
                <p className="text-gray-600 text-sm line-clamp-2">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/projects"
            className="bg-maroon hover:bg-maroon-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="bg-saffron text-white py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Your Little Can Mean a Lot to Someone
        </h2>
        <p className="text-lg mb-8 text-white/90">
          For us just a T-shirt can be nothing but for someone it can be something precious.
          Despite your nationality, religion, caste, color, creed, age and gender — you can serve.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/volunteer"
            className="bg-white text-saffron hover:bg-cream px-8 py-3 rounded-lg font-semibold transition-colors text-lg"
          >
            Volunteer With Us
          </Link>
          <Link
            to="/donate"
            className="border-2 border-white hover:bg-white hover:text-saffron px-8 py-3 rounded-lg font-semibold transition-colors text-lg"
          >
            Make a Donation
          </Link>
        </div>
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
      <ProjectsPreview />
      <CTASection />
    </>
  )
}
