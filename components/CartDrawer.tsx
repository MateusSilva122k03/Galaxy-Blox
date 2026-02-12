import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface CartDrawerProps {
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ onCheckout }) => {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end isolate">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={() => setIsCartOpen(false)}
      ></div>

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md h-full bg-[#0c0c16] border-l border-white/10 shadow-2xl flex flex-col animate-slide-in-right">
        
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#030308]/50 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-500/20 rounded-lg">
                <ShoppingBag size={20} className="text-purple-400" />
            </div>
            <h2 className="text-xl font-display font-bold text-white">Seu Loot</h2>
          </div>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
          >
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-60">
                <ShoppingBag size={48} className="text-gray-600" />
                <p className="text-gray-400 font-medium">Seu carrinho está vazio.</p>
                <button 
                    onClick={() => setIsCartOpen(false)}
                    className="text-purple-400 text-sm font-bold hover:underline"
                >
                    Voltar para a loja
                </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.product.id} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition-all group">
                {/* Image / Icon Placeholder */}
                <div className={`w-20 h-20 rounded-lg flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${item.product.vip ? 'from-purple-900 to-black' : 'from-gray-800 to-black'} border border-white/10`}>
                    <div className="flex flex-col items-center">
                        <span className={`font-black text-lg ${item.product.vip ? 'text-white' : 'text-purple-400'}`}>{item.product.robux}</span>
                        <span className="text-[8px] uppercase font-bold text-gray-500">Robux</span>
                    </div>
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                        <h3 className="font-bold text-white text-sm">Pacote {item.product.robux} Robux</h3>
                        {item.product.vip && <span className="text-[10px] text-yellow-400 font-bold uppercase tracking-wider">VIP • Lendário</span>}
                    </div>
                    <button 
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-gray-500 hover:text-red-400 transition-colors p-1"
                    >
                        <Trash2 size={16} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-3 bg-black/40 rounded-lg p-1 border border-white/10">
                        <button 
                            onClick={() => updateQuantity(item.product.id, -1)}
                            className="w-6 h-6 flex items-center justify-center hover:bg-white/10 rounded text-gray-400 hover:text-white"
                        >
                            <Minus size={14} />
                        </button>
                        <span className="text-sm font-bold text-white w-4 text-center">{item.quantity}</span>
                        <button 
                            onClick={() => updateQuantity(item.product.id, 1)}
                            className="w-6 h-6 flex items-center justify-center hover:bg-white/10 rounded text-gray-400 hover:text-white"
                        >
                            <Plus size={14} />
                        </button>
                    </div>
                    <span className="font-bold text-white">R$ {(item.product.price * item.quantity).toFixed(2).replace('.', ',')}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / Checkout */}
        {items.length > 0 && (
            <div className="p-6 bg-[#0c0c16] border-t border-white/10 space-y-4">
                <div className="space-y-2">
                    <div className="flex justify-between text-gray-400 text-sm">
                        <span>Subtotal</span>
                        <span>R$ {cartTotal.toFixed(2).replace('.', ',')}</span>
                    </div>
                    <div className="flex justify-between text-white font-bold text-xl">
                        <span>Total</span>
                        <span>R$ {cartTotal.toFixed(2).replace('.', ',')}</span>
                    </div>
                </div>

                <button 
                    onClick={onCheckout}
                    className="sheen-effect w-full py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-[0_0_30px_rgba(147,51,234,0.3)] hover:shadow-[0_0_40px_rgba(147,51,234,0.5)] group"
                >
                    Finalizar Compra
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
                </button>
                
                <div className="flex items-center justify-center gap-2 text-[10px] text-gray-500 font-medium">
                    <ShieldCheck size={12} className="text-green-500" />
                    Pagamento 100% Seguro via PIX
                </div>
            </div>
        )}
      </div>
      
      <style>{`
        @keyframes slide-in-right {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
        }
        .animate-slide-in-right {
            animation: slide-in-right 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        .animate-fade-in {
            animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};