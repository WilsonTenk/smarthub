import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
  ];

  const isHome = location.pathname === '/';
  // If not home, or if scrolled, use dark text. If home and not scrolled, use white text.
  const useDarkText = scrolled || !isHome;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
             <div className={`flex flex-col leading-none transition-colors ${useDarkText ? 'text-brand-navy' : 'text-white'}`}>
                <span className="font-display text-2xl tracking-wide uppercase">Smart Hub</span>
                <span className={`font-display text-[0.65rem] tracking-[0.3em] uppercase ${scrolled ? 'text-brand-green' : 'text-brand-green'}`}>Connkt LBG</span>
             </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-display text-lg uppercase tracking-widest px-3 py-2 rounded-full transition-all duration-300 hover:text-brand-green ${
                  useDarkText ? 'text-brand-navy' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className={`ml-4 px-8 py-3 rounded-full font-display uppercase text-sm tracking-widest transition-all duration-300 transform hover:scale-105 shadow-lg ${
                scrolled 
                  ? 'bg-brand-blue text-white hover:bg-brand-navy' 
                  : 'bg-white text-brand-blue hover:bg-brand-green hover:text-white'
              }`}
            >
              Donate
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${useDarkText ? 'text-brand-navy' : 'text-white'} hover:text-brand-green focus:outline-none transition-colors`}
            >
              {isOpen ? <X size={32} strokeWidth={2.5} /> : <Menu size={32} strokeWidth={2.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-2xl h-screen top-full left-0">
          <div className="px-6 pt-12 pb-6 space-y-6 flex flex-col items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block text-3xl font-display uppercase tracking-wide ${location.pathname === link.path ? 'text-brand-blue' : 'text-brand-navy hover:text-brand-green'}`}
              >
                {link.name}
              </Link>
            ))}
             <Link
                to="/contact"
                className="mt-8 bg-brand-blue text-white px-12 py-4 rounded-full font-display uppercase text-lg tracking-widest shadow-xl"
              >
                Donate Now
              </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;