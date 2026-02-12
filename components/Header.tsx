import React from 'react';
import { Mail, Trophy, ShoppingBag } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface HeaderProps {
  onRankingClick?: () => void;
  onHomeClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onRankingClick, onHomeClick }) => {
  const { cartCount, setIsCartOpen } = useCart();

  return (
    <header className="w-full sticky top-2 md:top-4 z-50 flex justify-center px-2 md:px-4">
      {/* Container resized to h-24 (mobile) and h-32 (desktop) for maximum logo space */}
      <div className="w-full max-w-[1200px] glass-panel rounded-full px-4 md:px-10 h-24 md:h-32 flex items-center justify-between shadow-2xl shadow-purple-900/20 backdrop-blur-xl transition-all duration-300">
        {/* Logo Integration */}
        <div 
            onClick={onHomeClick} 
            className="relative h-full flex items-center group cursor-pointer select-none -ml-1 md:-ml-4"
        >
           {/* Ambient Glow behind logo - Massive Scale */}
           <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-24 bg-purple-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
           
           {/* MAXIMIZED LOGO: h-18 (mobile) -> h-28 (desktop) */}
           <img 
             src="https://image2url.com/r2/default/images/1770859740303-5444d110-faac-4561-9d80-285a31a0fec4.png" 
             alt="Galaxy Blox Oficial" 
             className="h-18 md:h-28 w-auto object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] group-hover:drop-shadow-[0_0_20px_rgba(168,85,247,0.7)] transition-all duration-300 scale-100 group-hover:scale-105"
           />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-4">
             <button 
                onClick={onRankingClick}
                className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full text-base font-bold text-gray-300 hover:text-white hover:bg-white/5 transition-all"
             >
                <Trophy size={20} className="text-yellow-500" />
                Ranking
             </button>

            {/* Cart Button */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
            >
              <ShoppingBag size={22} className="text-gray-300 group-hover:text-white" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-6 h-6 flex items-center justify-center bg-purple-600 text-white text-xs font-bold rounded-full border border-[#0c0c16] animate-bounce-short">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Support Button */}
            <button className="hidden sm:flex items-center gap-2 px-7 py-3 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 rounded-full transition-all duration-300 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] group">
                <Mail size={20} className="text-purple-400 group-hover:text-white transition-colors" />
                <span className="text-base font-semibold text-gray-200 group-hover:text-white">Suporte</span>
            </button>
        </div>
      </div>
      <style>{`
        @keyframes bounce-short {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-3px); }
        }
        .animate-bounce-short {
            animation: bounce-short 0.5s ease-in-out;
        }
      `}</style>
    </header>
  );
};