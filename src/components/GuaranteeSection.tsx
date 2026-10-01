import React from 'react';
import { ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

interface GuaranteeSectionProps {
  onCtaClick: () => void;
}

export const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({ onCtaClick }) => {
  return (
    <section id="garantia" className="py-20 lg:py-28 bg-[#F5F8FC] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-slate-200 shadow-xl relative overflow-hidden">
          
          {/* Subtle decorative background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50/80 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            
            {/* Visual Shield with number 7 */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative group">
                
                {/* Outer concentric rings */}
                <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[#0867D7]/20 via-[#1ED5E7]/20 to-[#16C784]/20 blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />
                
                {/* SVG Shield with Number 7 */}
                <div className="relative w-44 h-48 sm:w-52 sm:h-56 bg-gradient-to-b from-[#071E4B] via-[#0867D7] to-[#071E4B] rounded-[2.5rem] p-1 shadow-2xl flex flex-col items-center justify-center text-white border-2 border-white/30">
                  <div className="w-full h-full rounded-[2.3rem] border border-blue-300/30 flex flex-col items-center justify-center p-4 text-center">
                    
                    {/* Top text */}
                    <span className="text-[10px] sm:text-xs font-black tracking-widest text-[#1ED5E7] uppercase mb-1">
                      GARANTIA
                    </span>

                    {/* Central 7 */}
                    <div className="relative my-0.5">
                      <span className="text-6xl sm:text-7xl font-black tracking-tighter text-white drop-shadow-md font-sans">
                        7
                      </span>
                    </div>

                    {/* Bottom label */}
                    <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-100">
                      DIAS DE RISCO ZERO
                    </span>

                    {/* Checkmark icon */}
                    <div className="mt-2 w-6 h-6 rounded-full bg-[#16C784] flex items-center justify-center text-white">
                      <ShieldCheck className="w-4 h-4" />
                    </div>

                  </div>
                </div>

              </div>
            </div>

            {/* Content Text */}
            <div className="md:col-span-8">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#16C784] text-xs font-bold uppercase tracking-wider mb-4">
                <ShieldCheck className="w-4 h-4" />
                7 Dias de Garantia Incondicional
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071E4B] tracking-tight mb-4">
                Você tem 7 dias para conhecer todo o material.
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-4">
                Adquira o Atlas Visual, acesse os conteúdos e veja se ele realmente facilita seus estudos.
              </p>

              <p className="text-sm sm:text-base text-slate-500 leading-relaxed mb-6">
                Caso esteja dentro das condições previstas na política de garantia aplicável à compra, você poderá solicitar o reembolso dentro do período informado. Simples, transparente e direto.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-slate-100">
                <button
                  onClick={onCtaClick}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#16C784] hover:bg-[#13b175] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <span>GARANTIR COM RISCO ZERO →</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-[#16C784]" />
                  <span>Reembolso 100% integral garantido</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
