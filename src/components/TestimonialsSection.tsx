import React from 'react';
import { Star, MessageSquareQuote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/scalesData';

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
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0867D7] to-[#7347E8] text-white flex items-center justify-center font-bold text-sm shadow-xs">
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#071E4B]">
                      {item.author}
                    </h4>
                    <span className="text-xs text-slate-500 block">
                      {item.role}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ethical Transparency Note as requested */}
        <p className="text-center text-[11px] text-slate-400 max-w-xl mx-auto">
          * Estrutura de layout e relatos de experiência acadêmica organizados para visualização do padrão pedagógico do material.
        </p>

      </div>
    </section>
  );
};
