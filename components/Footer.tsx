
import React from 'react';
import { Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin, Globe } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-32 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <Logo />
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed font-medium">
              We empower organizations to thrive in the digital age through innovation, precision, and human-centric design.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-teal-600 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8">Solutions</h4>
            <ul className="space-y-4">
              {['FinTech', 'InsurTech', 'Digital Learning', 'ImmersiveTech', 'Enterprise AI'].map(link => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-teal-500 transition-colors font-medium">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Our Platforms', 'Insights Hub', 'Careers', 'Contact Us'].map(link => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-teal-500 transition-colors font-medium">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8">Get in Touch</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 text-slate-400">
                <MapPin className="text-teal-500 shrink-0" size={20} />
                <span className="text-sm font-medium leading-relaxed">
                  "The Pavilion", New # 10,13 & 100, Abiramapuram 4th Street, Chennai - 600018.
                </span>
              </li>
              <li className="flex items-center gap-4 text-slate-400 font-medium">
                <Phone className="text-teal-500" size={20} />
                <span>+91 44 4291 3000</span>
              </li>
              <li className="flex items-center gap-4 text-slate-400 font-medium">
                <Mail className="text-teal-500" size={20} />
                <span>info@novactech.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-sm font-medium">
            © 2026 Novac Technology Solutions. All rights reserved.
          </div>
          <div className="flex gap-8 text-sm font-medium text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <Globe size={16} />
            <span className="text-sm font-bold">English (Global)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;