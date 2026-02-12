import React, { useState } from 'react';
import { HelpCircle, Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "A entrega é realmente automática?",
    answer: "Sim! Assim que o PIX é confirmado, o código do Gift Card é enviado automaticamente para o e-mail da sua conta (o mesmo que você usou para logar no site)."
  },
  {
    question: "É seguro comprar aqui?",
    answer: "Totalmente. Utilizamos processadores de pagamento líderes de mercado com criptografia de ponta. Não pedimos a senha da sua conta Roblox em nenhum momento."
  },
  {
    question: "Como resgato o código?",
    answer: "Você receberá um código PIN. Basta ir em roblox.com/redeem, fazer login e colar o código. O saldo entra na hora!"
  },
  {
    question: "Preciso de ajuda, e agora?",
    answer: "Temos suporte via e-mail e em breve via WhatsApp. Nossa equipe responde em horário comercial para resolver qualquer problema com seu pedido."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full flex flex-col items-center max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
             <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <HelpCircle className="text-purple-400" size={24} />
             </div>
             <h2 className="text-3xl font-display font-bold text-white">Dúvidas Frequentes</h2>
        </div>

        <div className="w-full flex flex-col gap-4">
            {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                    <div 
                        key={idx} 
                        // Updated to use 'glass-card' for the main container
                        className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-purple-500/50' : ''}`}
                    >
                        <button 
                            onClick={() => toggle(idx)}
                            className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                        >
                            <span className={`text-base md:text-lg font-semibold transition-colors ${isOpen ? 'text-white' : 'text-gray-300'}`}>
                                {faq.question}
                            </span>
                            <div className={`p-1 rounded-full ${isOpen ? 'bg-purple-500 text-white' : 'bg-white/5 text-gray-500'}`}>
                                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                            </div>
                        </button>
                        
                        <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="px-8 pb-8 pt-0">
                                <p className="text-sm md:text-base text-gray-400 leading-relaxed border-l-2 border-purple-500/50 pl-4">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    </section>
  );
};