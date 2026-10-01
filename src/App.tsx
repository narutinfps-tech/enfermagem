import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { ModulesSection } from './components/ModulesSection';
import { WhyAtlasSection } from './components/WhyAtlasSection';
import { BonusesSection } from './components/BonusesSection';
import { OfferSection } from './components/OfferSection';
import { InsideLookSection } from './components/InsideLookSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ScaleModal } from './components/ScaleModal';
import { CheckoutModal } from './components/CheckoutModal';
import { LegalModal } from './components/LegalModal';
import { ClinicalScale } from './types';
import { SAMPLE_SCALES_PREVIEW } from './data/scalesData';
import { ArrowRight } from 'lucide-react';

export default function App() {
  const [selectedScale, setSelectedScale] = useState<ClinicalScale | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'terms' | 'privacy' | 'contact' | null>(null);

  const scrollToOffer = () => {
    const el = document.getElementById('oferta');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsCheckoutOpen(true);
    }
  };

  const handleExploreScaleById = (scaleId: string) => {
    const found = SAMPLE_SCALES_PREVIEW.find(s => s.id === scaleId);
    if (found) {
      setSelectedScale(found);
    } else {
      scrollToOffer();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F8FC] text-slate-800 font-sans selection:bg-[#37B7FF]/30 selection:text-[#071E4B]">
      <main className="flex-grow">
        {/* 1ª Seção — Hero / Primeira Dobra */}
        <Hero onCtaClick={scrollToOffer} />

        {/* 2ª Seção — O Que Você Vai Receber (7 Módulos + Card Destaque) */}
        <ModulesSection 
          onCtaClick={scrollToOffer} 
          onExploreScale={handleExploreScaleById}
        />

        {/* 3ª Seção — Por Que Escolher o Atlas? (6 Cards + Antes vs Com o Atlas) */}
        <WhyAtlasSection onCtaClick={scrollToOffer} />

        {/* 4ª Seção — 3 Bônus Exclusivos */}
        <BonusesSection onCtaClick={scrollToOffer} />

        {/* 5ª Seção — Oferta Especial com Fundo Azul-Marinho & Temporizador */}
        <OfferSection onCtaClick={() => setIsCheckoutOpen(true)} />

        {/* 6ª Seção — Veja Por Dentro do Material (8 Amostras & Galeria) */}
        <InsideLookSection 
          onSelectScale={(scale) => setSelectedScale(scale)} 
          onCtaClick={scrollToOffer} 
        />

        {/* 7ª Seção — Depoimentos */}
        <TestimonialsSection />

        {/* 8ª Seção — 7 Dias de Garantia */}
        <GuaranteeSection onCtaClick={scrollToOffer} />

        {/* 9ª Seção — Perguntas Frequentes (FAQ Acordeão) */}
        <FaqSection />
      </main>

      {/* 10ª Seção — Rodapé */}
      <Footer onOpenLegal={(type) => setLegalModalType(type)} />

      {/* Interactive Scale Detail Zoom Modal */}
      <ScaleModal
        scale={selectedScale}
        onClose={() => setSelectedScale(null)}
        onCtaClick={scrollToOffer}
      />

      {/* Instant Checkout Simulation Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />

      {/* Legal Modals (Terms, Privacy, Contact) */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Sticky Mobile Floating Quick Action (Compliant with 15% mobile sticky height cap) */}
      <div className="md:hidden fixed bottom-3 inset-x-3 z-30 pointer-events-none">
        <div className="pointer-events-auto bg-[#071E4B]/95 backdrop-blur-md text-white p-2.5 rounded-2xl shadow-2xl border border-white/20 flex items-center justify-between gap-3">
          <div className="pl-2">
            <span className="text-[10px] text-[#1ED5E7] font-extrabold uppercase tracking-wider block">
              Oferta Especial
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-xs text-slate-300">Por</span>
              <span className="text-base font-black text-white">R$ 37,00</span>
            </div>
          </div>
          <button
            onClick={scrollToOffer}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#16C784] hover:bg-[#13b175] text-white text-xs font-black shadow-md cursor-pointer whitespace-nowrap"
          >
            <span>ACESSAR ATLAS</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
