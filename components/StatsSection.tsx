
import React from 'react';

const stats = [
  { label: 'Global Clients', value: '190+', sub: 'Enterprises served' },
  { label: 'Proprietary Products', value: '14', sub: 'Industry leaders' },
  { label: 'Team Members', value: '2500+', sub: 'Tech specialists' },
  { label: 'Awards Won', value: '45+', sub: 'Excellence recognized' }
];

const StatsSection: React.FC = () => {
  return (
    <section className="py-24 px-6 border-y border-white/5 bg-slate-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-24">
          {stats.map((stat, idx) => (
            <div key={idx} className="group cursor-default">
              <div className="text-xs font-black tracking-[0.2em] text-blue-500 uppercase mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                {stat.label}
              </div>
              <div className="text-5xl md:text-7xl font-black text-white mb-2 tracking-tighter transition-transform duration-500 group-hover:translate-x-2">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-slate-500">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
