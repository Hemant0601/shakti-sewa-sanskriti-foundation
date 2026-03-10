export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-maroon text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-saffron font-heading text-lg mb-2">Om</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">About S3F</h1>
          <p className="text-gray-200 text-lg">
            Shakti Sewa Sanskriti Foundation is an NGO working towards making this world a better
            place with its several initiatives and projects.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-heading text-3xl font-bold text-maroon mb-6">Who We Are</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                S3F (Shakti Sewa Sanskriti Foundation) is an NGO working towards making this world a
                better place with its several initiatives and projects. As the name itself indicates,
                it is devoted to:
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: 'Shakti',
                    subtitle: 'Empowerment',
                    text: 'Upliftment of women in society by educating & empowering them. Women education, awareness about female feticide, "Beti Bachao Beti Padhao & Beti ko sashakta banao", Vivah Sewa, creating employment opportunities, Yoga, Physical education and Vocational training.',
                    image: '/images/shakti/shakti 2.jpg',
                  },
                  {
                    title: 'Sewa',
                    subtitle: 'Service',
                    text: 'Serving different sectors of society through different mediums — Anna Sewa (food), Vastra Sewa (clothing), Gau Sewa (cow protection), Chikitsa Sewa (medical assistance), Paryavaran Sewa (environment), Vidya Sewa (education), Vriddha Sewa (elderly care), and more.',
                    image: '/images/vastra-sewa/vastra sewa.jpg',
                  },
                  {
                    title: 'Sanskriti',
                    subtitle: 'Culture',
                    text: 'Through concerts, training programs, lectures, demonstrations, and learning programs, awareness about classical & folk arts, yoga and culture is provided with the objective to preserve culture and our roots while providing employment opportunities.',
                    image: '/images/sanskriti/sanskriti 3.jpg',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-24 h-24 rounded-lg object-cover shrink-0 hidden sm:block"
                    />
                    <div>
                      <h3 className="font-heading text-xl font-bold text-maroon">
                        {item.title}{' '}
                        <span className="text-saffron text-sm font-normal">— {item.subtitle}</span>
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mt-1">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <img
                src="/images/sanskriti/sanskriti.jpg"
                alt="S3F community program"
                className="w-full rounded-xl shadow-lg"
              />
              <img
                src="/images/yog-sewa/yog sewa.jpg"
                alt="Yoga session by S3F"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-maroon mb-6">Mission & Vision</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            S3F was established as a voluntary movement with a vision to bring a positive change in
            society and in people's lives and in making this world a better, healthier, happier and
            prosperous place to live for coming generations as well.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Main focus is to bring peace and prosperity among people's lives despite of their
            religion, Nationality, Caste, color or creed and to uplift deprived sectors of society.
          </p>
        </div>
      </section>

      {/* Stats-like section */}
      <section className="py-16 bg-maroon text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '10+', label: 'Sewa Programs' },
              { number: '100+', label: 'Volunteers' },
              { number: '1000+', label: 'Lives Touched' },
              { number: '3', label: 'Core Pillars' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-4xl font-bold text-saffron">{stat.number}</p>
                <p className="text-gray-300 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
