export default function Donate() {
  return (
    <>
      <section className="bg-maroon text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Donate</h1>
          <p className="text-gray-200 text-lg">
            No time to be a volunteer? You can serve through resources. Make a difference today.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-3xl font-bold text-maroon mb-4">
                Why Donate to S3F?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Can not serve through talent or through time? You can serve through resources. You
                can donate and help this mission and vision and serve the society.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Make your birthdays, anniversary, special days, your family's birthdays etc special
                by sharing your happiness and joy with others. Donate on special days and special
                occasions — or make your days special by donating.
              </p>
              <p className="text-saffron font-semibold text-lg mb-8">
                This is a 100% nonprofit organization with a vision of only and only Sewa.
              </p>

              <h3 className="font-heading text-xl font-bold text-maroon mb-3">
                Your Donation Supports
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Anna Sewa', desc: 'Food for the hungry', img: '/images/anna-sewa/anna sewa.jpg' },
                  { label: 'Vastra Sewa', desc: 'Clothes for the needy', img: '/images/vastra-sewa/vastra sewa 2.jpg' },
                  { label: 'Vidya Sewa', desc: 'Education for children', img: '/images/vidya-sewa/vidya sewa 2.jpg' },
                  { label: 'Vriddha Sewa', desc: 'Care for the elderly', img: '/images/vriddha-sewa/vriddha sewa Free wellness session for senior citizens 2.jpg' },
                ].map((item) => (
                  <div key={item.label} className="relative rounded-lg overflow-hidden h-32 group">
                    <img
                      src={item.img}
                      alt={item.label}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
                      <span className="font-bold text-sm">{item.label}</span>
                      <span className="text-xs opacity-90">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Donation Details Card */}
            <div className="bg-cream p-8 rounded-xl shadow-lg sticky top-20">
              <h3 className="font-heading text-2xl font-bold text-maroon mb-6 text-center">
                Donation Details
              </h3>

              <div className="bg-white rounded-lg p-6 space-y-4">
                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                    Account Name
                  </label>
                  <p className="text-maroon font-semibold text-lg">
                    Shakti Sewa Sanskriti Foundation
                  </p>
                </div>
                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                    Current Account Number
                  </label>
                  <p className="text-maroon font-semibold text-lg font-mono">40841388906</p>
                </div>
                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                    IFSC Code
                  </label>
                  <p className="text-maroon font-semibold text-lg font-mono">SBIN0011558</p>
                </div>
                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                    Bank
                  </label>
                  <p className="text-maroon font-semibold">State Bank of India</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-saffron/10 rounded-lg border border-saffron/20">
                <p className="text-sm text-gray-700 text-center">
                  For donation queries or confirmation, please contact us at{' '}
                  <a
                    href="mailto:s3ffoundation@gmail.com"
                    className="text-saffron font-semibold hover:underline"
                  >
                    s3ffoundation@gmail.com
                  </a>{' '}
                  or call{' '}
                  <a href="tel:+919599945964" className="text-saffron font-semibold hover:underline">
                    +91-9599945964
                  </a>
                </p>
              </div>

              <div className="mt-6 text-center">
                <p className="text-gray-500 text-xs">
                  All donations go directly towards our Sewa programs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
