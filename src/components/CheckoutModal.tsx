import React, { useState, useEffect } from 'react';
import { 
  X, 
  Lock, 
  CheckCircle2, 
  QrCode, 
  CreditCard, 
  ShieldCheck, 
  Sparkles, 
  Copy,
  Check,
  Gift
} from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: 'basic' | 'complete';
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ 
  isOpen, 
  onClose,
  initialPlan = 'complete'
}) => {
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'complete'>(initialPlan);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedPix, setCopiedPix] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Sync state if initialPlan prop changes when modal opens
  useEffect(() => {
    if (isOpen) {
      setSelectedPlan(initialPlan);
      setIsSuccess(false);
      setErrorMsg('');
    }
  }, [isOpen, initialPlan]);

  if (!isOpen) return null;

  const isBasic = selectedPlan === 'basic';
  const priceDisplay = isBasic ? 'R$ 10,00' : 'R$ 19,90';
  const planTitle = isBasic ? 'Plano Básico (Atlas 50 Escalas)' : 'Pacote Completo VIP (Atlas + 3 Bônus)';

  const handleCopyPix = () => {
    const pixCode = isBasic 
      ? '00020126580014br.gov.bcb.pix0136atlas-visual-10reais@pagamento.com.br520400005303986540510.005802BR5925ATLAS VISUAL ESCALAS6009SAO PAULO62070503***6304E8A2'
      : '00020126580014br.gov.bcb.pix0136atlas-visual-19reais@pagamento.com.br520400005303986540519.905802BR5925ATLAS VISUAL ESCALAS6009SAO PAULO62070503***6304E8A2';
    navigator.clipboard.writeText(pixCode);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg('Por favor, informe seu nome completo.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('Por favor, informe um e-mail válido para receber o acesso.');
      return;
    }
    setErrorMsg('');
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#071E4B] via-[#0867D7] to-[#7347E8] text-white p-5 sm:p-6 flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold uppercase tracking-wider mb-2 border border-emerald-400/30">
              <Lock className="w-3 h-3" />
              <span>Checkout Seguro Criptografado</span>
            </div>
            <h3 className="text-xl font-extrabold text-white">
              Atlas Visual — 50 Escalas Clínicas
            </h3>
            <p className="text-xs text-blue-100 mt-0.5">
              {isBasic ? 'Acesso ao guia com as 50 escalas' : 'Acesso aos 7 módulos + 3 bônus exclusivos inclusos'}
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {!isSuccess ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-5 text-slate-700">
            
            {/* Plan Selector Tabs */}
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1.5">
                Plano selecionado:
              </label>
              <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-2xl border border-slate-200">
                <button
                  type="button"
                  onClick={() => setSelectedPlan('basic')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer text-center ${
                    isBasic
                      ? 'bg-white text-[#071E4B] shadow-sm border border-slate-200'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <span className="block">Plano Básico</span>
                  <span className="text-sm font-black text-[#0867D7]">R$ 10,00</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedPlan('complete')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer text-center relative ${
                    !isBasic
                      ? 'bg-[#16C784] text-white shadow-sm'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <span className="block">Completo VIP (+ Bônus)</span>
                  <span className="text-sm font-black">R$ 19,90</span>
                </button>
              </div>
            </div>

            {/* Price & Summary Tag */}
            <div className="p-4 rounded-2xl bg-[#F5F8FC] border border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-500 block">Total a pagar ({planTitle}):</span>
                <span className="text-3xl font-black text-[#071E4B]">{priceDisplay}</span>
                <span className="text-[11px] text-slate-500 block">Pagamento único • Sem mensalidade</span>
              </div>
              <div className="text-right">
                <span className="text-[11px] text-emerald-700 bg-emerald-100 font-bold px-2.5 py-1 rounded-full">
                  {isBasic ? 'Economia de R$ 19,90' : 'Economia de R$ 77,10'}
                </span>
              </div>
            </div>

            {/* Error banner */}
            {errorMsg && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 font-medium">
                {errorMsg}
              </div>
            )}

            {/* Inputs */}
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Seu Nome Completo:
                </label>
                <input
                  type="text"
                  placeholder="Ex: Dra. Mariana Silva"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#0867D7] focus:ring-2 focus:ring-blue-100 text-sm outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Seu Melhor E-mail (para envio do material):
                </label>
                <input
                  type="email"
                  placeholder="Ex: mariana.enfermagem@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#0867D7] focus:ring-2 focus:ring-blue-100 text-sm outline-none transition-all"
                  required
                />
                <span className="text-[11px] text-slate-400 block mt-1">
                  O link de acesso ao PDF e aos materiais será enviado imediatamente para este e-mail.
                </span>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">
                Escolha a forma de pagamento:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('pix')}
                  className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-all ${
                    paymentMethod === 'pix'
                      ? 'border-[#16C784] bg-emerald-50/60 text-emerald-900 font-bold shadow-xs'
                      : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <QrCode className="w-5 h-5 text-[#16C784]" />
                  <span className="text-xs">PIX Instantâneo</span>
                  <span className="text-[10px] text-[#16C784] font-extrabold uppercase">Acesso Imediato</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-all ${
                    paymentMethod === 'card'
                      ? 'border-[#0867D7] bg-blue-50/60 text-blue-900 font-bold shadow-xs'
                      : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <CreditCard className="w-5 h-5 text-[#0867D7]" />
                  <span className="text-xs">Cartão de Crédito</span>
                  <span className="text-[10px] text-slate-500 font-semibold">
                    {isBasic ? 'À vista no cartão' : 'Em até 2x no cartão'}
                  </span>
                </button>
              </div>
            </div>

            {paymentMethod === 'pix' && (
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                <span>Chave PIX gerada automaticamente</span>
                <button
                  type="button"
                  onClick={handleCopyPix}
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-[#16C784] hover:underline cursor-pointer"
                >
                  {copiedPix ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPix ? 'Copiado!' : 'Copiar Chave'}</span>
                </button>
              </div>
            )}

            {/* CTA Button */}
            {isBasic ? (
              <a
                href="https://pay.wiapy.com/oLLKgNroKYxb"
                className="w-full block py-4 rounded-xl bg-[#16C784] hover:bg-[#13b175] text-white font-extrabold text-base shadow-lg hover:shadow-emerald-200 transition-all cursor-pointer text-center"
              >
                PAGAR COM PIX OU CARTÃO ({priceDisplay}) →
              </a>
            ) : (
              <a
                href="https://pay.wiapy.com/65-DgjBmarO"
                className="w-full block py-4 rounded-xl bg-[#16C784] hover:bg-[#13b175] text-white font-extrabold text-base shadow-lg hover:shadow-emerald-200 transition-all cursor-pointer text-center"
              >
                LIBERAR MEU ACESSO AGORA ({priceDisplay}) →
              </a>
            )}

            {/* Guarantee footer */}
            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#16C784]" />
              <span>Garantia de 7 dias com reembolso integral</span>
            </div>

          </form>
        ) : (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#16C784] flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-10 h-10 fill-[#16C784] text-white" />
            </div>

            <div>
              <h4 className="text-2xl font-black text-[#071E4B] mb-2">
                Parabéns, {name}!
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Seu pedido do <strong>{planTitle}</strong> foi registrado com sucesso!
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-left text-xs text-slate-700 space-y-2">
              <div className="flex items-center gap-2 font-bold text-emerald-900">
                <Sparkles className="w-4 h-4 text-[#16C784]" />
                <span>Instruções enviadas para: {email}</span>
              </div>
              <p>✓ Link de acesso para download do PDF com as 50 escalas liberado.</p>
              {!isBasic && (
                <>
                  <p>✓ Mapa Rápido “Qual Escala Utilizar?” anexado.</p>
                  <p>✓ 50 Casos Clínicos Comentados prontos para consulta.</p>
                  <p>✓ Coleção de Flashcards liberada no seu painel.</p>
                </>
              )}
            </div>

            <div className="pt-2">
              <button
                onClick={onClose}
                className="w-full py-3.5 rounded-xl bg-[#071E4B] hover:bg-[#0867D7] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
              >
                Voltar à Página Principal
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
