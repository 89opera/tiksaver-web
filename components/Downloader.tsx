
import React, { useState } from 'react';
import { Download, Loader2, AlertCircle, Play, Music, Video, Shield, Zap, Star, CheckCircle2 } from 'lucide-react';

interface TikWMData {
  title: string;
  cover: string;
  play: string;
  music: string;
  author: {
    nickname: string;
    unique_id: string;
  }
}

const Downloader: React.FC = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState<{ [key: string]: number }>({});
  const [activeDownloadType, setActiveDownloadType] = useState<'video' | 'audio' | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<TikWMData | null>(null);

  const validateUrl = (input: string) => {
    return /tiktok\.com/.test(input);
  };

  const handleDownloadData = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    
    if (!validateUrl(url)) {
      setError('Please enter a valid TikTok URL');
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch(`https://www.tikwm.com/api/?url=${encodeURIComponent(url)}`);
      const data = await response.json();

      if (data.code === 0 && data.data) {
        setResult(data.data);
      } else {
        setError(data.msg || 'Failed to fetch video data. Please check the URL.');
      }
    } catch (err) {
      setError('A network error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const triggerDirectDownload = async (fileUrl: string, type: 'video' | 'audio') => {
    setActiveDownloadType(type);
    setDownloadProgress(prev => ({ ...prev, [type]: 0 }));
    setError(null);

    try {
      const response = await fetch(fileUrl);
      
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      
      const contentLength = response.headers.get('content-length');
      const total = contentLength ? parseInt(contentLength, 10) : 0;
      let loaded = 0;

      const reader = response.body?.getReader();
      if (!reader) throw new Error('ReadableStream not supported');

      const stream = new ReadableStream({
        start(controller) {
          function push() {
            reader!.read().then(({ done, value }) => {
              if (done) {
                controller.close();
                return;
              }
              loaded += value.byteLength;
              if (total > 0) {
                const progress = Math.round((loaded / total) * 100);
                setDownloadProgress(prev => ({ ...prev, [type]: progress }));
              } else {
                // Indeterminate progress if no content-length
                setDownloadProgress(prev => ({ ...prev, [type]: -1 }));
              }
              controller.enqueue(value);
              push();
            }).catch(error => {
              console.error(error);
              controller.error(error);
            });
          }
          push();
        },
      });

      const blobResponse = new Response(stream);
      const blob = await blobResponse.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = blobUrl;
      
      const cleanTitle = (result?.title || 'tiktok_content').replace(/[^a-z0-9]/gi, '_').substring(0, 50);
      const extension = type === 'video' ? 'mp4' : 'mp3';
      link.download = `TikSaverPro_${cleanTitle}.${extension}`;
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Keep showing 100% for a brief moment then reset
      setDownloadProgress(prev => ({ ...prev, [type]: 100 }));
      setTimeout(() => {
        window.URL.revokeObjectURL(blobUrl);
        setActiveDownloadType(null);
        setDownloadProgress(prev => ({ ...prev, [type]: 0 }));
      }, 2000);

    } catch (err) {
      console.error('Download failed:', err);
      setError('The download was blocked or failed. This can happen with some browser security settings or server CORS policies.');
      setActiveDownloadType(null);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* Main Downloader Card */}
      <div className="card-dark p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#fe2c55] to-[#25f4ee] opacity-50" />
        
        <div className="text-center space-y-8 relative">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Paste TikTok URL</h2>
            <p className="text-slate-500 text-sm">Copy and paste any TikTok video URL to download it instantly</p>
          </div>

          <form onSubmit={handleDownloadData} className="flex flex-col md:flex-row gap-4 items-stretch">
            <div className="flex-grow relative">
              <input
                type="text"
                placeholder="https://www.tiktok.com/@username/video/..."
                className="w-full h-16 px-6 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-slate-600 focus:outline-none focus:border-[#fe2c55]/50 transition-colors text-lg"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="h-16 px-10 bg-[#fe2c55] text-white rounded-2xl font-black text-lg flex items-center justify-center gap-3 disabled:opacity-70 transition-all hover:scale-[1.02] active:scale-95 shadow-[0_4px_20px_rgba(254,44,85,0.4)]"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={24} />
                  Processing...
                </>
              ) : (
                <>
                  <Download size={24} strokeWidth={3} />
                  Download
                </>
              )}
            </button>
          </form>

          {/* Quick Features under Input */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-4">
            <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider">
               <Shield size={14} className="text-[#fe2c55]" /> No Watermark
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider">
               <Zap size={14} className="text-yellow-500" /> HD Quality
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider">
               <Star size={14} className="text-yellow-400" /> Free Forever
            </div>
          </div>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="flex items-center gap-3 p-5 bg-red-500/10 text-red-400 rounded-2xl border border-red-500/20 animate-in fade-in slide-in-from-top-2">
          <AlertCircle size={22} />
          <span className="font-bold text-sm">{error}</span>
        </div>
      )}

      {/* Result Section */}
      {result && (
        <div className="card-dark p-6 md:p-10 rounded-[2.5rem] shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500 relative overflow-hidden">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="w-full md:w-56 aspect-[9/16] bg-slate-900 rounded-3xl overflow-hidden relative shadow-2xl group border border-white/5">
              <img 
                src={result.cover} 
                alt="Video Cover" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                   <Play className="text-white fill-white" size={24} />
                </div>
              </div>
            </div>

            <div className="flex-grow space-y-8 flex flex-col justify-center">
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-white leading-tight line-clamp-2">
                  {result.title || "TikTok Video"}
                </h3>
                <div className="inline-flex items-center gap-2 bg-[#fe2c55]/10 px-3 py-1 rounded-full">
                  <span className="text-[#fe2c55] font-black text-xs tracking-widest uppercase">
                    @{result.author?.unique_id || "tiktok_user"}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* HD Button */}
                <div className="space-y-3">
                  <button
                    onClick={() => triggerDirectDownload(result.play, 'video')}
                    disabled={activeDownloadType !== null}
                    className="w-full flex items-center justify-center gap-4 bg-white text-black h-16 rounded-2xl font-black text-lg hover:bg-slate-200 transition-all shadow-xl group disabled:opacity-50 relative overflow-hidden"
                  >
                    {activeDownloadType === 'video' ? (
                      downloadProgress['video'] === 100 ? <CheckCircle2 size={24} className="text-green-600" /> : <Loader2 className="animate-spin" size={24} />
                    ) : (
                      <Video size={24} className="group-hover:scale-110 transition-transform" />
                    )}
                    {activeDownloadType === 'video' ? (downloadProgress['video'] === 100 ? 'Saved!' : 'Fetching...') : 'Download HD'}
                  </button>
                  
                  {activeDownloadType === 'video' && (
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r from-[#fe2c55] to-[#25f4ee] transition-all duration-300 ${downloadProgress['video'] === -1 ? 'animate-pulse w-full' : ''}`}
                        style={{ width: downloadProgress['video'] === -1 ? '100%' : `${downloadProgress['video']}%` }}
                      />
                    </div>
                  )}
                </div>

                {/* MP3 Button */}
                <div className="space-y-3">
                  <button
                    onClick={() => triggerDirectDownload(result.music, 'audio')}
                    disabled={activeDownloadType !== null}
                    className="w-full flex items-center justify-center gap-4 border-2 border-white/10 text-white h-16 rounded-2xl font-black text-lg hover:bg-white/5 transition-all group disabled:opacity-50 relative overflow-hidden"
                  >
                    {activeDownloadType === 'audio' ? (
                      downloadProgress['audio'] === 100 ? <CheckCircle2 size={24} className="text-green-400" /> : <Loader2 className="animate-spin" size={24} />
                    ) : (
                      <Music size={24} className="group-hover:scale-110 transition-transform" />
                    )}
                    {activeDownloadType === 'audio' ? (downloadProgress['audio'] === 100 ? 'Saved!' : 'Fetching...') : 'Download MP3'}
                  </button>

                  {activeDownloadType === 'audio' && (
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r from-[#fe2c55] to-[#25f4ee] transition-all duration-300 ${downloadProgress['audio'] === -1 ? 'animate-pulse w-full' : ''}`}
                        style={{ width: downloadProgress['audio'] === -1 ? '100%' : `${downloadProgress['audio']}%` }}
                      />
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-slate-500 font-bold text-xs uppercase tracking-tighter justify-center md:justify-start">
                 <div className={`w-1.5 h-1.5 rounded-full ${activeDownloadType ? 'bg-yellow-500 animate-pulse' : 'bg-green-500'}`} />
                 {activeDownloadType ? 'Preparing file for system storage...' : 'Ready for immediate background download.'}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Downloader;
