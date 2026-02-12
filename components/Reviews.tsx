import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Music, CheckCircle2, ChevronLeft, ChevronRight, Send } from 'lucide-react';

const posts = [
  {
    id: 1,
    theme: "Blox Fruits",
    videoBg: "https://i.pinimg.com/originals/a0/0c/39/a00c39f045d3e69557f9227c8d9df14d.gif", 
    author: {
        username: "luffy_gear5_ofc",
        handle: "@rei.dos.piratas",
        // Gear 5 Luffy Icon
        avatar: "https://i.pinimg.com/736x/5f/40/6a/5f406ab25e8942cbe0da6485afd26b71.jpg", 
        caption: "Comprei 4500 Robux e peguei a Kitsune na hora! 🦊🔥 A Galaxy Blox não brinca em serviço.",
        music: "Som original - One Piece Rap"
    },
    stats: { likes: "128.4K", comments: "3.2K", shares: "15.1K" },
    comments: [
        {
            username: "zoro_solos",
            // Zoro Icon
            avatar: "https://i.pinimg.com/736x/c2/49/64/c24964a3d666f600d04e30b78479e3fa.jpg",
            text: "Onde fica essa loja? To perdido aqui kkkk preciso de robux pra ontem ⚔️",
            likes: "4.5K"
        },
        {
            username: "nami_money",
            // Nami Icon
            avatar: "https://i.pinimg.com/736x/d6/33/74/d63374467d1637da09f984da3034e320.jpg",
            text: "É barato mesmo? Se for eu vou comprar tudo! 💰🤑",
            likes: "8.2K",
            hasReply: true,
            reply: { username: "luffy_gear5_ofc", text: "Muito barato Nami, economizei dms!", likes: "3K" }
        }
    ]
  },
  {
    id: 2,
    theme: "Brookhaven",
    videoBg: "https://i.pinimg.com/originals/dc/23/2c/dc232c2a3fbdb1f0d4d21a2447403bd3.gif", 
    author: {
        username: "anya_spy_x",
        handle: "@anya.peanuts",
        // Anya Forger Icon
        avatar: "https://i.pinimg.com/736x/55/86/e3/5586e344199c9269414e214d2e534932.jpg",
        caption: "Waku Waku! ✨ Comprei o Premium no Brookhaven com os Robux que chegaram em 10 segundos!",
        music: "Som original - Spy x Family OP"
    },
    stats: { likes: "245K", comments: "8.9K", shares: "42K" },
    comments: [
        {
            username: "loid_man",
            // Loid Forger Icon
            avatar: "https://i.pinimg.com/736x/21/df/b5/21dfb5c4794939227038e82688970034.jpg",
            text: "Missão cumprida. O pagamento foi aprovado instantaneamente. ☑️",
            likes: "12K"
        },
        {
            username: "yor_assassin",
            // Yor Forger Icon
            avatar: "https://i.pinimg.com/736x/6d/46/7c/6d467c9c030999081273946059c19811.jpg",
            text: "Que elegante! Vou comprar roupinhas novas pra Anya agora mesmo ❤️",
            likes: "9.5K",
            hasReply: false
        }
    ]
  },
  {
    id: 3,
    theme: "Murder Mystery 2",
    videoBg: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3J6eG54eXJ6eG54eXJ6eG54eXJ6eG54eXJ6eG54eXJ6eG54eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LMc7w09YdHVGRpdN4m/giphy.gif",
    author: {
        username: "killua_godspeed",
        handle: "@zoldyck.kil",
        // Killua Icon
        avatar: "https://i.pinimg.com/736x/4f/2e/43/4f2e43485458066f3938550772718105.jpg",
        caption: "⚡ Godspeed na entrega! Pisquei e o código já tava no email. Comprei a Elderwood scythe.",
        music: "Som original - Hunter x Hunter OST"
    },
    stats: { likes: "89.2K", comments: "1.5K", shares: "5.6K" },
    comments: [
        {
            username: "gon_freecss",
            // Gon Icon
            avatar: "https://i.pinimg.com/736x/68/73/07/68730722234057861971167732890535.jpg",
            text: "Killua!! Me ensina a comprar também? Quero jogar com você!",
            likes: "5.4K",
            hasReply: true,
            reply: { username: "killua_godspeed", text: "Baka! É só clicar no link ali, é mt fácil.", likes: "2K" }
        },
        {
            username: "hisoka_magician",
            // Hisoka Icon
            avatar: "https://i.pinimg.com/736x/e8/6e/0f/e86e0f59048386180373809d8465451e.jpg",
            text: "Hmm... que loja interessante... 🃏⭐️💧",
            likes: "15K"
        }
    ]
  },
  {
    id: 4,
    theme: "Bedwars",
    videoBg: "https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif",
    author: {
        username: "jinx_arcane",
        handle: "@powder.blue",
        // Jinx Icon
        avatar: "https://i.pinimg.com/736x/7d/54/2e/7d542e61793547101851084224746401.jpg",
        caption: "Tudo explodindo de tão barato! 💣💥 Comprei todos os kits do Bedwars e sobrou troco.",
        music: "Som original - Get Jinxed"
    },
    stats: { likes: "310K", comments: "12K", shares: "85K" },
    comments: [
        {
            username: "vi_enforcer",
            // Vi Icon
            avatar: "https://i.pinimg.com/736x/c0/81/15/c081156a5959d5777083626782276535.jpg",
            text: "Powder, para de gastar tudo em Robux! (Mentira, compra pra mim tb 🥊)",
            likes: "22K"
        },
        {
            username: "ekko_time",
            // Ekko Icon
            avatar: "https://i.pinimg.com/736x/2b/e0/75/2be07536968846101904791007908868.jpg",
            text: "Se eu voltar no tempo, posso comprar a promoção duas vezes? 🕰️",
            likes: "18K"
        }
    ]
  },
  {
    id: 5,
    theme: "Da Hood",
    videoBg: "https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif",
    author: {
        username: "miles_morales",
        handle: "@spidey.brooklyn",
        // Miles Morales Icon
        avatar: "https://i.pinimg.com/736x/2b/96/6e/2b966e3305419169720464670267497e.jpg",
        caption: "A entrega é mais rápida que eu lançando teia 🕸️🕷️. Galaxy Blox salvou meu final de semana!",
        music: "Som original - Sunflower"
    },
    stats: { likes: "550K", comments: "25K", shares: "100K" },
    comments: [
        {
            username: "gwen_stacy",
            // Gwen Stacy Icon
            avatar: "https://i.pinimg.com/736x/e4/1d/17/e41d1715423871146749710385966378.jpg",
            text: "Miles! Vamos jogar Da Hood agora, já comprei meus robux tb 🥁",
            likes: "40K"
        },
        {
            username: "miguel_ohara",
            // Miguel O'Hara Icon
            avatar: "https://i.pinimg.com/736x/91/9d/b1/919db1e7244583151897368212133441.jpg",
            text: "É um evento canônico comprar na Galaxy Blox. Não interfira. 😠",
            likes: "80K"
        }
    ]
  }
];

export const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % posts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + posts.length) % posts.length);
  };

  const currentPost = posts[currentIndex];

  return (
    <section className="w-full flex flex-col items-center pb-20 px-4 pt-10 overflow-hidden relative">
        {/* Header Visual */}
        <div className="flex flex-col items-center text-center mb-10 z-10">
            <div className="flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-black/40 border border-white/10 backdrop-blur-md">
                <Music size={12} className="text-purple-400 animate-pulse" />
                <span className="text-[10px] font-bold text-white uppercase tracking-widest">Viralizou no TikTok</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                QUEM COMPROU, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">POSTOU</span>
            </h2>
            <p className="text-gray-400 text-sm">Confira os relatos da comunidade.</p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-sm flex items-center justify-center">
            
            {/* Prev Button - Enhanced Visibility */}
            <button 
                onClick={prevSlide}
                className="absolute -left-3 md:-left-20 z-40 w-12 h-12 rounded-full bg-purple-900/40 hover:bg-purple-600 border border-white/20 backdrop-blur-xl text-white flex items-center justify-center transition-all transform active:scale-95 shadow-lg shadow-black/50"
            >
                <ChevronLeft size={28} strokeWidth={3} />
            </button>

            {/* Mobile Phone Simulation */}
            <div className="relative w-[300px] md:w-[320px] h-[580px] bg-black rounded-[2.5rem] border-8 border-[#1a1a1a] shadow-[0_0_60px_rgba(168,85,247,0.15)] overflow-hidden flex flex-col transform-gpu transition-all duration-500 z-20">
                
                {/* Background Simulated Video */}
                <div className="absolute inset-0 z-0 bg-gray-900">
                     <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                    <img 
                        src={currentPost.videoBg} 
                        key={`video-${currentIndex}`} 
                        className="w-full h-full object-cover opacity-60 animate-fade-in"
                        alt="Background Gameplay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/95"></div>
                </div>

                {/* TikTok Right Side Actions */}
                <div className="absolute right-3 bottom-32 z-20 flex flex-col items-center gap-5">
                    {/* Author Avatar with Plus Icon */}
                    <div className="flex flex-col items-center gap-1">
                        <div className="w-11 h-11 rounded-full border-2 border-white p-0.5 relative group cursor-pointer transition-transform active:scale-90">
                            <img src={currentPost.author.avatar} className="w-full h-full rounded-full object-cover" alt="Author" />
                            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 bg-pink-500 rounded-full w-5 h-5 flex items-center justify-center border-2 border-black">
                                <span className="text-[12px] text-white font-bold leading-none pb-0.5">+</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-1">
                        <Heart size={28} className="text-white fill-white cursor-pointer active:scale-75 transition-transform" />
                        <span className="text-[11px] font-bold text-white drop-shadow-md">{currentPost.stats.likes}</span>
                    </div>

                    <div className="flex flex-col items-center gap-1">
                        <MessageCircle size={28} className="text-white fill-white/30 cursor-pointer active:scale-75 transition-transform" />
                        <span className="text-[11px] font-bold text-white drop-shadow-md">{currentPost.stats.comments}</span>
                    </div>

                    <div className="flex flex-col items-center gap-1">
                        <Share2 size={28} className="text-white fill-white/30 cursor-pointer active:scale-75 transition-transform" />
                        <span className="text-[11px] font-bold text-white drop-shadow-md">{currentPost.stats.shares}</span>
                    </div>
                </div>

                {/* Bottom Info Area */}
                <div className="absolute bottom-4 left-4 right-16 z-20 text-white pointer-events-none">
                    <h3 className="font-bold text-sm mb-1 shadow-black drop-shadow-md flex items-center gap-1">
                        {currentPost.author.handle} <CheckCircle2 size={12} className="text-blue-400 fill-blue-400 text-white bg-white rounded-full" />
                    </h3>
                    <p className="text-[12px] leading-relaxed mb-3 shadow-black drop-shadow-md opacity-90 line-clamp-2">
                        {currentPost.author.caption} <span className="font-bold">#roblox #galaxyblox</span>
                    </p>
                    <div className="flex items-center gap-2 animate-pulse bg-white/10 w-fit px-3 py-1 rounded-full backdrop-blur-sm">
                        <Music size={12} />
                        <span className="text-[10px] marquee whitespace-nowrap overflow-hidden w-24">{currentPost.author.music}</span>
                    </div>
                </div>

                {/* COMMENTS DRAWER */}
                <div className="absolute inset-x-0 bottom-0 top-[45%] bg-[#0f0f0f] rounded-t-3xl z-30 flex flex-col animate-slide-up border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.8)]">
                    
                    {/* Drawer Handle */}
                    <div className="w-full flex justify-center py-2.5">
                        <div className="w-10 h-1 bg-gray-600 rounded-full"></div>
                    </div>

                    {/* Header */}
                    <div className="px-4 pb-2 flex items-center justify-between border-b border-white/5 relative">
                        <span className="text-[11px] font-bold text-white text-center w-full">{currentPost.stats.comments} comentários</span>
                        <div className="absolute right-4 text-gray-400 cursor-pointer hover:text-white">
                            <span className="text-[12px]">✕</span>
                        </div>
                    </div>

                    {/* Comments List */}
                    <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4 custom-scrollbar">
                        {currentPost.comments.map((comment, idx) => (
                            <div key={idx} className="flex gap-3 items-start animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                                <img src={comment.avatar} className="w-8 h-8 rounded-full object-cover flex-shrink-0 border border-white/10" alt="Avatar" />
                                
                                <div className="flex flex-col flex-1">
                                    <span className="text-[11px] font-bold text-gray-400 mb-0.5">{comment.username}</span>
                                    <p className="text-[11px] text-white/95 leading-tight mb-1">{comment.text}</p>
                                    
                                    <div className="flex items-center gap-3 text-[10px] text-gray-500 font-medium">
                                        <span>Agora mesmo</span>
                                        <span className="font-bold hover:underline cursor-pointer text-gray-400">Responder</span>
                                    </div>

                                    {comment.hasReply && comment.reply && (
                                        <div className="flex gap-2 items-start mt-3 pl-1 border-l-2 border-white/10">
                                            {/* Small Creator Avatar */}
                                            <div className="relative">
                                                <img src={currentPost.author.avatar} className="w-5 h-5 rounded-full object-cover" alt="Creator" />
                                                <div className="absolute -bottom-1 -right-1 bg-purple-600 rounded-full w-3 h-3 flex items-center justify-center border border-black">
                                                     <CheckCircle2 size={8} className="text-white" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[10px] font-bold text-purple-400 mb-0.5">{comment.reply.username} · Criador</span>
                                                <p className="text-[10px] text-white/80 leading-tight">{comment.reply.text}</p>
                                            </div>
                                            <div className="flex flex-col items-center gap-0.5 ml-auto">
                                                <Heart size={10} className="text-gray-500" />
                                                <span className="text-[8px] text-gray-500">{comment.reply.likes}</span>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="flex flex-col items-center gap-0.5 pt-1">
                                    <Heart size={12} className={`${idx === 0 ? 'text-red-500 fill-red-500' : 'text-gray-600'}`} />
                                    <span className="text-[9px] text-gray-500">{comment.likes}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Input Fake */}
                    <div className="p-3 border-t border-white/10 bg-[#0f0f0f] flex items-center gap-3 pb-5 md:pb-3">
                        <div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden border border-white/10">
                             {/* User Self Avatar - Generic Anime Hero */}
                             <img src="https://i.pinimg.com/736x/8e/93/29/8e93290b2320b923055848529348c519.jpg" className="w-full h-full object-cover"/>
                        </div>
                        <div className="flex-1 h-9 rounded-full bg-[#1e1e1e] flex items-center px-4 hover:bg-[#2a2a2a] transition-colors cursor-text">
                            <span className="text-[11px] text-gray-500">Adicionar comentário...</span>
                        </div>
                        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-purple-600/20 text-white hover:bg-purple-600 cursor-pointer transition-colors">
                             <Send size={16} className="ml-0.5" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Next Button - Enhanced Visibility */}
            <button 
                onClick={nextSlide}
                className="absolute -right-3 md:-right-20 z-40 w-12 h-12 rounded-full bg-purple-900/40 hover:bg-purple-600 border border-white/20 backdrop-blur-xl text-white flex items-center justify-center transition-all transform active:scale-95 shadow-lg shadow-black/50"
            >
                <ChevronRight size={28} strokeWidth={3} />
            </button>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex gap-2 mt-8">
            {posts.map((_, i) => (
                <button 
                    key={i} 
                    onClick={() => setCurrentIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-purple-500 w-6 shadow-[0_0_10px_rgba(168,85,247,0.5)]' : 'bg-white/10 w-2 hover:bg-white/30'}`}
                />
            ))}
        </div>
    </section>
  );
};