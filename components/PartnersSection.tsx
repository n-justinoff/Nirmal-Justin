
import React from 'react';

const PartnersSection: React.FC = () => {
  return (
    <section className="py-24 px-6 overflow-hidden bg-white/[0.02]">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-2xl font-bold text-slate-500 tracking-widest uppercase">TRUSTED BY INDUSTRY TITANS</h2>
      </div>
      
      {/* Simulation of an infinite scroll */}
      <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale transition-all duration-700 hover:opacity-100 hover:grayscale-0">
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/12/Hyundai_Motor_Company_logo.svg" className="h-8 invert" alt="Hyundai" />
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/58/State_Bank_of_India_logo.svg/1200px-State_Bank_of_India_logo.svg.png" className="h-8 invert" alt="SBI" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Axis_Bank_logo.svg" className="h-8 invert" alt="Axis Bank" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/ff/HP_logo_2012.svg" className="h-10 invert" alt="HP" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Indian_Oil_Logo.svg" className="h-10 invert" alt="Indian Oil" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Dalmia_Bharat_Limited_logo.png" className="h-10 invert" alt="Dalmia" />
      </div>
      
      <div className="mt-20 text-center">
        <p className="text-slate-500 max-w-2xl mx-auto italic font-medium">
          "Novac's ability to seamlessly integrate advanced FinTech solutions with our existing infrastructure was game-changing for our digital transformation journey."
        </p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <div className="w-12 h-12 rounded-full bg-slate-800"></div>
          <div className="text-left">
            <div className="text-white font-bold">Rajesh Kumar</div>
            <div className="text-xs text-blue-500 font-bold tracking-widest uppercase">CTO, Global Banking Corp</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
