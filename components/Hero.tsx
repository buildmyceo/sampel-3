import React, { useState } from 'react';
import { Search, MapPin, Ruler, Wallet, Building2 } from 'lucide-react';

const Hero: React.FC = () => {
  const [location, setLocation] = useState('DHA Lahore');
  const [phase, setPhase] = useState('');
  const [type, setType] = useState('Plot');
  
  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600596542815-e32870110018?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/40 to-primary-900/30"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-20 text-center">
        <div className="max-w-4xl mx-auto mb-10">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Trusted Property Experts in <br/><span className="text-accent-500">DHA & Bahria Town</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 font-light tracking-wide">
            Seamlessly serving overseas Pakistanis and luxury investors. <br className="hidden md:block" />
            Buy, Sell & Invest with complete transparency and confidence.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-lg shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            
            {/* Location */}
            <div className="md:col-span-3 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin className="h-5 w-5 text-accent-500" />
              </div>
              <select 
                className="block w-full pl-10 pr-4 py-3 bg-white text-gray-900 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-500 appearance-none font-medium"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option>DHA Lahore</option>
                <option>DHA Karachi</option>
                <option>DHA Islamabad</option>
                <option>Bahria Town Lahore</option>
                <option>Bahria Town Karachi</option>
                <option>Bahria Town Islamabad</option>
              </select>
            </div>

            {/* Phase / Sector */}
            <div className="md:col-span-3 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Building2 className="h-5 w-5 text-gray-400" />
              </div>
              <select 
                className="block w-full pl-10 pr-4 py-3 bg-white text-gray-900 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-500 appearance-none font-medium"
                value={phase}
                onChange={(e) => setPhase(e.target.value)}
              >
                <option value="">Any Phase</option>
                <option>Phase 1-4</option>
                <option>Phase 5</option>
                <option>Phase 6</option>
                <option>Phase 7</option>
                <option>Phase 8</option>
                <option>Phase 9 (Prism)</option>
              </select>
            </div>

            {/* Type & Size */}
            <div className="md:col-span-2 relative">
               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Ruler className="h-5 w-5 text-gray-400" />
              </div>
              <select 
                className="block w-full pl-10 pr-4 py-3 bg-white text-gray-900 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-500 appearance-none font-medium"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option>Plot</option>
                <option>House</option>
                <option>Commercial</option>
                <option>Apartment</option>
              </select>
            </div>

             {/* Price Range */}
             <div className="md:col-span-2 relative">
               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Wallet className="h-5 w-5 text-gray-400" />
              </div>
              <select className="block w-full pl-10 pr-4 py-3 bg-white text-gray-900 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-500 appearance-none font-medium">
                <option>Any Price</option>
                <option>Up to 1 Crore</option>
                <option>1 - 3 Crore</option>
                <option>3 - 5 Crore</option>
                <option>5 Crore+</option>
              </select>
            </div>

            {/* Search Button */}
            <div className="md:col-span-2">
              <button className="w-full h-full bg-accent-600 hover:bg-accent-700 text-white font-bold py-3 px-4 rounded-sm transition-all flex items-center justify-center space-x-2 shadow-lg">
                <Search className="h-5 w-5" />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center space-x-4">
            <button className="px-6 py-3 border border-white text-white hover:bg-white hover:text-primary-900 transition-all rounded-sm font-medium">
                View Latest Listings
            </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;