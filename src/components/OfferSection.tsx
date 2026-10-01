import React from 'react';
import { 
  CheckCircle2, 
  X,
  ArrowRight, 
  Lock, 
  Zap, 
  Smartphone, 
  ShieldCheck, 
  CreditCard,
  QrCode,
  Sparkles,
  Gift,
  Check
} from 'lucide-react';

interface OfferSectionProps {
  onCtaClick: (plan: 'basic' | 'complete') => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ onCtaClick }) => {
  return (
    <section id="oferta" className="py-20 lg:py-28 bg-[#071E4B] text-white relative overflow-hidden">
      {/* Subtle radial decorative lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#0867D7]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1ED5E7]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#16C784]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#1ED5E7] text-xs font-bold uppercase tracking-wider mb-4 border border-white/15 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5" />
            Condição Especial de Lançamento
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Escolha a melhor opção para seus estudos
          </h2>
          <p className="text-base sm:text-lg text-blue-200">
            Acesso vitalício e liberação imediata em qualquer dispositivo. Pagamento único sem assinaturas.
          </p>
        </div>

        {/* 2 Individual Offer Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-stretch max-w-5xl mx-auto mb-14">
          
          {/* CARD 1 — PLANO BÁSICO (R$ 10,00) */}
          <div className="bg-white rounded-3xl text-slate-800 p-6 sm:p-8 shadow-xl border-2 border-slate-200 flex flex-col justify-between relative hover:border-slate-300 transition-all">
            
            <div>
              {/* Header */}
              <div className="mb-6 pb-6 border-b border-slate-100">
                <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
                  Plano Básico
                </div>
                <h3 className="text-2xl font-black text-[#071E4B] mb-2">
                  Atlas Visual Essencial
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Ideal para quem precisa apenas do guia rápido com as 50 escalas clínicas organizadas.
                </p>
              </div>

              {/* Price display */}
              <div className="mb-6 p-4 rounded-2xl bg-[#F5F8FC] border border-slate-200 text-center">
                <span className="text-xs font-bold text-slate-400 line-through block mb-1">
                  De R$ 29,90 por
                </span>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-xl sm:text-2xl font-extrabold text-[#071E4B]">R$</span>
                  <span className="text-5xl sm:text-6xl font-black text-[#071E4B] tracking-tight font-sans">
                    10
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-[#071E4B]">,00</span>
                </div>
                <span className="text-xs font-bold text-[#0867D7] block mt-1">
                  Pagamento único • Acesso vitalício
                </span>
              </div>

              {/* What's included */}
              <div className="space-y-3 mb-8">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500 block mb-2">
                  O que está incluso:
                </span>
                
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <Check className="w-4 h-4 text-[#16C784] flex-shrink-0 mt-0.5" />
                  <span className="font-semibold">Atlas Visual com as 50 Escalas e Escores</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <Check className="w-4 h-4 text-[#16C784] flex-shrink-0 mt-0.5" />
                  <span>7 Módulos completos por especialidade clínica</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <Check className="w-4 h-4 text-[#16C784] flex-shrink-0 mt-0.5" />
                  <span>Pontuações, parâmetros e interpretação prática</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <Check className="w-4 h-4 text-[#16C784] flex-shrink-0 mt-0.5" />
                  <span>Formato PDF em alta resolução (Celular, Tablet e PC)</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <Check className="w-4 h-4 text-[#16C784] flex-shrink-0 mt-0.5" />
                  <span>Garantia incondicional de 7 dias</span>
                </div>

                {/* Not included items in basic */}
                <div className="flex items-start gap-2.5 text-xs text-slate-400 pt-2 border-t border-slate-100">
                  <X className="w-4 h-4 text-slate-300 flex-shrink-0 mt-0.5" />
                  <span className="line-through">Sem o Mapa “Qual Escala Utilizar?”</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-400">
                  <X className="w-4 h-4 text-slate-300 flex-shrink-0 mt-0.5" />
                  <span className="line-through">Sem os 50 Casos Clínicos Comentados</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-400">
                  <X className="w-4 h-4 text-slate-300 flex-shrink-0 mt-0.5" />
                  <span className="line-through">Sem Flashcards de Revisão Rápida</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <button
                onClick={() => onCtaClick('basic')}
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-[#071E4B] hover:bg-[#0867D7] text-white text-sm sm:text-base font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span>QUERO O PLANO DE R$ 10</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="mt-3 text-center text-slate-400 text-[11px]">
                Acesso imediato no e-mail • Pagamento seguro
              </div>
            </div>

          </div>

          {/* CARD 2 — PACOTE COMPLETO VIP (R$ 19,90) - MAIS ESCOLHIDO */}
          <div className="bg-white rounded-3xl text-slate-800 p-6 sm:p-8 shadow-2xl border-4 border-[#16C784] flex flex-col justify-between relative lg:-translate-y-2 transition-all">
            
            {/* Top highlight ribbon */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#16C784] via-[#0867D7] to-[#7347E8] text-white text-xs sm:text-sm font-extrabold px-6 py-1.5 rounded-full shadow-lg uppercase tracking-wider whitespace-nowrap border border-white/40">
              🔥 MAIS ESCOLHIDO • MELHOR CUSTO-BENEFÍCIO
            </div>

            <div>
              {/* Header */}
              <div className="mb-6 pb-6 border-b border-slate-100 pt-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[#16C784] text-xs font-bold uppercase tracking-wider mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-[#16C784]" />
                  Pacote Completo VIP
                </div>
                <h3 className="text-2xl font-black text-[#071E4B] mb-2">
                  Atlas Visual + 3 Bônus
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  A experiência definitiva com materiais práticos, casos clínicos comentados e flashcards.
                </p>
              </div>

              {/* Price display */}
              <div className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-emerald-50 to-blue-50 border border-emerald-200 text-center">
                <span className="text-xs font-bold text-slate-400 line-through block mb-1">
                  Valor total dos itens: R$ 97,00
                </span>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-xl sm:text-2xl font-extrabold text-[#071E4B]">R$</span>
                  <span className="text-5xl sm:text-6xl font-black text-[#071E4B] tracking-tight font-sans">
                    19
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-[#071E4B]">,90</span>
                </div>
                <span className="text-xs font-extrabold text-emerald-700 bg-emerald-100/80 px-2.5 py-0.5 rounded-md inline-block mt-1">
                  Economia de R$ 77,10 hoje
                </span>
              </div>

              {/* What's included */}
              <div className="space-y-3 mb-8">
                <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 block mb-2">
                  TUDO O QUE VOCÊ RECEBE:
                </span>
                
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-[#16C784] flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 fill-[#16C784] text-white" />
                  </div>
                  <span className="font-bold text-[#071E4B]">
                    Atlas Visual Completo (50 Escalas e Escores)
                  </span>
                </div>

                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-[#16C784] flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 fill-[#16C784] text-white" />
                  </div>
                  <span>7 Módulos organizados por especialidade médica</span>
                </div>

                {/* 3 VIP Bonuses */}
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-emerald-950 bg-emerald-50/70 p-2 rounded-xl border border-emerald-200">
                  <Gift className="w-4 h-4 text-[#16C784] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-extrabold text-emerald-900 block">
                      BÔNUS 1: Mapa “Qual Escala Utilizar?”
                    </span>
                    <span className="text-[11px] text-emerald-700">Árvore de decisão rápida para plantão</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-emerald-950 bg-emerald-50/70 p-2 rounded-xl border border-emerald-200">
                  <Gift className="w-4 h-4 text-[#16C784] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-extrabold text-emerald-900 block">
                      BÔNUS 2: Caderno de 50 Casos Clínicos
                    </span>
                    <span className="text-[11px] text-emerald-700">Exemplos reais comentados e resolvidos</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-emerald-950 bg-emerald-50/70 p-2 rounded-xl border border-emerald-200">
                  <Gift className="w-4 h-4 text-[#16C784] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-extrabold text-emerald-900 block">
                      BÔNUS 3: Coleção de Flashcards de Revisão
                    </span>
                    <span className="text-[11px] text-emerald-700">Memorização ágil para provas e estágios</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <Check className="w-4 h-4 text-[#16C784] flex-shrink-0 mt-0.5" />
                  <span>Arquivos otimizados para telas e prontos para impressão em A4</span>
                </div>

                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <Check className="w-4 h-4 text-[#16C784] flex-shrink-0 mt-0.5" />
                  <span className="font-semibold text-[#16C784]">Acesso vitalício + Garantia incondicional de 7 dias</span>
                </div>
              </div>
            </div>

            {/* Big Green CTA Button */}
            <div>
              <button
                onClick={() => onCtaClick('complete')}
                className="w-full group relative inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-[#16C784] hover:bg-[#13b175] active:scale-[0.98] text-white text-base sm:text-lg font-black shadow-xl hover:shadow-emerald-200 transition-all cursor-pointer"
              >
                <span>QUERO O PACOTE COMPLETO (R$ 19,90)</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="mt-4 flex items-center justify-center gap-3 text-slate-400 text-xs">
                <span className="flex items-center gap-1 font-medium text-slate-600">
                  <QrCode className="w-3.5 h-3.5 text-[#16C784]" /> PIX Instantâneo
                </span>
                <span className="text-slate-300">•</span>
                <span className="flex items-center gap-1 font-medium text-slate-600">
                  <CreditCard className="w-3.5 h-3.5 text-[#0867D7]" /> Cartão de Crédito
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Trust and reassurance badges footer */}
        <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-1">
            <Lock className="w-5 h-5 text-[#37B7FF]" />
            <span className="text-xs font-bold text-white">Compra segura</span>
            <span className="text-[11px] text-blue-200">Ambiente 100% criptografado</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Zap className="w-5 h-5 text-[#16C784]" />
            <span className="text-xs font-bold text-white">Acesso imediato</span>
            <span className="text-[11px] text-blue-200">Liberação instantânea no e-mail</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Smartphone className="w-5 h-5 text-[#7347E8]" />
            <span className="text-xs font-bold text-white">Celular, tablet ou PC</span>
            <span className="text-[11px] text-blue-200">Estude onde e quando quiser</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <ShieldCheck className="w-5 h-5 text-[#1ED5E7]" />
            <span className="text-xs font-bold text-white">7 dias de garantia</span>
            <span className="text-[11px] text-blue-200">Risco zero ou dinheiro de volta</span>
          </div>
        </div>

      </div>
    </section>
  );
};
