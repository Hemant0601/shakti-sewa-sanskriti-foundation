import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { projects } from '../data/projects'
import AnimateIn from '../components/AnimateIn'

function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0
  return (
    <div id={project.id} className="scroll-mt-24">
      <AnimateIn variant={isEven ? 'fadeRight' : 'fadeLeft'} duration={800}>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover group">
          <div className={`md:flex ${!isEven ? 'md:flex-row-reverse' : ''}`}>
            <div className="md:w-2/5 overflow-hidden">
              <img
                src={project.images[0]}
                alt={project.name}
                className="w-full h-64 md:h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-6 md:p-8 md:w-3/5">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-4xl group-hover:scale-125 transition-transform duration-300">{project.icon}</span>
                <div>
                  <h2 className="font-heading text-2xl font-bold text-maroon group-hover:text-saffron transition-colors duration-300">{project.name}</h2>
                  <p className="text-saffron font-medium text-sm">{project.tagline}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">{project.description}</p>
              {project.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {project.images.slice(1, 5).map((img, i) => (
                    <img key={i} src={img} alt={`${project.name} ${i + 2}`} className="w-20 h-20 rounded-xl object-cover shrink-0 hover:scale-110 transition-transform duration-300 shadow-sm cursor-pointer" />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </AnimateIn>
    </div>
  )
}

export default function Projects() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
    }
  }, [location.hash])

  return (
    <>
      <section className="relative bg-maroon text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/images/paryavaran-sewa/paryavaran sewa.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon/80 to-maroon" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <AnimateIn variant="fadeUp">
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">Our Projects & Activities</h1>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={200}>
            <p className="text-gray-200 text-lg">Under different initiatives, Sewa is being done with resources, time & talent by our volunteers.</p>
          </AnimateIn>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 space-y-12">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <AnimateIn variant="fadeUp">
            <h2 className="font-heading text-3xl font-bold text-maroon mb-8 text-center">Other Initiatives</h2>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Chikitsa Sewa', icon: '\uD83C\uDFE5', desc: 'Medical assistance and awareness about traditional healing methods of yoga, ayurveda, marma chikitsa, and naturopathy.' },
              { name: 'Gau Sewa', icon: '\uD83D\uDC04', desc: 'Cow protection and feeding program dedicated to the care of cattle.' },
              { name: 'Baal Sewa', icon: '\uD83D\uDC76', desc: 'Serving orphans and lonely children who live without parents, family, or companionship.' },
              { name: 'Jeev Sewa', icon: '\uD83D\uDD4A\uFE0F', desc: 'Being compassionate towards other beings. Protecting animals from the cruelty of this world.' },
              { name: 'Yagya Sewa', icon: '\uD83D\uDD25', desc: 'Special yajnas conducted for the well-being of society and environment protection with medicinal benefits.' },
              { name: 'Samaj Sewa', icon: '\uD83E\uDD1D', desc: 'Helping people and bringing awareness about social issues and problems affecting communities.' },
            ].map((item, i) => (
              <AnimateIn key={item.name} variant="scaleUp" delay={i * 100}>
                <div className="bg-white p-6 rounded-2xl shadow card-hover group cursor-default">
                  <span className="text-4xl block mb-3 group-hover:scale-125 transition-transform duration-300">{item.icon}</span>
                  <h3 className="font-heading text-lg font-bold text-maroon mb-1 group-hover:text-saffron transition-colors duration-300">{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
