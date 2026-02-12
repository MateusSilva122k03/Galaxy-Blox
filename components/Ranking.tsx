import React, { useState } from 'react';
import { Crown, Trophy, Medal, ChevronLeft, Search, Gift, Gamepad2, Monitor, Smartphone, Banknote, Calendar } from 'lucide-react';

interface RankingProps {
  onBack: () => void;
}

// --- DATA GENERATION LOGIC ---

// Helper to ensure broken cents (never .00)
const getCents = () => (Math.floor(Math.random() * 89) + 10) / 100;

const generateRankings = () => {
    // Top 3 fixed for visuals, scaled to new max ~248.90
    const top3 = [
        {
            rank: 1,
            username: "Shadow_Monarch",
            title: "O Imperador",
            spentVal: 248.87, // Max cap per user request
            spent: "R$ 248,87",
            avatar: "https://i.pinimg.com/736x/88/ae/91/88ae91f27fbe06e2b3d478d86a60b628.jpg"
        },
        {
            rank: 2,
            username: "Killua_Zap",
            title: "O Intocável",
            spentVal: 242.54,
            spent: "R$ 242,54",
            avatar: "https://i.pinimg.com/736x/4f/2e/43/4f2e43485458066f3938550772718105.jpg"
        },
        {
            rank: 3,
            username: "Makima_Control",
            title: "A Patroa",
            spentVal: 235.12,
            spent: "R$ 235,12",
            avatar: "https://i.pinimg.com/736x/8d/25/c9/8d25c92d50456209587424b917336586.jpg" 
        }
    ];

    const prefixes = ["Dark", "Light", "Ghost", "Viper", "Cyber", "Neon", "Void", "Star", "Moon", "Sun"];
    const suffixes = ["Slayer", "Hunter", "Master", "Pro", "Gamer", "X", "Z", "God", "King", "Lord"];
    const titles = ["O Magnata", "Baleia", "Colecionador", "Lendário", "Viciado", "Investidor", "Pro Player", "Streamer"];
    
    const avatars = [
        "https://i.pinimg.com/736x/c2/49/64/c24964a3d666f600d04e30b78479e3fa.jpg", // Zoro
        "https://i.pinimg.com/736x/55/86/e3/5586e344199c9269414e214d2e534932.jpg", // Anya
        "https://i.pinimg.com/736x/21/df/b5/21dfb5c4794939227038e82688970034.jpg", // Loid
        "https://i.pinimg.com/736x/6d/46/7c/6d467c9c030999081273946059c19811.jpg", // Yor
        "https://i.pinimg.com/736x/7d/54/2e/7d542e61793547101851084224746401.jpg", // Jinx
        "https://i.pinimg.com/736x/c0/81/15/c081156a5959d5777083626782276535.jpg", // Vi
        "https://i.pinimg.com/736x/2b/e0/75/2be07536968846101904791007908868.jpg", // Ekko
        "https://i.pinimg.com/736x/2b/96/6e/2b966e3305419169720464670267497e.jpg", // Miles
        "https://i.pinimg.com/736x/e4/1d/17/e41d1715423871146749710385966378.jpg", // Gwen
        "https://i.pinimg.com/736x/91/9d/b1/919db1e7244583151897368212133441.jpg", // Miguel
        "https://i.pinimg.com/736x/5f/40/6a/5f406ab25e8942cbe0da6485afd26b71.jpg", // Luffy
        "https://i.pinimg.com/736x/68/73/07/68730722234057861971167732890535.jpg", // Gon
    ];

    const generated = [];
    
    // Logic: Start from rank 4 (approx 230) and descend slowly
    let currentBase = 228;

    for(let i = 4; i <= 100; i++) {
        const pre = prefixes[Math.floor(Math.random() * prefixes.length)];
        const suf = suffixes[Math.floor(Math.random() * suffixes.length)];
        const title = titles[Math.floor(Math.random() * titles.length)];
        const avatar = avatars[i % avatars.length];
        
        // Small decrease to keep top 100 tight
        const decrease = 0.5 + Math.random() * 1.5; 
        currentBase = Math.max(10, currentBase - decrease);
        
        const val = currentBase + getCents();
        
        generated.push({
            rank: i,
            username: `${pre}_${suf}${Math.floor(Math.random()*99)}`,
            title: title,
            spentVal: val,
            spent: `R$ ${val.toFixed(2).replace('.', ',')}`,
            avatar: avatar
        });
    }

    return [...top3, ...generated];
};

const rankingData = generateRankings();

// --- REWARDS DATA ---
const rewards = [
    {
        rank: 1,
        item: "PlayStation 5 Slim",
        image: "https://i.pinimg.com/originals/f3/9d/6e/f39d6e42df5f4a62569567990529d33b.gif", // PS5 Gif or Image
        icon: <Gamepad2 size={24} className="text-white" />,
        color: "from-blue-600 to-blue-400"
    },
    {
        rank: 2,
        item: "PC Gamer High-End",
        image: "https://i.pinimg.com/originals/34/96/63/3496631f7193568779b5c20c0274116c.gif", // PC RGB
        icon: <Monitor size={24} className="text-white" />,
        color: "from-purple-600 to-pink-500"
    },
    {
        rank: 3,
        item: "iPhone 15 Pro Max",
        image: "https://i.pinimg.com/736x/07/4a/19/074a19d5c414b29db4209503df774780.jpg", // iPhone
        icon: <Smartphone size={24} className="text-white" />,
        color: "from-zinc-500 to-zinc-300"
    },
    {
        rank: 4,
        item: "PIX R$ 1.000,00",
        image: "https://media1.giphy.com/media/l0Ex6kAKAoFRsFh6M/giphy.gif", // Money rain
        icon: <Banknote size={24} className="text-white" />,
        color: "from-green-600 to-emerald-400"
    },
    {
        rank: 5,
        item: "PIX R$ 500,00",
        image: "https://media.giphy.com/media/3o6gDWzmSFDeIFX1Ys/giphy.gif", // Cash
        icon: <Banknote size={24} className="text-white" />,
        color: "from-green-600 to-emerald-400"
    }
];

export const Ranking: React.FC<RankingProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'ranking' | 'premios'>('ranking');

  return (
    <div className="w-full flex flex-col items-center pt-8 pb-20 min-h-screen">
        
        {/* Header Navigation */}
        <div className="w-full max-w-[1200px] px-4 mb-6 flex items-center justify-between">
            <button 
                onClick={onBack}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm font-bold text-gray-300 hover:text-white"
            >
                <ChevronLeft size={16} /> Voltar
            </button>
            
            <div className="flex items-center gap-2 bg-purple-900/30 px-3 py-1 rounded-full border border-purple-500/20">
                <Calendar size={12} className="text-purple-400"/>
                <span className="text-[10px] font-bold text-purple-200 uppercase tracking-widest">Temporada: Março</span>
            </div>
            
            <div className="w-20"></div> {/* Spacer */}
        </div>

        {/* Tab Switcher */}
        <div className="flex p-1 bg-black/40 backdrop-blur-md rounded-full border border-white/10 mb-10 shadow-lg">
            <button 
                onClick={() => setActiveTab('ranking')}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 ${activeTab === 'ranking' ? 'bg-purple-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
            >
                <Trophy size={14} /> Ranking
            </button>
            <button 
                onClick={() => setActiveTab('premios')}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 ${activeTab === 'premios' ? 'bg-yellow-500 text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
            >
                <Gift size={14} /> Premiações
            </button>
        </div>

        {activeTab === 'ranking' ? (
            <>
                {/* Podium Section (Top 3) */}
                <div className="w-full max-w-4xl px-4 mb-20 relative mt-4">
                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-64 bg-purple-900/20 blur-[80px] rounded-full pointer-events-none"></div>

                    <div className="flex items-end justify-center gap-4 md:gap-12 relative z-10">
                        
                        {/* 2nd Place */}
                        <div className="flex flex-col items-center gap-3 transform translate-y-6 w-1/3 md:w-auto">
                             <div className="relative group">
                                <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border-4 border-gray-300 p-1 relative z-10 bg-[#0c0c16]">
                                    <img src={rankingData[1].avatar} className="w-full h-full rounded-full object-cover grayscale-[0.2]" alt="Rank 2" />
                                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gray-300 text-black text-xs font-black px-2 py-0.5 rounded-md shadow-lg flex items-center gap-1">
                                        2<span className="text-[8px]">ND</span>
                                    </div>
                                </div>
                             </div>
                             <div className="text-center w-full px-2 mt-2 relative z-20">
                                <h3 className="text-white font-bold text-xs md:text-sm truncate w-full">{rankingData[1].username}</h3>
                                <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider block">{rankingData[1].title}</span>
                                <span className="text-[10px] text-purple-300 font-mono mt-1 block bg-black/40 rounded px-1">{rankingData[1].spent}</span>
                             </div>
                        </div>

                        {/* 1st Place - The King */}
                        <div className="flex flex-col items-center gap-4 z-20 -translate-y-6 w-1/3 md:w-auto">
                             <div className="relative group">
                                <div className="absolute inset-0 bg-yellow-500 blur-xl opacity-40 rounded-full animate-pulse-slow"></div>
                                {/* Adjusted Crown Position to avoid clipping */}
                                <Crown size={42} className="absolute -top-12 left-1/2 -translate-x-1/2 text-yellow-400 drop-shadow-[0_0_10px_rgba(234,179,8,0.8)] animate-float-fast" fill="currentColor" />
                                
                                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-yellow-400 p-1 relative z-10 bg-[#0c0c16] shadow-[0_0_30px_rgba(234,179,8,0.3)]">
                                    <img src={rankingData[0].avatar} className="w-full h-full rounded-full object-cover" alt="Rank 1" />
                                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-600 to-yellow-400 text-white text-sm font-black px-4 py-1 rounded-lg shadow-lg flex items-center gap-1 border border-yellow-200">
                                        1<span className="text-[9px] mt-0.5">ST</span>
                                    </div>
                                </div>
                             </div>
                             <div className="text-center mt-3 w-full relative z-20">
                                <h3 className="text-lg md:text-xl font-black text-white drop-shadow-lg tracking-tight truncate">{rankingData[0].username}</h3>
                                <span className="text-[10px] md:text-xs text-yellow-400 font-bold uppercase tracking-[0.2em] block mb-1">{rankingData[0].title}</span>
                                <div className="bg-purple-900/60 border border-purple-500/30 px-3 py-1 rounded-full backdrop-blur-md inline-block">
                                    <span className="text-sm text-white font-mono font-bold">{rankingData[0].spent}</span>
                                </div>
                             </div>
                        </div>

                        {/* 3rd Place */}
                        <div className="flex flex-col items-center gap-3 transform translate-y-10 w-1/3 md:w-auto">
                             <div className="relative group">
                                <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border-4 border-amber-700 p-1 relative z-10 bg-[#0c0c16]">
                                    <img src={rankingData[2].avatar} className="w-full h-full rounded-full object-cover grayscale-[0.4]" alt="Rank 3" />
                                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-amber-700 text-white text-xs font-black px-2 py-0.5 rounded-md shadow-lg flex items-center gap-1">
                                        3<span className="text-[8px]">RD</span>
                                    </div>
                                </div>
                             </div>
                             <div className="text-center w-full px-2 mt-2 relative z-20">
                                <h3 className="text-white font-bold text-xs md:text-sm truncate w-full">{rankingData[2].username}</h3>
                                <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider block">{rankingData[2].title}</span>
                                <span className="text-[10px] text-purple-300 font-mono mt-1 block bg-black/40 rounded px-1">{rankingData[2].spent}</span>
                             </div>
                        </div>

                    </div>
                </div>

                {/* Search Bar (Simulated) */}
                <div className="w-full max-w-2xl px-4 mb-6">
                    <div className="glass-card rounded-xl p-3 flex items-center gap-3">
                        <Search size={18} className="text-gray-500 ml-2" />
                        <input type="text" placeholder="Buscar jogador..." className="bg-transparent w-full outline-none text-white text-sm placeholder-gray-500" />
                    </div>
                </div>

                {/* List View (4-100) */}
                <div className="w-full max-w-2xl px-4 flex flex-col gap-3">
                    {rankingData.slice(3).map((user) => (
                        <div key={user.rank} className="glass-card rounded-xl p-3 md:p-4 flex items-center gap-4 transition-transform hover:scale-[1.01] hover:bg-white/5 group">
                            
                            {/* Rank Number */}
                            <div className="w-8 flex-shrink-0 text-center">
                                <span className="text-gray-500 font-display font-bold text-lg">#{user.rank}</span>
                            </div>

                            {/* Avatar */}
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 overflow-hidden flex-shrink-0 relative">
                                <img src={user.avatar} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={user.username} />
                            </div>

                            {/* Info */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                     <h4 className="text-white font-bold text-sm truncate">{user.username}</h4>
                                     {user.rank <= 10 && <Medal size={12} className="text-purple-400" />}
                                </div>
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider truncate">{user.title}</p>
                            </div>

                            {/* Value */}
                            <div className="text-right">
                                <span className="text-white font-mono font-bold text-xs md:text-sm block">{user.spent}</span>
                                <span className="text-[9px] text-purple-400 uppercase hidden md:block">Total Gasto</span>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-8 text-xs text-gray-500 font-medium">
                    Atualizado em tempo real • Mostrando Top 100
                </div>
            </>
        ) : (
            <div className="w-full max-w-4xl px-4 flex flex-col items-center animate-fade-in">
                
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Recompensas do Mês</h2>
                    <p className="text-gray-400 text-sm max-w-md mx-auto">Os 5 maiores compradores da temporada (Março) receberão os prêmios abaixo. O envio é feito no dia 30.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
                    {rewards.map((reward, idx) => {
                        const isTop = idx === 0;
                        return (
                            <div 
                                key={idx} 
                                className={`glass-card relative rounded-2xl overflow-hidden group ${isTop ? 'md:col-span-2 aspect-[2/1] md:aspect-[3/1]' : 'aspect-square md:aspect-video'}`}
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0 z-0">
                                    <img src={reward.image} className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" alt={reward.item} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                                </div>

                                {/* Content */}
                                <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end items-start">
                                    <div className={`absolute top-4 right-4 bg-gradient-to-r ${reward.color} w-10 h-10 rounded-xl flex items-center justify-center shadow-lg`}>
                                        <span className="font-display font-black text-white text-xl">#{reward.rank}</span>
                                    </div>

                                    <div className="flex items-center gap-3 mb-1">
                                         <div className={`p-2 rounded-full bg-white/10 backdrop-blur-md`}>
                                             {reward.icon}
                                         </div>
                                         <span className="text-[10px] font-bold text-yellow-400 uppercase tracking-widest border border-yellow-500/30 px-2 py-0.5 rounded">
                                            {reward.rank === 1 ? 'Grande Prêmio' : 'Prêmio Exclusivo'}
                                         </span>
                                    </div>
                                    <h3 className={`font-bold text-white leading-tight ${isTop ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'}`}>
                                        {reward.item}
                                    </h3>
                                </div>
                                
                                {/* Shine Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                            </div>
                        );
                    })}
                </div>
                
                <div className="mt-8 p-4 rounded-xl bg-purple-900/20 border border-purple-500/20 text-center max-w-xl">
                    <p className="text-xs text-purple-200">
                        *As premiações são enviadas para o endereço cadastrado no perfil. O vencedor será contatado via e-mail e WhatsApp. Certifique-se de que seus dados estão atualizados.
                    </p>
                </div>
            </div>
        )}
    </div>
  );
};