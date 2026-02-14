import Card from '../components/Card'
import { DollarIcon, CalendarIcon, PartyIcon, RefreshIcon } from '../components/Icons'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import bike1 from '../assets/bikes/bike_1.png'
import bike2 from '../assets/bikes/bike_2.png'
import bike3 from '../assets/bikes/bike_3.png'
import bike4 from '../assets/bikes/bike_4.png'

const Promotions = () => {
  const [headerRef, headerVisible] = useScrollAnimation()
  const [gridRef, gridVisible] = useScrollAnimation()
  const [ctaRef, ctaVisible] = useScrollAnimation()
  const promotions = [
    {
      title: 'Low Down Payment Plans',
      description:
        'Start your motorbike journey with minimal upfront cost. We offer flexible down payment options that fit your budget. Our team will work with you to create a payment plan that makes sense for your financial situation.',
      icon: DollarIcon,
      image: bike1,
    },
    {
      title: 'Flexible Installments',
      description:
        'Choose from various installment plans with competitive rates. Whether you prefer monthly, bi-monthly, or quarterly payments, we have options that work for you. Terms available from 12 to 60 months.',
      icon: CalendarIcon,
      image: bike2,
    },
    {
      title: 'Seasonal Promotions',
      description:
        'Take advantage of our seasonal specials and limited-time offers. From holiday promotions to end-of-year sales, we regularly update our deals to give you the best value on your motorbike purchase.',
      icon: PartyIcon,
      image: bike3,
    },
    {
      title: 'Trade-in Assistance',
      description:
        'Have an old bike? We offer fair trade-in values and make the process simple. Our experts will evaluate your current motorbike and help you upgrade to something better. Get more value for your trade-in.',
      icon: RefreshIcon,
      image: bike4,
    },
  ]

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
              <pattern id="geometric-pattern-promo" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
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
              <radialGradient id="redGlowPromo" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#D90429" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#D90429" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#D90429" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#geometric-pattern-promo)" />
            <circle cx="300" cy="200" r="150" fill="url(#redGlowPromo)" className="glow-pulse" />
            <circle cx="900" cy="600" r="200" fill="url(#redGlowPromo)" className="glow-pulse" style={{ animationDelay: '1s' }} />
            <circle cx="600" cy="400" r="180" fill="url(#redGlowPromo)" className="glow-pulse" style={{ animationDelay: '2s' }} />
          </svg>
        </div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className={`text-center mb-12 md:mb-16 ${headerVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-8 md:mt-12 font-alphacorsa bg-gradient-to-r from-white to-primary bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(217,4,41,0.5)]">
            Special Promotions & Financing Options
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Explore our flexible financing solutions and special offers designed
            to make your dream motorbike more accessible.
          </p>
        </div>

        {/* Promotions - Alternating Layout */}
        <div ref={gridRef} className={`space-y-16 md:space-y-24 mb-12 ${gridVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {promotions.map((promo, index) => {
            const isEven = index % 2 === 0
            return (
              <div
                key={index}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12 ${gridVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={gridVisible ? { animationDelay: `${index * 0.2}s` } : {}}
              >
                {/* Bike Image - No Background */}
                <div className={`flex-1 w-full md:w-1/2 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="relative h-[300px] md:h-[400px] flex items-center justify-center">
                    <img
                      src={promo.image}
                      alt={promo.title}
                      className="max-w-full max-h-full object-contain drop-shadow-[0_0_20px_rgba(217,4,41,0.3)]"
                    />
                  </div>
                </div>

                {/* Content - Right Side */}
                <div className={`flex-1 w-full md:w-1/2 ${isEven ? 'md:pl-8' : 'md:pr-8'}`}>
                  <div className="p-8">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="flex-shrink-0">
                        {promo.icon && <promo.icon className="w-10 h-10 text-white filter drop-shadow-[0_0_8px_rgba(217,4,41,0.6)]" />}
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 font-alphacorsa bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                          {promo.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-white/90 mb-6 leading-relaxed text-base md:text-lg">
                      {promo.description}
                    </p>
                    <a
                      href="/contact"
                      className="inline-block bg-primary text-white px-6 py-3 rounded-[3px] hover:bg-opacity-90 transition-all duration-200 font-semibold shadow-md hover:shadow-lg font-alphacorsa"
                    >
                      Contact Sales Team
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Info Section */}
        <div ref={ctaRef} className={ctaVisible ? 'animate-fade-in-up' : 'opacity-0'}>
          <Card className="p-8 md:p-12 bg-gradient-to-r from-primary to-secondary text-white bg-white/10 backdrop-blur-md border border-white/20 hover-lift">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-alphacorsa bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Our financing specialists are here to help you find the best
              option for your needs. Contact us today for a personalized quote
              and consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+66123456789"
                className="bg-white text-primary px-8 py-4 rounded-[3px] hover:bg-gray-100 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl"
              >
                Call Now
              </a>
              <a
                href="/contact"
                className="bg-primary text-white px-8 py-4 rounded-[3px] hover:bg-opacity-90 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl"
              >
                Request Information
              </a>
            </div>
          </div>
        </Card>
        </div>
      </div>
    </div>
  )
}

export default Promotions

