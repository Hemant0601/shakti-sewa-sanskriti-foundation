import AnimateIn from '../components/AnimateIn'

export default function Contact() {
  return (
    <>
      <section className="relative bg-maroon text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/images/yog-sewa/yog sewa 3.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon/80 to-maroon" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <AnimateIn variant="fadeUp"><h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">Contact Us</h1></AnimateIn>
          <AnimateIn variant="fadeUp" delay={200}><p className="text-gray-200 text-lg">Get in touch with us to learn more, volunteer, or support our mission</p></AnimateIn>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <AnimateIn variant="fadeRight">
                <h2 className="font-heading text-3xl font-bold text-maroon mb-2">Get In Touch</h2>
                <div className="w-16 h-1 bg-saffron rounded-full mb-8" />
              </AnimateIn>

              <div className="space-y-6">
                {[
                  { icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', label: 'Email', value: 's3ffoundation@gmail.com', href: 'mailto:s3ffoundation@gmail.com' },
                  { icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', label: 'Phone', value: '+91-9599945964', href: 'tel:+919599945964' },
                  { icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9', label: 'Website', value: 'www.s3ffoundation.com', href: null },
                ].map((item, i) => (
                  <AnimateIn key={item.label} variant="fadeRight" delay={i * 150}>
                    <div className="flex gap-4 group p-3 -m-3 rounded-xl hover:bg-saffron/5 transition-all duration-300">
                      <div className="w-12 h-12 bg-saffron/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-saffron group-hover:scale-110 transition-all duration-300">
                        <svg className="w-6 h-6 text-saffron group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-maroon">{item.label}</h3>
                        {item.href ? (
                          <a href={item.href} className="text-gray-600 hover:text-saffron transition-colors duration-300 link-underline">{item.value}</a>
                        ) : (
                          <p className="text-gray-600">{item.value}</p>
                        )}
                      </div>
                    </div>
                  </AnimateIn>
                ))}
              </div>

              <AnimateIn variant="fadeRight" delay={400}>
                <h3 className="font-heading text-xl font-bold text-maroon mt-10 mb-4">Follow Us</h3>
              </AnimateIn>
              <div className="space-y-2">
                {[
                  { name: 'Facebook', url: 'https://www.facebook.com/s3ffoundation', color: 'bg-blue-600', hover: 'hover:bg-blue-700' },
                  { name: 'Instagram', url: 'https://www.instagram.com/s3ffoundation', color: 'bg-pink-600', hover: 'hover:bg-pink-700' },
                  { name: 'Twitter', url: 'https://www.twitter.com/s3ffoundation', color: 'bg-sky-500', hover: 'hover:bg-sky-600' },
                  { name: 'YouTube', url: 'https://www.youtube.com/@s3ffoundation', color: 'bg-red-600', hover: 'hover:bg-red-700' },
                ].map((social, i) => (
                  <AnimateIn key={social.name} variant="fadeRight" delay={500 + i * 80}>
                    <a href={social.url} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-300 group hover:translate-x-2">
                      <span className={`${social.color} ${social.hover} text-white text-xs px-4 py-1.5 rounded-full font-medium transition-colors duration-300`}>
                        {social.name}
                      </span>
                      <span className="text-gray-600 text-sm group-hover:text-saffron transition-colors duration-300">/s3ffoundation</span>
                    </a>
                  </AnimateIn>
                ))}
              </div>
            </div>

            <AnimateIn variant="fadeLeft" delay={200}>
              <div className="bg-cream p-8 rounded-2xl shadow-xl">
                <h3 className="font-heading text-2xl font-bold text-maroon mb-6">Send a Message</h3>
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    const data = new FormData(e.target)
                    const subject = encodeURIComponent('Website Inquiry - S3F')
                    const body = encodeURIComponent(`Name: ${data.get('name')}\nPhone: ${data.get('phone')}\n\n${data.get('message')}`)
                    window.location.href = `mailto:s3ffoundation@gmail.com?subject=${subject}&body=${body}`
                  }}
                  className="space-y-5"
                >
                  {[
                    { id: 'name', label: 'Your Name', type: 'text', required: true },
                    { id: 'email', label: 'Email Address', type: 'email', required: true },
                    { id: 'phone', label: 'Phone Number', type: 'tel', required: false },
                  ].map((field) => (
                    <div key={field.id}>
                      <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
                      <input
                        type={field.type} id={field.id} name={field.id} required={field.required}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition-all duration-300 hover:border-saffron/50"
                      />
                    </div>
                  ))}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message" name="message" rows={4} required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition-all duration-300 resize-none hover:border-saffron/50"
                    />
                  </div>
                  <button type="submit" className="w-full bg-saffron hover:bg-saffron-dark text-white py-3.5 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-saffron/25 btn-ripple">
                    Send Message
                  </button>
                </form>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  )
}
