import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { MaterialShowcaseCarousel } from './components/MaterialShowcaseCarousel';
import { InfiniteCarousels } from './components/InfiniteCarousels';
import { ModulesSection } from './components/ModulesSection';
import { WhyAtlasSection } from './components/WhyAtlasSection';
import { BonusesSection } from './components/BonusesSection';
import { OfferSection } from './components/OfferSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ScaleModal } from './components/ScaleModal';
import { CheckoutModal } from './components/CheckoutModal';
import { LegalModal } from './components/LegalModal';
import { ClinicalScale } from './types';
import { SAMPLE_SCALES_PREVIEW } from './data/scalesData';

export default function App() {
  const [selectedScale, setSelectedScale] = useState<ClinicalScale | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutPlan, setCheckoutPlan] = useState<'basic' | 'complete'>('complete');
  const [legalModalType, setLegalModalType] = useState<'terms' | 'privacy' | 'contact' | null>(null);

  const scrollToOffer = () => {
    const el = document.getElementById('oferta');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsCheckoutOpen(true);
    }
  };

  const handleOpenCheckoutWithPlan = (plan: 'basic' | 'complete') => {
    setCheckoutPlan(plan);
    setIsCheckoutOpen(true);
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

        {/* 2ª Seção — Carrossel Estático com Amostras Reais dos Materiais Por Dentro */}
        <MaterialShowcaseCarousel onCtaClick={scrollToOffer} />

        {/* Dois Carrosséis Infinitos com Amostras Contínuas */}
        <InfiniteCarousels />

        {/* 3ª Seção — O Que Você Vai Receber (7 Módulos + Card Destaque) */}
        <ModulesSection 
          onCtaClick={scrollToOffer} 
          onExploreScale={handleExploreScaleById}
        />

        {/* 3ª Seção — Por Que Escolher o Atlas? (6 Cards + Antes vs Com o Atlas) */}
        <WhyAtlasSection onCtaClick={scrollToOffer} />

        {/* 4ª Seção — 3 Bônus Exclusivos */}
        <BonusesSection onCtaClick={scrollToOffer} />

        {/* 5ª Seção — Oferta Especial com 2 Cards Individuais (R$ 10 e R$ 19,90) */}
        <OfferSection onCtaClick={handleOpenCheckoutWithPlan} />

        {/* 6ª Seção — Depoimentos */}
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
        initialPlan={checkoutPlan}
      />

      {/* Legal Modals (Terms, Privacy, Contact) */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
