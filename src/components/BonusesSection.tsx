import React from 'react';
import { Gift, CheckCircle2, ArrowRight, Sparkles, BookOpen, Layers } from 'lucide-react';
import { BONUSES_DATA } from '../data/scalesData';
import bonusMockup from '../assets/images/bonus_bundles_mockup_1790816456210.jpg';

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

        {/* Featured Bonus Banner / Mockup Showcase */}
        <div className="mb-14 rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-gradient-to-r from-slate-900 via-[#071E4B] to-[#0867D7] p-6 sm:p-10 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Pacote de Bônus 100% Gratuito
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Mais de R$ 52,00 em materiais extras incluídos hoje
              </h3>
              <p className="text-sm sm:text-base text-blue-100 font-normal mb-6 leading-relaxed">
                Você receberá o Mapa de Consulta Rápida, o Caderno de 50 Casos Clínicos Comentados e o Baralho de Flashcards Digitais sem pagar nenhum centavo a mais por isso.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-semibold text-emerald-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Formato Digital Imediato
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Prontos para Impressão
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Acesso Vitalício ao PDF
                </span>
              </div>
            </div>
            
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl bg-slate-800">
                <img
                  src={bonusMockup}
                  alt="3 Bônus Exclusivos do Atlas Visual de Escalas Clínicas"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
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
