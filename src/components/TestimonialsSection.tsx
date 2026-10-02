import React from 'react';
import { Star, Check, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/scalesData';
import testimonial1Img from '../assets/images/testimonial_1.webp';
import testimonial2Img from '../assets/images/testimonial_2.webp';
import testimonial3Img from '../assets/images/testimonial_3.webp';

const testimonialPhotos: Record<number, string> = {
  1: testimonial1Img,
  2: testimonial2Img,
  3: testimonial3Img,
};

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-white relative border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0867D7] text-xs font-bold uppercase tracking-wider mb-4">
            Opinião de Quem Já Estuda Conosco
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071E4B] tracking-tight mb-3">
            Para quem quer estudar de forma mais simples e visual
          </h2>
          <p className="text-base text-slate-500">
            Veja a experiência relatada por acadêmicos e estudantes que transformaram o modo de revisar escalas clínicas.
          </p>
        </div>

        {/* 3 Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-[#F5F8FC] rounded-2xl p-7 border border-slate-200/90 shadow-xs flex flex-col justify-between relative group hover:border-blue-300 transition-colors"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base text-slate-700 font-normal italic leading-relaxed mb-6">
                  {item.text}
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-200/70">
                <div className="flex items-center gap-3.5">
                  <div className="relative flex-shrink-0">
                    <img
                      src={testimonialPhotos[item.id]}
                      alt={item.author}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md ring-2 ring-[#0867D7]/20 group-hover:ring-[#0867D7]/40 transition-all"
                      loading="lazy"
                    />
                    <div 
                      className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full flex items-center justify-center shadow-xs"
                      title="Compra verificada"
                    >
                      <Check className="w-2.5 h-2.5 text-white stroke-[3]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-sm font-bold text-[#071E4B]">
                        {item.author}
                      </h4>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 fill-emerald-100" />
                    </div>
                    <span className="text-xs text-slate-500 block">
                      {item.role}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
