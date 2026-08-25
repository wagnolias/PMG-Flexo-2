import React from 'react';
import { Database, Zap, Layers, Globe, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const KaiakiSection = () => {
  return (
    <section id="kaiaki" className="py-24 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Clean Copy */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-slate-900 border border-[#009FE3]/30 text-[#009FE3] text-xs font-semibold uppercase tracking-wider mb-5">
              <img 
                src="https://i.ibb.co/WvtGBSxN/Logo-Tizza-BRANCO-01-1024x461.png" 
                alt="Tizza Tecnologia" 
                className="h-4 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <span className="border-l border-white/20 pl-2 text-[10px] text-cyan-300">Software & Automação</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-pmg-navy tracking-tight mb-4">
              Sistema <span className="text-[#009FE3]">Kaiaki</span>: Gestão e RIP 100% Online
            </h2>

            <p className="text-slate-600 text-base font-light leading-relaxed mb-8">
              A plataforma que conecta sua equipe técnica diretamente à produção da <strong>PMG Flexo</strong>, com rastreabilidade total de pedidos, aprovação de provas em 3D e agilidade máxima de entrega.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="text-xs font-bold text-pmg-navy mb-0.5">Aprovação 3D</div>
                <div className="text-[11px] text-slate-500">Visualização de prova em tempo real</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="text-xs font-bold text-pmg-navy mb-0.5">Preflight & Compare</div>
                <div className="text-[11px] text-slate-500">Conferência visual de alterações</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="text-xs font-bold text-pmg-navy mb-0.5">Tracking de OS</div>
                <div className="text-[11px] text-slate-500">Status da gravação em tempo real</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="text-xs font-bold text-pmg-navy mb-0.5">Cloud Storage</div>
                <div className="text-[11px] text-slate-500">Acervo técnico seguro em nuvem</div>
              </div>
            </div>

            <a 
              href="#contato"
              className="bg-[#009FE3] hover:bg-[#008ecb] text-white px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2 shadow-lg shadow-[#009FE3]/25"
            >
              <span>Solicitar Acesso ao Kaiaki</span>
              <ArrowRight size={13} />
            </a>
          </div>
          
          {/* Right Column: Clean App Preview */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-6 shadow-xl">
              <img 
                src="https://i.ibb.co/RkSG3WGX/kaiaki1.png" 
                className="w-full h-auto rounded-2xl border border-slate-200 shadow-sm" 
                alt="Kaiaki Interface PMG" 
                referrerPolicy="no-referrer"
              />
              <div className="mt-4 flex items-center justify-between text-xs text-slate-500 px-2">
                <span>Dashboard de Pré-Impressão</span>
                <span className="font-semibold text-[#009FE3]">Acesso 100% Web</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
