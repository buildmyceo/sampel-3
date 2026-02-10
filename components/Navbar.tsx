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

  // Always use light background style since we are moving to a light theme hero
  // But we can add a shadow on scroll
  const navClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled
      ? 'bg-white/95 backdrop-blur-md text-primary-900 shadow-md py-3'
      : 'bg-transparent text-primary-900 py-6'
  }`;

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Building2 className="h-8 w-8 text-accent-600" />
          <div className="flex flex-col">
            <span className="text-xl font-serif font-bold tracking-wide leading-none text-primary-900">
              ESTATE<span className="text-accent-600">PRIME</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] opacity-80 text-primary-800">
              DHA & Bahria Experts
            </span>
          </div>
        </div>

        {/* Desktop Menu - Centered */}
        <div className="hidden lg:flex items-center space-x-8 text-sm font-semibold tracking-wide text-primary-900">
          <a href="#featured" className="hover:text-accent-600 transition-colors">Listings</a>
          <a href="#invest" className="hover:text-accent-600 transition-colors">Investments</a>
          <a href="#insights" className="hover:text-accent-600 transition-colors">Market Trends</a>
          <a href="#why-us" className="hover:text-accent-600 transition-colors">Why Us</a>
          <a href="#contact" className="hover:text-accent-600 transition-colors">Contact</a>
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
            <button className="bg-accent-600 hover:bg-accent-700 text-white px-6 py-3 rounded-sm transition-all shadow-lg hover:shadow-xl flex items-center space-x-2 font-medium">
                <Phone className="h-4 w-4" />
                <span>Book Consultation</span>
            </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-primary-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white absolute top-full left-0 w-full border-t border-gray-100 shadow-xl">
          <div className="flex flex-col p-6 space-y-4 text-center">
            <a href="#featured" className="text-primary-900 hover:text-accent-600 py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>Listings</a>
            <a href="#invest" className="text-primary-900 hover:text-accent-600 py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>Investments</a>
            <a href="#insights" className="text-primary-900 hover:text-accent-600 py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>Market Trends</a>
            <a href="#why-us" className="text-primary-900 hover:text-accent-600 py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>Why Us</a>
            <button className="bg-accent-600 text-white w-full py-3 rounded-sm font-medium">
              Book Consultation
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;