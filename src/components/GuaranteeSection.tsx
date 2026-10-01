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
            
            {/* Visual Guarantee Badge (Official Seal with Transparent Background) */}
            <div className="md:col-span-5 flex justify-center items-center">
              <div className="relative group">
                
                {/* Outer concentric rings & subtle golden/emerald glow */}
                <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-amber-400/25 via-[#16C784]/20 to-[#0867D7]/20 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Transparent Guarantee Badge Image */}
                <picture>
                  <source srcSet="/src/assets/images/guarantee_badge.webp" type="image/webp" />
                  <img
                    src="/src/assets/images/guarantee_badge.png"
                    alt="Selo Oficial de Garantia 7 Dias Incondicional"
                    className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </picture>

              </div>
            </div>

            {/* Content Text */}
            <div className="md:col-span-7">
              
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
