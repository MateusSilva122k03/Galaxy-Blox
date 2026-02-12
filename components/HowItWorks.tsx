import React from 'react';
import { CreditCard, Mail, Gamepad2, AlertCircle } from 'lucide-react';

const steps = [
  {
    id: 1,
    icon: <CreditCard size={20} />,
    title: 'Faça o PIX',
    desc: 'Pagamento aprovado na hora.',
    color: 'border-purple-500 text-purple-400'
  },
  {
    id: 2,
    icon: <Mail size={20} />,
    title: 'Cheque o E-mail',
    desc: 'Enviado para o e-mail do seu login.',
    color: 'border-purple-400 text-purple-300'
  },
  {
    id: 3,
    icon: <Gamepad2 size={20} />,
    title: 'Resgate e Jogue',
    desc: 'Entre no Roblox e ative!',
    color: 'border-white text-white'
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center py-10 px-4">
        <div className="w-full max-w-5xl glass-card rounded-[40px] p-1 border border-white/10 relative overflow-hidden transform-gpu">
            {/* Background Image of the section */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://i.pinimg.com/736x/de/7f/16/de7f168619fbe7e3f77302d64937d84f.jpg')] bg-cover bg-center"></div>
            
            <div className="bg-[#030308]/80 backdrop-blur-xl rounded-[36px] p-8 md:p-12 w-full h-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                
                {/* Left: The "NPC" Guide */}
                <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden group border border-white/10 shadow-2xl">
                    <img 
                        src="https://i.pinimg.com/736x/73/48/71/7348711138711a7e907161cef464b2eb.jpg" 
                        alt="Guide Character" 
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent"></div>
                    
                    <div className="absolute bottom-6 left-6 right-6">
                        <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                            <p className="text-white text-sm font-medium italic">"É muito fácil! Siga os 3 passos ao lado para conseguir seus Robux agora."</p>
                        </div>
                    </div>
                </div>

                {/* Right: The Steps (Quest Log) */}
                <div className="flex flex-col">
                    <h2 className="text-3xl font-display font-bold text-white mb-8">
                        COMO <span className="text-purple-400">RESGATAR</span>
                    </h2>

                    <div className="space-y-6">
                        {steps.map((step, idx) => (
                            <div key={step.id} className="flex items-center gap-4 group">
                                {/* Step Number / Icon */}
                                <div className={`w-12 h-12 rounded-xl border-2 flex items-center justify-center bg-white/5 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover:scale-110 ${step.color}`}>
                                    {step.icon}
                                </div>
                                
                                {/* Text */}
                                <div className="flex flex-col">
                                    <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">{step.title}</h3>
                                    <p className="text-sm text-gray-400">{step.desc}</p>
                                </div>

                                {/* Connecting Line (except last) */}
                                {idx < steps.length - 1 && (
                                    <div className="hidden md:block absolute left-[3.25rem] h-8 w-px bg-white/10 mt-12 -z-10"></div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 flex flex-col md:flex-row items-center gap-3">
                         <AlertCircle className="text-purple-400 flex-shrink-0" size={20} />
                         <p className="text-xs text-purple-200 text-center md:text-left leading-relaxed">
                            <strong>Importante:</strong> O código será enviado para o <strong>e-mail da sua conta</strong> (o mesmo e-mail que você usou para fazer login aqui no site).
                         </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};