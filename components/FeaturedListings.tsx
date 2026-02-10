import React, { useState } from 'react';
import PropertyCard from './PropertyCard';
import { Property } from '../types';
import { ArrowUpDown, ArrowRight } from 'lucide-react';

const MOCK_PROPERTIES: Property[] = [
  {
    id: 1,
    title: '1 Kanal Luxury Spanish Villa',
    location: 'DHA Lahore',
    phase: 'Phase 6',
    price: '9.5 Crore',
    size: '1 Kanal',
    type: 'House',
    beds: 5,
    baths: 6,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    isVerified: true,
    status: 'For Sale'
  },
  {
    id: 2,
    title: 'Premium Corner Plot facing Park',
    location: 'Bahria Town Lahore',
    phase: 'Sector C',
    price: '2.8 Crore',
    size: '10 Marla',
    type: 'Plot',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    isVerified: true,
    status: 'For Sale'
  },
  {
    id: 3,
    title: 'Modern Designer House by A+ Architect',
    location: 'DHA Lahore',
    phase: 'Phase 8',
    price: '12.2 Crore',
    size: '1 Kanal',
    type: 'House',
    beds: 6,
    baths: 7,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    isVerified: true,
    status: 'New Launch'
  },
  {
    id: 4,
    title: 'Commercial Plot Main Boulevard',
    location: 'DHA Karachi',
    phase: 'Phase 8',
    price: '45 Crore',
    size: '4 Kanal',
    type: 'Commercial',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    isVerified: true,
    status: 'For Sale'
  },
  {
    id: 5,
    title: '5 Marla Brand New House',
    location: 'Bahria Town Islamabad',
    phase: 'Phase 4',
    price: '1.9 Crore',
    size: '5 Marla',
    type: 'House',
    beds: 3,
    baths: 4,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    isVerified: false,
    status: 'For Sale'
  },
  {
    id: 6,
    title: 'Park Facing 10 Marla Plot',
    location: 'DHA Lahore',
    phase: 'Phase 9 Prism',
    price: '1.4 Crore',
    size: '10 Marla',
    type: 'Plot',
    image: 'https://images.unsplash.com/photo-1521574873411-573a5d8d311d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    isVerified: true,
    status: 'For Sale'
  }
];

const parsePrice = (priceStr: string): number => {
  const clean = priceStr.replace(/PKR\s?/, '').trim();
  const [val, unit] = clean.split(' ');
  const num = parseFloat(val);
  if (!unit) return num;
  if (unit.toLowerCase().includes('crore')) return num * 10000000;
  if (unit.toLowerCase().includes('lakh')) return num * 100000;
  return num;
};

const parseSize = (sizeStr: string): number => {
  const [val, unit] = sizeStr.split(' ');
  const num = parseFloat(val);
  if (!unit) return num;
  if (unit.toLowerCase().includes('kanal')) return num * 20; // 1 Kanal = 20 Marla
  if (unit.toLowerCase().includes('marla')) return num;
  return num;
};

const FeaturedListings: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'DHA' | 'Bahria' | 'Plots' | 'Houses'>('All');
  const [sortOption, setSortOption] = useState<string>('newest');

  const filteredProps = MOCK_PROPERTIES.filter(p => {
    if (filter === 'All') return true;
    if (filter === 'DHA') return p.location.includes('DHA');
    if (filter === 'Bahria') return p.location.includes('Bahria');
    if (filter === 'Plots') return p.type === 'Plot' || p.type === 'Commercial';
    if (filter === 'Houses') return p.type === 'House';
    return true;
  });

  const sortedProperties = [...filteredProps].sort((a, b) => {
    switch (sortOption) {
      case 'price-asc':
        return parsePrice(a.price) - parsePrice(b.price);
      case 'price-desc':
        return parsePrice(b.price) - parsePrice(a.price);
      case 'size-asc':
        return parseSize(a.size) - parseSize(b.size);
      case 'size-desc':
        return parseSize(b.size) - parseSize(a.size);
      case 'newest':
      default:
        return b.id - a.id;
    }
  });

  return (
    <section id="featured" className="py-28 bg-surface-50">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-200 pb-8">
          <div className="max-w-2xl">
            <span className="text-accent-600 font-bold tracking-widest text-xs uppercase mb-2 block">Premium Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-serif text-primary-900 mb-6">
              Exclusive Listings
            </h2>
            <p className="text-gray-500 font-light leading-relaxed text-lg">
              A curated selection of the finest properties in DHA and Bahria Town. 
              Each listing represents a unique investment opportunity, rigorously verified for your peace of mind.
            </p>
          </div>
          
          <div className="flex flex-col items-end mt-8 md:mt-0">
             <button className="group flex items-center text-primary-900 font-medium border-b border-primary-900 pb-1 hover:text-accent-600 hover:border-accent-600 transition-all">
                <span>View Entire Collection</span>
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
             </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center gap-2">
               {['All', 'DHA', 'Bahria', 'Houses', 'Plots'].map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f as any)}
                    className={`px-6 py-2 text-sm uppercase tracking-wider font-medium transition-all ${
                      filter === f 
                      ? 'bg-primary-900 text-white shadow-lg' 
                      : 'bg-white text-gray-400 hover:text-primary-900'
                    }`}
                  >
                    {f}
                  </button>
               ))}
            </div>

            <div className="relative">
              <select 
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="appearance-none bg-transparent pl-4 pr-8 py-2 text-sm font-medium text-gray-600 border-none focus:ring-0 cursor-pointer"
              >
                <option value="newest">Newest Arrivals</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
              <ArrowUpDown className="absolute right-0 top-1/2 -translate-y-1/2 h-3 w-3 text-gray-400 pointer-events-none" />
            </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {sortedProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {sortedProperties.length === 0 && (
          <div className="text-center py-20 bg-white border border-dashed border-gray-200 rounded-lg">
            <p className="text-gray-400 font-serif text-xl">No exclusive properties match these specific criteria.</p>
            <button 
              onClick={() => setFilter('All')}
              className="mt-4 text-accent-600 hover:underline"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedListings;