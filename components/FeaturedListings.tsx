import React, { useState } from 'react';
import PropertyCard from './PropertyCard';
import { Property } from '../types';
import { ArrowUpDown } from 'lucide-react';

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
    title: 'Premium Corner Plot',
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
    title: 'Modern Designer House',
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
    <section id="featured" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 space-y-6 md:space-y-0">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-4">
              Premium Listings
            </h2>
            <p className="text-gray-600 max-w-xl">
              Curated selection of the finest properties in DHA and Bahria Town. Verified documents, transparent pricing.
            </p>
          </div>
          
          <div className="flex flex-col md:items-end space-y-4 md:w-1/2">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
               {['All', 'DHA', 'Bahria', 'Houses', 'Plots'].map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f as any)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      filter === f 
                      ? 'bg-primary-900 text-white shadow-md' 
                      : 'bg-white text-gray-600 border border-gray-200 hover:border-primary-900'
                    }`}
                  >
                    {f}
                  </button>
               ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-500 flex items-center">
                <ArrowUpDown className="h-4 w-4 mr-1" /> Sort by:
              </span>
              <select 
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="bg-white border border-gray-300 text-gray-700 text-sm rounded-md focus:ring-primary-900 focus:border-primary-900 block p-2 outline-none cursor-pointer"
              >
                <option value="newest">Newest Listings</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="size-asc">Size: Small to Large</option>
                <option value="size-desc">Size: Large to Small</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {sortedProperties.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No properties found matching your criteria.
          </div>
        )}

        <div className="mt-12 text-center">
            <button className="inline-flex items-center space-x-2 text-primary-900 font-bold border-b-2 border-accent-500 pb-1 hover:text-accent-600 transition-colors">
                <span>View All Properties</span>
                <span className="text-xl">→</span>
            </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;