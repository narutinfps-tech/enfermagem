import React from 'react';
import { 
  Brain, 
  Flame, 
  ShieldAlert, 
  Activity, 
  UserCheck, 
  HeartPulse, 
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Check
} from 'lucide-react';
import { MODULES_DATA } from '../data/scalesData';

interface ModulesSectionProps {
  onCtaClick: () => void;
  onExploreScale?: (scaleId: string) => void;
}

export const ModulesSection: React.FC<ModulesSectionProps> = ({ onCtaClick }) => {
  const getModuleIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain': return <Brain className="w-6 h-6 text-[#0867D7]" />;
      case 'Flame': return <Flame className="w-6 h-6 text-[#7347E8]" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6 text-[#0867D7]" />;
      case 'Activity': return <Activity className="w-6 h-6 text-[#16C784]" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-[#0867D7]" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6 text-[#1ED5E7]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#7347E8]" />;
      default: return <Brain className="w-6 h-6 text-[#0867D7]" />;
    }
  };

  return (
    <section id="modulos" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0867D7] text-xs font-bold uppercase tracking-wider mb-4">
            Estrutura Completa do Material
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#071E4B] tracking-tight mb-4">
            Você não recebe apenas uma lista de escalas.
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 font-normal">
            Você recebe um verdadeiro <span className="font-semibold text-[#0867D7]">Atlas Visual</span> para entender como cada instrumento funciona.
          </p>
        </div>

        {/* 7 Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {MODULES_DATA.map((module) => (
            <div
              key={module.id}
              className="bg-[#F5F8FC] rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between group text-center"
            >
              <div>
                {/* Module Header Centered */}
                <div className="flex flex-col items-center justify-center mb-4">
                  <div className="w-13 h-13 rounded-2xl bg-white shadow-xs border border-slate-100 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform text-[#0867D7]">
                    {getModuleIcon(module.icon)}
                  </div>
                  <span className="text-xs font-extrabold text-[#0867D7] tracking-wider uppercase bg-white px-3.5 py-1 rounded-full border border-blue-100 shadow-2xs">
                    MÓDULO {module.numberStr}
                  </span>
                </div>

                {/* Module Title */}
                <h3 className="text-xl font-bold text-[#071E4B] mb-2 leading-snug">
                  {module.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
                  {module.description}
                </p>

                {/* Module Scales List */}
                <div className="space-y-2 pt-3 border-t border-slate-200/60">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2 text-center">
                    Escalas incluídas neste módulo:
                  </span>
                  <div className="flex flex-wrap items-center justify-center gap-1.5">
                    {module.scales.map((scale, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs hover:border-[#0867D7]/40 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0867D7]" />
                        {scale}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Module bottom count */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-center gap-2 text-xs text-slate-500 font-medium text-center">
                <span>{module.scales.length} instrumentos completos</span>
                <span className="text-slate-300">•</span>
                <span className="text-[#0867D7] font-bold">100% Visual</span>
              </div>
            </div>
          ))}

          {/* 8th Card: The Big Highlight Card */}
          <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#071E4B] via-[#0867D7] to-[#7347E8] rounded-2xl p-7 sm:p-9 text-white shadow-xl flex flex-col justify-between relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-[#1ED5E7] text-xs font-extrabold uppercase tracking-wider mb-4 border border-white/20">
                Resumo do Conteúdo
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                50 ESCALAS E ESCORES • 7 MÓDULOS • MATERIAL 100% VISUAL
              </h3>
              <p className="text-sm sm:text-base text-blue-100 mb-6 font-medium">
                Chega de apostilas maçantes com textos intermináveis. Cada uma das 50 escalas foi desenhada para leitura relâmpago.
              </p>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/15 mb-6">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#1ED5E7] block mb-3">
                  E cada material mostra detalhadamente:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm font-medium">
                  {[
                    "O que é",
                    "Para que serve",
                    "Quando utilizar",
                    "O que avalia",
                    "Pontuação",
                    "Interpretação rápida",
                    "Caso clínico",
                    "Diferenças para semelhantes"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#16C784] flex items-center justify-center flex-shrink-0 text-white">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-slate-100">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/20">
              <span className="text-xs sm:text-sm text-blue-200">
                Acesso imediato ao material completo em PDF de alta qualidade.
              </span>
              <button
                onClick={onCtaClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#16C784] hover:bg-[#13b175] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer whitespace-nowrap"
              >
                <span>QUERO ACESSAR O ATLAS COMPLETO →</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
