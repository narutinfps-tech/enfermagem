import React from 'react';
import { BookOpen, Shield, Mail, FileText } from 'lucide-react';

interface FooterProps {
  onOpenLegal: (type: 'terms' | 'privacy' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer className="bg-[#071E4B] text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Block */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0867D7] to-[#1ED5E7] p-0.5 shadow-md flex items-center justify-center">
              <div className="w-full h-full bg-[#071E4B] rounded-[10px] flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-[#37B7FF]" />
              </div>
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-white block leading-none">
                ATLAS VISUAL — ESCALAS E ESCORES CLÍNICOS
              </span>
              <span className="text-xs text-slate-400 block mt-1">
                50 Instrumentos Essenciais para Enfermagem e Saúde
              </span>
            </div>
          </div>

          {/* Legal / Contact Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium">
            <button
              onClick={() => onOpenLegal('terms')}
              className="text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>Termos de Uso</span>
            </button>
            <span className="text-slate-700">•</span>
            <button
              onClick={() => onOpenLegal('privacy')}
              className="text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Shield className="w-3.5 h-3.5 text-blue-400" />
              <span>Política de Privacidade</span>
            </button>
            <span className="text-slate-700">•</span>
            <button
              onClick={() => onOpenLegal('contact')}
              className="text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>Contato</span>
            </button>
          </div>

        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-8 text-center space-y-4">
          <p className="text-xs sm:text-sm text-slate-400 font-medium">
            © 2026 S Marca. Todos os direitos reservados.
          </p>

          <p className="text-[11px] sm:text-xs text-slate-400/80 max-w-3xl mx-auto leading-relaxed font-normal">
            Material destinado a fins educacionais. Não substitui avaliação clínica, protocolos institucionais ou orientação profissional.
          </p>
        </div>

      </div>
    </footer>
  );
};
