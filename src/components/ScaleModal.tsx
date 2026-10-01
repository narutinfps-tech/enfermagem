import React from 'react';
import { X, Sparkles, AlertCircle, Stethoscope, CheckCircle2, ArrowRight } from 'lucide-react';
import { ClinicalScale } from '../types';

interface ScaleModalProps {
  scale: ClinicalScale | null;
  onClose: () => void;
  onCtaClick: () => void;
}

export const ScaleModal: React.FC<ScaleModalProps> = ({ scale, onClose, onCtaClick }) => {
  if (!scale) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/75 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#071E4B] via-[#0867D7] to-[#7347E8] text-white p-5 sm:p-6 flex items-start justify-between flex-shrink-0">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-white/20 text-[#1ED5E7] text-[11px] font-extrabold uppercase tracking-wider mb-2">
              <Sparkles className="w-3 h-3" />
              <span>{scale.badge} • Ficha Visual de Amostra</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
              {scale.name}
            </h3>
            {scale.fullName && (
              <p className="text-xs sm:text-sm text-blue-100 font-medium mt-0.5">
                {scale.fullName}
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6 text-slate-700">
          
          {/* Summary Box */}
          <div className="p-4 rounded-2xl bg-[#F5F8FC] border border-slate-200/80">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#0867D7] block mb-1">
              O que é e para que serve:
            </span>
            <p className="text-sm font-medium text-slate-800 leading-relaxed">
              {scale.summary}
            </p>
          </div>

          {/* When to use */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Quando utilizar:
            </span>
            <p className="text-sm font-semibold text-[#071E4B]">
              {scale.whenToUse}
            </p>
          </div>

          {/* Parameters evaluated */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
              O que avalia e pontuação:
            </span>
            <div className="grid grid-cols-1 gap-2">
              {scale.evaluates.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm font-medium">
                  <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center text-[#0867D7] flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interpretation */}
          <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0867D7] block mb-1">
              Interpretação rápida da pontuação:
            </span>
            <p className="text-xs sm:text-sm font-bold text-[#071E4B]">
              {scale.interpretation}
            </p>
          </div>

          {/* Practical Clinical Case */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider mb-2">
              <Stethoscope className="w-4 h-4" />
              <span>Caso Clínico Aplicado</span>
            </div>
            <p className="text-xs font-semibold text-slate-700 mb-1">
              <strong>Paciente:</strong> {scale.clinicalCase.patient}
            </p>
            <p className="text-xs text-slate-600 mb-2">
              <strong>Cenário:</strong> {scale.clinicalCase.scenario}
            </p>
            <p className="text-xs text-slate-600 mb-2">
              <strong>Achados:</strong> {scale.clinicalCase.findings}
            </p>
            <div className="p-2.5 rounded-xl bg-white border border-emerald-300 mb-2 text-xs font-mono font-bold text-emerald-900">
              {scale.clinicalCase.score}
            </div>
            <p className="text-xs font-semibold text-emerald-950">
              <strong>Conduta de enfermagem / avaliação:</strong> {scale.clinicalCase.conduct}
            </p>
          </div>

          {/* Key difference from similar scales */}
          {scale.keyDifference && (
            <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-purple-50 border border-purple-200 text-xs text-purple-900 font-medium">
              <AlertCircle className="w-4 h-4 text-[#7347E8] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#7347E8] font-bold">Diferença para escalas semelhantes:</strong>
                {scale.keyDifference}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 flex-shrink-0">
          <span className="text-xs text-slate-500 font-medium text-center sm:text-left">
            Disponível no Atlas completo junto a outras 49 escalas explicadas.
          </span>
          <button
            onClick={() => {
              onClose();
              onCtaClick();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#16C784] hover:bg-[#13b175] text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer whitespace-nowrap"
          >
            <span>QUERO ACESSAR AS 50 ESCALAS →</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
