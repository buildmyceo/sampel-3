import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedListings from './components/FeaturedListings';
import InvestmentOpportunities from './components/InvestmentOpportunities';
import WhyChooseUs from './components/WhyChooseUs';
import MarketInsights from './components/MarketInsights';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ContactFloat from './components/ContactFloat';
import SplashScreen from './components/SplashScreen';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Failsafe: Ensure loading state is turned off after 4 seconds max
  // This prevents the white screen from staying if the SplashScreen component fails to callback
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <SplashScreen onFinish={() => setIsLoading(false)} />}
      
      <div className="min-h-screen bg-slate-50 text-slate-800 relative">
        <Navbar />
        <Hero />
        <FeaturedListings />
        <InvestmentOpportunities />
        <WhyChooseUs />
        <MarketInsights />
        <Testimonials />
        <Footer />
        <ContactFloat />
      </div>
    </>
  );
};

export default App;