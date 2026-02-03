
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const solutions = [
  {
    id: 'ziva',
    name: 'ZIVA®',
    type: 'Lending Platform',
    size: 'lg',
    img: 'https://picsum.photos/seed/ziva/800/600',
    color: 'from-teal-600/20' /* Blue to Teal */
  },
  {
    id: 'statim',
    name: 'STATIM®',
    type: 'Insurance Platform',
    size: 'sm',
    img: 'https://picsum.photos/seed/statim/400/300',
    color: 'from-orange-600/20'
  },
  {
    id: 'axle',
    name: 'AXLE™',
    type: 'Learning Platform',
    size: 'sm',
    img: 'https://picsum.photos/seed/axle/400/300',
    color: 'from-emerald-600/20'
  },
  {
    id: 'immerz',
    name: 'IMMERZ™',
    type: 'Immersive Solutions',
    size: 'md',
    img: 'https://picsum.photos/seed/immerz/600/400',
    color: 'from-indigo-600/20'
  },
  {
    id: 'migoto',
    name: 'MIGOTO AI™',
    type: 'AI Enterprise Engine',
    size: 'md',
    img: 'https://picsum.photos/seed/ai/600/400',
    color: 'from-purple-600/20'
  }
];

const SolutionsBento: React.FC = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              CRAFTING <span className="text-teal-500">DIGITAL</span> <br /> 
              EXCELLENCE AT SCALE
            </h2>
            <p className="text-lg text-slate-400 font-medium">
              Our proprietary platforms are engineered to solve complex industry challenges with precision, speed, and elegance.
            </p>
          </div>
          <button className="px-8 py-4 glass hover:bg-white/10 rounded-2xl font-bold flex items-center gap-2 transition-all">
            View All Platforms <ArrowUpRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-full md:h-[800px]">
          {/* ZIVA - Large */}
          <div className="md:col-span-2 md:row-span-2 bento-card relative overflow-hidden rounded-[2.5rem] group cursor-pointer">
            <img src={solutions[0].img} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-10">
              <div className="mb-4 px-3 py-1 bg-teal-600 text-[10px] font-black tracking-widest uppercase rounded-full w-fit">Featured Product</div>
              <h3 className="text-5xl font-black text-white mb-2">{solutions[0].name}</h3>
              <p className="text-xl text-slate-300 font-medium">{solutions[0].type}</p>
            </div>
          </div>

          {/* STATIM - Small */}
          <div className="md:col-span-1 md:row-span-1 bento-card relative overflow-hidden rounded-[2.5rem] group cursor-pointer">
            <img src={solutions[1].img} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-2xl font-bold text-white mb-1">{solutions[1].name}</h3>
              <p className="text-sm text-slate-400">{solutions[1].type}</p>
            </div>
          </div>

          {/* AXLE - Small */}
          <div className="md:col-span-1 md:row-span-1 bento-card relative overflow-hidden rounded-[2.5rem] group cursor-pointer">
            <img src={solutions[2].img} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-2xl font-bold text-white mb-1">{solutions[2].name}</h3>
              <p className="text-sm text-slate-400">{solutions[2].type}</p>
            </div>
          </div>

          {/* IMMERZ - Medium */}
          <div className="md:col-span-2 md:row-span-1 bento-card relative overflow-hidden rounded-[2.5rem] group cursor-pointer">
            <img src={solutions[3].img} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-10 flex items-center justify-between w-full">
              <div>
                <h3 className="text-3xl font-black text-white mb-1">{solutions[3].name}</h3>
                <p className="text-slate-400 font-medium">{solutions[3].type}</p>
              </div>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
                <ArrowUpRight size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsBento;