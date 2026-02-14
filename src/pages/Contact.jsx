import { useState } from 'react'
import Card from '../components/Card'
import { LocationIcon, PhoneIcon, ClockIcon, MessageIcon, MobileIcon } from '../components/Icons'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Contact = () => {
  const [headerRef, headerVisible] = useScrollAnimation()
  const [contentRef, contentVisible] = useScrollAnimation()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    interestedBike: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    alert('Thank you for your inquiry! We will contact you soon.')
    setFormData({
      name: '',
      phone: '',
      interestedBike: '',
      message: '',
    })
  }

  return (
    <div className="py-12 md:py-20 relative bg-secondary min-h-screen overflow-hidden">
      {/* Red Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1200 800"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="geometric-pattern-contact" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <polygon
                  points="100,0 200,173.2 0,173.2"
                  fill="none"
                  stroke="#D90429"
                  strokeWidth="2"
                  opacity="0.4"
                />
                <polygon
                  points="100,200 200,26.8 0,26.8"
                  fill="none"
                  stroke="#D90429"
                  strokeWidth="2"
                  opacity="0.4"
                />
                <polygon
                  points="0,100 173.2,0 173.2,200"
                  fill="none"
                  stroke="#D90429"
                  strokeWidth="2"
                  opacity="0.3"
                />
                <polygon
                  points="200,100 26.8,0 26.8,200"
                  fill="none"
                  stroke="#D90429"
                  strokeWidth="2"
                  opacity="0.3"
                />
              </pattern>
              <radialGradient id="redGlowContact" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#D90429" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#D90429" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#D90429" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#geometric-pattern-contact)" />
            <circle cx="300" cy="200" r="150" fill="url(#redGlowContact)" className="glow-pulse" />
            <circle cx="900" cy="600" r="200" fill="url(#redGlowContact)" className="glow-pulse" style={{ animationDelay: '1s' }} />
            <circle cx="600" cy="400" r="180" fill="url(#redGlowContact)" className="glow-pulse" style={{ animationDelay: '2s' }} />
          </svg>
        </div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className={`text-center mb-12 md:mb-16 ${headerVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-8 md:mt-12 font-alphacorsa bg-gradient-to-r from-white to-primary bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(217,4,41,0.5)]">
            Contact Us
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Get in touch with our team. We're here to help you find your
            perfect motorbike.
          </p>
        </div>

        <div ref={contentRef} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 mb-12 ${contentVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {/* Contact Information */}
          <div className="space-y-10">
            <div className={`${contentVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 font-alphacorsa bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                Visit Us
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                      <LocationIcon className="w-6 h-6 text-primary filter drop-shadow-[0_0_8px_rgba(217,4,41,0.6)]" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <p className="font-semibold text-white mb-1 text-lg">Address</p>
                    <p className="text-white/80 leading-relaxed">
                      123 Motorbike Street
                      <br />
                      Bangkok, Thailand 10110
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                      <PhoneIcon className="w-6 h-6 text-primary filter drop-shadow-[0_0_8px_rgba(217,4,41,0.6)]" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <p className="font-semibold text-white mb-1 text-lg">Phone</p>
                    <p className="text-white/80">+66 XX XXX XXXX</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                      <ClockIcon className="w-6 h-6 text-primary filter drop-shadow-[0_0_8px_rgba(217,4,41,0.6)]" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <p className="font-semibold text-white mb-1 text-lg">Opening Hours</p>
                    <p className="text-white/80 leading-relaxed">
                      Monday - Saturday: 9:00 AM - 7:00 PM
                      <br />
                      Sunday: 10:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 font-alphacorsa bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">Quick Contact</h2>
              <div className="space-y-4">
                <a
                  href="tel:+66123456789"
                  className="group flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-[3px] hover:bg-opacity-90 transition-all duration-300 font-semibold text-base md:text-lg shadow-lg hover:shadow-xl hover-lift font-alphacorsa"
                >
                  <PhoneIcon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  Call Now
                </a>
                <a
                  href="#"
                  className="group flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-[3px] hover:bg-white/10 transition-all duration-300 font-semibold text-base md:text-lg shadow-lg hover:shadow-xl hover-lift font-alphacorsa"
                >
                  <MessageIcon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  Facebook Message
                </a>
                <a
                  href="#"
                  className="group flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-[3px] hover:bg-white/10 transition-all duration-300 font-semibold text-base md:text-lg shadow-lg hover:shadow-xl hover-lift font-alphacorsa"
                >
                  <MobileIcon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  Line Chat
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${contentVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-alphacorsa bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
              Request Information
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-white/90 mb-3 font-alphacorsa"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border-2 border-white/20 bg-white/5 text-white placeholder-white/40 rounded-[3px] focus:ring-2 focus:ring-primary focus:border-primary focus:bg-white/10 outline-none transition-all backdrop-blur-sm font-alphacorsa"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-white/90 mb-3 font-alphacorsa"
                >
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border-2 border-white/20 bg-white/5 text-white placeholder-white/40 rounded-[3px] focus:ring-2 focus:ring-primary focus:border-primary focus:bg-white/10 outline-none transition-all backdrop-blur-sm font-alphacorsa"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label
                  htmlFor="interestedBike"
                  className="block text-sm font-semibold text-white/90 mb-3 font-alphacorsa"
                >
                  Interested Bike
                </label>
                <input
                  type="text"
                  id="interestedBike"
                  name="interestedBike"
                  value={formData.interestedBike}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border-2 border-white/20 bg-white/5 text-white placeholder-white/40 rounded-[3px] focus:ring-2 focus:ring-primary focus:border-primary focus:bg-white/10 outline-none transition-all backdrop-blur-sm font-alphacorsa"
                  placeholder="Model name or type"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-white/90 mb-3 font-alphacorsa"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border-2 border-white/20 bg-white/5 text-white placeholder-white/40 rounded-[3px] focus:ring-2 focus:ring-primary focus:border-primary focus:bg-white/10 outline-none transition-all resize-none backdrop-blur-sm font-alphacorsa"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white px-8 py-4 rounded-[3px] hover:bg-opacity-90 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover-lift font-alphacorsa"
              >
                Request Information
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

