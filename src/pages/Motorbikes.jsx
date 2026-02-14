import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import bike1 from '../assets/bikes/bike_1.png'
import bike2 from '../assets/bikes/bike_2.png'
import bike3 from '../assets/bikes/bike_3.png'
import bike4 from '../assets/bikes/bike_4.png'

const Motorbikes = () => {
  const [selectedBike, setSelectedBike] = useState(0)
  const [selectedColor, setSelectedColor] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [headerRef, headerVisible] = useScrollAnimation()

  const bikes = [
    {
      id: 1,
      category: 'MUSCLE ROADSTER',
      name: 'DUCATI DIAVEL V4',
      description: 'Muscular, sporty, exaggerated and elegant at the same time, able to magnetize attention in any context.',
      image: bike1,
      colors: ['#D90429', '#000000', '#FFFFFF'],
      specs: {
        topSpeed: {
          label: 'TOP SPEED',
          transmission: '6-SPEED CONSTANT-MESH',
          value: '169 MPH',
          metric: '272 KM/H'
        },
        power: {
          label: 'POWER',
          value: '162 HP',
          metric: '121 KW',
          rpm: '9,250 RPM'
        },
        torque: {
          label: 'TORQUE',
          rpm: '8,800 RPM',
          value: '130.5 N M',
          metric: '96.3 LBF-FT'
        }
      }
    },
    {
      id: 2,
      category: 'NAKED SPORT',
      name: 'YAMAHA MT-07',
      description: 'Naked bike with excellent handling and modern design for urban riders seeking performance and style.',
      image: bike2,
      colors: ['#D90429', '#000000', '#FFFFFF'],
      specs: {
        topSpeed: {
          label: 'TOP SPEED',
          transmission: '6-SPEED CONSTANT-MESH',
          value: '135 MPH',
          metric: '217 KM/H'
        },
        power: {
          label: 'POWER',
          value: '74 HP',
          metric: '55 KW',
          rpm: '9,000 RPM'
        },
        torque: {
          label: 'TORQUE',
          rpm: '6,500 RPM',
          value: '68 N M',
          metric: '50.1 LBF-FT'
        }
      }
    },
    {
      id: 3,
      category: 'SPORTBIKE',
      name: 'KAWASAKI NINJA 400',
      description: 'Entry-level sportbike with impressive performance and sleek styling for the modern rider.',
      image: bike3,
      colors: ['#D90429', '#000000', '#FFFFFF'],
      specs: {
        topSpeed: {
          label: 'TOP SPEED',
          transmission: '6-SPEED CONSTANT-MESH',
          value: '116 MPH',
          metric: '187 KM/H'
        },
        power: {
          label: 'POWER',
          value: '45 HP',
          metric: '33.5 KW',
          rpm: '10,000 RPM'
        },
        torque: {
          label: 'TORQUE',
          rpm: '8,000 RPM',
          value: '38 N M',
          metric: '28 LBF-FT'
        }
      }
    },
    {
      id: 4,
      category: 'RACE INSPIRED',
      name: 'SUZUKI GSX-R750',
      description: 'Legendary sportbike with race-inspired technology and aggressive design for track enthusiasts.',
      image: bike4,
      colors: ['#D90429', '#000000', '#FFFFFF'],
      specs: {
        topSpeed: {
          label: 'TOP SPEED',
          transmission: '6-SPEED CONSTANT-MESH',
          value: '165 MPH',
          metric: '266 KM/H'
        },
        power: {
          label: 'POWER',
          value: '148 HP',
          metric: '110 KW',
          rpm: '13,200 RPM'
        },
        torque: {
          label: 'TORQUE',
          rpm: '11,200 RPM',
          value: '86 N M',
          metric: '63.4 LBF-FT'
        }
      }
    },
    {
      id: 5,
      category: 'NAKED BIKE',
      name: 'DUCATI MONSTER 821',
      description: 'Italian craftsmanship meets modern engineering in this iconic naked bike with raw power.',
      image: bike1,
      colors: ['#D90429', '#000000', '#FFFFFF'],
      specs: {
        topSpeed: {
          label: 'TOP SPEED',
          transmission: '6-SPEED CONSTANT-MESH',
          value: '140 MPH',
          metric: '225 KM/H'
        },
        power: {
          label: 'POWER',
          value: '109 HP',
          metric: '81 KW',
          rpm: '9,250 RPM'
        },
        torque: {
          label: 'TORQUE',
          rpm: '7,750 RPM',
          value: '86 N M',
          metric: '63.4 LBF-FT'
        }
      }
    },
    {
      id: 6,
      category: 'TRIPLE CYLINDER',
      name: 'TRIUMPH STREET TRIPLE',
      description: 'British engineering excellence with triple-cylinder power and premium finish for discerning riders.',
      image: bike2,
      colors: ['#D90429', '#000000', '#FFFFFF'],
      specs: {
        topSpeed: {
          label: 'TOP SPEED',
          transmission: '6-SPEED CONSTANT-MESH',
          value: '145 MPH',
          metric: '233 KM/H'
        },
        power: {
          label: 'POWER',
          value: '118 HP',
          metric: '88 KW',
          rpm: '11,700 RPM'
        },
        torque: {
          label: 'TORQUE',
          rpm: '9,350 RPM',
          value: '77 N M',
          metric: '56.8 LBF-FT'
        }
      }
    },
  ]

  const currentBike = bikes[selectedBike]

  const nextBike = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setSelectedBike((prev) => (prev + 1) % bikes.length)
      setSelectedColor(0)
      setTimeout(() => setIsTransitioning(false), 50)
    }, 300)
  }

  const prevBike = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setSelectedBike((prev) => (prev - 1 + bikes.length) % bikes.length)
      setSelectedColor(0)
      setTimeout(() => setIsTransitioning(false), 50)
    }, 300)
  }

  const changeBike = (index) => {
    if (index !== selectedBike) {
      setIsTransitioning(true)
      setTimeout(() => {
        setSelectedBike(index)
        setSelectedColor(0)
        setTimeout(() => setIsTransitioning(false), 50)
      }, 300)
    }
  }

  return (
    <div className="relative bg-secondary h-screen overflow-hidden">
      {/* Red Geometric Pattern Background */}
      <div className="fixed inset-0 opacity-30 z-0">
        <div className="absolute inset-0 w-full h-full">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1200 800"
            preserveAspectRatio="none"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="geometric-pattern-bikes" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
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
              <radialGradient id="redGlowBikes" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#D90429" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#D90429" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#D90429" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#geometric-pattern-bikes)" />
            <circle cx="300" cy="200" r="150" fill="url(#redGlowBikes)" className="glow-pulse" />
            <circle cx="900" cy="600" r="200" fill="url(#redGlowBikes)" className="glow-pulse" style={{ animationDelay: '1s' }} />
            <circle cx="600" cy="400" r="180" fill="url(#redGlowBikes)" className="glow-pulse" style={{ animationDelay: '2s' }} />
          </svg>
        </div>
      </div>

      {/* Main Content - Fit in viewport */}
      <div className="relative h-screen flex flex-col px-4 sm:px-6 lg:px-8 pt-24 pb-20 z-10">
        <div className="max-w-7xl w-full mx-auto flex-1 flex flex-col">
          {/* Header Section - Compact */}
          <div ref={headerRef} className={`text-center mb-2 ${headerVisible ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-xs md:text-sm text-white/80 mb-1 font-alphacorsa tracking-wider uppercase">
              {currentBike.category}
            </p>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-1 font-alphacorsa bg-gradient-to-r from-white to-primary bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(217,4,41,0.6)]">
              {currentBike.name}
            </h1>
            <p className="text-xs md:text-sm text-white/90 max-w-2xl mx-auto leading-tight">
              {currentBike.description}
            </p>
          </div>

          {/* Main Layout Grid - Flex to fill space */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center flex-1 min-h-0">
            {/* Left Column - Performance Stats */}
            <div className="lg:col-span-2 space-y-4 md:space-y-6 pl-8 md:pl-12">
              {/* Top Speed */}
              <div className="text-white flex items-start gap-2">
                <div className="writing-vertical-rl">
                  <p className="text-[10px] md:text-xs font-alphacorsa tracking-wider text-white/70 uppercase whitespace-nowrap">
                    {currentBike.specs.topSpeed.label}
                  </p>
                </div>
                <div className="space-y-1 flex-1">
                  <p className="text-[10px] md:text-xs text-white/70 font-alphacorsa">
                    {currentBike.specs.topSpeed.transmission}
                  </p>
                  <p className="text-xl md:text-2xl font-bold font-alphacorsa bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                    {currentBike.specs.topSpeed.value}
                  </p>
                  <p className="text-[10px] md:text-xs text-white/70 font-alphacorsa">
                    {currentBike.specs.topSpeed.metric}
                  </p>
                </div>
              </div>

              {/* Power */}
              <div className="text-white flex items-start gap-2">
                <div className="writing-vertical-rl">
                  <p className="text-[10px] md:text-xs font-alphacorsa tracking-wider text-white/70 uppercase whitespace-nowrap">
                    {currentBike.specs.power.label}
                  </p>
                </div>
                <div className="space-y-1 flex-1">
                  <p className="text-[10px] md:text-xs text-white/70 font-alphacorsa">
                    {currentBike.specs.power.metric}
                  </p>
                  <p className="text-xl md:text-2xl font-bold font-alphacorsa bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                    {currentBike.specs.power.value}
                  </p>
                  <p className="text-[10px] md:text-xs text-white/70 font-alphacorsa">
                    {currentBike.specs.power.rpm}
                  </p>
                </div>
              </div>

              {/* Torque */}
              <div className="text-white flex items-start gap-2">
                <div className="writing-vertical-rl">
                  <p className="text-[10px] md:text-xs font-alphacorsa tracking-wider text-white/70 uppercase whitespace-nowrap">
                    {currentBike.specs.torque.label}
                  </p>
                </div>
                <div className="space-y-1 flex-1">
                  <p className="text-[10px] md:text-xs text-white/70 font-alphacorsa">
                    {currentBike.specs.torque.rpm}
                  </p>
                  <p className="text-xl md:text-2xl font-bold font-alphacorsa bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                    {currentBike.specs.torque.value}
                  </p>
                  <p className="text-[10px] md:text-xs text-white/70 font-alphacorsa">
                    {currentBike.specs.torque.metric}
                  </p>
                </div>
              </div>
            </div>

            {/* Center Column - Bike Image */}
            <div className="lg:col-span-8 relative h-full flex items-center justify-center">
              <div className={`relative w-full h-full max-h-[400px] md:max-h-[500px] flex items-center justify-center pl-8 md:pl-16 transition-all duration-500 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                <img
                  src={currentBike.image}
                  alt={currentBike.name}
                  className="max-w-full max-h-full object-contain drop-shadow-[0_0_15px_rgba(217,4,41,0.2)] transition-transform duration-500"
                />
                {/* Red Glow Effect Behind Bike */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-48 h-48 md:w-64 md:h-64 bg-primary opacity-10 blur-2xl rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Right Column - Social */}
            <div className="lg:col-span-2 flex flex-col justify-end items-end h-full">
              {/* Social Media Icons - Bottom Right */}
              <div className="flex flex-col space-y-3">
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors duration-200"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section - Buttons and Dots */}
          <div className="-mt-8 md:-mt-12 flex flex-col items-center">
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8 md:mb-12">
              <button className="bg-primary text-white px-6 py-2.5 rounded-[3px] hover:bg-opacity-90 transition-all duration-200 font-semibold text-sm md:text-base shadow-lg hover:shadow-xl font-alphacorsa w-[160px] md:w-[180px]">
                BUY
              </button>
              <button className="bg-transparent border-2 border-white text-white px-6 py-2.5 rounded-[3px] hover:bg-white/10 transition-all duration-200 font-semibold text-sm md:text-base font-alphacorsa w-[160px] md:w-[180px]">
                TEST DRIVE
              </button>
            </div>

            {/* Bike Selector Dots */}
            <div className="flex justify-center space-x-2">
              {bikes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => changeBike(index)}
                  className={`h-1.5 rounded-full transition-all duration-200 ${
                    selectedBike === index
                      ? 'bg-primary w-6'
                      : 'bg-white/30 w-1.5 hover:bg-white/60'
                  }`}
                  aria-label={`Select bike ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <button
            onClick={prevBike}
            className="text-white/70 hover:text-white transition-colors duration-200 p-2"
            aria-label="Previous bike"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
        <div className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <button
            onClick={nextBike}
            className="text-white/70 hover:text-white transition-colors duration-200 p-2"
            aria-label="Next bike"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Auto-scrolling Brand Names */}
      <div className="absolute bottom-0 left-0 right-0 z-20 py-4 w-full">
        <div className="relative overflow-hidden w-full">
          {/* Left Gradient Shadow */}
          <div className="absolute left-0 top-0 bottom-0 w-1/4 bg-gradient-to-r from-secondary via-secondary/60 to-transparent z-10 pointer-events-none"></div>
          {/* Right Gradient Shadow */}
          <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-gradient-to-l from-secondary via-secondary/60 to-transparent z-10 pointer-events-none"></div>
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
  )
}

export default Motorbikes
