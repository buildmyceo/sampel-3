import React, { useState } from 'react';
import { Search, MapPin, Building, Ruler, Wallet, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [location, setLocation] = useState('DHA Lahore');
  const [phase, setPhase] = useState('');
  const [type, setType] = useState('Plot');
  
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/90 via-primary-900/50 to-primary-900/90 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2671&auto=format&fit=crop" 
          alt="Luxury Villa" 
          className="w-full h-full object-cover animate-slow-pan"
        />
      </div>

      <div className="relative z-20 container mx-auto px-6 pt-20">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <span className="inline-block py-1 px-3 border border-accent-500/50 rounded-full bg-primary-900/50 backdrop-blur-md text-accent-400 text-xs font-semibold tracking-[0.2em] uppercase mb-6">
            The Gold Standard in Real Estate
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-white mb-8 leading-tight drop-shadow-lg">
            Curating Pakistan's <br/>
            <span className="italic text-accent-400">Finest Addresses</span>
          </h1>
          <p className="text-xl text-gray-200 mb-10 font-light tracking-wide max-w-2xl mx-auto leading-relaxed opacity-90">
            DHA & Bahria Town's premier investment partners. 
            Exclusively serving overseas Pakistanis with corporate-grade transparency.
          </p>
        </div>

        {/* Floating Glass Search Bar */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-2 rounded-lg shadow-glass">
            <div className="bg-white rounded-[4px] shadow-xl p-4 md:p-1">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:divide-x divide-gray-100">
                
                {/* Location */}
                <div className="md:col-span-3 relative group px-2">
                  <div className="flex items-center px-4 pt-2 md:pt-3">
                    <MapPin className="h-4 w-4 text-accent-600 mr-2" />
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Location</label>
                  </div>
                  <select 
                    className="w-full px-4 py-2 bg-transparent text-primary-900 font-serif font-bold text-lg focus:outline-none appearance-none cursor-pointer"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  >
                    <option>DHA Lahore</option>
                    <option>DHA Karachi</option>
                    <option>DHA Islamabad</option>
                    <option>Bahria Town Lahore</option>
                    <option>Bahria Town Karachi</option>
                  </select>
                </div>

                {/* Phase */}
                <div className="md:col-span-3 relative group px-2">
                  <div className="flex items-center px-4 pt-2 md:pt-3">
                    <Building className="h-4 w-4 text-accent-600 mr-2" />
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Phase</label>
                  </div>
                  <select 
                    className="w-full px-4 py-2 bg-transparent text-primary-900 font-serif font-bold text-lg focus:outline-none appearance-none cursor-pointer"
                    value={phase}
                    onChange={(e) => setPhase(e.target.value)}
                  >
                    <option value="">All Phases</option>
                    <option>Phase 1-4 (Mature)</option>
                    <option>Phase 5-6 (Premium)</option>
                    <option>Phase 7-9 (Growth)</option>
                  </select>
                </div>

                {/* Type */}
                <div className="md:col-span-2 relative group px-2">
                  <div className="flex items-center px-4 pt-2 md:pt-3">
                    <Ruler className="h-4 w-4 text-accent-600 mr-2" />
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Type</label>
                  </div>
                  <select 
                    className="w-full px-4 py-2 bg-transparent text-primary-900 font-serif font-bold text-lg focus:outline-none appearance-none cursor-pointer"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option>Residential Plot</option>
                    <option>Luxury House</option>
                    <option>Commercial</option>
                  </select>
                </div>

                 {/* Price */}
                 <div className="md:col-span-2 relative group px-2">
                  <div className="flex items-center px-4 pt-2 md:pt-3">
                    <Wallet className="h-4 w-4 text-accent-600 mr-2" />
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Budget</label>
                  </div>
                  <select className="w-full px-4 py-2 bg-transparent text-primary-900 font-serif font-bold text-lg focus:outline-none appearance-none cursor-pointer">
                    <option>Any Range</option>
                    <option>Up to 2 Crore</option>
                    <option>2 - 5 Crore</option>
                    <option>5 Crore+</option>
                  </select>
                </div>

                {/* Search Button */}
                <div className="md:col-span-2 p-2">
                  <button className="w-full h-full min-h-[60px] bg-primary-900 hover:bg-primary-800 text-white font-medium text-lg rounded-sm transition-all flex items-center justify-center shadow-lg group">
                    <span>Search</span>
                    <Search className="h-5 w-5 ml-2 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center space-x-8 text-white/80 text-sm font-light tracking-widest">
            <div className="flex items-center">
                <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                VERIFIED LISTINGS
            </div>
            <div className="flex items-center">
                <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                MARKET ANALYSIS
            </div>
            <div className="flex items-center">
                <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                LEGAL SUPPORT
            </div>
        </div>
      </div>
      
      {/* Bottom Gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-surface-50 to-transparent z-10"></div>
    </div>
  );
};

export default Hero;