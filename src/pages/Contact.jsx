export default function Contact() {
  return (
    <>
      <section className="bg-maroon text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-200 text-lg">
            Get in touch with us to learn more, volunteer, or support our mission
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-maroon mb-6">Get In Touch</h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-saffron/10 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-saffron" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-maroon">Email</h3>
                    <a href="mailto:s3ffoundation@gmail.com" className="text-gray-600 hover:text-saffron transition-colors">
                      s3ffoundation@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-saffron/10 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-saffron" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-maroon">Phone</h3>
                    <a href="tel:+919599945964" className="text-gray-600 hover:text-saffron transition-colors">
                      +91-9599945964
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-saffron/10 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-saffron" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-maroon">Website</h3>
                    <p className="text-gray-600">www.s3ffoundation.com</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <h3 className="font-heading text-xl font-bold text-maroon mt-8 mb-4">
                Follow Us
              </h3>
              <div className="space-y-3">
                {[
                  { name: 'Facebook', url: 'https://www.facebook.com/s3ffoundation', color: 'bg-blue-600' },
                  { name: 'Instagram', url: 'https://www.instagram.com/s3ffoundation', color: 'bg-pink-600' },
                  { name: 'Twitter', url: 'https://www.twitter.com/s3ffoundation', color: 'bg-sky-500' },
                  { name: 'YouTube', url: 'https://www.youtube.com/@s3ffoundation', color: 'bg-red-600' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <span className={`${social.color} text-white text-xs px-3 py-1 rounded-full font-medium`}>
                      {social.name}
                    </span>
                    <span className="text-gray-600 text-sm group-hover:text-saffron transition-colors">
                      /s3ffoundation
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-cream p-8 rounded-xl shadow-lg">
              <h3 className="font-heading text-2xl font-bold text-maroon mb-6">Send a Message</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  const data = new FormData(e.target)
                  const subject = encodeURIComponent('Website Inquiry - S3F')
                  const body = encodeURIComponent(
                    `Name: ${data.get('name')}\nPhone: ${data.get('phone')}\n\n${data.get('message')}`
                  )
                  window.location.href = `mailto:s3ffoundation@gmail.com?subject=${subject}&body=${body}`
                }}
                className="space-y-4"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-saffron hover:bg-saffron-dark text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
