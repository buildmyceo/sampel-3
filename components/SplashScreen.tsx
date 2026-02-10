import React, { useEffect, useState } from 'react';
import { Building2 } from 'lucide-react';

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [opacity, setOpacity] = useState('opacity-100');

  useEffect(() => {
    // Start fade out after 2.5 seconds
    const timer = setTimeout(() => {
      setOpacity('opacity-0');
      // Trigger finish callback after transition completes (500ms)
      setTimeout(onFinish, 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-50 text-primary-900 transition-opacity duration-500 ease-out ${opacity}`}
    >
      <div className="flex flex-col items-center">
        <div className="relative mb-6">
            <div className="absolute inset-0 bg-accent-500 rounded-full opacity-20 animate-ping"></div>
            <Building2 className="h-20 w-20 text-accent-600 relative z-10" />
        </div>
        
        <div className="text-4xl font-serif font-bold tracking-wide leading-none mb-3 animate-fade-in-up">
          ESTATE<span className="text-accent-600">PRIME</span>
        </div>
        <div className="text-sm uppercase tracking-[0.3em] opacity-80 text-center animate-fade-in-up delay-100 text-primary-800">
          DHA & Bahria Experts
        </div>
      </div>
      
      <div className="absolute bottom-12 text-sm text-slate-500 animate-pulse">
        Sample by <a href="https://buildmyceo.com" target="_blank" rel="noopener noreferrer" className="text-accent-600 font-bold hover:underline">buildmyceo.com</a>
      </div>
    </div>
  );
};

export default SplashScreen;