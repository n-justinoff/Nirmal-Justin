
import React from 'react';
/* Added missing ChevronRight icon */
import { Cpu, ShieldCheck, GraduationCap, Layers, ChevronRight } from 'lucide-react';

const focusAreas = [
  {
    title: 'FinTech',
    desc: 'Revolutionizing digital banking and payments with intelligent automation.',
    icon: <Cpu className="w-8 h-8" />,
    color: 'blue'
  },
  {
    title: 'InsurTech',
    desc: 'Smart insurance solutions that prioritize efficiency and customer satisfaction.',
    icon: <ShieldCheck className="w-8 h-8" />,
    color: 'orange'
  },
  {
    title: 'Digital Learning',
    desc: 'Empowering the next generation with interactive e-learning platforms.',
    icon: <GraduationCap className="w-8 h-8" />,
    color: 'teal'
  },
  {
    title: 'ImmersiveTech',
    desc: 'Breaking barriers with AR/VR experiences that redefine reality.',
    icon: <Layers className="w-8 h-8" />,
    color: 'purple'
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {focusAreas.map((area, idx) => (
            <div key={idx} className="bento-card group glass p-10 rounded-[2.5rem] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full"></div>
              <div className={`w-16 h-16 rounded-2xl mb-8 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${
                area.color === 'blue' ? 'bg-blue-600/20 text-blue-400' :
                area.color === 'orange' ? 'bg-orange-600/20 text-orange-400' :
                area.color === 'teal' ? 'bg-emerald-600/20 text-emerald-400' :
                'bg-purple-600/20 text-purple-400'
              }`}>
                {area.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{area.title}</h3>
              <p className="text-slate-400 leading-relaxed font-medium">{area.desc}</p>
              <div className="mt-8 flex items-center gap-2 text-sm font-bold text-white/50 group-hover:text-white transition-colors cursor-pointer">
                Explore Solutions <ChevronRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
