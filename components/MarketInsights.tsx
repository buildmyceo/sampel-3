import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

const DATA = [
  { month: 'Jan', dha: 1.2, bahria: 0.8 },
  { month: 'Feb', dha: 1.25, bahria: 0.82 },
  { month: 'Mar', dha: 1.35, bahria: 0.85 },
  { month: 'Apr', dha: 1.32, bahria: 0.88 },
  { month: 'May', dha: 1.45, bahria: 0.92 },
  { month: 'Jun', dha: 1.55, bahria: 0.95 },
];

const MarketInsights: React.FC = () => {
  return (
    <section id="insights" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-4">
            Market Insights & Trends
          </h2>
          <p className="text-gray-600">
            Track average price trends for 1 Kanal Plots (in Crores) over the last 6 months.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Chart Card */}
            <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="mb-6 flex justify-between items-center">
                    <h3 className="text-lg font-bold text-gray-800">Price Trend (1 Kanal Plot)</h3>
                    <div className="flex items-center space-x-2 text-green-600 bg-green-50 px-3 py-1 rounded-full text-sm font-bold">
                        <TrendingUp className="h-4 w-4" />
                        <span>+12.5% vs last year</span>
                    </div>
                </div>
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={DATA}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                            <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} domain={[0.5, 2]} />
                            <Tooltip 
                                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                            />
                            <Legend />
                            <Line type="monotone" dataKey="dha" name="DHA Lahore" stroke="#064e3b" strokeWidth={3} dot={{r: 4}} activeDot={{r: 8}} />
                            <Line type="monotone" dataKey="bahria" name="Bahria Town" stroke="#d97706" strokeWidth={3} dot={{r: 4}} activeDot={{r: 8}} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* News/Updates Sidebar */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-6">Latest Updates</h3>
                <div className="space-y-6">
                    <div className="group cursor-pointer">
                        <div className="flex justify-between items-start mb-1">
                            <span className="text-xs font-bold text-accent-600 bg-accent-50 px-2 py-0.5 rounded">NEWS</span>
                            <span className="text-xs text-gray-400">2 days ago</span>
                        </div>
                        <h4 className="font-semibold text-gray-800 group-hover:text-primary-900 transition-colors">
                            DHA Phase 9 Prism development accelerates, possession expected sooner.
                        </h4>
                    </div>
                    
                    <div className="w-full h-px bg-gray-100"></div>

                    <div className="group cursor-pointer">
                        <div className="flex justify-between items-start mb-1">
                            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">RATES</span>
                            <span className="text-xs text-gray-400">5 days ago</span>
                        </div>
                        <h4 className="font-semibold text-gray-800 group-hover:text-primary-900 transition-colors">
                            Property taxes revised for luxury homes above 2 Kanal in Punjab budget.
                        </h4>
                    </div>

                    <div className="w-full h-px bg-gray-100"></div>

                    <div className="group cursor-pointer">
                        <div className="flex justify-between items-start mb-1">
                            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">PROJECT</span>
                            <span className="text-xs text-gray-400">1 week ago</span>
                        </div>
                        <h4 className="font-semibold text-gray-800 group-hover:text-primary-900 transition-colors">
                            Bahria Town launches new overseas block with dollar-pegged pricing.
                        </h4>
                    </div>

                    <button className="w-full mt-4 flex items-center justify-center space-x-2 text-sm font-bold text-primary-900 hover:text-accent-600 transition-colors">
                        <span>Read More News</span>
                        <ArrowUpRight className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default MarketInsights;