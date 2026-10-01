import React from 'react';
import { X, Shield, FileText, Mail } from 'lucide-react';

interface LegalModalProps {
  type: 'terms' | 'privacy' | 'contact' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6 max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#071E4B] text-white p-5 sm:p-6 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2.5">
            {type === 'terms' && <FileText className="w-5 h-5 text-[#37B7FF]" />}
            {type === 'privacy' && <Shield className="w-5 h-5 text-[#16C784]" />}
            {type === 'contact' && <Mail className="w-5 h-5 text-[#1ED5E7]" />}
            <h3 className="text-lg sm:text-xl font-bold text-white">
              {type === 'terms' && 'Termos de Uso'}
              {type === 'privacy' && 'Política de Privacidade'}
              {type === 'contact' && 'Fale Conosco / Suporte'}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          {type === 'terms' && (
            <>
              <p className="font-semibold text-slate-800">
                1. Natureza do Produto Educacional
              </p>
              <p>
                O <strong>Atlas Visual — 50 Escalas e Escores Clínicos Essenciais</strong> é um material digital de síntese gráfica desenvolvido estritamente para propósitos de estudo, revisão acadêmica e consulta educacional para estudantes e profissionais de Enfermagem e Saúde.
              </p>
              <p className="font-semibold text-slate-800">
                2. Isenção de Substituição Clínica
              </p>
              <p>
                Este material NÃO substitui avaliação médica ou de enfermagem individualizada, protocolos assistenciais institucionais, validações oficiais de instrumentos validados ou juízo clínico profissional no cuidado de pacientes.
              </p>
              <p className="font-semibold text-slate-800">
                3. Propriedade Intelectual & Uso Pessoal
              </p>
              <p>
                A aquisição concede uma licença pessoal e intransferível de leitura e impressão para estudo próprio. É vedada a revenda, rateio, redistribuição comercial ou disponibilização pública dos arquivos digitais protegidos por direitos autorais.
              </p>
              <p className="font-semibold text-slate-800">
                4. Garantia Incondicional
              </p>
              <p>
                O comprador possui o prazo de 7 (sete) dias corridos a partir da confirmação do pagamento para exercer seu direito de arrependimento e solicitar reembolso integral sem burocracia.
              </p>
            </>
          )}

          {type === 'privacy' && (
            <>
              <p className="font-semibold text-slate-800">
                1. Coleta e Uso de Informações
              </p>
              <p>
                Coletamos apenas as informações estritamente necessárias para processamento da compra, emissão do comprovante e envio do acesso digital (nome completo e endereço de e-mail).
              </p>
              <p className="font-semibold text-slate-800">
                2. Proteção de Dados (LGPD)
              </p>
              <p>
                Seus dados são protegidos por criptografia SSL/TLS e nunca são compartilhados, alugados ou comercializados com terceiros para fins de marketing sem sua prévia autorização.
              </p>
              <p className="font-semibold text-slate-800">
                3. Segurança nos Pagamentos
              </p>
              <p>
                Todas as transações financeiras são processadas por operadoras certificadas de pagamento (PCI DSS compliant). Nenhum dado bancário confidencial fica retido em nossos servidores.
              </p>
            </>
          )}

          {type === 'contact' && (
            <>
              <p className="font-semibold text-slate-800">
                Canal Oficial de Atendimento ao Aluno
              </p>
              <p>
                Nossa equipe de suporte pedagógico e administrativo está à disposição para auxiliá-lo com liberação de acessos, downloads ou dúvidas gerais sobre o material.
              </p>
              <div className="p-4 rounded-xl bg-[#F5F8FC] border border-slate-200 space-y-2 mt-2">
                <p><strong>E-mail de Suporte:</strong> suporte@atlasvisualenfermagem.com.br</p>
                <p><strong>Horário de Atendimento:</strong> Segunda a Sexta das 08h às 19h (Horário de Brasília)</p>
                <p><strong>Tempo médio de resposta:</strong> Menos de 4 horas úteis</p>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 text-right flex-shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-semibold text-xs transition-colors cursor-pointer"
          >
            Fechar
          </button>
        </div>

      </div>
    </div>
  );
};
