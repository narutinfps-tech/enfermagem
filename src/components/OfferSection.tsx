import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Lock, 
  Zap, 
  Smartphone, 
  ShieldCheck, 
  Timer, 
  CreditCard,
  QrCode,
  Sparkles
} from 'lucide-react';

interface OfferSectionProps {
  onCtaClick: () => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ onCtaClick }) => {
  // 15:00 minutes countdown timer (900 seconds)
  const [timeLeft, setTimeLeft] = useState<number>(() => {
    const saved = sessionStorage.getItem('atlas_offer_timer');
    if (saved) {
      const parsed = parseInt(saved, 10);
      return !isNaN(parsed) && parsed > 0 ? parsed : 900;
    }
    return 900;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Keep at 0 or soft reset to maintain polite urgency
          sessionStorage.setItem('atlas_offer_timer', '900');
          return 900;
        }
        const updated = prev - 1;
        sessionStorage.setItem('atlas_offer_timer', updated.toString());
        return updated;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatMinutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const formatSeconds = (timeLeft % 60).toString().padStart(2, '0');

  const includedItems = [
    "Atlas Visual com 50 Escalas e Escores",
    "7 módulos completos organizados por especialidade",
    "Exemplos práticos e casos clínicos comentados",
    "Mapa exclusivo “Qual escala utilizar?”",
    "Caderno com 50 Casos Clínicos para treino",
    "Coleção de Flashcards de Revisão Rápida",
    "Acesso digital imediato e vitalício ao PDF",
    "Garantia incondicional de 7 dias ou seu dinheiro de volta"
  ];

  return (
    <section id="oferta" className="py-20 lg:py-28 bg-[#071E4B] text-white relative overflow-hidden">
      {/* Subtle radial decorative light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0867D7]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1ED5E7]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#1ED5E7] text-xs font-bold uppercase tracking-wider mb-4 border border-white/15 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5" />
            Condição Especial de Lançamento
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Tenha as principais escalas clínicas organizadas em um único lugar.
          </h2>
          <p className="text-base sm:text-lg text-blue-200">
            Acesso vitalício ao material visual mais completo para sua formação em Enfermagem e Saúde.
          </p>
        </div>

        {/* Real Countdown Timer Banner */}
        <div className="max-w-xl mx-auto mb-12 bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/20 text-center shadow-lg">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#37B7FF] block mb-2">
            CONDIÇÃO ESPECIAL DISPONÍVEL POR TEMPO LIMITADO
          </span>
          <div className="flex items-center justify-center gap-3">
            <Timer className="w-5 h-5 text-[#1ED5E7] animate-pulse" />
            <div className="flex items-center gap-2 font-mono tabular-nums text-3xl sm:text-4xl font-extrabold text-white tracking-wider">
              <span className="bg-slate-900/60 px-3 py-1 rounded-lg border border-white/10">
                {formatMinutes}
              </span>
              <span className="text-[#37B7FF]">:</span>
              <span className="bg-slate-900/60 px-3 py-1 rounded-lg border border-white/10">
                {formatSeconds}
              </span>
            </div>
            <span className="text-xs text-blue-200 font-medium ml-1">minutos</span>
          </div>
        </div>

        {/* Main Offer Card Container */}
        <div className="bg-white rounded-3xl text-slate-800 p-6 sm:p-10 lg:p-12 shadow-2xl border-4 border-[#0867D7]/40 relative">
          
          {/* Top highlight ribbon */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#0867D7] to-[#7347E8] text-white text-xs sm:text-sm font-extrabold px-6 py-1.5 rounded-full shadow-md uppercase tracking-wider whitespace-nowrap border border-white/30">
            Acesso Imediato + Todos os 3 Bônus
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: What's included */}
            <div className="lg:col-span-7">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#0867D7] block mb-2">
                VOCÊ RECEBE HOJE:
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#071E4B] mb-6">
                Pacote Completo Atlas Visual
              </h3>

              <div className="space-y-3.5 mb-8">
                {includedItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-[#16C784] flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 fill-[#16C784] text-white" />
                    </div>
                    <span className="text-sm sm:text-base font-semibold text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Formats banner */}
              <div className="p-4 rounded-xl bg-[#F5F8FC] border border-slate-200 flex items-center gap-3 text-xs text-slate-600 font-medium">
                <Smartphone className="w-5 h-5 text-[#0867D7] flex-shrink-0" />
                <span>Compatível com Celular, Tablet, iPad e Computador. Otimizado para visualização vertical e impressão em A4.</span>
              </div>
            </div>

            {/* Right: Pricing Box & CTA */}
            <div className="lg:col-span-5 bg-[#F5F8FC] rounded-2xl p-6 sm:p-8 border border-slate-200/90 text-center flex flex-col justify-between shadow-xs">
              
              <div>
                <span className="text-xs font-bold text-slate-500 line-through block mb-1">
                  Valor total dos materiais: R$ 97,00
                </span>
                
                <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-[#0867D7] text-xs font-bold uppercase tracking-wider mb-4">
                  OFERTA ESPECIAL DE LANÇAMENTO
                </div>

                {/* Price Display */}
                <div className="mb-2">
                  <span className="text-xs sm:text-sm text-slate-600 font-semibold block">
                    Por apenas
                  </span>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#071E4B]">R$</span>
                    <span className="text-5xl sm:text-6xl font-black text-[#071E4B] tracking-tight font-sans">
                      37
                    </span>
                    <span className="text-xl sm:text-2xl font-bold text-[#071E4B]">,00</span>
                  </div>
                  <span className="text-xs text-slate-500 font-semibold block mt-1">
                    ou em até 4x de R$ 9,99 no cartão
                  </span>
                </div>

                <div className="text-xs text-emerald-700 font-bold bg-emerald-50 py-1.5 px-3 rounded-lg border border-emerald-200 inline-block mb-6">
                  Pagamento único • Sem mensalidades • Acesso vitalício
                </div>
              </div>

              {/* Big Green CTA Button */}
              <div>
                <button
                  onClick={onCtaClick}
                  className="w-full group relative inline-flex items-center justify-center gap-3 py-4 sm:py-4.5 px-6 rounded-2xl bg-[#16C784] hover:bg-[#13b175] active:scale-[0.98] text-white text-base sm:text-lg font-bold shadow-xl hover:shadow-emerald-200 transition-all cursor-pointer"
                >
                  <span>QUERO ACESSAR O ATLAS COMPLETO →</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>

                <div className="mt-4 flex items-center justify-center gap-3 text-slate-400 text-xs">
                  <span className="flex items-center gap-1 font-medium text-slate-500">
                    <QrCode className="w-3.5 h-3.5 text-[#16C784]" /> PIX Instantâneo
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="flex items-center gap-1 font-medium text-slate-500">
                    <CreditCard className="w-3.5 h-3.5 text-[#0867D7]" /> Cartão de Crédito
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Trust and reassurance badges footer */}
          <div className="mt-10 pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center gap-1">
              <Lock className="w-5 h-5 text-[#0867D7]" />
              <span className="text-xs font-bold text-slate-700">Compra segura</span>
              <span className="text-[11px] text-slate-500">Ambiente criptografado</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Zap className="w-5 h-5 text-[#16C784]" />
              <span className="text-xs font-bold text-slate-700">Acesso imediato</span>
              <span className="text-[11px] text-slate-500">Liberação no e-mail</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Smartphone className="w-5 h-5 text-[#7347E8]" />
              <span className="text-xs font-bold text-slate-700">Celular, tablet ou PC</span>
              <span className="text-[11px] text-slate-500">Estude onde estiver</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <ShieldCheck className="w-5 h-5 text-[#1ED5E7]" />
              <span className="text-xs font-bold text-slate-700">7 dias de garantia</span>
              <span className="text-[11px] text-slate-500">100% sem risco</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
