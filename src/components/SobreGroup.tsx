import React from 'react';
import { Award, Cpu, ShieldCheck, TrendingUp, Calendar } from 'lucide-react';

export const SobreGroup = () => {
  const milestones = [
    { year: "2018", title: "Goiânia (GO)", desc: "Fundação com foco em flexografia de alta definição." },
    { year: "2019", title: "Vinhedo (SP)", desc: "Inauguração da unidade no principal polo gráfico nacional." },
    { year: "2020", title: "Esko Pixel+", desc: "Avanço com retículas digitais e automação." },
    { year: "2024", title: "VP Filmes & Nova Sede", desc: "Distribuição de filmes e nova planta modelo em Vinhedo." },
    { year: "2025", title: "Everest® HD 200 LPI", desc: "Pioneirismo em gravação digital de alta resolução com padrão rotogravura." },
    { year: "2026", title: "Expo & Label 2026", desc: "Presença de destaque na feira e consolidação do ecossistema PMG." }
  ];

  return (
    <section id="sobre" className="py-24 bg-slate-900 text-white relative overflow-hidden border-b border-white/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-pmg-magenta uppercase tracking-wider mb-4">
            Sobre a PMG Flexo
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Engenharia e tecnologia de matrizes para convertedores
          </h2>
          <p className="text-slate-300 text-base font-light">
            Evolução contínua guiada por precisão micrométrica, tolerância zero a falhas e compromisso inegociável com a sua produtividade em máquina.
          </p>
        </div>

        {/* 4 Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-pmg-magenta/20 text-pmg-magenta flex items-center justify-center mb-4">
              <Award size={20} />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Alta Precisão</h3>
            <p className="text-xs text-slate-400">Engenharia de precisão com matrizes de alta repetibilidade e fidelidade.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
              <Cpu size={20} />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Tecnologia de Ponta</h3>
            <p className="text-xs text-slate-400">Gravadoras Digitais HD, CDI Esko Pixel+, PACKZ e GMG OpenColor.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-4">
              <ShieldCheck size={20} />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Padronização</h3>
            <p className="text-xs text-slate-400">Laboratórios climatizados e tolerâncias micrométricas.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
              <TrendingUp size={20} />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Suporte Técnico</h3>
            <p className="text-xs text-slate-400">Engenharia de pré-impressão para reduzir setup e desperdício.</p>
          </div>
        </div>

        {/* Timeline Grid - Minimalist & Compact */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10">
          <div className="flex items-center gap-2 mb-6">
            <Calendar size={18} className="text-pmg-magenta" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300">Marcos de Trajetória</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {milestones.map((item, index) => (
              <div 
                key={index}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/5"
              >
                <div className="text-lg font-black text-pmg-magenta mb-1">
                  {item.year}
                </div>
                <div className="text-xs font-bold text-white mb-1">
                  {item.title}
                </div>
                <div className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
