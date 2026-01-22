
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Downloader from './components/Downloader';
import Footer from './components/Footer';
import { Zap, Shield, Star } from 'lucide-react';

const HomeView: React.FC = () => (
  <div className="space-y-24">
    {/* Hero Section */}
    <div className="text-center space-y-6 pt-12">
      <div className="inline-flex items-center gap-2 bg-[#fe2c55]/10 border border-[#fe2c55]/20 px-4 py-1 rounded-full">
        <span className="text-xs font-bold text-[#fe2c55]">✨ Free TikSaver Pro</span>
      </div>
      <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight">
        Download TikTok<br />
        <span className="gradient-text">Videos Instantly</span>
      </h1>
      <p className="text-lg md:text-xl text-slate-400 font-medium max-w-2xl mx-auto">
        Fast, free, and easy TikTok video downloader. No watermark, high quality, and works on all devices.
      </p>
    </div>

    {/* Downloader Section */}
    <Downloader />

    {/* Why Choose Section */}
    <section id="features" className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold">Why Choose TikSaver Pro?</h2>
        <p className="text-slate-400">The most trusted TikTok downloader with thousands of users</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: <Zap className="text-yellow-500" />, title: "Lightning Fast", desc: "Download TikTok videos in seconds with our optimized servers and fast processing." },
          { icon: <Shield className="text-[#fe2c55]" />, title: "No Watermark", desc: "Get clean videos without TikTok watermarks. Perfect for repurposing content." },
          { icon: <Star className="text-yellow-400" />, title: "High Quality", desc: "Download videos in their original quality, including HD and 4K when available." }
        ].map((feature, i) => (
          <div key={i} className="card-dark p-10 rounded-3xl text-center space-y-4 hover:border-[#fe2c55]/30 transition-colors">
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold">{feature.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* How It Works Section */}
    <section id="how-it-works" className="space-y-12 pb-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold">How It Works</h2>
        <p className="text-slate-400">Simple 3-step process to download any TikTok video</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          { step: "1", title: "Copy URL", desc: "Copy the TikTok video URL from the app or website" },
          { step: "2", title: "Paste & Click", desc: "Paste the URL in our downloader and click download" },
          { step: "3", title: "Save Video", desc: "Your video will be processed and ready to download" }
        ].map((item, i) => (
          <div key={i} className="text-center space-y-6">
            <div className="w-16 h-16 step-gradient rounded-2xl flex items-center justify-center mx-auto text-2xl font-black shadow-[0_0_30px_rgba(254,44,85,0.3)]">
              {item.step}
            </div>
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-slate-500 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

const AboutView: React.FC = () => (
  <div className="max-w-4xl mx-auto space-y-12 py-12 animate-in fade-in slide-in-from-bottom-4">
    <h1 className="text-5xl font-black text-center">About TikSaver Pro</h1>
    <div className="space-y-8 text-slate-300">
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Our Mission</h2>
        <p>TikSaver Pro was created to help users save and archive their favorite content from the TikTok platform. Our mission is to provide a simple, fast, and reliable tool for downloading videos for personal use.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">How It Works</h2>
        <p>Our downloader works by extracting the media files from TikTok posts. Simply copy the URL of the post you want to download, paste it into our downloader, and click the download button. Our system will process the request and provide you with the downloadable content.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Features</h2>
        <ul className="space-y-2">
          <li>✓ Fast and reliable downloads</li>
          <li>✓ Support for videos</li>
          <li>✓ No watermarks on downloaded content</li>
          <li>✓ No registration required</li>
          <li>✓ Simple and user-friendly interface</li>
        </ul>
      </section>
      <section className="space-y-4 pt-6 border-t border-white/10">
        <h2 className="text-2xl font-bold text-white">Legal Notice</h2>
        <p className="text-sm">TikSaver Pro is intended for personal use only. We respect copyright laws and the rights of content creators. Please ensure you have the right to download and use the content. Do not use downloaded content for commercial purposes without proper authorization from the original creator.</p>
        <p className="text-sm text-slate-500 italic">Our service is not affiliated with, endorsed by, or sponsored by TikTok or its parent company.</p>
      </section>
    </div>
  </div>
);

const PolicyView: React.FC = () => (
  <div className="max-w-4xl mx-auto space-y-12 py-12 animate-in fade-in slide-in-from-bottom-4">
    <h1 className="text-5xl font-black text-center">Policy</h1>
    <div className="space-y-8 text-slate-300">
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Privacy Policy</h2>
        <p>At TikSaver Pro, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>This website will not collect your personal information. The user's personal information is not used in this site and not provide user information to third parties.</li>
          <li>This website uses Google Analytics as an analysis tool to improve user experience.</li>
        </ol>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Copyright Policy</h2>
        <p>TikSaver Pro respects the intellectual property rights of others and expects users of the service to do the same. We will respond to notices of alleged copyright infringement that comply with applicable law.</p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">User Responsibility</h2>
        <p>Users are responsible for ensuring they have the right to download content from TikTok. Our service is intended for personal use only, and users should not download content for commercial purposes without authorization.</p>
      </section>
    </div>
  </div>
);

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'about' | 'policy'>('home');

  return (
    <div className="min-h-screen flex flex-col bg-black selection:bg-[#fe2c55] selection:text-white">
      <Navbar currentView={view} setView={setView} />
      
      <main className="flex-grow pt-32 pb-24 px-6 max-w-6xl mx-auto w-full">
        {view === 'home' && <HomeView />}
        {view === 'about' && <AboutView />}
        {view === 'policy' && <PolicyView />}
      </main>

      <Footer />
    </div>
  );
};

export default App;
