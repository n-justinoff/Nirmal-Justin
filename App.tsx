
import React, { useEffect, useState } from 'react';
import { 
  ArrowRight, 
  ChevronRight, 
  ExternalLink, 
  Cpu, 
  ShieldCheck, 
  GraduationCap, 
  Layers, 
  Search, 
  Globe, 
  Phone, 
  MessageCircle,
  Menu,
  X
} from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import SolutionsBento from './components/SolutionsBento';
import StatsSection from './components/StatsSection';
import InsightsSection from './components/InsightsSection';
import PartnersSection from './components/PartnersSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Background elements - Blue changed to Teal */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-teal-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-orange-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-[40%] right-[10%] w-[30%] h-[30%] bg-emerald-600/5 rounded-full blur-[120px]"></div>
      </div>

      <Header scrollY={scrollY} />
      
      <main>
        <Hero />
        <Features />
        <SolutionsBento />
        <StatsSection />
        <InsightsSection />
        <PartnersSection />
        
        {/* CTA Section - Gradient updated to Teal */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-teal-600 to-indigo-950 p-12 md:p-24 text-center">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight">
                  Ready to Experience <span className="text-orange-400">Future-Proof</span> Growth?
                </h2>
                <p className="text-xl text-teal-50 mb-12 opacity-90 leading-relaxed">
                  Join hundreds of forward-thinking enterprises that have scaled new heights with our digital-first solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button className="px-10 py-5 bg-white text-teal-900 rounded-2xl font-bold text-lg hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-xl shadow-teal-900/20">
                    Book a Live Demo
                  </button>
                  <button className="px-10 py-5 bg-teal-800/40 backdrop-blur-md border border-teal-400/30 text-white rounded-2xl font-bold text-lg hover:bg-teal-800/60 transition-all">
                    Contact Strategy Team
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        <button className="p-4 bg-orange-500 text-white rounded-full shadow-2xl hover:scale-110 transition-transform orange-glow">
          <MessageCircle size={24} />
        </button>
      </div>
    </div>
  );
};

export default App;