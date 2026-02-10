import React, { useState } from 'react';
import { Search, MapPin, Building, Ruler, Wallet } from 'lucide-react';

const Hero: React.FC = () => {
  const [location, setLocation] = useState('DHA Lahore');
  const [phase, setPhase] = useState('');
  const [type, setType] = useState('Plot');
  
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 w-full flex items-center justify-center bg-slate-50 overflow-hidden">
      
      {/* Abstract Background Elements for Light Theme */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary-900 mb-6 leading-tight">
            Trusted Property Experts in <br/>
            <span className="text-accent-600">DHA & Bahria Town</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 font-light tracking-wide max-w-2xl mx-auto">
            Seamlessly serving overseas Pakistanis and luxury investors. 
            Buy, Sell & Invest with complete transparency and confidence.
          </p>
        </div>

        {/* Search Bar - Dark Container styling to contrast with light background */}
        <div className="max-w-6xl mx-auto bg-primary-900 p-3 rounded-lg shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
            
            {/* Location */}
            <div className="md:col-span-3 relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                <MapPin className="h-5 w-5 text-accent-500" />
              </div>
              <select 
                className="block w-full pl-10 pr-4 py-4 bg-white text-gray-900 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-500 appearance-none font-semibold cursor-pointer"
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
            <div className="md:col-span-3 relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                <Building className="h-5 w-5 text-gray-400 group-hover:text-accent-500 transition-colors" />
              </div>
              <select 
                className="block w-full pl-10 pr-4 py-4 bg-white text-gray-900 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-500 appearance-none font-semibold cursor-pointer"
                value={phase}
                onChange={(e) => setPhase(e.target.value)}
              >
                <option value="">Any Phase</option>
                <option>Phase 1-4</option>
                <option>Phase 5</option>
                <option>Phase 6</option>
                <option>Phase 7</option>
                <option>Phase 8</option>
              </select>
            </div>

            {/* Type */}
            <div className="md:col-span-2 relative group">
               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                <Ruler className="h-5 w-5 text-gray-400 group-hover:text-accent-500 transition-colors" />
              </div>
              <select 
                className="block w-full pl-10 pr-4 py-4 bg-white text-gray-900 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-500 appearance-none font-semibold cursor-pointer"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option>Plot</option>
                <option>House</option>
                <option>Commercial</option>
              </select>
            </div>

             {/* Price */}
             <div className="md:col-span-2 relative group">
               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                <Wallet className="h-5 w-5 text-gray-400 group-hover:text-accent-500 transition-colors" />
              </div>
              <select className="block w-full pl-10 pr-4 py-4 bg-white text-gray-900 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-500 appearance-none font-semibold cursor-pointer">
                <option>Any Price</option>
                <option>Up to 1 Crore</option>
                <option>1 - 3 Crore</option>
                <option>3 - 5 Crore</option>
                <option>5 Crore+</option>
              </select>
            </div>

            {/* Search Button */}
            <div className="md:col-span-2">
              <button className="w-full h-full bg-accent-600 hover:bg-accent-700 text-white font-bold py-4 px-4 rounded-sm transition-all flex items-center justify-center space-x-2 shadow-lg">
                <Search className="h-5 w-5" />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
            <button className="text-primary-900 font-semibold border-b-2 border-accent-600 pb-1 hover:text-accent-600 transition-colors">
                View Latest Listings
            </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;