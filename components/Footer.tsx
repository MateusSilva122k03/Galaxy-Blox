import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-white/5 bg-[#020205] relative overflow-hidden">
        {/* Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

        <div className="max-w-[1200px] mx-auto px-6 py-20 flex flex-col items-center text-center">
            
            <div className="mb-12 opacity-90 hover:opacity-100 transition-opacity duration-300">
                {/* MASSIVE LOGO: h-40 (mobile) -> h-56 (desktop) */}
                <img 
                    src="https://image2url.com/r2/default/images/1770859740303-5444d110-faac-4561-9d80-285a31a0fec4.png" 
                    alt="Galaxy Blox Oficial"
                    className="h-40 md:h-56 w-auto object-contain drop-shadow-[0_0_50px_rgba(168,85,247,0.3)]"
                />
            </div>

            <p className="text-gray-500 text-sm max-w-md leading-relaxed mb-10">
                Sua loja favorita de Robux. Segurança criptografada, entrega automática e os melhores preços do mercado brasileiro.
            </p>

            <div className="flex gap-4 mb-14">
                <SocialBtn icon={<Instagram size={20} />} />
                <SocialBtn icon={<Twitter size={20} />} />
                <SocialBtn icon={<Facebook size={20} />} />
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-xs font-medium text-gray-400 uppercase tracking-widest">
                <a href="#" className="hover:text-white transition-colors">Termos</a>
                <a href="#" className="hover:text-white transition-colors">Privacidade</a>
                <a href="#" className="hover:text-white transition-colors">Suporte</a>
                <a href="#" className="hover:text-white transition-colors">Reembolso</a>
            </div>
            
            <div className="mt-16 text-[10px] text-gray-700">
                &copy; 2024 Galaxy Blox Inc. All rights reserved. Not affiliated with Roblox Corp.
            </div>
        </div>
    </footer>
  );
};

const SocialBtn = ({ icon }: { icon: React.ReactNode }) => (
    <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 hover:border-purple-500 hover:-translate-y-1 transition-all duration-300">
        {icon}
    </a>
);