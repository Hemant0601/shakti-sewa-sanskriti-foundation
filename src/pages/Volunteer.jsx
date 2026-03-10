import AnimateIn from '../components/AnimateIn'

export default function Volunteer() {
  return (
    <>
      <section className="relative bg-maroon text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/images/vriddha-sewa/vriddha sewa s3f volunteers sepnding time at old home  2.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon/80 to-maroon" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <AnimateIn variant="fadeUp"><h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">Become a Volunteer</h1></AnimateIn>
          <AnimateIn variant="fadeUp" delay={200}>
            <p className="text-gray-200 text-lg max-w-2xl mx-auto">
              Your little can mean a lot to someone. For us just a T-shirt can be nothing but for someone it can be something precious.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <AnimateIn variant="fadeRight">
                <h2 className="font-heading text-3xl font-bold text-maroon mb-2">Why Volunteer?</h2>
                <div className="w-16 h-1 bg-saffron rounded-full mb-6" />
                <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                  We are blessed to have this human life and it's important that we learn to live for
                  others as well. We all had lived enough for ourselves, let's learn to serve and live for others as well.
                </p>
                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                  Sewa or serving selflessly generates happy hormones inside us leading us towards
                  better health. Despite your nationality, religion, caste, color, creed, age and
                  gender — you can become a part of S3F Foundation and choose to serve.
                </p>
              </AnimateIn>

              <AnimateIn variant="fadeRight" delay={200}>
                <h3 className="font-heading text-xl font-bold text-maroon mb-4">Ways to Volunteer</h3>
              </AnimateIn>
              <div className="space-y-4">
                {[
                  { title: 'Through Resources', desc: 'Contribute materials, food, clothing, or other resources to support our initiatives.', icon: '\uD83D\uDCE6' },
                  { title: 'Through Talent', desc: 'Share your skills \u2014 teaching, art, music, yoga, medical expertise, or any talent you have.', icon: '\uD83C\uDFA8' },
                  { title: 'Through Time', desc: 'Dedicate your time to serve at our programs, events, and community activities.', icon: '\u23F0' },
                ].map((way, i) => (
                  <AnimateIn key={way.title} variant="fadeRight" delay={300 + i * 100}>
                    <div className="flex gap-4 bg-cream p-5 rounded-xl group hover:bg-saffron/10 transition-all duration-300 hover:shadow-md hover:translate-x-1">
                      <span className="text-3xl group-hover:scale-125 transition-transform duration-300">{way.icon}</span>
                      <div>
                        <h4 className="font-semibold text-maroon group-hover:text-saffron transition-colors duration-300">{way.title}</h4>
                        <p className="text-gray-600 text-sm">{way.desc}</p>
                      </div>
                    </div>
                  </AnimateIn>
                ))}
              </div>

              <AnimateIn variant="fadeUp" delay={500}>
                <div className="mt-8 overflow-hidden rounded-2xl shadow-xl group">
                  <img src="/images/vriddha-sewa/vriddha sewa s3f volunteers sepnding time at old home  .jpg" alt="S3F volunteers" className="w-full group-hover:scale-105 transition-transform duration-700" />
                </div>
                <p className="text-gray-500 text-xs mt-2 text-center">S3F volunteers spending time at an old home</p>
              </AnimateIn>
            </div>

            <AnimateIn variant="fadeLeft" delay={300}>
              <div className="bg-cream p-8 rounded-2xl shadow-xl sticky top-24">
                <h3 className="font-heading text-2xl font-bold text-maroon mb-4 text-center">Volunteer Registration</h3>
                <p className="text-gray-600 text-sm text-center mb-6">Fill out the form below to join our volunteer community and make a difference.</p>
                <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <p className="text-gray-700 mb-6">Click the button below to fill out our volunteer registration form:</p>
                  <a
                    href="https://docs.google.com/forms/d/1r9BiS3bBA7EvyYL1rWih41ecT6ScVXJHYWfO8RKNffk/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-saffron hover:bg-saffron-dark text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300 text-lg hover:scale-105 hover:shadow-xl hover:shadow-saffron/25 btn-ripple"
                  >
                    Register as Volunteer
                  </a>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="overflow-hidden rounded-xl"><img src="/images/paryavaran-sewa/paryavaran sewa 3.jpg" alt="Environment" className="h-32 w-full object-cover hover:scale-110 transition-transform duration-500" /></div>
                  <div className="overflow-hidden rounded-xl"><img src="/images/anna-sewa/anna sewa 2.jpg" alt="Anna Sewa" className="h-32 w-full object-cover hover:scale-110 transition-transform duration-500" /></div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  )
}
