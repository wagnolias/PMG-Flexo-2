import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Factory, 
  Layers, 
  Cpu, 
  Award, 
  Boxes, 
  Sparkles,
  MapPin
} from 'lucide-react';
import { motion } from 'motion/react';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-pmg-navy">
      {/* Background with Industrial Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070" 
          alt="Industrial Background Flexografia" 
          className="w-full h-full object-cover opacity-15"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-pmg-navy/90 via-pmg-navy to-pmg-navy"></div>
        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pmg-magenta/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        {/* Top Identification Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pmg-magenta/20 border border-pmg-magenta/40 text-pmg-magenta text-xs font-bold uppercase tracking-widest">
            <Sparkles size={14} className="animate-pulse" />
            <span>Clicheria de Alta Performance</span>
          </div>
          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-medium">
            <MapPin size={13} className="text-pmg-magenta" />
            <span>4 Unidades: Vinhedo/SP • Valinhos/SP • Blumenau/SC • Goiânia/GO</span>
          </div>
        </motion.div>

        {/* Main Headline & Value Statement */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              Clichês Flexográficos de <span className="text-pmg-magenta">Alta Precisão</span> & Engenharia Gráfica.
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
              Somos a <strong className="text-white font-semibold">PMG Flexo</strong>: fabricamos matrizes fotopolímeras na <strong className="text-white">plataforma HRX</strong>, com as tecnologias de topo plano <strong className="text-white">Everest® e K2®</strong>, fornecemos o software de gestão <strong className="text-blue-400">Sistema Kaiaki</strong> e capacitamos equipes convertedoras com a <strong className="text-pmg-magenta">PMG Academy</strong>.
            </p>

            {/* Direct 3-Bullet Quick Pitch: Quem Somos, O Que Fazemos, O Que Vendemos */}
            <div className="space-y-3 mb-8 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="flex items-start gap-3">
                <span className="px-2 py-0.5 rounded bg-white/10 text-pmg-magenta font-bold text-xs shrink-0 mt-0.5 uppercase tracking-wide">
                  Quem Somos
                </span>
                <p className="text-sm text-slate-200">
                  A maior autoridade técnica em clicheria do Brasil, com mais de 20 anos de experiência e 4 plantas fabris dedicadas.
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="px-2 py-0.5 rounded bg-white/10 text-blue-400 font-bold text-xs shrink-0 mt-0.5 uppercase tracking-wide">
                  O Que Fazemos
                </span>
                <p className="text-sm text-slate-200">
                  Gravação digital a laser HD, tratamento e separação de artes, calibração de ganho de ponto e engenharia de pré-impressão.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="px-2 py-0.5 rounded bg-white/10 text-emerald-400 font-bold text-xs shrink-0 mt-0.5 uppercase tracking-wide">
                  O Que Vendemos
                </span>
                <p className="text-sm text-slate-200">
                  Clichês para embalagens e rótulos, licenças do Sistema Kaiaki (RIP & Gestão) e Treinamentos Técnicos Certificados.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="#produtos-servicos" 
                id="hero-cta-products"
                className="bg-pmg-magenta hover:bg-pmg-magenta/90 text-white px-7 py-4 rounded-full font-bold text-sm sm:text-base flex items-center gap-2 transition-all shadow-xl shadow-pmg-magenta/25 hover:shadow-pmg-magenta/40 transform hover:-translate-y-0.5 group"
              >
                <span>Ver Produtos & Serviços</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contato" 
                id="hero-cta-quote"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm px-6 py-4 rounded-full font-bold text-sm sm:text-base transition-all hover:border-white/40"
              >
                Solicitar Consultoria Técnica
              </a>
            </div>
          </motion.div>

          {/* Right Visual Card - Products & Technology Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-white/10 to-white/5 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-pmg-magenta">PORTFÓLIO INDUSTRIAL</span>
                  <h3 className="text-xl font-bold text-white">Soluções PMG Flexo</h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-pmg-magenta/20 flex items-center justify-center text-pmg-magenta">
                  <Award size={22} />
                </div>
              </div>

              {/* 3 Quick Product Cards */}
              <div className="space-y-3.5">
                <a href="#everest" className="block p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-pmg-magenta/50 transition-all group">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-pmg-magenta/20 text-pmg-magenta flex items-center justify-center font-bold">
                        <Layers size={18} />
                      </div>
                      <span className="font-bold text-white text-base group-hover:text-pmg-magenta transition-colors">Clichês Fotopolímeros</span>
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-pmg-magenta bg-pmg-magenta/10 px-2 py-0.5 rounded">Everest</span>
                  </div>
                  <p className="text-xs text-slate-300 ml-10">Matrizes para banda larga, banda estreita, papelão ondulado e rótulos.</p>
                </a>

                <a href="#kaiaki" className="block p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/50 transition-all group">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
                        <Cpu size={18} />
                      </div>
                      <span className="font-bold text-white text-base group-hover:text-blue-400 transition-colors">Software & Gestão Digital</span>
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded">Kaiaki</span>
                  </div>
                  <p className="text-xs text-slate-300 ml-10">RIP remoto, cálculo de consumo de tinta e workflow 100% digital.</p>
                </a>

                <a href="#academy" className="block p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-400/50 transition-all group">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                        <Boxes size={18} />
                      </div>
                      <span className="font-bold text-white text-base group-hover:text-emerald-400 transition-colors">Treinamentos & Consultoria</span>
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">Academy</span>
                  </div>
                  <p className="text-xs text-slate-300 ml-10">Capacitação técnica in-company e certificações para impressores.</p>
                </a>
              </div>

              {/* Quick metrics footer */}
              <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-xl font-extrabold text-white">4</div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Unidades</div>
                </div>
                <div>
                  <div className="text-xl font-extrabold text-pmg-magenta">30+</div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Anos de Experiência</div>
                </div>
                <div>
                  <div className="text-xl font-extrabold text-blue-400">0,5%</div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Taxa de Erro</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
