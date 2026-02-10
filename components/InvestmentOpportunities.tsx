import React from 'react';
import { TrendingUp, PieChart, ShieldCheck } from 'lucide-react';

const InvestmentOpportunities: React.FC = () => {
  const opportunities = [
    {
      title: "DHA Phase 10 Files",
      roi: "25-30% Expected",
      duration: "12-18 Months",
      price: "PKR 45 Lakh",
      desc: "Early bird files for the upcoming Phase 10 launch. Ideally located near Ring Road interchange.",
      highlight: true
    },
    {
      title: "Bahria Sky Commercial",
      roi: "15% Annual Rental",
      duration: "Immediate",
      price: "PKR 2.5 Crore",
      desc: "Completed commercial shops with active tenants. Immediate rental income generation.",
      highlight: false
    },
    {
      title: "DHA Gujranwala Villas",
      roi: "20% Appreciation",
      duration: "2 Years",
      price: "PKR 1.8 Crore",
      desc: "5 Marla smart villas. Installment plan available over 2 years. Possession in 2026.",
      highlight: false
    }
  ];

  return (
    <section id="invest" className="py-20 bg-primary-900 text-white relative overflow-hidden">
      {/* Decorative bg elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent-600 rounded-full opacity-10 filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-800 rounded-full opacity-20 filter blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent-500 uppercase tracking-widest text-sm font-semibold">Maximize Your Returns</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mt-2">
            Top Investment Opportunities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {opportunities.map((opp, idx) => (
            <div key={idx} className={`relative bg-primary-800/50 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:bg-primary-800 transition-all duration-300 ${opp.highlight ? 'ring-2 ring-accent-500 shadow-[0_0_30px_rgba(217,119,6,0.2)]' : ''}`}>
              {opp.highlight && (
                 <div className="absolute top-0 right-0 bg-accent-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">
                    HOT PICK
                 </div>
              )}
              
              <div className="flex items-center space-x-3 mb-6">
                 <div className="p-3 bg-white/5 rounded-lg">
                    <TrendingUp className="text-accent-500 h-6 w-6" />
                 </div>
                 <h3 className="text-xl font-bold">{opp.title}</h3>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-gray-400 text-sm">Est. ROI</span>
                    <span className="text-green-400 font-bold">{opp.roi}</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-gray-400 text-sm">Duration</span>
                    <span className="text-white font-medium">{opp.duration}</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-gray-400 text-sm">Entry Price</span>
                    <span className="text-accent-400 font-bold">{opp.price}</span>
                </div>
              </div>

              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                {opp.desc}
              </p>

              <button className="w-full py-3 border border-accent-600 text-accent-500 hover:bg-accent-600 hover:text-white rounded-sm font-medium transition-all">
                Request Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentOpportunities;