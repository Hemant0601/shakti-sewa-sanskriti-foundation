import { useState } from 'react'
import AnimateIn from '../components/AnimateIn'

export default function Volunteer() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', city: '', interest: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent('Volunteer Registration - S3F')
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nCity: ${form.city}\nInterest Area: ${form.interest}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:s3ffoundation@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

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

                {submitted ? (
                  <div className="bg-white rounded-xl p-8 text-center shadow-sm">
                    <span className="text-5xl block mb-4">🙏</span>
                    <h4 className="font-heading text-xl font-bold text-maroon mb-2">Thank You!</h4>
                    <p className="text-gray-600 text-sm">Your email client should open with your details. Send the email to complete your registration.</p>
                    <button onClick={() => setSubmitted(false)} className="mt-4 text-saffron font-semibold text-sm hover:underline">Fill again</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 shadow-sm space-y-4">
                    {[
                      { name: 'name', label: 'Full Name', type: 'text', required: true },
                      { name: 'email', label: 'Email Address', type: 'email', required: true },
                      { name: 'phone', label: 'Phone Number', type: 'tel', required: true },
                      { name: 'city', label: 'City', type: 'text', required: false },
                    ].map((field) => (
                      <div key={field.name}>
                        <label htmlFor={`vol-${field.name}`} className="block text-sm font-medium text-gray-700 mb-1">
                          {field.label} {field.required && <span className="text-red-400">*</span>}
                        </label>
                        <input
                          type={field.type}
                          id={`vol-${field.name}`}
                          name={field.name}
                          value={form[field.name]}
                          onChange={handleChange}
                          required={field.required}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition-all duration-300 text-sm hover:border-saffron/50"
                        />
                      </div>
                    ))}
                    <div>
                      <label htmlFor="vol-interest" className="block text-sm font-medium text-gray-700 mb-1">Area of Interest</label>
                      <select
                        id="vol-interest"
                        name="interest"
                        value={form.interest}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition-all duration-300 text-sm hover:border-saffron/50 bg-white"
                      >
                        <option value="">Select an area...</option>
                        <option value="Anna Sewa">Anna Sewa (Food)</option>
                        <option value="Vastra Sewa">Vastra Sewa (Clothing)</option>
                        <option value="Vidya Sewa">Vidya Sewa (Education)</option>
                        <option value="Vriddha Sewa">Vriddha Sewa (Elderly Care)</option>
                        <option value="Paryavaran Sewa">Paryavaran Sewa (Environment)</option>
                        <option value="Yog Sewa">Yog Sewa (Yoga)</option>
                        <option value="Sanskriti">Sanskriti (Culture & Arts)</option>
                        <option value="Shakti">Shakti (Women Empowerment)</option>
                        <option value="Any">Open to any Sewa</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="vol-message" className="block text-sm font-medium text-gray-700 mb-1">Message (optional)</label>
                      <textarea
                        id="vol-message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition-all duration-300 text-sm resize-none hover:border-saffron/50"
                        placeholder="Tell us about yourself or how you'd like to help..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-saffron hover:bg-saffron-dark text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-saffron/25 btn-ripple"
                    >
                      Register as Volunteer
                    </button>
                  </form>
                )}
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
