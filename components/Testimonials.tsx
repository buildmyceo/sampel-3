import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Aamir Sohail",
    location: "London, UK",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Buying a plot in DHA while sitting in London seemed impossible until I found Estate Prime. Their transparency and video updates made me feel like I was there.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Ahmed",
    location: "Dubai, UAE",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Excellent service for overseas Pakistanis. They handled my file transfer seamlessly. Highly recommended for Bahria Town investments.",
    rating: 5
  },
  {
    id: 3,
    name: "Kamran Khan",
    location: "Karachi, Pakistan",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
    text: "Sold my 1 Kanal house in Phase 6 through them. Got the best market price and the deal was closed in under 2 weeks.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
       {/* Subtle pattern for light theme */}
       <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-primary-900">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-accent-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-slate-50 p-8 rounded-xl relative border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
              <Quote className="absolute top-6 left-6 text-accent-500/20 h-16 w-16" />
              
              <div className="relative z-10">
                <p className="text-gray-600 mb-6 italic leading-relaxed">"{t.text}"</p>
                
                <div className="flex items-center">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-accent-500 mr-4" />
                  <div>
                    <h4 className="font-bold text-primary-900">{t.name}</h4>
                    <p className="text-xs text-accent-600 uppercase tracking-wide">{t.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;