
import React, { useState } from 'react';
import { Menu, X, Globe, Search } from 'lucide-react';

interface HeaderProps {
  scrollY: number;
}

const Header: React.FC<HeaderProps> = ({ scrollY }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isScrolled = scrollY > 50;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      isScrolled ? 'py-4 px-6' : 'py-8 px-8'
    }`}>
      <div className={`max-w-7xl mx-auto rounded-3xl transition-all duration-500 flex items-center justify-between px-8 py-4 ${
        isScrolled ? 'glass bg-slate-900/80' : 'bg-transparent'
      }`}>
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-orange-500 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
            <span className="text-white font-black text-xl italic">N</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tighter text-white leading-none">NOVAC<span className="text-orange-500 italic">®</span></span>
            <span className="text-[10px] tracking-[0.2em] text-blue-400 font-bold uppercase">Tech Solutions</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          {['Solutions', 'Platforms', 'Discover Us', 'Resources'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="text-sm font-semibold text-slate-300 hover:text-orange-500 transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-6">
          <button className="text-slate-300 hover:text-white transition-colors">
            <Search size={20} />
          </button>
          <div className="h-6 w-px bg-slate-700"></div>
          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-sm font-bold text-white shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all">
            Book a Demo
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-slate-950/95 backdrop-blur-xl z-[90] p-8 flex flex-col justify-center lg:hidden">
          <div className="flex flex-col gap-8 text-center">
            {['Solutions', 'Platforms', 'Discover Us', 'Resources'].map((item) => (
              <a key={item} href="#" className="text-3xl font-bold text-white hover:text-orange-500">{item}</a>
            ))}
            <button className="mt-8 px-8 py-5 bg-orange-500 rounded-2xl text-xl font-bold text-white shadow-xl shadow-orange-500/20">
              Book a Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
