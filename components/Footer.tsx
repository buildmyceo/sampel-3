import React from 'react';
import { Building2, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-primary-950 text-white pt-24 pb-12 border-t border-primary-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Brand & Vision */}
          <div className="lg:col-span-4">
             <div className="flex items-center space-x-3 mb-8">
                <div className="p-2 bg-white/5 rounded-sm">
                  <Building2 className="h-6 w-6 text-accent-400" />
                </div>
                <div className="flex flex-col">
                    <span className="text-2xl font-serif font-bold tracking-wide leading-none text-white">
                    ESTATE<span className="text-accent-500">PRIME</span>
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mt-1">
                      Luxury Real Estate
                    </span>
                </div>
            </div>
            <p className="text-gray-400 font-light leading-relaxed mb-8 max-w-sm">
                Redefining the real estate experience for the modern investor. We bridge the gap between overseas ambition and tangible assets in Pakistan's most prestigious communities.
            </p>
            <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-accent-600 hover:text-white transition-all duration-300">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-serif text-lg mb-8">Explore</h4>
            <ul className="space-y-4 text-sm font-light text-gray-400">
                <li><a href="#" className="hover:text-accent-400 transition-colors flex items-center"><span className="w-0 hover:w-2 h-px bg-accent-400 mr-0 hover:mr-2 transition-all duration-300"></span> Exclusive Listings</a></li>
                <li><a href="#" className="hover:text-accent-400 transition-colors flex items-center"><span className="w-0 hover:w-2 h-px bg-accent-400 mr-0 hover:mr-2 transition-all duration-300"></span> Investment Guide</a></li>
                <li><a href="#" className="hover:text-accent-400 transition-colors flex items-center"><span className="w-0 hover:w-2 h-px bg-accent-400 mr-0 hover:mr-2 transition-all duration-300"></span> Market Insights</a></li>
                <li><a href="#" className="hover:text-accent-400 transition-colors flex items-center"><span className="w-0 hover:w-2 h-px bg-accent-400 mr-0 hover:mr-2 transition-all duration-300"></span> Concierge Services</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-serif text-lg mb-8">Headquarters</h4>
            <ul className="space-y-6 text-sm font-light text-gray-400">
                <li className="flex items-start space-x-4 group">
                    <MapPin className="h-5 w-5 text-accent-500 mt-1 group-hover:text-white transition-colors" />
                    <span className="leading-relaxed">Suite 104, Y-Block Premium Arcade,<br/>DHA Phase 3, Lahore, Pakistan.</span>
                </li>
                <li className="flex items-center space-x-4 group">
                    <Phone className="h-5 w-5 text-accent-500 group-hover:text-white transition-colors" />
                    <span>+92 300 123 4567</span>
                </li>
                <li className="flex items-center space-x-4 group">
                    <Mail className="h-5 w-5 text-accent-500 group-hover:text-white transition-colors" />
                    <span>concierge@estateprime.pk</span>
                </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-serif text-lg mb-8">Private Updates</h4>
            <p className="text-xs text-gray-500 mb-4">Subscribe for off-market opportunities.</p>
            <div className="flex flex-col space-y-3">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-accent-500 text-sm transition-colors"
                />
                <button className="bg-accent-600 hover:bg-accent-500 text-white px-6 py-3 text-sm font-medium tracking-wide transition-colors flex justify-between items-center">
                   <span>Subscribe</span>
                   <ArrowRight className="h-4 w-4" />
                </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-light">
            <div className="mb-4 md:mb-0">
                <p>&copy; 2024 Estate Prime. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <span className="text-gray-700">|</span>
                <p>Designed by <a href="https://buildmyceo.com" target="_blank" rel="noopener noreferrer" className="text-accent-500 hover:text-white transition-colors font-medium">buildmyceo.com</a></p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;