import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="relative">
              <Sparkles className={`h-10 w-10 transition-colors duration-300 ${
                scrolled ? 'text-black group-hover:text-gray-600' : 'text-white group-hover:text-gray-300'
              }`} aria-hidden="true" />
              <div className={`absolute -inset-1 rounded-full blur-sm transition-colors duration-300 ${
                scrolled ? 'bg-gray-100 group-hover:bg-gray-200' : 'bg-white/10 group-hover:bg-white/20'
              }`}></div>
            </div>
            <div className="ml-3">
              <span className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${
                scrolled ? 'text-black' : 'text-white'
              }`}>
                Dynamic 360
              </span>
              <span className={`text-xl ml-1 transition-colors duration-300 ${
                scrolled ? 'text-gray-600' : 'text-gray-300'
              }`}>
                Events
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center flex-1 mx-8">
            <div className="bg-black/10 backdrop-blur-lg rounded-full px-4 py-2 flex items-center space-x-1">
              <NavLink to="/" isActive={location.pathname === '/'} scrolled={scrolled}>Home</NavLink>
              
              {/* Events Dropdown */}
              <div className="relative group">
                <button 
                  className={`flex items-center px-4 py-2 rounded-full transition-all duration-200 ${
                    scrolled 
                      ? 'text-gray-600 hover:text-black hover:bg-gray-50' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  Events
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`} />
                </button>
                <div className={`absolute top-full left-0 w-48 py-2 mt-1 rounded-xl shadow-lg transition-all duration-200 transform origin-top ${
                  isDropdownOpen 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-95 pointer-events-none'
                } ${
                  scrolled 
                    ? 'bg-white border border-gray-100' 
                    : 'bg-gray-900 border border-gray-800'
                }`}>
                  <DropdownLink to="/events" scrolled={scrolled}>All Events</DropdownLink>
                  <DropdownLink to="/category/weddings" scrolled={scrolled}>Weddings</DropdownLink>
                  <DropdownLink to="/category/cultural" scrolled={scrolled}>Cultural Events</DropdownLink>
                  <DropdownLink to="/category/corporate" scrolled={scrolled}>Corporate Events</DropdownLink>
                  <DropdownLink to="/category/festivals" scrolled={scrolled}>Festivals</DropdownLink>
                </div>
              </div>
              
              <NavLink to="/contact" isActive={location.pathname === '/contact'} scrolled={scrolled}>Contact</NavLink>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className={`px-6 py-2.5 rounded-full font-medium transition-all duration-200 ${
              scrolled 
                ? 'bg-black text-white hover:bg-gray-900' 
                : 'bg-white text-black hover:bg-gray-100'
            }`}>
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={`md:hidden p-2 rounded-full transition-colors duration-200 ${
              scrolled
                ? 'text-gray-600 hover:text-black hover:bg-gray-100'
                : 'text-gray-300 hover:text-white hover:bg-white/10'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              scrolled ? 'focus:ring-black' : 'focus:ring-white'
            }`}
            onClick={toggleMenu}
            aria-expanded={isOpen}
          >
            <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
            {isOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 ${
              scrolled ? 'bg-white border-t border-gray-100' : 'bg-black/95'
            }`}>
              <MobileNavLink to="/" isActive={location.pathname === '/'} scrolled={scrolled}>Home</MobileNavLink>
              <MobileNavLink to="/events" isActive={location.pathname === '/events'} scrolled={scrolled}>All Events</MobileNavLink>
              <MobileNavLink to="/category/weddings" isActive={location.pathname === '/category/weddings'} scrolled={scrolled}>Weddings</MobileNavLink>
              <MobileNavLink to="/category/cultural" isActive={location.pathname === '/category/cultural'} scrolled={scrolled}>Cultural Events</MobileNavLink>
              <MobileNavLink to="/category/corporate" isActive={location.pathname === '/category/corporate'} scrolled={scrolled}>Corporate Events</MobileNavLink>
              <MobileNavLink to="/category/festivals" isActive={location.pathname === '/category/festivals'} scrolled={scrolled}>Festivals</MobileNavLink>
              <MobileNavLink to="/contact" isActive={location.pathname === '/contact'} scrolled={scrolled}>Contact</MobileNavLink>
              <button className={`w-full mt-4 px-4 py-2.5 rounded-full font-medium transition-all duration-200 ${
                scrolled 
                  ? 'bg-black text-white hover:bg-gray-900' 
                  : 'bg-white text-black hover:bg-gray-100'
              }`}>
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

const NavLink = ({ to, children, isActive, scrolled }) => {
  return (
    <Link
      to={to}
      className={`px-4 py-2 rounded-full text-base font-medium transition-all duration-200 ${
        isActive
          ? scrolled 
            ? 'bg-gray-50 text-black' 
            : 'bg-white/10 text-white'
          : scrolled 
            ? 'text-gray-600 hover:text-black hover:bg-gray-50' 
            : 'text-gray-300 hover:text-white hover:bg-white/10'
      }`}
    >
      {children}
    </Link>
  );
};

const DropdownLink = ({ to, children, scrolled }) => {
  return (
    <Link
      to={to}
      className={`block px-4 py-2 text-sm transition-colors duration-200 ${
        scrolled 
          ? 'text-gray-600 hover:text-black hover:bg-gray-50' 
          : 'text-gray-300 hover:text-white hover:bg-white/10'
      }`}
    >
      {children}
    </Link>
  );
};

const MobileNavLink = ({ to, children, isActive, scrolled }) => {
  return (
    <Link
      to={to}
      className={`block px-3 py-2 rounded-full text-base font-medium transition-all duration-200 ${
        isActive
          ? scrolled 
            ? 'bg-gray-50 text-black' 
            : 'bg-white/10 text-white'
          : scrolled 
            ? 'text-gray-600 hover:bg-gray-50 hover:text-black' 
            : 'text-gray-300 hover:bg-white/5 hover:text-white'
      }`}
    >
      {children}
    </Link>
  );
};

export default Navbar;