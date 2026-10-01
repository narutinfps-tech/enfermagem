import React from 'react';
import { Gift, CheckCircle2, ArrowRight, Sparkles, BookOpen, Layers } from 'lucide-react';
import { BONUSES_DATA } from '../data/scalesData';
import bonus1Cover from '../assets/images/bonus_1_cover.webp';
import bonus2Cover from '../assets/images/bonus_2_cover.webp';
import bonus3Cover from '../assets/images/bonus_3_cover.webp';

interface BonusesSectionProps {
  onCtaClick: () => void;
}

export const BonusesSection: React.FC<BonusesSectionProps> = ({ onCtaClick }) => {
  return (
    <section id="bonus" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-[#7347E8] text-xs font-bold uppercase tracking-wider mb-4">
            <Gift className="w-3.5 h-3.5" />
            Presentes Exclusivos
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#071E4B] tracking-tight mb-4">
            E você ainda recebe 3 bônus para acelerar seus estudos
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Ferramentas complementares desenvolvidas para transformar seu aprendizado teórico em segurança prática.
          </p>
        </div>

        {/* 3 Individual Bonus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {BONUSES_DATA.map((bonus) => (
            <div
              key={bonus.id}
              className="bg-[#F5F8FC] rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-purple-300 hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-purple-100 text-[#7347E8] text-xs font-extrabold uppercase tracking-wider">
                    {bonus.numberStr}
                  </span>
                  <div className="text-right">
                    <span className="text-[11px] text-slate-400 line-through block">
                      {bonus.perceivedValue}
                    </span>
                    <span className="text-xs font-extrabold text-[#16C784]">
                      GRÁTIS HOJE
                    </span>
                  </div>
                </div>

                {/* Imagem Exclusiva do Bônus 01 */}
                {bonus.id === 1 && (
                  <div className="mb-4 rounded-xl overflow-hidden border border-slate-200/90 shadow-sm bg-white aspect-[16/11] relative group-hover:shadow-md transition-shadow">
                    <img
                      src={bonus1Cover}
                      alt={bonus.title}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (target.src !== 'https://i.postimg.cc/D0xfjk5v/Imagem-do-Chat-GPT-1-de-out-de-2026-18-42-36.png') {
                          target.src = 'https://i.postimg.cc/D0xfjk5v/Imagem-do-Chat-GPT-1-de-out-de-2026-18-42-36.png';
                        }
                      }}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Imagem Exclusiva do Bônus 02 */}
                {bonus.id === 2 && (
                  <div className="mb-4 rounded-xl overflow-hidden border border-slate-200/90 shadow-sm bg-white aspect-[16/11] relative group-hover:shadow-md transition-shadow">
                    <img
                      src={bonus2Cover}
                      alt={bonus.title}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (target.src !== 'https://i.postimg.cc/yNCKT8BX/Imagem-do-Chat-GPT-1-de-out-de-2026-18-45-20.png') {
                          target.src = 'https://i.postimg.cc/yNCKT8BX/Imagem-do-Chat-GPT-1-de-out-de-2026-18-45-20.png';
                        }
                      }}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Imagem Exclusiva do Bônus 03 */}
                {bonus.id === 3 && (
                  <div className="mb-4 rounded-xl overflow-hidden border border-slate-200/90 shadow-sm bg-white aspect-[16/11] relative group-hover:shadow-md transition-shadow">
                    <img
                      src={bonus3Cover}
                      alt={bonus.title}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (target.src !== 'https://i.postimg.cc/tCRYhDDk/3c6d71d3-8d92-4e2d-9329-b6494c30e3ff.png') {
                          target.src = 'https://i.postimg.cc/tCRYhDDk/3c6d71d3-8d92-4e2d-9329-b6494c30e3ff.png';
                        }
                      }}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                )}

                <h3 className="text-xl font-bold text-[#071E4B] mb-2 leading-snug">
                  {bonus.title}
                </h3>
                
                <p className="text-xs font-medium text-[#0867D7] mb-3">
                  {bonus.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  {bonus.description}
                </p>

                {/* Examples / Features */}
                {bonus.examples && (
                  <div className="space-y-2 pt-3 border-t border-slate-200/80">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                      O que contém:
                    </span>
                    {bonus.examples.map((ex, exIdx) => (
                      <div key={exIdx} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#16C784] mt-0.5 flex-shrink-0" />
                        <span>{ex}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Card Footer Tag */}
              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-100">
                  {bonus.tag}
                </span>
                <span className="text-xs font-bold text-slate-500">
                  Incluso no pacote
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mandatory Strip */}
        <div className="bg-gradient-to-r from-emerald-500 via-[#16C784] to-teal-500 rounded-2xl p-5 text-center text-white font-extrabold text-sm sm:text-base tracking-wide shadow-md flex items-center justify-center gap-2">
          <Sparkles className="w-5 h-5 fill-white text-emerald-600" />
          <span>OS 3 BÔNUS ESTÃO INCLUÍDOS HOJE SEM CUSTO ADICIONAL</span>
        </div>

      </div>
    </section>
  );
};
