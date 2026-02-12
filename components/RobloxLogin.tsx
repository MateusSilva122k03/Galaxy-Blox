import React from 'react';
import { Search } from 'lucide-react';

export const RobloxLogin: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#1b1d1e] text-white font-sans flex flex-col">
      {/* Roblox Header - Clone */}
      <header className="bg-[#232527] border-b border-[#393b3d] h-[60px] flex items-center justify-between px-4 sticky top-0 z-50">
        <div className="flex items-center gap-4 lg:gap-6">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
             <svg className="h-8 w-8 fill-white" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M7.8,25.6L7.8,25.6c-0.9,0-1.7-0.7-1.7-1.7l0,0V10c0-1.6,1.3-2.9,2.9-2.9h13.9c1.6,0,2.9,1.3,2.9,2.9v13.9c0,1.6-1.3,2.9-2.9,2.9H9.6C8.9,26.7,8.3,26.3,7.8,25.6z M11.8,16.5c1.4,0,2.5-1.1,2.5-2.5s-1.1-2.5-2.5-2.5s-2.5,1.1-2.5,2.5S10.4,16.5,11.8,16.5z"/></svg>
          </a>
          
          {/* Nav Items (Hidden on small mobile, visible on desktop/tablet to match screenshot) */}
          <nav className="hidden md:flex items-center gap-6 text-base font-medium">
            <a href="#" className="hover:opacity-80 transition-opacity">Destaques</a>
            <a href="#" className="hover:opacity-80 transition-opacity">Mercado</a>
            <a href="#" className="hover:opacity-80 transition-opacity">Criar</a>
            <a href="#" className="hover:opacity-80 transition-opacity">Robux</a>
          </nav>
        </div>

        {/* Search Bar - Desktop/Tablet */}
        <div className="hidden md:flex flex-1 max-w-2xl mx-6">
            <div className="relative w-full bg-[#1b1d1e] border border-[#393b3d] rounded-md flex items-center overflow-hidden hover:border-white transition-colors group">
                <input 
                    type="text" 
                    placeholder="Pesquisar" 
                    className="w-full bg-transparent px-3 py-2 text-sm outline-none placeholder-gray-400 font-light"
                />
                <button className="px-3 py-2 text-white">
                    <Search size={18} />
                </button>
            </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
             <button className="px-4 py-2 bg-[#00b06f] hover:bg-[#009e63] text-white rounded-lg text-sm font-bold transition-colors">
                Cadastrar-se
             </button>
             <button className="px-4 py-2 border border-[#9d9fa2] hover:border-white bg-transparent text-white rounded-lg text-sm font-bold transition-colors">
                Entrar
             </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow relative flex items-center justify-center p-4">
        
        {/* Background Grid Image (Simulated) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
             <img 
                src="https://images.rbxcdn.com/2642a8b9e6522c7a726cd550742f5581-dark_game_tile_pattern.jpg" 
                className="w-full h-full object-cover opacity-60"
                alt="Background"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#1b1d1e] to-transparent"></div>
        </div>

        {/* Login Modal */}
        <div className="relative z-10 w-full max-w-[420px] bg-[#232527] rounded-xl shadow-2xl p-6 md:p-8 border border-[#393b3d]/50">
            <h1 className="text-3xl font-bold text-white text-center mb-8 tracking-tight">Entrar na Roblox</h1>

            <form className="flex flex-col gap-4">
                {/* User Input */}
                <div className="flex flex-col gap-1">
                    <input 
                        type="text" 
                        placeholder="Usuário/e-mail/telefone" 
                        className="w-full bg-[#1b1d1e] border-2 border-transparent focus:border-white rounded-lg px-4 py-3 text-white placeholder-[#87898b] outline-none transition-all"
                    />
                </div>

                {/* Password Input */}
                <div className="flex flex-col gap-1">
                    <input 
                        type="password" 
                        placeholder="Senha" 
                        className="w-full bg-[#1b1d1e] border-2 border-transparent focus:border-white rounded-lg px-4 py-3 text-white placeholder-[#87898b] outline-none transition-all"
                    />
                </div>

                {/* Main Login Button */}
                <button 
                    type="button"
                    className="w-full mt-2 py-3 bg-[#232527] border border-white text-white rounded-lg font-bold hover:bg-white hover:text-black transition-all duration-200"
                >
                    Entrar
                </button>
            </form>

            {/* Links */}
            <div className="text-center mt-4 mb-6">
                <a href="#" className="text-[#00b06f] text-sm hover:underline font-medium">
                    Esqueceu a senha ou nome de usuário?
                </a>
            </div>

            {/* Separator / Alternative Options */}
            <div className="flex flex-col gap-3">
                <button className="w-full py-3 bg-[#393b3d] hover:bg-[#46484a] text-white/80 hover:text-white rounded-lg text-sm font-bold transition-colors">
                    Envie-me um código único por e-mail
                </button>
                <button className="w-full py-3 bg-[#393b3d] hover:bg-[#46484a] text-white/80 hover:text-white rounded-lg text-sm font-bold transition-colors">
                    Entrada rápida
                </button>
            </div>

            {/* Footer Text */}
            <div className="mt-8 text-center text-sm text-[#87898b]">
                Não possui uma conta? <a href="#" className="text-white hover:underline font-bold">Cadastrar-se</a>
            </div>

        </div>
      </main>
    </div>
  );
};