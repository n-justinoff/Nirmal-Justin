
import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const insights = [
  {
    title: 'How AI Training Simulators Are Becoming Essential for Modern Teams',
    category: 'Technology',
    date: 'Oct 12, 2025',
    img: 'https://picsum.photos/seed/insight1/600/400'
  },
  {
    title: 'Understanding Insurtech: Exploring the Intersection of Finance and Tech',
    category: 'Finance',
    date: 'Oct 08, 2025',
    img: 'https://picsum.photos/seed/insight2/600/400'
  },
  {
    title: 'Automating the Entire Loan Lifecycle: ZIVA’s Global Impact',
    category: 'FinTech',
    date: 'Sep 29, 2025',
    img: 'https://picsum.photos/seed/insight3/600/400'
  }
];

const InsightsSection: React.FC = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-5xl font-black mb-4">INSIGHTS HUB</h2>
            <p className="text-slate-400 font-medium">Thoughts, trends, and breakthroughs from our tech innovators.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 font-bold text-orange-500 hover:text-orange-400 transition-colors">
            View All Posts <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {insights.map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden mb-8">
                <img src={item.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="" />
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold text-white border border-white/20">
                  {item.category}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors leading-tight">
                {item.title}
              </h3>
              <div className="flex items-center gap-6 text-slate-500 text-sm font-medium">
                <span className="flex items-center gap-2"><Calendar size={14} /> {item.date}</span>
                <span className="flex items-center gap-2"><User size={14} /> Novac Editorial</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;