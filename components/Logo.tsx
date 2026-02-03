
import React from 'react';

interface LogoProps {
  className?: string;
  isLight?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", isLight = true }) => {
  return (
    <div className={`flex items-center group cursor-pointer ${className}`}>
      {/* 
        Using the exact logo image from Novac's official assets.
        We apply a brightness-0 invert filter when on dark backgrounds to turn 
        dark blue text into white while maintaining the vibrant teal/orange mark.
      */}
      <div className="relative h-10 md:h-12 lg:h-14 transition-transform duration-500 group-hover:scale-105">
        <img 
          src="https://www.novactech.com/assets/img/logo.png" 
          alt="Novac Technology Solutions" 
          className={`h-full w-auto object-contain transition-all duration-300 ${isLight ? 'brightness-0 invert' : ''}`}
        />
      </div>
    </div>
  );
};

export default Logo;
