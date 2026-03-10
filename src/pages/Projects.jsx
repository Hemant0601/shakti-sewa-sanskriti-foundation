import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { projects } from '../data/projects'

function ProjectCard({ project }) {
  return (
    <div id={project.id} className="scroll-mt-20">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-2/5">
            <img
              src={project.images[0]}
              alt={project.name}
              className="w-full h-64 md:h-full object-cover"
            />
          </div>
          <div className="p-6 md:p-8 md:w-3/5">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">{project.icon}</span>
              <div>
                <h2 className="font-heading text-2xl font-bold text-maroon">{project.name}</h2>
                <p className="text-saffron font-medium text-sm">{project.tagline}</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">{project.description}</p>

            {/* Image gallery for this project */}
            {project.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {project.images.slice(1, 5).map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${project.name} ${i + 2}`}
                    className="w-20 h-20 rounded-lg object-cover shrink-0"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
      }
    }
  }, [location.hash])

  return (
    <>
      <section className="bg-maroon text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Our Projects & Activities
          </h1>
          <p className="text-gray-200 text-lg">
            Under different initiatives, Sewa is being done with resources, time & talent by our
            volunteers.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 space-y-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Additional projects without images */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-heading text-2xl font-bold text-maroon mb-6 text-center">
            Other Initiatives
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Chikitsa Sewa',
                icon: '🏥',
                desc: 'Medical assistance and awareness about traditional healing methods of yoga, ayurveda, marma chikitsa, and naturopathy.',
              },
              {
                name: 'Gau Sewa',
                icon: '🐄',
                desc: 'Cow protection and feeding program dedicated to the care of cattle.',
              },
              {
                name: 'Baal Sewa',
                icon: '👶',
                desc: 'Serving orphans and lonely children who live without parents, family, or companionship.',
              },
              {
                name: 'Jeev Sewa',
                icon: '🕊️',
                desc: 'Being compassionate towards other beings. Protecting animals from the cruelty of this world.',
              },
              {
                name: 'Yagya Sewa',
                icon: '🔥',
                desc: 'Special yajnas conducted for the well-being of society and environment protection with medicinal benefits.',
              },
              {
                name: 'Samaj Sewa',
                icon: '🤝',
                desc: 'Helping people and bringing awareness about social issues and problems affecting communities.',
              },
            ].map((item) => (
              <div key={item.name} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-shadow">
                <span className="text-3xl block mb-2">{item.icon}</span>
                <h3 className="font-heading text-lg font-bold text-maroon mb-1">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
