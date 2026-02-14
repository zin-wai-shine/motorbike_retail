import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="relative bg-secondary text-white mt-auto overflow-hidden">
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
              <pattern id="geometric-pattern-footer" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
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
              <radialGradient id="redGlowFooter" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#D90429" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#D90429" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#D90429" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#geometric-pattern-footer)" />
            <circle cx="300" cy="200" r="150" fill="url(#redGlowFooter)" className="glow-pulse" />
            <circle cx="900" cy="600" r="200" fill="url(#redGlowFooter)" className="glow-pulse" style={{ animationDelay: '1s' }} />
            <circle cx="600" cy="400" r="180" fill="url(#redGlowFooter)" className="glow-pulse" style={{ animationDelay: '2s' }} />
          </svg>
        </div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <img
              src={logo}
              alt="MotorbikeDeal Logo"
              className="h-12 md:h-16 w-auto object-contain mb-4"
            />
            <p className="text-gray-300 mb-4">
              Your trusted motorbike dealership. We help you find the perfect
              bike with flexible financing options and exceptional service.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors"
                aria-label="Line"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.63.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 3.94 8.842 9.262 9.608.391.082.923.258 1.058.59.12.301.079.766.058 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/motorbikes"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Motorbikes
                </Link>
              </li>
              <li>
                <Link
                  to="/promotions"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Promotions
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>123 Motorbike Street</li>
              <li>Bangkok, Thailand</li>
              <li>Phone: +66 XX XXX XXXX</li>
              <li>Email: info@motorbikedeal.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 MotorbikeDeal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

