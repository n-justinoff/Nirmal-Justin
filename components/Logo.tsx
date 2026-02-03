
import React from 'react';

interface LogoProps {
  className?: string;
  isLight?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", isLight = true }) => {
  return (
    <div className={`flex items-center gap-4 group cursor-pointer ${className}`}>
      {/* Reconstructed Brand Mark from Image */}
      <div className="relative w-12 h-12 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
          {/* Left Teal Segment - This is the primary green color used for the redesign */}
          <path 
            d="M35 10L55 90H40L20 10H35Z" 
            fill="#0D9488" 
            className="transition-all duration-500 group-hover:fill-teal-400"
          />
          {/* Right Orange Segment */}
          <path 
            d="M60 10L80 90H65L45 10H60Z" 
            fill="#F59E0B" 
            className="transition-all duration-500 group-hover:fill-orange-400"
          />
          {/* Subtle gradient overlay for 2026 look */}
          <defs>
            <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="white" stopOpacity="0.2" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M35 10L55 90H40L20 10H35Z" fill="url(#logo-grad)" />
          <path d="M60 10L80 90H65L45 10H60Z" fill="url(#logo-grad)" />
        </svg>
      </div>

      {/* Brand Text Branding */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-0.5">
          <span className={`text-2xl font-black tracking-tight leading-none ${isLight ? 'text-white' : 'text-slate-900'}`}>
            NOVAC
          </span>
          <span className="text-orange-500 text-xs font-bold -translate-y-2">®</span>
        </div>
        <span className={`text-[8px] tracking-[0.45em] font-bold uppercase ${isLight ? 'text-teal-400/80' : 'text-slate-500'}`}>
          Technology Solutions
        </span>
      </div>
    </div>
  );
};

export default Logo;