import React from 'react';
import { TrendingUp, PieChart, ShieldCheck, ArrowRight } from 'lucide-react';

const InvestmentOpportunities: React.FC = () => {
  const opportunities = [
    {
      title: "DHA Phase 10 Files",
      roi: "28%",
      roiLabel: "Projected 12m ROI",
      duration: "12-18 Months",
      price: "PKR 45 Lakh",
      desc: "Early entry strategic position near Ring Road interchange. High liquidity asset.",
      highlight: true
    },
    {
      title: "Bahria Sky Commercial",
      roi: "15%",
      roiLabel: "Annual Rental Yield",
      duration: "Immediate",
      price: "PKR 2.5 Crore",
      desc: "Fully operational commercial units. Corporate tenant already in place.",
      highlight: false
    },
    {
      title: "DHA Gujranwala Villas",
      roi: "20%",
      roiLabel: "Capital Appreciation",
      duration: "2 Years",
      price: "PKR 1.8 Crore",
      desc: "Luxury 5 Marla smart villas. Flexible payment plan. Possession 2026.",
      highlight: false
    }
  ];

  return (
    <section id="invest" className="py-24 bg-white relative overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-accent-600 font-bold tracking-widest text-xs uppercase mb-3">Wealth Management</span>
          <h2 className="text-4xl md:text-5xl font-serif text-primary-900 mb-6">
            Curated Investment Opportunities
          </h2>
          <div className="w-24 h-1 bg-accent-500"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {opportunities.map((opp, idx) => (
            <div key={idx} className={`group relative bg-white p-8 border transition-all duration-300 flex flex-col ${opp.highlight ? 'border-accent-500 shadow-premium' : 'border-gray-100 hover:border-gray-200 hover:shadow-lg'}`}>
              
              {opp.highlight && (
                 <div className="absolute top-0 inset-x-0 h-1 bg-accent-500"></div>
              )}
              
              <div className="flex justify-between items-start mb-8">
                 <div className="p-3 bg-surface-50 rounded-sm">
                    <TrendingUp className={`h-6 w-6 ${opp.highlight ? 'text-accent-600' : 'text-gray-400'}`} />
                 </div>
                 {opp.highlight && <span className="text-[10px] font-bold uppercase tracking-wider bg-accent-50 text-accent-700 px-2 py-1">Recommended</span>}
              </div>

              <h3 className="text-2xl font-serif text-primary-900 mb-2">{opp.title}</h3>
              <p className="text-sm text-gray-500 font-light mb-8 h-10">{opp.desc}</p>

              <div className="space-y-4 mb-8 bg-surface-50 p-6">
                <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-xs uppercase tracking-wide">Entry Price</span>
                    <span className="text-primary-900 font-bold font-serif text-lg">{opp.price}</span>
                </div>
                <div className="w-full h-px bg-gray-200"></div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-xs uppercase tracking-wide">{opp.roiLabel}</span>
                    <span className="text-green-700 font-bold font-serif text-lg">{opp.roi}</span>
                </div>
              </div>

              <button className="mt-auto w-full py-4 flex items-center justify-center space-x-2 border border-primary-900 text-primary-900 text-sm font-bold uppercase tracking-widest hover:bg-primary-900 hover:text-white transition-all">
                <span>Request Prospectus</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentOpportunities;