import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Building2 } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled
      ? 'bg-primary-900/95 backdrop-blur-md text-white shadow-lg py-3'
      : 'bg-transparent text-white py-5'
  }`;

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Building2 className="h-8 w-8 text-accent-500" />
          <div className="flex flex-col">
            <span className="text-xl font-serif font-bold tracking-wide leading-none">
              ESTATE<span className="text-accent-500">PRIME</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] opacity-80">
              DHA & Bahria Experts
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
          <a href="#featured" className="hover:text-accent-500 transition-colors">Listings</a>
          <a href="#invest" className="hover:text-accent-500 transition-colors">Investments</a>
          <a href="#insights" className="hover:text-accent-500 transition-colors">Market Trends</a>
          <a href="#why-us" className="hover:text-accent-500 transition-colors">Why Us</a>
          <a href="#contact" className="hover:text-accent-500 transition-colors">Contact</a>
          <button className="bg-accent-600 hover:bg-accent-700 text-white px-5 py-2.5 rounded-sm transition-all shadow-md flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <span>Book Consultation</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-primary-900 absolute top-full left-0 w-full border-t border-white/10 shadow-xl">
          <div className="flex flex-col p-6 space-y-4 text-center">
            <a href="#featured" className="text-white hover:text-accent-500 py-2" onClick={() => setMobileMenuOpen(false)}>Listings</a>
            <a href="#invest" className="text-white hover:text-accent-500 py-2" onClick={() => setMobileMenuOpen(false)}>Investments</a>
            <a href="#insights" className="text-white hover:text-accent-500 py-2" onClick={() => setMobileMenuOpen(false)}>Market Trends</a>
            <a href="#why-us" className="text-white hover:text-accent-500 py-2" onClick={() => setMobileMenuOpen(false)}>Why Us</a>
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