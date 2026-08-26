import React from 'react';
import { Sparkles, Layers, Droplets, Zap, Check, Cpu } from 'lucide-react';
import { motion } from 'motion/react';

export const TecnologiasCliche = () => {
  return (
    <section id="cliches" className="py-24 bg-pmg-navy text-white relative overflow-hidden border-b border-white/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-pmg-magenta uppercase tracking-wider mb-4">
            <Sparkles size={13} />
            <span>Engenharia de Clichês</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Tecnologias patenteadas de alta definição
          </h2>
          <p className="text-slate-300 text-base font-light">
            Matrizes digitais desenvolvidas para elevar a qualidade de impressão, reduzir setup e garantir estabilidade em máquina.
          </p>
        </div>

        {/* 4 Core Cliché Technologies */}
        <div className="grid lg:grid-cols-4 gap-8 mb-16">

          {/* 0. HRX */}
          <div className="rounded-3xl bg-white/[0.03] border border-white/10 p-8 flex flex-col justify-between hover:border-amber-400/50 transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-black">
                  <Cpu size={22} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full">
                  Novo 2026
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">HRX</h3>
              <div className="text-xs font-semibold text-amber-400 mb-4">Plataforma Atual de Gravação</div>

              <p className="text-slate-300 text-sm font-light leading-relaxed mb-6">
                Com a descontinuação da chapa Kodak NX pelo mercado, a PMG avaliou as alternativas disponíveis e definiu o HRX como sua nova plataforma de gravação — compatível com CDI Esko® e as tecnologias Everest® e K2®.
              </p>

              <div className="space-y-2.5 mb-6">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check size={14} className="text-amber-400 shrink-0" />
                  <span>Filme térmico híbrido de fabricação japonesa</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check size={14} className="text-amber-400 shrink-0" />
                  <span>Compatível com CDI Esko® e retículas Everest®/K2®</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check size={14} className="text-amber-400 shrink-0" />
                  <span>Usada tanto pela PMG Flexo quanto pela PMG Narrow</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-center">
              <span className="text-xs font-semibold text-amber-300">Chapa Atual da PMG Flexo</span>
            </div>
          </div>

          {/* 1. EVEREST */}
          <div className="rounded-3xl bg-white/[0.03] border border-white/10 p-8 flex flex-col justify-between hover:border-pmg-magenta/50 transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-pmg-magenta/20 text-pmg-magenta flex items-center justify-center font-black">
                  <Layers size={22} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-pmg-magenta bg-pmg-magenta/10 px-3 py-1 rounded-full">
                  Até 200 LPI
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">Everest<span className="text-pmg-magenta">®</span></h3>
              <div className="text-xs font-semibold text-pmg-magenta mb-4">Retícula Híbrida de Alta Resolução</div>

              <p className="text-slate-300 text-sm font-light leading-relaxed mb-6">
                Permite a migração de embalagens da rotogravura para a flexografia com fidelidade fotográfica e degradês contínuos a zero.
              </p>

              <div className="space-y-2.5 mb-6">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check size={14} className="text-pmg-magenta shrink-0" />
                  <span>Degradês suaves a 0% sem degrau óptico</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check size={14} className="text-pmg-magenta shrink-0" />
                  <span>Resolução ultra-alta de até 80 LPC (200 LPI)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check size={14} className="text-pmg-magenta shrink-0" />
                  <span>Alta estabilidade em grandes tiragens</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-center">
              <span className="text-xs font-semibold text-slate-300">Padrão Rotogravura na Flexografia</span>
            </div>
          </div>

          {/* 2. GLACIAR */}
          <div className="rounded-3xl bg-white/[0.03] border border-white/10 p-8 flex flex-col justify-between hover:border-blue-400/50 transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-black">
                  <Droplets size={22} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
                  Branco Opaco
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">Glaciar<span className="text-blue-400">®</span></h3>
              <div className="text-xs font-semibold text-blue-400 mb-4">Solução Exclusiva para Tinta Branca</div>

              <p className="text-slate-300 text-sm font-light leading-relaxed mb-6">
                Desenvolvida para máxima deposição de tinta branca em filmes transparentes e metalizados, eliminando micro-falhas e pinholing.
              </p>

              <div className="space-y-2.5 mb-6">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check size={14} className="text-blue-400 shrink-0" />
                  <span>Alta opacidade com menor consumo de tinta</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check size={14} className="text-blue-400 shrink-0" />
                  <span>Eliminação total de manchas e pinholing</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check size={14} className="text-blue-400 shrink-0" />
                  <span>Aplicação uniforme em toda a largura do filme</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-center">
              <span className="text-xs font-semibold text-blue-300">Máxima Cobertura e Economia</span>
            </div>
          </div>

          {/* 3. PROVAS GMG OPENCOLOR & MOCKUPS */}
          <div className="rounded-3xl bg-white/[0.03] border border-white/10 p-8 flex flex-col justify-between hover:border-emerald-400/50 transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black">
                  <Zap size={22} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">
                  GMG OpenColor
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">Provas Contratuais GMG</h3>
              <div className="text-xs font-semibold text-emerald-400 mb-4">Colorimetria & Fidelidade Espectral</div>

              <p className="text-slate-300 text-sm font-light leading-relaxed mb-6">
                Simulação ultra-precisa da impressora flexográfica em substratos reais, garantindo aprovação de cor na primeira puxada de máquina.
              </p>

              <div className="space-y-2.5 mb-6">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check size={14} className="text-emerald-400 shrink-0" />
                  <span>Provas calibradas em BOPP (mate/brilhante), PE e metalizados</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check size={14} className="text-emerald-400 shrink-0" />
                  <span>Menor ganho de ponto e repetibilidade com Delta E controlado</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check size={14} className="text-emerald-400 shrink-0" />
                  <span>Setup de máquina até 40% mais rápido sem paradas de acerto</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-center">
              <span className="text-xs font-semibold text-emerald-300">Aprovação Segura de Cor</span>
            </div>
          </div>

        </div>

        {/* Technical Partners */}
        <div className="py-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-slate-400">
          <span className="font-semibold uppercase tracking-wider">Parceiros Globais Homologados:</span>
          <div className="flex flex-wrap items-center gap-6 font-bold text-slate-300">
            <span>DUPONT™</span>
            <span>MacDermid</span>
            <span>ESKO</span>
            <span>GMG Color</span>
            <span>HYBRID Software</span>
            <span>Flint Group</span>
          </div>
        </div>

      </div>
    </section>
  );
};
