import React from 'react';
import { Printer, Package, ArrowRight, Check, FileCheck } from 'lucide-react';

export const ProvasMockups = () => {
  return (
    <section id="provas" className="py-24 bg-pmg-navy text-white relative overflow-hidden border-b border-white/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-pmg-magenta uppercase tracking-wider mb-4">
            <FileCheck size={13} />
            <span>Colorimetria & Validação</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Provas certificadas & mockups reais
          </h2>
          <p className="text-slate-300 text-base font-light">
            Elimine aprovações demoradas e caras em máquina através de provas contratuais GMG e protótipos físicos fiéis ao produto final.
          </p>
        </div>

        {/* 2 Main Blocks */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">

          {/* 1. PROVAS CERTIFICADAS */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.03] border border-white/10 flex flex-col justify-between hover:border-pmg-magenta/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-pmg-magenta/20 text-pmg-magenta flex items-center justify-center font-bold">
                  <Printer size={22} />
                </div>
                <span className="text-[10px] font-bold text-pmg-magenta uppercase tracking-wider bg-pmg-magenta/10 px-3 py-1 rounded-full">
                  GMG Certified Proof
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Prova Contratual Certificada</h3>
              <p className="text-slate-400 text-xs uppercase tracking-wider mb-4">Padrão Internacional ISO • Epson P5000 / P7570</p>

              <p className="text-slate-300 text-sm font-light leading-relaxed mb-6">
                Grandes marcas aprovam a cor na prova digital certificada, garantindo previsibilidade total antes de qualquer metro de filme rodar.
              </p>

              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check size={14} className="text-pmg-magenta shrink-0" />
                  <span>Certificação de cor GMG folha a folha</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check size={14} className="text-pmg-magenta shrink-0" />
                  <span>GMG OpenColor para previsão de sobreposição de tintas</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check size={14} className="text-pmg-magenta shrink-0" />
                  <span>Perfis calibrados para a curva de máquina do convertedor</span>
                </div>
              </div>
            </div>

            <a
              href="#contato"
              className="bg-pmg-magenta hover:bg-pmg-magenta/90 text-white py-3 px-6 rounded-full font-bold text-xs uppercase tracking-wider text-center transition-all flex items-center justify-center gap-2"
            >
              <span>Solicitar Prova Certificada</span>
              <ArrowRight size={13} />
            </a>
          </div>

          {/* 2. MOCKUPS FÍSICOS */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.03] border border-white/10 flex flex-col justify-between hover:border-blue-400/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
                  <Package size={22} />
                </div>
                <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider bg-blue-500/10 px-3 py-1 rounded-full">
                  Epson S80600L
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Provas em Substratos & Mockups</h3>
              <p className="text-slate-400 text-xs uppercase tracking-wider mb-4">Validação Visual e Tátil Antecipada</p>

              <p className="text-slate-300 text-sm font-light leading-relaxed mb-6">
                Impressão direta no substrato final e montagem de mockups em escala real para validação comercial e testes de envase.
              </p>

              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check size={14} className="text-blue-400 shrink-0" />
                  <span>Impressão direta em BOPP, PET, PE e filmes metalizados</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check size={14} className="text-blue-400 shrink-0" />
                  <span>Montagem física de pouches, sleeves e rótulos</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check size={14} className="text-blue-400 shrink-0" />
                  <span>Ideal para pesquisas de gôndola e aprovação com brand owners</span>
                </div>
              </div>
            </div>

            <a
              href="#contato"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full font-bold text-xs uppercase tracking-wider text-center transition-all flex items-center justify-center gap-2"
            >
              <span>Solicitar Mockup Físico</span>
              <ArrowRight size={13} />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
