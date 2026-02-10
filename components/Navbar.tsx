import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Building2 } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Glassmorphism effect on scroll
  const navClasses = `fixed w-full z-50 transition-all duration-500 ease-in-out ${
    isScrolled
      ? 'bg-white/90 backdrop-blur-xl text-primary-900 shadow-glass py-4'
      : 'bg-transparent text-white py-6'
  }`;

  const linkClasses = `text-sm font-medium tracking-wide transition-colors duration-300 relative group ${
    isScrolled ? 'text-primary-800 hover:text-accent-600' : 'text-white/90 hover:text-white'
  }`;

  const linkUnderline = `absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full`;

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3 group cursor-pointer">
          <div className={`p-2 rounded-sm transition-colors ${isScrolled ? 'bg-primary-900 text-white' : 'bg-white text-primary-900'}`}>
            <Building2 className="h-6 w-6" />
          </div>
          <div className="flex flex-col">
            <span className={`text-2xl font-serif font-bold tracking-tight leading-none ${isScrolled ? 'text-primary-900' : 'text-white'}`}>
              ESTATE<span className="text-accent-500">PRIME</span>
            </span>
            <span className={`text-[9px] uppercase tracking-[0.3em] font-medium ${isScrolled ? 'text-primary-600' : 'text-white/70'}`}>
              Luxury Real Estate
            </span>
          </div>
        </div>

        {/* Desktop Menu - Centered */}
        <div className="hidden lg:flex items-center space-x-10">
          <a href="#featured" className={linkClasses}>
            Exclusive Listings
            <span className={linkUnderline}></span>
          </a>
          <a href="#invest" className={linkClasses}>
            Investments
            <span className={linkUnderline}></span>
          </a>
          <a href="#insights" className={linkClasses}>
            Market Insights
            <span className={linkUnderline}></span>
          </a>
          <a href="#why-us" className={linkClasses}>
            Concierge
            <span className={linkUnderline}></span>
          </a>
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
            <button className={`
              px-8 py-3 rounded-sm font-medium text-sm tracking-wide transition-all duration-300 flex items-center space-x-2
              ${isScrolled 
                ? 'bg-primary-900 text-white hover:bg-accent-600 shadow-lg' 
                : 'bg-white text-primary-900 hover:bg-accent-50 hover:text-primary-900 shadow-lg border border-white'}
            `}>
                <Phone className="h-4 w-4" />
                <span>Private Consultation</span>
            </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen 
            ? <X className={`h-6 w-6 ${isScrolled ? 'text-primary-900' : 'text-white'}`} /> 
            : <Menu className={`h-6 w-6 ${isScrolled ? 'text-primary-900' : 'text-white'}`} />
          }
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-2xl h-screen">
          <div className="flex flex-col p-8 space-y-6 text-center">
            <a href="#featured" className="text-2xl font-serif text-primary-900 hover:text-accent-600" onClick={() => setMobileMenuOpen(false)}>Exclusive Listings</a>
            <a href="#invest" className="text-2xl font-serif text-primary-900 hover:text-accent-600" onClick={() => setMobileMenuOpen(false)}>Investments</a>
            <a href="#insights" className="text-2xl font-serif text-primary-900 hover:text-accent-600" onClick={() => setMobileMenuOpen(false)}>Market Trends</a>
            <a href="#why-us" className="text-2xl font-serif text-primary-900 hover:text-accent-600" onClick={() => setMobileMenuOpen(false)}>Concierge</a>
            <div className="pt-8">
              <button className="bg-primary-900 text-white w-full py-4 rounded-sm font-medium tracking-wide">
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;