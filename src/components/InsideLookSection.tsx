import React, { useState } from 'react';
import { 
  Eye, 
  ArrowRight, 
  Sparkles, 
  Maximize2, 
  Layers, 
  Search,
  CheckCircle2
} from 'lucide-react';
import { SAMPLE_SCALES_PREVIEW } from '../data/scalesData';
import { ClinicalScale } from '../types';
import previewImg from '../assets/images/atlas_pages_preview_1790816448516.jpg';

interface InsideLookSectionProps {
  onSelectScale: (scale: ClinicalScale) => void;
  onCtaClick: () => void;
}

export const InsideLookSection: React.FC<InsideLookSectionProps> = ({ 
  onSelectScale, 
  onCtaClick 
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredScales = activeFilter === 'all' 
    ? SAMPLE_SCALES_PREVIEW 
    : SAMPLE_SCALES_PREVIEW.filter(s => s.category.toLowerCase().includes(activeFilter.toLowerCase()));

  const filterButtons = [
    { label: "Todas as 8 Amostras", value: "all" },
    { label: "Neurologia", value: "neurologia" },
    { label: "Emergência", value: "emergência" },
    { label: "Segurança", value: "segurança" },
    { label: "Sedação", value: "sedação" },
    { label: "Idoso", value: "idosa" },
    { label: "Neonatologia", value: "neonatologia" },
    { label: "Saúde Mental", value: "mental" }
  ];

  return (
    <section id="por-dentro" className="py-20 lg:py-28 bg-[#F5F8FC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0867D7] text-xs font-bold uppercase tracking-wider mb-4">
            <Eye className="w-3.5 h-3.5" />
            Amostras Reais do Material
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#071E4B] tracking-tight mb-4">
            Veja como é estudar com o Atlas Visual
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Conteúdo feito para você <span className="font-semibold text-[#0867D7]">bater o olho e entender</span>. Clique em qualquer card abaixo para ver o mapa detalhado com caso clínico explicado.
          </p>
        </div>

        {/* Studio Showcase Flatlay Banner */}
        <div className="mb-14 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white">
          <div className="relative">
            <img
              src={previewImg}
              alt="Amostra da diagramação das fichas do Atlas Visual de Escalas"
              className="w-full h-64 sm:h-80 md:h-96 object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071E4B]/80 via-[#071E4B]/30 to-transparent flex items-end p-6 sm:p-8">
              <div className="text-white max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1ED5E7] block mb-1">
                  Diagramação Profissional & Otimizada
                </span>
                <p className="text-base sm:text-lg font-semibold text-white">
                  Cada material possui hierarquia clara de cores, tabelas sem poluição visual e o caso clínico aplicado no rodapé da página.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterButtons.map((btn) => (
            <button
              key={btn.value}
              onClick={() => setActiveFilter(btn.value)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === btn.value
                  ? 'bg-[#0867D7] text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-[#0867D7]'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Interactive Gallery Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {filteredScales.map((scale) => (
            <div
              key={scale.id}
              onClick={() => onSelectScale(scale)}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-blue-400 hover:-translate-y-1 transition-all p-5 flex flex-col justify-between cursor-pointer group relative"
            >
              {/* Card top */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0867D7] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                    {scale.badge}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-[#0867D7] transition-colors">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#071E4B] mb-1.5 group-hover:text-[#0867D7] transition-colors line-clamp-1">
                  {scale.name}
                </h3>

                <span className="text-[11px] font-semibold text-slate-400 block mb-3">
                  {scale.category}
                </span>

                <p className="text-xs text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                  {scale.summary}
                </p>

                {/* Score highlight */}
                <div className="bg-[#F5F8FC] rounded-lg p-2.5 border border-slate-100 mb-3">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide block">
                    Faixa de pontuação:
                  </span>
                  <span className="text-xs font-bold text-slate-800 font-mono">
                    {scale.scoreRange}
                  </span>
                </div>
              </div>

              {/* Card Bottom: Click Affordance */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0867D7]">
                <span>Ver mapa visual</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Block */}
        <div className="text-center max-w-2xl mx-auto bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
          <p className="text-base sm:text-lg font-bold text-[#071E4B] mb-2">
            E isso é apenas uma pequena parte dos 50 materiais que você recebe.
          </p>
          <p className="text-xs sm:text-sm text-slate-500 mb-6">
            Acesse o conteúdo integral de todos os 7 módulos imediatamente no seu dispositivo.
          </p>
          <button
            onClick={onCtaClick}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#16C784] hover:bg-[#13b175] text-white text-base font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <span>QUERO VER TODAS AS 50 ESCALAS →</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
