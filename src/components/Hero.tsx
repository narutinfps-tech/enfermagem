import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F5F8FC] via-white to-[#F5F8FC] pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-100">
      {/* Background ambient medical glows */}
      <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-[#37B7FF]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-0 -z-10 w-80 h-80 bg-[#7347E8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Context Badge / Kicker */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0867D7] text-xs font-semibold uppercase tracking-wider mb-6 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#0867D7] animate-ping" />
          <span>Material Digital para Enfermagem & Saúde</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071E4B] tracking-tight leading-[1.18] mb-6 font-sans max-w-3xl">
          Domine as <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0867D7] via-[#7347E8] to-[#1ED5E7]">50 Escalas e Escores Clínicos</span> que Todo Estudante de Enfermagem Precisa Conhecer
        </h1>

        {/* Hero Product Mockup (100% Preserved Devices, Sheets, Blue Badge, Zero Cuts, Transparent Background) */}
        <div className="w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto my-4 sm:my-6 flex justify-center animate-float">
          <picture>
            <source srcSet="/src/assets/images/atlas_mockup_final.webp" type="image/webp" />
            <img
              src="/src/assets/images/atlas_mockup_final.png"
              alt="Atlas Visual — 50 Escalas e Escores Clínicos Essenciais"
              className="w-full h-auto max-h-[620px] object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-[1.01]"
              referrerPolicy="no-referrer"
              loading="eager"
            />
          </picture>
        </div>

        {/* Subheadline */}
        <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8 max-w-2xl">
          Aprenda quando utilizar, o que cada escala avalia, como interpretar a pontuação e veja casos clínicos explicados através de mapas visuais simples e objetivos.
        </p>

        {/* Bullet Benefits List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 text-left max-w-2xl w-full">
          {[
            "50 escalas e escores explicados visualmente",
            "7 grandes áreas da prática clínica",
            "Casos clínicos para facilitar a compreensão",
            "Material para estudo, estágio, revisão e consulta",
            "Acesso digital imediato"
          ].map((benefit, idx) => (
            <div key={idx} className={`flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs ${idx === 4 ? 'sm:col-span-2 sm:max-w-md sm:mx-auto' : ''}`}>
              <div className="flex-shrink-0 mt-0.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-[#16C784]">
                  <CheckCircle2 className="w-4 h-4 fill-[#16C784] text-white" />
                </div>
              </div>
              <span className="text-xs sm:text-sm font-medium text-slate-700">
                {benefit}
              </span>
            </div>
          ))}
        </div>

        {/* Main Hero CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4 w-full sm:w-auto">
          <button
            onClick={onCtaClick}
            className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-8 py-4 sm:py-4.5 text-base sm:text-lg font-bold text-white bg-[#16C784] hover:bg-[#13b175] active:scale-[0.98] rounded-2xl shadow-lg hover:shadow-emerald-200 transition-all cursor-pointer text-center"
          >
            <span>QUERO ACESSAR AS 50 ESCALAS →</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Reassurance underneath CTA */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-slate-500 font-medium">
          <span>Acesso imediato</span>
          <span className="text-slate-300">•</span>
          <span>Material digital</span>
          <span className="text-slate-300">•</span>
          <span>Garantia de 7 dias</span>
        </div>

      </div>
    </section>
  );
};
