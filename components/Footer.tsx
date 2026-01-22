
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-16 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Simple Logo */}
        <div className="flex items-center justify-center gap-3">
          <Logo size={32} />
          <span className="font-extrabold text-2xl tracking-tight text-white">
            TikSaver <span className="text-[#fe2c55]">Pro</span>
          </span>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="space-y-4">
          <p className="text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()} TikSaver Pro. All rights reserved. Not affiliated with TikTok.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
