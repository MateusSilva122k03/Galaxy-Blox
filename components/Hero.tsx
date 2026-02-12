import React from 'react';
import { Activity, Users, Lock, Zap, ArrowRight, ShieldCheck, Trophy, Crown, BadgeCheck } from 'lucide-react';

interface HeroProps {
    onOpenRanking?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRanking }) => {
  const scrollToPricing = () => {
    document.getElementById('pacotes')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-4 md:pt-12 flex flex-col items-center relative w-full overflow-visible">
      
      {/* OPTIMIZED SPOTLIGHTS */}
      <div className="absolute top-0 left-0 md:left-1/4 w-[300px] h-[300px] opacity-40 animate-pulse-slow pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, rgba(0,0,0,0) 70%)' }}>
      </div>
      <div className="absolute bottom-0 right-0 md:right-1/4 w-[300px] h-[300px] opacity-20 animate-pulse-slow delay-700 pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, rgba(0,0,0,0) 70%)' }}>
      </div>

      <div className="relative w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
        
        {/* Left Column: Text & CTA */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left z-20 order-2 md:order-1">
            
            {/* CONCISE TRUST BAR (Replaces the large loose image) */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-8">
                
                {/* 1. Status Dot */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/20 backdrop-blur-md">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-widest">Online</span>
                </div>

                {/* 2. The Verified Seal - Integrated & Professional */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.2)] animate-fade-in group cursor-help transition-all hover:bg-blue-500/20 hover:scale-105">
                    <img 
                       src="https://en.help.roblox.com/hc/article_attachments/43326186826644"
                       alt="Selo Verificado Roblox"
                       className="w-5 h-5 object-contain filter drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" 
                    />
                    <span className="text-[10px] font-bold text-blue-100 uppercase tracking-widest group-hover:text-white transition-colors">Verificado</span>
                </div>
                
                {/* 3. Affiliate Badge (Hidden on very small screens to save space) */}
                <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                    <BadgeCheck size={12} className="text-gray-500" />
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Afiliado Oficial</span>
                </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-4 leading-[0.9] tracking-tight drop-shadow-2xl">
                DOMINE O <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-white to-purple-400 animate-pulse-slow">
                    ROBLOX
                </span>
            </h1>
            
            <p className="text-gray-300 text-sm md:text-lg mb-8 max-w-md font-medium leading-relaxed drop-shadow-md">
                A loja favorita dos Pro Players. Entrega automática 24/7, segurança blindada e preços que cabem na mesada.
            </p>

            <div className="w-full max-w-xs md:max-w-sm flex flex-col gap-4">
                <button 
                    onClick={scrollToPricing}
                    className="sheen-effect w-full relative group py-4 px-8 rounded-xl overflow-hidden transition-all duration-300 transform active:scale-95 shadow-[0_0_40px_rgba(168,85,247,0.3)] border border-purple-400/30"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-600"></div>
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                    
                    <div className="relative flex items-center justify-center gap-3">
                        <span className="text-base font-black tracking-widest text-white uppercase italic">Comprar Robux</span>
                        <ArrowRight size={20} className="text-white group-hover:translate-x-1 transition-transform" />
                    </div>
                </button>
                
                <div className="flex items-center justify-center gap-4 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-1 group cursor-help hover:text-white transition-colors"><ShieldCheck size={12} className="text-purple-400 group-hover:text-purple-300"/> Sem Risco de Ban</span>
                    <span className="flex items-center gap-1 group cursor-help hover:text-white transition-colors"><Zap size={12} className="text-purple-400 group-hover:text-purple-300"/> Entrega Flash</span>
                </div>
            </div>
        </div>

        {/* Right Column: The Character (The Dopamine Anchor) */}
        <div className="relative z-10 order-1 md:order-2 flex justify-center perspective-[1000px]">
            {/* The Glass Container behind the character */}
            <div className="absolute inset-0 rounded-full transform translate-y-10"
                 style={{ background: 'radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, transparent 70%)' }}>
            </div>
            
            <div className="relative w-[280px] h-[340px] md:w-[380px] md:h-[450px] animate-float">
                {/* Character Image */}
                <div className="absolute inset-0 rounded-[40px] border border-white/20 overflow-hidden shadow-2xl shadow-purple-900/50 glass-card">
                    {/* Priority Loading for LCP */}
                    <img 
                        src="https://i.pinimg.com/736x/88/ae/91/88ae91f27fbe06e2b3d478d86a60b628.jpg" 
                        alt="Pro Player Character" 
                        fetchPriority="high"
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 brightness-110"
                    />
                    
                    {/* Overlay Gradient at bottom */}
                    <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#030308] via-[#030308]/60 to-transparent opacity-90"></div>
                    
                    {/* Floating Stats on top of image */}
                    <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-3">
                        {/* Status Button Area */}
                        <div className="flex justify-between items-end">
                            <div className="flex flex-col">
                                <span className="text-[10px] text-purple-300 font-bold uppercase tracking-wider mb-1 shadow-black drop-shadow-md">Status</span>
                                <span className="text-xl font-bold text-white flex items-center gap-2 drop-shadow-md">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                                    ONLINE
                                </span>
                            </div>
                            <div className="bg-black/60 backdrop-blur-md rounded-lg px-3 py-2 border border-white/10 shadow-lg">
                                <span className="text-xs font-bold text-white">4.9/5.0 ⭐</span>
                            </div>
                        </div>

                        {/* Ranking Button - Added as requested */}
                        <button 
                            onClick={onOpenRanking}
                            className="w-full py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-lg text-[10px] font-bold uppercase tracking-widest text-white transition-all flex items-center justify-center gap-2 group"
                        >
                            <Trophy size={12} className="text-yellow-400 group-hover:scale-110 transition-transform"/>
                            Ver Ranking
                        </button>
                    </div>
                </div>

                {/* TOP 1 BADGE - Modified as requested (Top Right) */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-600 to-yellow-400 text-white text-xs font-black px-4 py-2 rounded-xl shadow-[0_0_25px_rgba(234,179,8,0.6)] rotate-12 animate-float-fast border border-yellow-200/50 flex items-center gap-1 z-20">
                    <Crown size={14} className="fill-white" />
                    TOP 1
                </div>
                
                {/* Delivered Widget */}
                <div className="absolute top-1/2 -left-6 bg-[#0c0c16]/90 backdrop-blur-md border border-white/10 p-3 rounded-2xl shadow-xl animate-float-fast delay-700 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-white flex items-center justify-center font-bold text-[#0c0c16]">R</div>
                    <div className="flex flex-col">
                         <span className="text-[10px] text-gray-400 font-bold uppercase">Entregue</span>
                         <span className="text-xs font-bold text-white">+ 10.000 R$</span>
                    </div>
                </div>
            </div>
        </div>

      </div>

      {/* HUD Stats */}
      <div className="w-full max-w-4xl mx-auto px-4 mt-12 md:mt-0">
          <div className="grid grid-cols-4 gap-2 md:gap-4 p-2 rounded-2xl bg-black/50 border border-white/10 backdrop-blur-md">
               <HudItem label="Clientes" value="15K+" />
               <HudItem label="Avaliação" value="4.9" />
               <HudItem label="Entregas" value="24/7" />
               <HudItem label="Suporte" value="ON" />
          </div>
      </div>
    </section>
  );
};

const HudItem = ({ label, value }: { label: string, value: string }) => (
    <div className="flex flex-col items-center justify-center py-2">
        <span className="text-lg md:text-xl font-bold text-white tracking-tight">{value}</span>
        <span className="text-[9px] md:text-[10px] text-gray-400 uppercase font-bold tracking-wider">{label}</span>
    </div>
);