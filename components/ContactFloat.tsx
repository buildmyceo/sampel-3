import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const ContactFloat: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-40">
      <button 
        className="bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
      <button 
        className="bg-accent-600 hover:bg-accent-700 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center"
        aria-label="Call Now"
      >
        <Phone className="h-6 w-6" />
      </button>
    </div>
  );
};

export default ContactFloat;