import Card from '../components/Card'
import { TrophyIcon, DiamondIcon, HandshakeIcon, WrenchIcon, TargetIcon, LightbulbIcon, StarIcon } from '../components/Icons'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const About = () => {
  const [headerRef, headerVisible] = useScrollAnimation()
  const [missionRef, missionVisible] = useScrollAnimation()
  const [whyRef, whyVisible] = useScrollAnimation()
  const [storyRef, storyVisible] = useScrollAnimation()
  const whyChooseUs = [
    {
      title: 'Trusted Dealer',
      description:
        'Years of experience in the motorbike industry with a proven track record of customer satisfaction.',
      icon: TrophyIcon,
    },
    {
      title: 'Transparent Process',
      description:
        'No hidden fees or surprises. We believe in honest communication and clear pricing.',
      icon: DiamondIcon,
    },
    {
      title: 'Friendly Support',
      description:
        'Our team is dedicated to providing exceptional customer service from first contact to after-sales support.',
      icon: HandshakeIcon,
    },
    {
      title: 'After-Sales Service',
      description:
        'Comprehensive maintenance and support services to keep your motorbike running smoothly.',
      icon: WrenchIcon,
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
              <pattern id="geometric-pattern-about" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
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
              <radialGradient id="redGlowAbout" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#D90429" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#D90429" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#D90429" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#geometric-pattern-about)" />
            <circle cx="300" cy="200" r="150" fill="url(#redGlowAbout)" className="glow-pulse" />
            <circle cx="900" cy="600" r="200" fill="url(#redGlowAbout)" className="glow-pulse" style={{ animationDelay: '1s' }} />
            <circle cx="600" cy="400" r="180" fill="url(#redGlowAbout)" className="glow-pulse" style={{ animationDelay: '2s' }} />
          </svg>
        </div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className={`text-center mb-12 md:mb-16 ${headerVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-8 md:mt-12 font-alphacorsa bg-gradient-to-r from-white to-primary bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(217,4,41,0.5)]">
            About Our Dealership
          </h1>
        </div>

        {/* Mission Section */}
        <div ref={missionRef} className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 ${missionVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className={`p-8 ${missionVisible ? 'animate-scale-in' : 'opacity-0'}`} style={missionVisible ? { animationDelay: '0.1s' } : {}}>
            <div className="flex justify-center mb-4">
              <TargetIcon className="w-10 h-10 text-white filter drop-shadow-[0_0_8px_rgba(217,4,41,0.6)]" />
            </div>
            <h3 className="text-2xl font-bold mb-4 font-alphacorsa bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
              Our Mission
            </h3>
            <p className="text-white/90 leading-relaxed">
              Our mission is to provide reliable motorbikes with honest service.
              We believe everyone deserves access to quality transportation with
              transparent, fair pricing.
            </p>
          </div>

          <div className={`p-8 ${missionVisible ? 'animate-scale-in' : 'opacity-0'}`} style={missionVisible ? { animationDelay: '0.2s' } : {}}>
            <div className="flex justify-center mb-4">
              <LightbulbIcon className="w-10 h-10 text-white filter drop-shadow-[0_0_8px_rgba(217,4,41,0.6)]" />
            </div>
            <h3 className="text-2xl font-bold mb-4 font-alphacorsa bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
              Our Focus
            </h3>
            <p className="text-white/90 leading-relaxed">
              We focus on helping customers choose the right bike for their
              lifestyle. Our team takes time to understand your needs and
              recommend the perfect match.
            </p>
          </div>

          <div className={`p-8 ${missionVisible ? 'animate-scale-in' : 'opacity-0'}`} style={missionVisible ? { animationDelay: '0.3s' } : {}}>
            <div className="flex justify-center mb-4">
              <StarIcon className="w-10 h-10 text-white filter drop-shadow-[0_0_8px_rgba(217,4,41,0.6)]" />
            </div>
            <h3 className="text-2xl font-bold mb-4 font-alphacorsa bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
              Our Support
            </h3>
            <p className="text-white/90 leading-relaxed">
              Our experienced team supports you before and after purchase. From
              initial consultation to ongoing maintenance, we're here for you.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div ref={whyRef} className={`mb-16 ${whyVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 mt-8 md:mt-12 font-alphacorsa bg-gradient-to-r from-white to-primary bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(217,4,41,0.5)]">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div key={index} className={`p-6 text-center ${whyVisible ? 'animate-scale-in' : 'opacity-0'}`} style={whyVisible ? { animationDelay: `${index * 0.1}s` } : {}}>
                <div className="flex justify-center mb-4">
                  {item.icon && <item.icon className="w-10 h-10 text-white filter drop-shadow-[0_0_8px_rgba(217,4,41,0.6)]" />}
                </div>
                <h3 className="text-xl font-bold mb-3 font-alphacorsa bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                  {item.title}
                </h3>
                <p className="text-white/90">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div ref={storyRef} className={storyVisible ? 'animate-fade-in-up' : 'opacity-0'}>
          <div className="p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-alphacorsa bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                Your Trusted Motorbike Partner
              </h2>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                We've been serving the community for years, helping thousands of
                riders find their perfect motorbike. Our commitment to quality,
                service, and customer satisfaction sets us apart. Visit us today
                and experience the difference.
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-primary px-8 py-4 rounded-[3px] hover:bg-gray-100 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl font-alphacorsa"
              >
                Visit Us Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

