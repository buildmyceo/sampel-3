import React from 'react';
import { Building2, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div>
             <div className="flex items-center space-x-2 mb-6">
                <Building2 className="h-8 w-8 text-accent-500" />
                <div className="flex flex-col">
                    <span className="text-xl font-serif font-bold text-white tracking-wide leading-none">
                    ESTATE<span className="text-accent-500">PRIME</span>
                    </span>
                </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
                Your trusted partner for premium real estate in DHA and Bahria Town. We specialize in secure investments for overseas Pakistanis.
            </p>
            <div className="flex space-x-4">
                <a href="#" className="hover:text-accent-500 transition-colors"><Facebook className="h-5 w-5" /></a>
                <a href="#" className="hover:text-accent-500 transition-colors"><Twitter className="h-5 w-5" /></a>
                <a href="#" className="hover:text-accent-500 transition-colors"><Instagram className="h-5 w-5" /></a>
                <a href="#" className="hover:text-accent-500 transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-accent-500 transition-colors">DHA Lahore Listings</a></li>
                <li><a href="#" className="hover:text-accent-500 transition-colors">Bahria Town Karachi</a></li>
                <li><a href="#" className="hover:text-accent-500 transition-colors">Commercial Plots</a></li>
                <li><a href="#" className="hover:text-accent-500 transition-colors">Luxury Houses</a></li>
                <li><a href="#" className="hover:text-accent-500 transition-colors">Investment Guide</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
                <li className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-accent-500 shrink-0" />
                    <span>Office 104, Y-Block Commercial, DHA Phase 3, Lahore.</span>
                </li>
                <li className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-accent-500 shrink-0" />
                    <span>+92 300 123 4567</span>
                </li>
                <li className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-accent-500 shrink-0" />
                    <span>info@estateprime.pk</span>
                </li>
            </ul>
          </div>

          {/* Newsletter / Map Placeholder */}
          <div>
            <h4 className="text-white font-bold mb-6">Visit Our Office</h4>
            <div className="w-full h-40 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
                <span className="text-slate-500 text-sm">Google Map Integration</span>
            </div>
            <p className="mt-4 text-xs text-slate-500">
                Registered with PRA & FBR. <br/> NTN: 1234567-8
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 mb-4 md:mb-0">
                <p>&copy; 2024 Estate Prime. All rights reserved.</p>
                <span className="hidden md:inline text-slate-700">|</span>
                <p>Sample by <a href="https://buildmyceo.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent-500 transition-colors font-semibold">buildmyceo.com</a></p>
            </div>
            <div className="flex space-x-6">
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;