
import React from 'react';
import { ShieldCheck, Zap, Layers, Music } from 'lucide-react';

const FeatureCard: React.FC<{ 
  title: string; 
  description: string; 
  icon: React.ReactNode; 
  color: string;
}> = ({ title, description, icon, color }) => (
  <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-all group">
    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 shadow-sm ${color}`}>
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
    <p className="text-slate-500 leading-relaxed font-medium">
      {description}
    </p>
  </div>
);

const Features: React.FC = () => {
  const features = [
    {
      title: "No Watermark",
      description: "Download TikTok videos without any annoying watermarks or logo overlays. Keep the focus on the content.",
      icon: <ShieldCheck size={28} className="text-white" />,
      color: "bg-[#fe2c55]"
    },
    {
      title: "HD Quality",
      description: "Save videos in the highest resolution available. Crystal clear playback on any device, any time.",
      icon: <Layers size={28} className="text-white" />,
      color: "bg-gradient-to-r from-[#fe2c55] to-[#25f4ee]"
    },
    {
      title: "Smart Button Integration",
      description: "No need to copy-paste links. A sleek download button appears directly on the TikTok interface for instant access.",
      icon: <Zap size={28} className="text-white" />,
      color: "bg-[#25f4ee]"
    },
    {
      title: "MP3 Support",
      description: "Want just the audio? Extract high-quality MP3 tracks from any TikTok video with a single click.",
      icon: <Music size={28} className="text-white" />,
      color: "bg-slate-900"
    }
  ];

  return (
    <section id="features" className="py-24 px-6 bg-slate-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900">Built for Professionals.</h2>
          <p className="text-slate-500 text-lg font-medium max-w-xl mx-auto">
            Everything you need for content archival and sharing, built right into your browser.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
