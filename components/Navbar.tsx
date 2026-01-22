
import React from 'react';
import Logo from './Logo';

interface NavbarProps {
  currentView: 'home' | 'about' | 'policy';
  setView: (view: 'home' | 'about' | 'policy') => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const handleScrollTo = (id: string) => {
    // If we are not on the home view, switch to it first
    if (currentView !== 'home') {
      setView('home');
      // Use a small timeout to allow React to render the HomeView before searching for the ID
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If already on home, just scroll
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between glass px-8 py-3 rounded-full border-white/10">
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => {
            setView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <Logo size={40} className="group-hover:scale-110 transition-transform duration-300" />
          <span className="font-extrabold text-2xl tracking-tight text-white">
            TikSaver <span className="text-[#fe2c55]">Pro</span>
          </span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => {
              setView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`text-sm font-bold transition-colors ${currentView === 'home' ? 'text-[#fe2c55]' : 'text-slate-400 hover:text-white'}`}
          >
            Home
          </button>
          <button 
            onClick={() => handleScrollTo('how-it-works')}
            className="text-sm font-bold text-slate-400 hover:text-white transition-colors"
          >
            How it Works
          </button>
          <button 
            onClick={() => handleScrollTo('features')}
            className="text-sm font-bold text-slate-400 hover:text-white transition-colors"
          >
            Features
          </button>
          <button 
            onClick={() => setView('about')}
            className={`text-sm font-bold transition-colors ${currentView === 'about' ? 'text-[#fe2c55]' : 'text-slate-400 hover:text-white'}`}
          >
            About
          </button>
          <button 
            onClick={() => setView('policy')}
            className={`text-sm font-bold transition-colors ${currentView === 'policy' ? 'text-[#fe2c55]' : 'text-slate-400 hover:text-white'}`}
          >
            Policy
          </button>
        </div>

        {/* Small Mobile Indicator */}
        <div className="md:hidden">
          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
             <div className="w-2 h-2 rounded-full bg-[#fe2c55]" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
