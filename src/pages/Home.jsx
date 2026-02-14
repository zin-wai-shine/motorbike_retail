import { Link } from 'react-router-dom'
import Card from '../components/Card'
import heroBg from '../assets/hero_bg.png'
import { CheckCircleIcon, DollarIcon, BoltIcon, TrophyIcon } from '../components/Icons'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Home = () => {
  const [heroRef, heroVisible] = useScrollAnimation()
  const [featuresRef, featuresVisible] = useScrollAnimation()
  const [promosRef, promosVisible] = useScrollAnimation()
  const [ctaRef, ctaVisible] = useScrollAnimation()

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative text-white min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div ref={heroRef} className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${heroVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] font-alphacorsa bg-gradient-to-r from-white via-white to-primary bg-clip-text text-transparent w-full px-4 sm:px-6 lg:px-8 tracking-tight drop-shadow-[0_0_30px_rgba(217,4,41,0.5)]">
              Find Your Perfect Ride
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-12 text-white/90 max-w-2xl mx-auto leading-relaxed font-light px-4">
              New and quality used motorbikes with flexible financing and trusted service.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center px-4">
              <Link
                to="/motorbikes"
                className="group relative bg-primary text-white px-10 py-4 rounded-[3px] hover:bg-opacity-90 transition-all duration-300 font-semibold text-base md:text-lg shadow-2xl hover:shadow-[0_0_30px_rgba(217,4,41,0.6)] hover-lift font-alphacorsa overflow-hidden"
              >
                <span className="relative z-10">View Motorbikes</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                to="/contact"
                className="group relative bg-transparent border-2 border-white text-white px-10 py-4 rounded-[3px] hover:bg-white/10 transition-all duration-300 font-semibold text-base md:text-lg shadow-lg hover:shadow-xl hover-lift font-alphacorsa backdrop-blur-sm"
              >
                <span className="relative z-10">Contact Sales</span>
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>

            {/* Auto-scrolling Brand Names */}
            <div className="mt-24 md:mt-32 -mx-4 sm:-mx-6 lg:-mx-8">
              <div className="relative overflow-hidden">
                {/* Left Gradient Shadow */}
                <div className="absolute left-0 top-0 bottom-0 w-1/4 bg-gradient-to-r from-black via-black/60 to-transparent z-10 pointer-events-none"></div>
                {/* Right Gradient Shadow */}
                <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-gradient-to-l from-black via-black/60 to-transparent z-10 pointer-events-none"></div>
                <div className="flex animate-scroll-x whitespace-nowrap">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex items-center space-x-12 px-12">
                      <span className="text-white/60 text-lg md:text-xl font-alphacorsa">GPX</span>
                      <span className="text-white/60 text-lg md:text-xl font-alphacorsa">HONDA</span>
                      <span className="text-white/60 text-lg md:text-xl font-alphacorsa">YAMAHA</span>
                      <span className="text-white/60 text-lg md:text-xl font-alphacorsa">Stallions</span>
                      <span className="text-white/60 text-lg md:text-xl font-alphacorsa">Suzuki</span>
                      <span className="text-white/60 text-lg md:text-xl font-alphacorsa">Kawasaki</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 md:py-24 relative bg-secondary overflow-hidden">
        {/* Red Geometric Pattern Background like Hero */}
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
              {/* Geometric Triangle Pattern */}
              <defs>
                <pattern id="geometric-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
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
                <radialGradient id="redGlow" cx="50%" cy="50%">
                  <stop offset="0%" stopColor="#D90429" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#D90429" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#D90429" stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#geometric-pattern)" />
              {/* Glow Effects */}
              <circle cx="300" cy="200" r="150" fill="url(#redGlow)" className="glow-pulse" />
              <circle cx="900" cy="600" r="200" fill="url(#redGlow)" className="glow-pulse" style={{ animationDelay: '1s' }} />
              <circle cx="600" cy="400" r="180" fill="url(#redGlow)" className="glow-pulse" style={{ animationDelay: '2s' }} />
            </svg>
          </div>
        </div>
        <div ref={featuresRef} className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${featuresVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className={`p-6 text-center bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover-lift ${featuresVisible ? 'animate-scale-in animate-delay-100' : 'opacity-0'}`}>
              <div className="flex justify-center mb-4">
                <CheckCircleIcon className="w-12 h-12 text-white filter drop-shadow-[0_0_8px_rgba(217,4,41,0.6)]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-alphacorsa">
                Certified Bikes
              </h3>
              <p className="text-white/90">
                All our motorbikes are thoroughly inspected and certified for
                quality and safety.
              </p>
            </Card>

            <Card className={`p-6 text-center bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover-lift ${featuresVisible ? 'animate-scale-in animate-delay-200' : 'opacity-0'}`}>
              <div className="flex justify-center mb-4">
                <DollarIcon className="w-12 h-12 text-white filter drop-shadow-[0_0_8px_rgba(217,4,41,0.6)]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-alphacorsa">
                Easy Financing
              </h3>
              <p className="text-white/90">
                Flexible payment plans tailored to fit your budget and
                lifestyle.
              </p>
            </Card>

            <Card className={`p-6 text-center bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover-lift ${featuresVisible ? 'animate-scale-in animate-delay-300' : 'opacity-0'}`}>
              <div className="flex justify-center mb-4">
                <BoltIcon className="w-12 h-12 text-white filter drop-shadow-[0_0_8px_rgba(217,4,41,0.6)]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-alphacorsa">
                Fast Approval
              </h3>
              <p className="text-white/90">
                Get approved quickly with our streamlined application process.
              </p>
            </Card>

            <Card className={`p-6 text-center bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover-lift ${featuresVisible ? 'animate-scale-in animate-delay-400' : 'opacity-0'}`}>
              <div className="flex justify-center mb-4">
                <TrophyIcon className="w-12 h-12 text-white filter drop-shadow-[0_0_8px_rgba(217,4,41,0.6)]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-alphacorsa">
                Trusted Local Dealer
              </h3>
              <p className="text-white/90">
                Years of experience serving our community with honesty and
                integrity.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Promotions Preview */}
      <section className="py-16 md:py-24 relative bg-secondary overflow-hidden">
        {/* Red Geometric Pattern Background like Hero */}
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
              {/* Geometric Triangle Pattern - Using same pattern as Feature Highlights */}
              <defs>
                <pattern id="geometric-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
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
                <radialGradient id="redGlow" cx="50%" cy="50%">
                  <stop offset="0%" stopColor="#D90429" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#D90429" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#D90429" stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#geometric-pattern)" />
              {/* Glow Effects - Same positions and timing as Feature Highlights */}
              <circle cx="300" cy="200" r="150" fill="url(#redGlow)" className="glow-pulse" />
              <circle cx="900" cy="600" r="200" fill="url(#redGlow)" className="glow-pulse" style={{ animationDelay: '1s' }} />
              <circle cx="600" cy="400" r="180" fill="url(#redGlow)" className="glow-pulse" style={{ animationDelay: '2s' }} />
            </svg>
          </div>
        </div>
        <div ref={promosRef} className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${promosVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 mt-8 md:mt-12 font-alphacorsa bg-gradient-to-r from-white to-primary bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(217,4,41,0.5)]">
            Special Offers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className={`p-8 border-l-4 border-primary bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover-lift ${promosVisible ? 'animate-slide-in-left animate-delay-100' : 'opacity-0'}`}>
              <h3 className="text-2xl font-bold text-white mb-4 font-alphacorsa">
                Low Down Payment
              </h3>
              <p className="text-white/90 mb-4">
                Low down payment options available to get you on the road
                faster.
              </p>
              <Link
                to="/promotions"
                className="text-primary font-semibold hover:text-white transition-colors duration-300"
              >
                Learn More →
              </Link>
            </Card>

            <Card className={`p-8 border-l-4 border-primary bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover-lift ${promosVisible ? 'animate-scale-in animate-delay-200' : 'opacity-0'}`}>
              <h3 className="text-2xl font-bold text-white mb-4 font-alphacorsa">
                Fast Approval
              </h3>
              <p className="text-white/90 mb-4">
                Fast approval within 24 hours. Get the bike you want without the
                wait.
              </p>
              <Link
                to="/promotions"
                className="text-primary font-semibold hover:text-white transition-colors duration-300"
              >
                Learn More →
              </Link>
            </Card>

            <Card className={`p-8 border-l-4 border-primary bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover-lift ${promosVisible ? 'animate-slide-in-right animate-delay-300' : 'opacity-0'}`}>
              <h3 className="text-2xl font-bold text-white mb-4 font-alphacorsa">
                Free Consultation
              </h3>
              <p className="text-white/90 mb-4">
                Free consultation with our sales team to find the perfect bike
                for you.
              </p>
              <Link
                to="/contact"
                className="text-primary font-semibold hover:text-white transition-colors duration-300"
              >
                Contact Us →
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-secondary text-white">
        <div ref={ctaRef} className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${ctaVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-alphacorsa bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
            Talk to our team today and get the best deal.
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Our experienced sales team is ready to help you find your perfect
            motorbike.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+66123456789"
              className="bg-white text-primary px-8 py-4 rounded-[3px] hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover-lift"
            >
              Call Now
            </a>
            <a
              href="#"
              className="bg-secondary text-white px-8 py-4 rounded-[3px] hover:bg-opacity-90 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover-lift"
            >
              Chat on Line
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

