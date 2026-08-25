import React from 'react';
import { Factory, MapPin, Cpu, Clock, Server } from 'lucide-react';

export const OperacaoGroup = () => {
  const softwares = [
    { name: "HYBRID Software", role: "Engenharia de Arquivos" },
    { name: "PACKZ", role: "Editor Nativo PDF" },
    { name: "CLOUDFLOW", role: "Automação em Nuvem" },
    { name: "ESKO", role: "RIP & Reticulagem" },
    { name: "GMG Color", role: "Provas Certificadas" },
    { name: "GMG OpenColor", role: "Colorimetria Avançada" }
  ];

  return (
    <section id="operacao" className="py-24 bg-slate-900 text-white relative overflow-hidden border-b border-white/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-pmg-magenta uppercase tracking-wider mb-4">
            <Factory size={13} />
            <span>Infraestrutura Industrial</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Capacidade e tecnologia para atender todo o Brasil
          </h2>
          <p className="text-slate-300 text-base font-light">
            Parque produtivo moderno com tolerância zero a falhas e prontidão operacional contínua.
          </p>
        </div>

        {/* 3 Metrics Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          
          <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 text-center">
            <div className="w-12 h-12 rounded-2xl bg-pmg-magenta/20 text-pmg-magenta mx-auto flex items-center justify-center mb-4">
              <MapPin size={22} />
            </div>
            <div className="text-4xl font-black text-white mb-1">02</div>
            <div className="text-xs font-bold text-pmg-magenta uppercase tracking-wider mb-2">Plantas de Gravação</div>
            <p className="text-xs text-slate-300 font-semibold">Goiânia - GO | Vinhedo - SP</p>
            <p className="text-[11px] text-slate-400 mt-2 font-light">Agilidade logística para Centro-Oeste, Sudeste, Sul e Norte.</p>
          </div>

          <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 text-center">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 mx-auto flex items-center justify-center mb-4">
              <Cpu size={22} />
            </div>
            <div className="text-4xl font-black text-white mb-1">06</div>
            <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">Gravadoras Digitais</div>
            <p className="text-xs text-slate-300 font-semibold">CDI Esko Pixel+ | HD Flexo Digital</p>
            <p className="text-[11px] text-slate-400 mt-2 font-light">Alta capacidade produtiva e redundância garantida.</p>
          </div>

          <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 text-center">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-4">
              <Clock size={22} />
            </div>
            <div className="text-4xl font-black text-white mb-1">24h</div>
            <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">Operação Contínua</div>
            <p className="text-xs text-slate-300 font-semibold">Segunda a Sexta-feira*</p>
            <p className="text-[11px] text-slate-400 mt-2 font-light">*Gravação ininterrupta na planta de Vinhedo-SP.</p>
          </div>

        </div>

        {/* Galeria de Fotos Internas & Parque Produtivo */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold text-pmg-magenta uppercase tracking-widest block mb-2">Estrutura Real</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Nossas Instalações & Parque Gráfico</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md font-light">
              Ambiente controlado, laboratórios climatizados e equipamentos de última geração para processamento de fotopolímeros digitais.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-slate-800/50 aspect-[4/3]">
              <img 
                src="https://i.ibb.co/hRWC5VtR/IMG-2182.jpg" 
                alt="Parque Fabril e Linha de Gravação PMG Flexo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-end p-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-pmg-magenta mb-0.5">Parque Industrial</span>
                <span className="text-xs font-semibold text-white">Linha de Gravação & Exposição Digital</span>
              </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-slate-800/50 aspect-[4/3]">
              <img 
                src="https://i.ibb.co/cc3wF88M/grok-image-ecd51bac-f12c-4ebf-8332-1a392eaee1f1.jpg" 
                alt="Processamento e Montagem de Matrizes"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-end p-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 mb-0.5">Controle de Qualidade</span>
                <span className="text-xs font-semibold text-white">Laboratório Climatizado & Inspeção</span>
              </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-slate-800/50 aspect-[4/3]">
              <img 
                src="https://i.ibb.co/Z6R0zPXL/grok-image-812f96fd-968b-4a30-9d19-a8c91e44fc21.jpg" 
                alt="Gravadoras Digitais de Alta Resolução"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-end p-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 mb-0.5">Gravação Digital HD</span>
                <span className="text-xs font-semibold text-white">Ponto Plano & Alta Definição</span>
              </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-slate-800/50 aspect-[4/3]">
              <img 
                src="https://i.ibb.co/DPX2z1vg/Captura-de-tela-2025-09-30-164544.png" 
                alt="Engenharia de Pré-Impressão e Fluxo Digital"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-end p-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400 mb-0.5">Pré-Impressão Digital</span>
                <span className="text-xs font-semibold text-white">Engenharia de Arquivos & RIP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Softwares Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10">
          <div className="flex items-center gap-2 mb-6">
            <Server size={18} className="text-pmg-magenta" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300">Softwares Gráficos Homologados</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {softwares.map((sw, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                <div className="text-xs font-bold text-white mb-0.5">{sw.name}</div>
                <div className="text-[10px] text-slate-400">{sw.role}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
