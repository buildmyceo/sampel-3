import React from 'react';
import { ShieldCheck, FileText, Globe, UserCheck } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <ShieldCheck className="h-10 w-10" />,
      title: "DHA & Bahria Specialists",
      desc: "We don't sell everything. We only focus on what we know best to ensure you get expert advice."
    },
    {
      icon: <FileText className="h-10 w-10" />,
      title: "Verified Documents",
      desc: "Every listing goes through a rigorous legal verification process before being published."
    },
    {
      icon: <UserCheck className="h-10 w-10" />,
      title: "Transparent Deals",
      desc: "No hidden commissions or under-the-table cuts. Direct meetings with sellers/buyers."
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Overseas Support",
      desc: "Dedicated team for overseas clients handling Power of Attorney and transfer procedures remotely."
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
             <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent-100 rounded-full z-0"></div>
             <img 
               src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
               alt="Handshake" 
               className="relative z-10 rounded-lg shadow-2xl w-full object-cover h-[500px]"
             />
             <div className="absolute -bottom-6 -right-6 bg-primary-900 text-white p-8 rounded-lg shadow-xl z-20 max-w-xs hidden md:block">
                <p className="text-4xl font-serif font-bold text-accent-500 mb-2">15+</p>
                <p className="font-medium">Years of experience serving the community.</p>
             </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-900 mb-6">
              Why Investors Trust <span className="text-accent-600">Estate Prime</span>
            </h2>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                Navigating the Pakistani real estate market can be complex, especially from abroad. We bring corporate-level professionalism to the property sector.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature, idx) => (
                    <div key={idx} className="flex flex-col items-start p-4 hover:bg-slate-50 rounded-lg transition-colors">
                        <div className="text-accent-600 mb-4 bg-accent-50 p-3 rounded-lg">
                            {feature.icon}
                        </div>
                        <h4 className="text-xl font-bold text-primary-900 mb-2">{feature.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {feature.desc}
                        </p>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;