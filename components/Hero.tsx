
import React from 'react';
import { Chrome, ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 px-4 py-1.5 rounded-full shadow-sm animate-bounce-slow">
          <div className="flex -space-x-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-xs font-semibold text-slate-600">Rated 5.0 by 10,000+ Users</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
          The Professional Way to <br />
          <span className="gradient-text">Download TikToks.</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
          HD quality, no watermark, and lightning-fast. One-click solution directly inside TikTok. Experience the cleanest way to save your favorite content.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button className="btn-gradient text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-2xl flex items-center gap-3 w-full sm:w-auto justify-center group">
            <Chrome size={24} className="group-hover:rotate-12 transition-transform" />
            Add to Chrome — It's Free
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <div className="text-sm text-slate-400 font-medium">
            Join 50k+ daily users
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
