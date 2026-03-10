import AnimateIn from '../components/AnimateIn'

export default function Donate() {
  return (
    <>
      <section className="relative bg-maroon text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/images/vastra-sewa/vastra sewa 3.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon/80 to-maroon" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <AnimateIn variant="fadeUp"><h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">Donate</h1></AnimateIn>
          <AnimateIn variant="fadeUp" delay={200}>
            <p className="text-gray-200 text-lg">No time to be a volunteer? You can serve through resources. Make a difference today.</p>
          </AnimateIn>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <AnimateIn variant="fadeRight">
                <h2 className="font-heading text-3xl font-bold text-maroon mb-2">Why Donate to S3F?</h2>
                <div className="w-16 h-1 bg-saffron rounded-full mb-6" />
                <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                  Can not serve through talent or through time? You can serve through resources. You
                  can donate and help this mission and vision and serve the society.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  Make your birthdays, anniversary, special days, your family's birthdays etc special
                  by sharing your happiness and joy with others.
                </p>
              </AnimateIn>
              <AnimateIn variant="fadeUp" delay={200}>
                <p className="text-saffron font-semibold text-xl mb-8 bg-saffron/10 p-4 rounded-xl border-l-4 border-saffron">
                  This is a 100% nonprofit organization with a vision of only and only Sewa.
                </p>
              </AnimateIn>

              <AnimateIn variant="fadeRight" delay={300}>
                <h3 className="font-heading text-xl font-bold text-maroon mb-4">Your Donation Supports</h3>
              </AnimateIn>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Anna Sewa', desc: 'Food for the hungry', img: '/images/anna-sewa/anna sewa.jpg' },
                  { label: 'Vastra Sewa', desc: 'Clothes for the needy', img: '/images/vastra-sewa/vastra sewa 2.jpg' },
                  { label: 'Vidya Sewa', desc: 'Education for children', img: '/images/vidya-sewa/vidya sewa 2.jpg' },
                  { label: 'Vriddha Sewa', desc: 'Care for the elderly', img: '/images/vriddha-sewa/vriddha sewa Free wellness session for senior citizens 2.jpg' },
                ].map((item, i) => (
                  <AnimateIn key={item.label} variant="scaleUp" delay={400 + i * 100}>
                    <div className="relative rounded-xl overflow-hidden h-36 group cursor-pointer card-hover">
                      <img src={item.img} alt={item.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col items-center justify-end text-white p-3">
                        <span className="font-bold text-sm">{item.label}</span>
                        <span className="text-xs opacity-90">{item.desc}</span>
                      </div>
                    </div>
                  </AnimateIn>
                ))}
              </div>
            </div>

            <AnimateIn variant="fadeLeft" delay={300}>
              <div className="bg-cream p-8 rounded-2xl shadow-xl sticky top-24">
                <h3 className="font-heading text-2xl font-bold text-maroon mb-6 text-center">Donation Details</h3>
                <div className="bg-white rounded-xl p-6 space-y-5 shadow-sm">
                  {[
                    { label: 'Account Name', value: 'Shakti Sewa Sanskriti Foundation', mono: false },
                    { label: 'Current Account Number', value: '40841388906', mono: true },
                    { label: 'IFSC Code', value: 'SBIN0011558', mono: true },
                    { label: 'Bank', value: 'State Bank of India', mono: false },
                  ].map((item) => (
                    <div key={item.label} className="group">
                      <label className="text-xs text-gray-500 uppercase tracking-wider font-medium">{item.label}</label>
                      <p className={`text-maroon font-semibold text-lg ${item.mono ? 'font-mono' : ''} group-hover:text-saffron transition-colors duration-300`}>{item.value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-saffron/10 rounded-xl border border-saffron/20">
                  <p className="text-sm text-gray-700 text-center">
                    For donation queries, contact{' '}
                    <a href="mailto:s3ffoundation@gmail.com" className="text-saffron font-semibold hover:underline link-underline">s3ffoundation@gmail.com</a>
                    {' '}or call{' '}
                    <a href="tel:+919599945964" className="text-saffron font-semibold hover:underline link-underline">+91-9599945964</a>
                  </p>
                </div>
                <p className="text-gray-500 text-xs text-center mt-4">All donations go directly towards our Sewa programs</p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  )
}
