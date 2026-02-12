import React from 'react';
import { Check, ShoppingBag, Sparkles, Plus } from 'lucide-react';
import { useCart, Product } from '../contexts/CartContext';

const products: Product[] = [
  {
    id: 'prod_400',
    robux: 400,
    price: 9.99,
    vip: false,
  },
  {
    id: 'prod_800',
    robux: 800,
    price: 14.99,
    vip: false,
  },
  {
    id: 'prod_2000',
    robux: 2000,
    price: 29.99,
    vip: false,
  },
  {
    id: 'prod_4500',
    robux: 4500,
    price: 59.90,
    vip: true,
  }
];

// Merged definition for display purposes
type ProductDisplay = Product & {
    oldPrice: number;
    popular: boolean;
    features: string[];
}

const productDetails: ProductDisplay[] = [
    { ...products[0], oldPrice: 12.00, popular: false, features: ['Entrega Automática', 'Estoque Garantido', 'Suporte 24/7'] },
    { ...products[1], oldPrice: 19.49, popular: true, features: ['Entrega Automática', 'Custo/Benefício TOP', 'Bônus Secreto'] },
    { ...products[2], oldPrice: 38.00, popular: false, features: ['Entrega Automática', 'Prioridade na Fila', 'Seguro Anti-Ban'] },
    { ...products[3], oldPrice: 77.87, popular: false, features: ['Entrega Relâmpago', 'Suporte do Dono', 'Brindes Sazonais'] }
];

interface PricingProps {
    onBuy?: () => void; // Deprecated prop in favor of cart flow, kept for compatibility if needed
}

export const Pricing: React.FC<PricingProps> = () => {
  return (
    <section id="pacotes" className="w-full flex flex-col items-center pt-10">
        <div className="flex flex-col items-center text-center mb-12 relative px-4">
             <div className="inline-block mb-2">
                <span className="text-purple-400 font-bold tracking-widest text-xs uppercase animate-pulse">Ofertas por Tempo Limitado</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight text-white mb-2 drop-shadow-xl">
                Escolha seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white">Loot</span>
            </h2>
            <p className="text-gray-300 text-sm max-w-md font-medium">Não perca tempo farmando. Compre agora e receba instantaneamente.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full px-4 max-w-7xl">
            {productDetails.map((product) => (
                <PricingCard key={product.id} product={product} />
            ))}
        </div>
    </section>
  );
};

const PricingCard: React.FC<{ product: ProductDisplay }> = ({ product }) => {
    const { addToCart } = useCart();
    const isVip = product.vip;
    const isPopular = product.popular;
    
    return (
        <div className={`relative flex flex-col rounded-[24px] transition-all duration-300 group hover:-translate-y-2
            ${isVip ? 'p-[2px] bg-gradient-to-b from-white via-purple-400 to-purple-900 shadow-[0_0_30px_rgba(168,85,247,0.3)]' : 
              isPopular ? 'p-[1px] bg-gradient-to-b from-purple-500 via-purple-900/40 to-transparent' : 'p-[1px] border border-white/10 hover:border-white/20'
            }`}>
            
            {/* VIP Card Texture Background */}
            {isVip && (
                <div className="absolute inset-0 rounded-[22px] overflow-hidden z-0 opacity-40">
                    <img 
                        src="https://i.pinimg.com/736x/de/7f/16/de7f168619fbe7e3f77302d64937d84f.jpg" 
                        alt="Galaxy Texture"
                        className="w-full h-full object-cover opacity-50"
                    />
                </div>
            )}

            <div className={`glass-card relative flex flex-col h-full rounded-[22px] p-6 overflow-hidden z-10 ${isVip ? 'bg-[#0c0c16]/90' : ''}`}>
                
                {/* Visual Tags */}
                {isPopular && (
                    <div className="absolute top-0 right-0 bg-purple-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl shadow-lg uppercase tracking-wider">
                        Mais Vendido
                    </div>
                )}
                {isVip && (
                    <div className="absolute top-0 inset-x-0 flex justify-center -mt-0.5 z-20">
                         <div className="sheen-effect bg-white text-black text-[10px] font-black px-6 py-1 rounded-b-lg shadow-[0_0_20px_rgba(255,255,255,0.5)] uppercase tracking-widest flex items-center gap-2">
                            <Sparkles size={12} className="text-purple-600" />
                            Lendário
                         </div>
                    </div>
                )}

                {/* Robux Amount */}
                <div className="flex flex-col items-center text-center mt-6 mb-8 relative">
                    <div className="relative">
                        <h3 className={`text-5xl font-display font-black tracking-tighter drop-shadow-2xl italic transform group-hover:scale-105 transition-transform duration-300
                            ${isVip ? 'text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-400' : 'text-white'}`}>
                            {product.robux}
                        </h3>
                        {/* Shadow/Glow under text */}
                        <div className={`absolute -inset-4 opacity-10 -z-10 rounded-full ${isVip ? 'bg-white' : 'bg-purple-600'}`}></div>
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-[0.4em] mt-2 opacity-80 ${isVip ? 'text-white' : 'text-purple-300'}`}>
                        Robux
                    </span>
                </div>

                {/* Separator */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6"></div>

                {/* Features */}
                <div className="flex flex-col gap-3 mb-8 flex-grow">
                    {product.features.map((feat: string, i: number) => (
                        <div key={i} className="flex items-center gap-3 group/feat">
                            <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center 
                                ${isVip ? 'bg-white text-purple-900' : 'bg-purple-500/20 text-purple-300'}`}>
                                <Check size={10} strokeWidth={4} />
                            </div>
                            <span className="text-xs font-semibold text-gray-300 group-hover/feat:text-white transition-colors">{feat}</span>
                        </div>
                    ))}
                </div>

                {/* Price & Action */}
                <div className="mt-auto flex flex-col gap-3">
                    <div className="flex flex-col items-center">
                         <span className="text-xs text-gray-400 line-through font-medium">De R$ {product.oldPrice.toFixed(2)}</span>
                         <span className={`text-3xl font-bold tracking-tight ${isVip ? 'text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]' : 'text-white'}`}>
                            R$ {product.price.toFixed(2).replace('.', ',')}
                         </span>
                    </div>

                    <button 
                        onClick={() => addToCart(product)}
                        className={`sheen-effect w-full py-3 rounded-lg text-xs font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 active:scale-95
                        ${isVip 
                            ? 'bg-white text-black hover:bg-gray-100 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]' 
                            : 'bg-purple-600 text-white hover:bg-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]'
                        }`}>
                        <Plus size={14} strokeWidth={3} />
                        Adicionar
                    </button>
                </div>
            </div>
        </div>
    );
};