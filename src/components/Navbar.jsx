import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md shadow-md'
          : 'bg-transparent border-none shadow-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="MotorbikeDeal Logo"
              className="h-12 md:h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm transition-colors duration-200 font-medium font-alphacorsa ${
                isScrolled
                  ? 'text-white hover:text-primary'
                  : 'text-white hover:text-gray-200'
              }`}
            >
              Home
            </Link>
            <Link
              to="/motorbikes"
              className={`text-sm transition-colors duration-200 font-medium font-alphacorsa ${
                isScrolled
                  ? 'text-white hover:text-primary'
                  : 'text-white hover:text-gray-200'
              }`}
            >
              Motorbikes
            </Link>
            <Link
              to="/promotions"
              className={`text-sm transition-colors duration-200 font-medium font-alphacorsa ${
                isScrolled
                  ? 'text-white hover:text-primary'
                  : 'text-white hover:text-gray-200'
              }`}
            >
              Promotions
            </Link>
            <Link
              to="/about"
              className={`text-sm transition-colors duration-200 font-medium font-alphacorsa ${
                isScrolled
                  ? 'text-white hover:text-primary'
                  : 'text-white hover:text-gray-200'
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`text-sm transition-colors duration-200 font-medium font-alphacorsa ${
                isScrolled
                  ? 'text-white hover:text-primary'
                  : 'text-white hover:text-gray-200'
              }`}
            >
              Contact
            </Link>
            <a
              href="#"
              className="bg-primary text-white text-sm px-5 py-1.5 rounded-[3px] hover:bg-opacity-90 transition-all duration-200 font-medium font-alphacorsa shadow-md"
            >
              Chat on Line
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className={`focus:outline-none text-white`}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

