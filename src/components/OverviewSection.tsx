import React from 'react';
import { 
  Building2, 
  Cpu, 
  ShoppingBag, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Layers, 
  Zap, 
  MapPin, 
  Users, 
  Target, 
  BarChart3,
  Flame,
  FileCheck
} from 'lucide-react';
import { motion } from 'motion/react';

export const OverviewSection = () => {
  return (
    <section id="quem-somos" className="py-20 bg-slate-900 text-white relative overflow-hidden border-b border-white/10">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pmg-magenta/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-pmg-magenta text-xs font-bold uppercase tracking-widest mb-4">
            <span>Visão Geral PMG Flexo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            Tudo o que você precisa saber sobre a nossa empresa
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Entenda de forma clara e direta quem é a PMG Flexo, como atuamos na cadeia gráfica e quais soluções completas entregamos para sua indústria.
          </p>
        </div>

        {/* 3 Main Pillars: Quem Somos, O Que Fazemos, O Que Vendemos */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          
          {/* 1. QUEM SOMOS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            id="bloco-quem-somos"
            className="rounded-3xl bg-white/[0.04] border border-white/10 p-8 flex flex-col justify-between hover:border-pmg-magenta/40 hover:bg-white/[0.06] transition-all relative group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-pmg-magenta/15 border border-pmg-magenta/30 flex items-center justify-center text-pmg-magenta group-hover:scale-110 transition-transform">
                  <Building2 size={28} />
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-pmg-magenta bg-pmg-magenta/10 px-3 py-1 rounded-full">
                  Pilar 01
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">Quem Somos</h3>
              <p className="text-sm font-semibold text-pmg-magenta uppercase tracking-wider mb-4">
                Clicheria líder em alta performance técnica
              </p>
              
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                A PMG Flexo é uma das principais empresas de pré-impressão e produção de clichês flexográficos do Brasil. Unimos engenharia avançada, processos industriais rigorosamente controlados e laboratórios climatizados para entregar a mais alta qualidade gráfica.
              </p>

              <div className="space-y-3 pt-4 border-t border-white/10 mb-6">
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <MapPin size={16} className="text-pmg-magenta shrink-0 mt-0.5" />
                  <span><strong>4 Plantas Industriais:</strong> Vinhedo (SP), Valinhos (SP), Blumenau (SC) e Goiânia (GO).</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <Users size={16} className="text-pmg-magenta shrink-0 mt-0.5" />
                  <span><strong>Corpo Técnico:</strong> Engenheiros gráficos e especialistas em flexografia de alta definição.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <ShieldCheck size={16} className="text-pmg-magenta shrink-0 mt-0.5" />
                  <span><strong>Qualidade Assegurada:</strong> Padrão Máximo de Qualidade com certificações e rastreabilidade.</span>
                </div>
              </div>
            </div>

            <a 
              href="#diferenciais" 
              className="inline-flex items-center gap-2 text-xs font-bold text-pmg-magenta hover:text-white transition-colors group-hover:translate-x-1"
            >
              <span>Ver nossos diferenciais</span>
              <ArrowRight size={14} />
            </a>
          </motion.div>

          {/* 2. O QUE FAZEMOS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            id="o-que-fazemos"
            className="rounded-3xl bg-white/[0.04] border border-white/10 p-8 flex flex-col justify-between hover:border-blue-400/40 hover:bg-white/[0.06] transition-all relative group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <Cpu size={28} />
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">
                  Pilar 02
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">O Que Fazemos</h3>
              <p className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4">
                Engenharia de matrizes & pré-impressão
              </p>
              
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Transformamos arquivos digitais em matrizes perfeitas para impressão. Cuidamos de todo o processo técnico antes da máquina rodar, assegurando que 70% do sucesso da embalagem seja garantido ainda na fase de clicheria.
              </p>

              <div className="space-y-3 pt-4 border-t border-white/10 mb-6">
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <Flame size={16} className="text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Gravação Laser Digital:</strong> Clichês HD com tecnologia de micro-texturização e topo plano.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <FileCheck size={16} className="text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Tratamento de Artes:</strong> Separação de cores, trapping, calibração de ganho de ponto e curvas ISO.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <Target size={16} className="text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Padronização de Setup:</strong> Otimização da impressora do convertedor para redução de paradas e perdas de substrato.</span>
                </div>
              </div>
            </div>

            <a 
              href="#everest" 
              className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-white transition-colors group-hover:translate-x-1"
            >
              <span>Conhecer Tecnologia Everest</span>
              <ArrowRight size={14} />
            </a>
          </motion.div>

          {/* 3. O QUE VENDEMOS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            id="bloco-o-que-vendemos"
            className="rounded-3xl bg-white/[0.04] border border-white/10 p-8 flex flex-col justify-between hover:border-emerald-400/40 hover:bg-white/[0.06] transition-all relative group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <ShoppingBag size={28} />
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full">
                  Pilar 03
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">O Que Vendemos</h3>
              <p className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-4">
                Produtos, Softwares & Treinamentos
              </p>
              
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Comercializamos soluções integradas que aumentam a produtividade da gráfica convertedora e eliminam custos desnecessários com retrabalho e consumo de insumos.
              </p>

              <div className="space-y-3 pt-4 border-t border-white/10 mb-6">
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <Layers size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Clichês Fotopolímeros:</strong> Matrizes para banda larga, banda estreita, papelão ondulado e rótulos adesivos.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <Zap size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Sistema Kaiaki:</strong> Plataforma SaaS para RIP remoto, cálculo de consumo de tinta e fluxo de pedidos.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <BarChart3 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>PMG Academy & Consultoria:</strong> Capacitação técnica de operadores e padronização in-company.</span>
                </div>
              </div>
            </div>

            <a 
              href="#produtos-servicos" 
              className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-white transition-colors group-hover:translate-x-1"
            >
              <span>Ver catálogo de produtos</span>
              <ArrowRight size={14} />
            </a>
          </motion.div>

        </div>

        {/* Quick summary banner with CTA */}
        <div className="rounded-2xl bg-gradient-to-r from-pmg-navy via-slate-800 to-pmg-navy border border-white/10 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-pmg-magenta flex items-center justify-center text-white shrink-0">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Precisa de clichês de alta definição para seu convertedor?</h4>
              <p className="text-slate-400 text-sm">Nossos especialistas técnicos analisam seu projeto e configuram a matriz ideal para sua impressora.</p>
            </div>
          </div>
          <a
            href="#contato"
            className="bg-pmg-magenta hover:bg-pmg-magenta/90 text-white px-6 py-3.5 rounded-full font-bold text-sm whitespace-nowrap shadow-lg shadow-pmg-magenta/25 transition-all transform hover:scale-105 active:scale-95"
          >
            Falar com um Consultor Técnico
          </a>
        </div>
      </div>
    </section>
  );
};
