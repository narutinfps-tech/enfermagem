import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

import new1 from '../assets/images/infinite_new_1.webp';
import new2 from '../assets/images/infinite_new_2.webp';
import new3 from '../assets/images/infinite_new_3.webp';
import new4 from '../assets/images/infinite_new_4.webp';
import new5 from '../assets/images/infinite_new_5.webp';
import new6 from '../assets/images/infinite_new_6.webp';

interface InfiniteImage {
  id: number;
  image: string;
  fallbackUrl: string;
}

export const InfiniteCarousels: React.FC = () => {
  const [lightboxImage, setLightboxImage] = useState<InfiniteImage | null>(null);

  // Distribuído: 1º Carrossel com imagens 1, 2 e 3
  const imagesRow1: InfiniteImage[] = [
    {
      id: 1,
      image: new1,
      fallbackUrl: 'https://i.postimg.cc/63tS01S8/Imagem-do-Chat-GPT-30-de-set-de-2026-23-59-14-1.png'
    },
    {
      id: 2,
      image: new2,
      fallbackUrl: 'https://i.postimg.cc/j5t9Xk95/Imagem-do-Chat-GPT-30-de-set-de-2026-23-59-16-2.png'
    },
    {
      id: 3,
      image: new3,
      fallbackUrl: 'https://i.postimg.cc/PxTc4FcN/Imagem-do-Chat-GPT-30-de-set-de-2026-23-59-17-3.png'
    }
  ];

  // Distribuído: 2º Carrossel com imagens 4, 5 e 6
  const imagesRow2: InfiniteImage[] = [
    {
      id: 4,
      image: new4,
      fallbackUrl: 'https://i.postimg.cc/j5t9Xk9S/Imagem-do-Chat-GPT-30-de-set-de-2026-23-59-18-4.png'
    },
    {
      id: 5,
      image: new5,
      fallbackUrl: 'https://i.postimg.cc/Y9MV3yVq/Imagem-do-Chat-GPT-30-de-set-de-2026-23-59-20-5.png'
    },
    {
      id: 6,
      image: new6,
      fallbackUrl: 'https://i.postimg.cc/Bvxk2GhL/Imagem-do-Chat-GPT-30-de-set-de-2026-23-59-21-6.png'
    }
  ];

  // Repetição contínua para loop sem cortes (50% keyframe translation)
  const loopRow1 = [...imagesRow1, ...imagesRow1, ...imagesRow1, ...imagesRow1];
  const loopRow2 = [...imagesRow2, ...imagesRow2, ...imagesRow2, ...imagesRow2];

  const allImages = [...imagesRow1, ...imagesRow2];

  const nextLightbox = () => {
    if (!lightboxImage) return;
    const currentIdx = allImages.findIndex((img) => img.id === lightboxImage.id);
    const nextIdx = (currentIdx + 1) % allImages.length;
    setLightboxImage(allImages[nextIdx]);
  };

  const prevLightbox = () => {
    if (!lightboxImage) return;
    const currentIdx = allImages.findIndex((img) => img.id === lightboxImage.id);
    const prevIdx = (currentIdx - 1 + allImages.length) % allImages.length;
    setLightboxImage(allImages[prevIdx]);
  };

  return (
    <div className="py-6 sm:py-10 bg-[#F5F8FC] overflow-hidden relative border-b border-slate-200/80">
      
      {/* Edge gradient mask for smooth entrance/exit */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-[#F5F8FC] to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-[#F5F8FC] to-transparent z-20 pointer-events-none" />

      <div className="space-y-5 sm:space-y-6">
        
        {/* 1º Carrossel Infinito (Linha 1 — Amostras 1, 2, 3 — Direita para Esquerda) */}
        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee-left flex gap-5 sm:gap-6 py-2">
            {loopRow1.map((item, idx) => (
              <div
                key={`r1-${item.id}-${idx}`}
                onClick={() => setLightboxImage(item)}
                className="w-[220px] sm:w-[260px] md:w-[290px] flex-shrink-0 cursor-pointer transition-transform duration-300 hover:scale-[1.03] select-none"
              >
                <img
                  src={item.image}
                  alt={`Amostra de Escala ${item.id}`}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src !== item.fallbackUrl) {
                      target.src = item.fallbackUrl;
                    }
                  }}
                  className="w-full h-auto rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 block select-none"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* 2º Carrossel Infinito (Linha 2 — Amostras 4, 5, 6 — Esquerda para Direita) */}
        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee-right flex gap-5 sm:gap-6 py-2">
            {loopRow2.map((item, idx) => (
              <div
                key={`r2-${item.id}-${idx}`}
                onClick={() => setLightboxImage(item)}
                className="w-[220px] sm:w-[260px] md:w-[290px] flex-shrink-0 cursor-pointer transition-transform duration-300 hover:scale-[1.03] select-none"
              >
                <img
                  src={item.image}
                  alt={`Amostra de Escala ${item.id}`}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src !== item.fallbackUrl) {
                      target.src = item.fallbackUrl;
                    }
                  }}
                  className="w-full h-auto rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 block select-none"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal on Image Click */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
        >
          <div 
            className="relative max-w-3xl w-full max-h-[92vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxImage(null)}
              aria-label="Fechar ampliação"
              className="absolute -top-12 right-0 sm:right-2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer shadow-lg z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* High Resolution Image Preview */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl max-h-[85vh] flex items-center justify-center">
              <img
                src={lightboxImage.image}
                alt={`Amostra ampliada ${lightboxImage.id}`}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src !== lightboxImage.fallbackUrl) {
                    target.src = lightboxImage.fallbackUrl;
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

    </div>
  );
};
