import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ_DATA } from '../data/scalesData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="duvidas" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0867D7] text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Perguntas Frequentes
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071E4B] tracking-tight mb-3">
            Ainda ficou com alguma dúvida?
          </h2>
          <p className="text-base text-slate-500">
            Confira as respostas para as principais dúvidas sobre o formato e o acesso ao material.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#0867D7]/40 bg-[#F5F8FC] shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#071E4B]">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                    isOpen ? 'bg-[#0867D7] text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 font-normal leading-relaxed border-t border-slate-200/50">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
