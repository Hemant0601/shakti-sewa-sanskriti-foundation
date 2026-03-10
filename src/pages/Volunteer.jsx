export default function Volunteer() {
  return (
    <>
      <section className="bg-maroon text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Become a Volunteer</h1>
          <p className="text-gray-200 text-lg">
            Your little can mean a lot to someone. For us just a T-shirt can be nothing but for
            someone it can be something precious.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-heading text-3xl font-bold text-maroon mb-4">Why Volunteer?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We are blessed to have this human life and it's important that we learn to live for
                others as well. We all had lived enough for ourselves, let's learn to serve and live
                for others as well.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Sewa or serving selflessly generates happy hormones inside us leading us towards
                better health. Despite your nationality, religion, caste, color, creed, age and
                gender — you can become a part of S3F Foundation and choose to serve.
              </p>

              <h3 className="font-heading text-xl font-bold text-maroon mb-3">
                Ways to Volunteer
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: 'Through Resources',
                    desc: 'Contribute materials, food, clothing, or other resources to support our initiatives.',
                    icon: '📦',
                  },
                  {
                    title: 'Through Talent',
                    desc: 'Share your skills — teaching, art, music, yoga, medical expertise, or any talent you have.',
                    icon: '🎨',
                  },
                  {
                    title: 'Through Time',
                    desc: 'Dedicate your time to serve at our programs, events, and community activities.',
                    icon: '⏰',
                  },
                ].map((way) => (
                  <div key={way.title} className="flex gap-4 bg-cream p-4 rounded-lg">
                    <span className="text-3xl">{way.icon}</span>
                    <div>
                      <h4 className="font-semibold text-maroon">{way.title}</h4>
                      <p className="text-gray-600 text-sm">{way.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <img
                  src="/images/vriddha-sewa/vriddha sewa s3f volunteers sepnding time at old home  .jpg"
                  alt="S3F volunteers serving at old home"
                  className="w-full rounded-xl shadow-lg"
                />
                <p className="text-gray-500 text-xs mt-2 text-center">
                  S3F volunteers spending time at an old home
                </p>
              </div>
            </div>

            <div className="bg-cream p-8 rounded-xl shadow-lg sticky top-20">
              <h3 className="font-heading text-2xl font-bold text-maroon mb-4 text-center">
                Volunteer Registration
              </h3>
              <p className="text-gray-600 text-sm text-center mb-6">
                Fill out the form below to join our volunteer community and make a difference.
              </p>
              <div className="bg-white rounded-lg p-6 text-center">
                <p className="text-gray-700 mb-4">
                  Click the button below to fill out our volunteer registration form:
                </p>
                <a
                  href="https://docs.google.com/forms/d/1r9BiS3bBA7EvyYL1rWih41ecT6ScVXJHYWfO8RKNffk/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-saffron hover:bg-saffron-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors text-lg"
                >
                  Register as Volunteer
                </a>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <img
                  src="/images/paryavaran-sewa/paryavaran sewa 3.jpg"
                  alt="Environment service"
                  className="rounded-lg h-32 w-full object-cover"
                />
                <img
                  src="/images/anna-sewa/anna sewa 2.jpg"
                  alt="Anna Sewa service"
                  className="rounded-lg h-32 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
