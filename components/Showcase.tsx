
import React from 'react';
import { Download, Play } from 'lucide-react';

const Showcase: React.FC = () => {
  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Integrated Seamlessly <br />
              <span className="text-[#fe2c55]">Inside TikTok.</span>
            </h2>
            <p className="text-slate-500 text-lg font-medium leading-relaxed">
              Forget switching tabs or pasting URLs. TikSaver Pro injects a native-looking download button directly into your TikTok sidebar. It's so fast, you'll forget it's an extension.
            </p>
            
            <ul className="space-y-4">
              {[
                "Instant processing on the fly",
                "Works with desktop TikTok layout",
                "One-click MP4 and MP3 options",
                "Zero data collection or tracking"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-semibold text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-[#25f4ee]/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#25f4ee]" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 lg:order-2 relative group">
            {/* Visual Mockup of TikTok UI */}
            <div className="relative glass p-4 rounded-[2.5rem] shadow-2xl border-slate-200">
              <div className="bg-black rounded-[1.8rem] aspect-[4/5] overflow-hidden relative">
                <img 
                  src="https://picsum.photos/seed/tiktok-preview/800/1000" 
                  alt="TikTok UI Mockup"
                  className="w-full h-full object-cover opacity-60"
                />
                
                {/* Floating Mock UI Elements */}
                <div className="absolute right-4 bottom-24 flex flex-col gap-6 items-center">
                   <div className="w-12 h-12 rounded-full bg-slate-800/80 backdrop-blur-sm flex items-center justify-center text-white border border-white/20">
                     <div className="w-8 h-8 rounded-full bg-slate-600" />
                   </div>
                   <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-slate-800/80 backdrop-blur-sm flex items-center justify-center text-white border border-white/20">
                        <span className="text-xs">❤️</span>
                      </div>
                      <span className="text-[10px] text-white font-bold mt-1">1.2M</span>
                   </div>
                   {/* THE DOWNLOAD BUTTON (Injected) */}
                   <div className="flex flex-col items-center animate-pulse">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#fe2c55] to-[#25f4ee] flex items-center justify-center text-white shadow-[0_0_20px_rgba(254,44,85,0.4)] border-2 border-white ring-4 ring-[#fe2c55]/20">
                        <Download size={22} strokeWidth={2.5} />
                      </div>
                      <span className="text-[10px] text-white font-black mt-1 uppercase tracking-tighter">Download</span>
                   </div>
                </div>

                <div className="absolute bottom-6 left-6 right-16">
                  <div className="w-1/3 h-4 bg-white/40 rounded-full mb-2" />
                  <div className="w-full h-3 bg-white/20 rounded-full mb-2" />
                  <div className="w-2/3 h-3 bg-white/20 rounded-full" />
                </div>

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                   <Play size={64} className="text-white/40" />
                </div>
              </div>
            </div>
            
            {/* Background blur decorative */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-full h-full bg-[#25f4ee]/10 blur-3xl rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
