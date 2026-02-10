import React, { useState } from 'react';
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

  return (
    <>
      {isLoading && <SplashScreen onFinish={() => setIsLoading(false)} />}
      
      <div className={`min-h-screen bg-slate-50 text-slate-800 relative transition-opacity duration-700 ${isLoading ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
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