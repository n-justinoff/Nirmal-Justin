
import React from 'react';
import { ArrowRight, Play, Cpu, ShieldCheck } from 'lucide-react';

interface HeroProps {
  scrollY?: number;
}

const Hero: React.FC<HeroProps> = ({ scrollY = 0 }) => {
  // Calculate parallax offset - move slightly slower than the scroll
  const parallaxOffset = scrollY * 0.12;

  return (
    <section className="relative pt-40 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 text-center lg:text-left z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-teal-500/30 text-teal-400 text-sm font-bold mb-8">
            <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse"></span>
            TRANSFORMING ENTERPRISES SINCE 19+ YEARS
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
            SCALE UP TO <br />
            <span className="gradient-text">NEW HEIGHTS</span> <br />
            <span className="text-white">WITH NOVAC</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
            Driving digital innovation that empowers businesses to thrive in every dimension. From FinTech to ImmersiveTech, we build the future today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
            <button className="group flex items-center gap-3 px-10 py-5 bg-orange-600 hover:bg-orange-500 text-white rounded-2xl font-bold text-lg transition-all duration-300 orange-glow shadow-2xl">
              Get in Touch
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group flex items-center gap-3 px-8 py-5 glass hover:bg-white/5 text-white rounded-2xl font-bold text-lg transition-all">
              <div className="w-10 h-10 rounded-full bg-teal-600/20 flex items-center justify-center border border-teal-500/30 group-hover:bg-teal-600 transition-colors">
                <Play size={16} fill="white" />
              </div>
              Watch Showreel
            </button>
          </div>

          <div className="mt-16 flex items-center justify-center lg:justify-start gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="AWS" className="h-6 invert" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="h-6 invert" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-6 invert" />
          </div>
        </div>

        <div className="flex-1 relative">
          <div 
            className="relative z-10 will-change-transform transition-transform duration-75 ease-out"
            style={{ transform: `translateY(${parallaxOffset}px)` }}
          >
            <div className="absolute inset-0 bg-teal-500 blur-[100px] opacity-20 -z-10"></div>
            
            <div className="animate-float">
              <img 
                src="https://picsum.photos/seed/techhero/800/1000" 
                alt="Futuristic Tech" 
                className="rounded-[3rem] shadow-2xl border border-white/10 w-full object-cover aspect-[4/5] object-center"
              />
              
              {/* Floating UI elements - Blue to Green/Teal */}
              <div className="absolute top-10 -left-12 glass p-6 rounded-3xl border-white/20 shadow-2xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400">
                    <Cpu size={24} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase font-bold tracking-widest">Efficiency</div>
                    <div className="text-xl font-bold text-white">+98.4%</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-10 -right-8 glass p-6 rounded-3xl border-white/20 shadow-2xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-400">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase font-bold tracking-widest">Secured</div>
                    <div className="text-xl font-bold text-white">Bank Grade</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
