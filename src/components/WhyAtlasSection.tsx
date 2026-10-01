import React from 'react';
import { 
  Eye, 
  Zap, 
  Stethoscope, 
  BarChart3, 
  FileText, 
  GitCompare, 
  X, 
  Check, 
  ArrowRight 
} from 'lucide-react';
import { COMPARISON_DATA } from '../data/scalesData';

interface WhyAtlasSectionProps {
  onCtaClick: () => void;
}

export const WhyAtlasSection: React.FC<WhyAtlasSectionProps> = ({ onCtaClick }) => {
  const cards = [
    {
      icon: <Eye className="w-6 h-6 text-[#0867D7]" />,
      title: "Aprenda visualmente",
      description: "Informações extensas transformadas em mapas visuais muito mais simples de revisar e memorizar de primeira."
    },
    {
      icon: <Zap className="w-6 h-6 text-[#7347E8]" />,
      title: "Revise rapidamente",
      description: "Ideal para revisar antes de provas, estágios supervisionados, aulas práticas ou provas de residência e concursos."
    },
    {
      icon: <Stethoscope className="w-6 h-6 text-[#16C784]" />,
      title: "Entenda a aplicação clínica",
      description: "Veja em quais situações reais do plantão cada escala é indicada e exigida pela equipe multiprofissional."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-[#37B7FF]" />,
      title: "Aprenda as pontuações",
      description: "Visualize rapidamente como os resultados são classificados, estratificados e interpretados com clareza."
    },
    {
      icon: <FileText className="w-6 h-6 text-[#0867D7]" />,
      title: "Veja casos clínicos",
      description: "Cada conteúdo conecta a teoria com uma situação prática de paciente real para fixar o raciocínio."
    },
    {
      icon: <GitCompare className="w-6 h-6 text-[#7347E8]" />,
      title: "Pare de confundir escalas parecidas",
      description: "Comparações didáticas lado a lado que eliminam dúvidas comuns na rotina hospitalar.",
      comparisons: [
        "Braden × Morse",
        "Katz × Lawton",
        "Glasgow × NIHSS",
        "RASS × Ramsay",
        "Capurro × Ballard",
        "CAM × 4AT",
        "PHQ-9 × GAD-7"
      ]
    }
  ];

  return (
    <section id="porque-o-atlas" className="py-20 lg:py-28 bg-[#F5F8FC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0867D7] text-xs font-bold uppercase tracking-wider mb-4">
            Vantagens do Método Visual
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071E4B] tracking-tight mb-4">
            Chega de decorar nomes de escalas sem entender quando usar cada uma.
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Estudar para Enfermagem e Saúde não precisa ser sinônimo de resumos confusos e desorganizados.
          </p>
        </div>

        {/* 6 Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl p-7 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between ${
                idx === 5 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F5F8FC] border border-slate-100 flex items-center justify-center mb-5 shadow-2xs">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-[#071E4B] mb-2.5">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {card.description}
                </p>

                {card.comparisons && (
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Diferenciais abordados:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {card.comparisons.map((comp, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 border border-purple-100 text-[11px] font-semibold"
                        >
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-[#0867D7]">
                <span>Benefício garantido</span>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Section: ANTES vs COM O ATLAS */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#071E4B] mb-2">
              A diferença na sua rotina de estudos
            </h3>
            <p className="text-sm text-slate-500">
              Veja o que muda na sua preparação ao utilizar materiais visuais sintetizados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            
            {/* ANTES */}
            <div className="rounded-2xl p-6 sm:p-8 bg-red-50/50 border border-red-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                  <X className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-red-950 uppercase tracking-wide">
                    ANTES DO ATLAS
                  </h4>
                  <span className="text-xs text-red-700">Como a maioria estuda</span>
                </div>
              </div>

              <ul className="space-y-4">
                {COMPARISON_DATA.before.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600 flex-shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* COM O ATLAS */}
            <div className="rounded-2xl p-6 sm:p-8 bg-emerald-50/50 border-2 border-[#16C784]/40 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#16C784] text-white text-[11px] font-extrabold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                Recomendado
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-[#16C784]">
                  <Check className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-emerald-950 uppercase tracking-wide">
                    COM O ATLAS VISUAL
                  </h4>
                  <span className="text-xs text-emerald-700">Seu aprendizado organizado</span>
                </div>
              </div>

              <ul className="space-y-4">
                {COMPARISON_DATA.after.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-[#16C784] flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm font-semibold text-slate-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Bottom CTA within comparison */}
          <div className="mt-10 pt-8 border-t border-slate-100 text-center">
            <button
              onClick={onCtaClick}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#16C784] hover:bg-[#13b175] text-white font-bold text-base shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <span>QUERO ACESSAR O ATLAS COMPLETO →</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
