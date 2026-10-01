import React, { useState, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  X, 
  BookOpen
} from 'lucide-react';

import sample1 from '../assets/images/material_sample_1.webp';
import sample2 from '../assets/images/material_sample_2.webp';
import sample3 from '../assets/images/material_sample_3.webp';
import sample4 from '../assets/images/material_sample_4.webp';
import sample5 from '../assets/images/material_sample_5.webp';
import sample6 from '../assets/images/material_sample_6.webp';

interface MaterialShowcaseCarouselProps {
  onCtaClick?: () => void;
}

interface SamplePage {
  id: number;
  image: string;
  fallbackUrl: string;
}

export const MaterialShowcaseCarousel: React.FC<MaterialShowcaseCarouselProps> = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const samples: SamplePage[] = [
    {
      id: 1,
      image: sample1,
      fallbackUrl: 'https://i.postimg.cc/vm9XCL9q/Imagem-do-Chat-GPT-30-de-set-de-2026-22-20-13-1.png'
    },
    {
      id: 2,
      image: sample2,
      fallbackUrl: 'https://i.postimg.cc/d0dngmd5/Imagem-do-Chat-GPT-30-de-set-de-2026-22-20-15-2.png'
    },
    {
      id: 3,
      image: sample3,
      fallbackUrl: 'https://i.postimg.cc/jjNvBQNZ/Imagem-do-Chat-GPT-30-de-set-de-2026-22-20-16-3.png'
    },
    {
      id: 4,
      image: sample4,
      fallbackUrl: 'https://i.postimg.cc/W4rSx6rn/Imagem-do-Chat-GPT-30-de-set-de-2026-22-20-17-4.png'
    },
    {
      id: 5,
      image: sample5,
      fallbackUrl: 'https://i.postimg.cc/mrMVKNMt/Imagem-do-Chat-GPT-30-de-set-de-2026-22-20-18-5.png'
    },
    {
      id: 6,
      image: sample6,
      fallbackUrl: 'https://i.postimg.cc/9QsJxN4V/Imagem-do-Chat-GPT-30-de-set-de-2026-22-20-19-6.png'
    }
  ];

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth = container.firstElementChild ? (container.firstElementChild as HTMLElement).offsetWidth + 20 : 300;
    
    if (direction === 'left') {
      container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
      setCurrentIndex((prev) => Math.max(0, prev - 1));
    } else {
      container.scrollBy({ left: cardWidth, behavior: 'smooth' });
      setCurrentIndex((prev) => Math.min(samples.length - 1, prev + 1));
    }
  };

  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth = container.firstElementChild ? (container.firstElementChild as HTMLElement).offsetWidth + 20 : 300;
    container.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
    setCurrentIndex(index);
  };

  const nextLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % samples.length);
  };

  const prevLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + samples.length) % samples.length);
  };

  return (
    <section id="por-dentro" className="py-14 sm:py-18 lg:py-20 bg-gradient-to-b from-[#F5F8FC] via-white to-[#F5F8FC] relative overflow-hidden border-b border-slate-200/80">
      
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0867D7]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#16C784]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0867D7] text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5 text-[#0867D7]" />
            Amostras Reais do Material
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071E4B] tracking-tight mb-3">
            Veja como são os materiais por dentro
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Amostras reais das páginas do Atlas Visual de Escalas Clínicas. Clique em qualquer imagem para ampliar.
          </p>
        </div>

        {/* Carousel Navigation Arrows */}
        <div className="flex items-center justify-end gap-2 mb-4">
          <button
            onClick={() => handleScroll('left')}
            aria-label="Ver imagem anterior"
            className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-[#0867D7] hover:text-white hover:border-[#0867D7] flex items-center justify-center shadow-xs transition-all cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleScroll('right')}
            aria-label="Ver próxima imagem"
            className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-[#0867D7] hover:text-white hover:border-[#0867D7] flex items-center justify-center shadow-xs transition-all cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Static Carousel with ONLY the images (No frames, no borders, no footers) */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-5 overflow-x-auto pb-6 pt-2 scroll-smooth snap-x snap-mandatory scrollbar-thin scrollbar-thumb-slate-300"
          style={{ scrollbarWidth: 'thin' }}
        >
          {samples.map((sample, idx) => (
            <div
              key={sample.id}
              onClick={() => setLightboxIndex(idx)}
              className="snap-start flex-shrink-0 w-[240px] sm:w-[280px] md:w-[320px] cursor-pointer transition-all duration-300 hover:scale-[1.02]"
            >
              <img
                src={sample.image}
                alt={`Amostra do Atlas ${sample.id}`}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src !== sample.fallbackUrl) {
                    target.src = sample.fallbackUrl;
                  }
                }}
                className="w-full h-auto rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 block select-none"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {samples.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              aria-label={`Ir para imagem ${idx + 1}`}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                currentIndex === idx 
                  ? 'w-8 bg-[#0867D7]' 
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

      </div>

      {/* Lightbox Modal for High-Resolution View (Clean image only) */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setLightboxIndex(null)}
        >
          <div 
            className="relative max-w-3xl w-full max-h-[92vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              aria-label="Fechar ampliação"
              className="absolute -top-12 right-0 sm:right-2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer shadow-lg z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Pure Image in full resolution */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl max-h-[85vh] flex items-center justify-center">
              <img
                src={samples[lightboxIndex].image}
                alt={`Amostra ampliada ${samples[lightboxIndex].id}`}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src !== samples[lightboxIndex].fallbackUrl) {
                    target.src = samples[lightboxIndex].fallbackUrl;
                  }
                }}
                className="max-h-[85vh] w-auto object-contain rounded-xl select-none"
              />

              {/* Prev / Next controls inside Lightbox */}
              <button
                onClick={prevLightbox}
                aria-label="Imagem anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-900/75 hover:bg-slate-900 text-white flex items-center justify-center shadow-lg transition-all cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextLightbox}
                aria-label="Próxima imagem"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-900/75 hover:bg-slate-900 text-white flex items-center justify-center shadow-lg transition-all cursor-pointer"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
