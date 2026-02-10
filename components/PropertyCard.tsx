import React from 'react';
import { Property } from '../types';
import { Bed, Bath, Ruler, MapPin, CheckCircle2 } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 bg-primary-900/90 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm">
          {property.status}
        </div>
        {property.isVerified && (
          <div className="absolute top-4 right-4 bg-green-600/90 text-white text-xs font-bold px-3 py-1 rounded-sm flex items-center space-x-1 shadow-sm">
            <CheckCircle2 className="h-3 w-3" />
            <span>Verified</span>
          </div>
        )}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
          <p className="text-white text-lg font-bold">PKR {property.price}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-serif font-bold text-gray-800 line-clamp-1 group-hover:text-accent-600 transition-colors">
            {property.title}
          </h3>
        </div>
        
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <MapPin className="h-4 w-4 mr-1 text-accent-500" />
          {property.phase}, {property.location}
        </div>

        <div className="flex items-center justify-between py-3 border-t border-gray-100 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
                <Ruler className="h-4 w-4 text-gray-400" />
                <span>{property.size}</span>
            </div>
            {property.type === 'House' && (
                <>
                <div className="flex items-center space-x-1">
                    <Bed className="h-4 w-4 text-gray-400" />
                    <span>{property.beds} Bed</span>
                </div>
                <div className="flex items-center space-x-1">
                    <Bath className="h-4 w-4 text-gray-400" />
                    <span>{property.baths} Bath</span>
                </div>
                </>
            )}
            {property.type !== 'House' && (
                <div className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                    {property.type}
                </div>
            )}
        </div>
      </div>

      {/* Action */}
      <button className="w-full py-3 bg-gray-50 text-primary-900 font-semibold text-sm hover:bg-primary-900 hover:text-white transition-colors border-t border-gray-100">
        View Details
      </button>
    </div>
  );
};

export default PropertyCard;