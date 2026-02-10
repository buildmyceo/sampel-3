import React from 'react';
import { Property } from '../types';
import { Bed, Bath, Ruler, MapPin, CheckCircle2 } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-premium transition-all duration-500 flex flex-col h-full border border-gray-100">
      {/* Image Container */}
      <div className="relative h-[280px] overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
        />
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
        
        <div className="absolute top-4 left-4">
          <span className="bg-white/95 backdrop-blur-sm text-primary-900 text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest shadow-sm">
            {property.status}
          </span>
        </div>
        
        {property.isVerified && (
          <div className="absolute top-4 right-4 bg-accent-500/90 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1.5 flex items-center space-x-1 shadow-sm">
            <CheckCircle2 className="h-3 w-3" />
            <span>VERIFIED</span>
          </div>
        )}

        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-white text-2xl font-serif italic mb-1">PKR {property.price}</p>
          <div className="flex items-center text-white/90 text-xs font-light">
             <MapPin className="h-3 w-3 mr-1 text-accent-400" />
             {property.phase}, {property.location}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-lg font-serif font-medium text-primary-900 mb-4 line-clamp-2 group-hover:text-accent-600 transition-colors">
          {property.title}
        </h3>
        
        <div className="mt-auto grid grid-cols-3 gap-2 py-4 border-t border-gray-50">
            <div className="flex flex-col items-center justify-center p-2 bg-surface-50 rounded-sm">
                <Ruler className="h-4 w-4 text-gray-400 mb-1" />
                <span className="text-xs font-semibold text-primary-800">{property.size}</span>
            </div>
            {property.type === 'House' ? (
                <>
                <div className="flex flex-col items-center justify-center p-2 bg-surface-50 rounded-sm">
                    <Bed className="h-4 w-4 text-gray-400 mb-1" />
                    <span className="text-xs font-semibold text-primary-800">{property.beds} Bed</span>
                </div>
                <div className="flex flex-col items-center justify-center p-2 bg-surface-50 rounded-sm">
                    <Bath className="h-4 w-4 text-gray-400 mb-1" />
                    <span className="text-xs font-semibold text-primary-800">{property.baths} Bath</span>
                </div>
                </>
            ) : (
                <div className="col-span-2 flex flex-col items-center justify-center p-2 bg-surface-50 rounded-sm">
                    <span className="text-xs text-gray-400 mb-1">Type</span>
                    <span className="text-xs font-semibold text-primary-800">{property.type}</span>
                </div>
            )}
        </div>

        <button className="w-full mt-4 py-3 border border-primary-900 text-primary-900 text-xs font-bold uppercase tracking-widest hover:bg-primary-900 hover:text-white transition-all duration-300">
          View Property
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;