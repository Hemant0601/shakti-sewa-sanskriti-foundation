import AnimateIn from '../components/AnimateIn'
import AnimatedCounter from '../components/AnimatedCounter'

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-maroon text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/images/sanskriti/sanskriti 4.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon/80 to-maroon" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <AnimateIn variant="fadeDown"><p className="text-saffron font-heading text-xl mb-3 tracking-wider">Om</p></AnimateIn>
          <AnimateIn variant="fadeUp" delay={200}><h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">About S3F</h1></AnimateIn>
          <AnimateIn variant="fadeUp" delay={400}>
            <p className="text-gray-200 text-lg max-w-2xl mx-auto">
              Shakti Sewa Sanskriti Foundation is an NGO working towards making this world a better place with its several initiatives and projects.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <AnimateIn variant="fadeRight">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-maroon mb-2">Who We Are</h2>
                <div className="w-16 h-1 bg-saffron rounded-full mb-6" />
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  S3F (Shakti Sewa Sanskriti Foundation) is an NGO working towards making this world a
                  better place with its several initiatives and projects. As the name itself indicates,
                  it is devoted to:
                </p>
              </AnimateIn>
              <div className="space-y-6">
                {[
                  { title: 'Shakti', subtitle: 'Empowerment', text: 'Upliftment of women in society by educating & empowering them. Women education, awareness about female feticide, "Beti Bachao Beti Padhao & Beti ko sashakta banao", Vivah Sewa, creating employment opportunities, Yoga, Physical education and Vocational training.', image: '/images/shakti/shakti 2.jpg' },
                  { title: 'Sewa', subtitle: 'Service', text: 'Serving different sectors of society through different mediums \u2014 Anna Sewa (food), Vastra Sewa (clothing), Gau Sewa (cow protection), Chikitsa Sewa (medical assistance), Paryavaran Sewa (environment), Vidya Sewa (education), Vriddha Sewa (elderly care), and more.', image: '/images/vastra-sewa/vastra sewa.jpg' },
                  { title: 'Sanskriti', subtitle: 'Culture', text: 'Through concerts, training programs, lectures, demonstrations, and learning programs, awareness about classical & folk arts, yoga and culture is provided with the objective to preserve culture and our roots while providing employment opportunities.', image: '/images/sanskriti/sanskriti 3.jpg' },
                ].map((item, i) => (
                  <AnimateIn key={item.title} variant="fadeRight" delay={i * 150}>
                    <div className="flex gap-4 group hover:bg-cream/50 p-3 -m-3 rounded-xl transition-colors duration-300">
                      <img src={item.image} alt={item.title} className="w-24 h-24 rounded-xl object-cover shrink-0 hidden sm:block group-hover:scale-105 transition-transform duration-500 shadow-md" />
                      <div>
                        <h3 className="font-heading text-xl font-bold text-maroon group-hover:text-saffron transition-colors duration-300">
                          {item.title} <span className="text-saffron text-sm font-normal">\u2014 {item.subtitle}</span>
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mt-1">{item.text}</p>
                      </div>
                    </div>
                  </AnimateIn>
                ))}
              </div>
            </div>
            <AnimateIn variant="fadeLeft" delay={300}>
              <div className="space-y-4 sticky top-24">
                <div className="overflow-hidden rounded-2xl shadow-xl group">
                  <img src="/images/sanskriti/sanskriti.jpg" alt="S3F community program" className="w-full group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-xl group">
                  <img src="/images/yog-sewa/yog sewa.jpg" alt="Yoga session by S3F" className="w-full group-hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimateIn variant="fadeUp">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-maroon mb-6">Mission & Vision</h2>
            <div className="w-16 h-1 bg-saffron rounded-full mx-auto mb-8" />
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={200}>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              S3F was established as a voluntary movement with a vision to bring a positive change in
              society and in people's lives and in making this world a better, healthier, happier and
              prosperous place to live for coming generations as well.
            </p>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={300}>
            <p className="text-gray-700 text-lg leading-relaxed">
              Main focus is to bring peace and prosperity among people's lives despite of their
              religion, Nationality, Caste, color or creed and to uplift deprived sectors of society.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-maroon text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: 10, suffix: '+', label: 'Sewa Programs' },
              { number: 100, suffix: '+', label: 'Volunteers' },
              { number: 1000, suffix: '+', label: 'Lives Touched' },
              { number: 3, suffix: '', label: 'Core Pillars' },
            ].map((stat, i) => (
              <AnimateIn key={stat.label} variant="scaleUp" delay={i * 150}>
                <div className="group">
                  <p className="font-heading text-5xl font-bold text-saffron group-hover:scale-110 transition-transform duration-300 inline-block">
                    <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                  </p>
                  <p className="text-gray-300 text-sm mt-2">{stat.label}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
