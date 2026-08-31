import React, { useState, useEffect } from 'react';
import { ArrowRight, Layers, Droplets, Zap, ShieldCheck, Check, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const BACKGROUND_IMAGES = [
  {
    url: "https://i.ibb.co/5xSDVZnj/IMG-20250819-154716.jpg",
    caption: "Engenharia de Pré-Impressão & Gerenciamento de Cores"
  },
  {
    url: "https://i.ibb.co/ccTQjcQ2/IMG-20250819-154549.jpg",
    caption: "Processamento & Lavagem Automática de Matrizes"
  },
  {
    url: "https://i.ibb.co/ZpzYQMKS/IMG-20250819-154538.jpg",
    caption: "Controle de Qualidade Espectral & Inspeção Micrométrica"
  },
  {
    url: "https://i.ibb.co/p6ZSJK8Y/IMG-20250819-154535.jpg",
    caption: "Produção Contínua 24h na Planta de Vinhedo-SP"
  },
  {
    url: "https://i.ibb.co/RpHpsjV7/IMG-20250819-154505.jpg",
    caption: "Planta Industrial Modelo PMG Flexo"
  },
  {
    url: "https://i.ibb.co/ymW6f30m/IMG-3453.jpg",
    caption: "Centro de Capacitação & Treinamento PMG Academy"
  },
  {
    url: "https://i.ibb.co/Ng2yS9Hq/IMG-3454.jpg",
    caption: "Espaço de Engenharia & Consultoria para Convertedores"
  },
  {
    url: "https://i.ibb.co/Kcy2mZt4/IMG-3452.jpg",
    caption: "Workshops Técnicos & Padronização de Processos"
  },
  {
    url: "https://i.ibb.co/DHQMP3Gq/IMG-3451.jpg",
    caption: "Estrutura Integrada de Pré-Impressão & Clicheria"
  },
  {
    url: "https://i.ibb.co/9HbLRNSN/IMG-3450.jpg",
    caption: "Retículas de Ponto Plano Everest® & Glaciar®"
  },
  {
    url: "https://i.ibb.co/vxCT7ktr/IMG-3449.jpg",
    caption: "Atendimento Técnico & Suporte ao Convertedor"
  },
  {
    url: "https://i.ibb.co/Z6zw367m/IMG-3446.jpg",
    caption: "Auditoria de Anilox, Curvas e Ganho de Ponto"
  },
  {
    url: "https://i.ibb.co/ksCFPTd0/IMG-3447.jpg",
    caption: "Precisão & Repetibilidade em Impressão"
  }
];

export const HeroGroup = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + BACKGROUND_IMAGES.length) % BACKGROUND_IMAGES.length);
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-pmg-navy text-white">
      {/* Dynamic Background Image Slides from sitepmg1 with crossfade */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={BACKGROUND_IMAGES[currentSlide].url}
              alt={BACKGROUND_IMAGES[currentSlide].caption}
              className="w-full h-full object-cover opacity-25"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>

        {/* Cinematic Multi-Layer Gradient Overlays for High Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-pmg-navy via-pmg-navy/90 to-pmg-navy/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-pmg-navy via-transparent to-pmg-navy/60" />

        {/* Atmospheric Glow Orbs */}
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-pmg-magenta/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 -right-20 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        {/* Main Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Direct, High-Impact Flexo Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-pmg-magenta animate-pulse"></span>
              <span className="text-white font-bold">PMG FLEXO</span>
              <span className="text-slate-400">| Clicheria & Pré-Impressão de Alta Definição</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Clichês de precisão para <span className="text-pmg-magenta">impressão flexográfica</span>.
            </h1>

            {/* Concise Purpose Statement */}
            <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed max-w-xl mb-8">
              Ajudamos convertedores de embalagens flexíveis e rótulos a imprimir com fidelidade fotográfica, menor consumo de tinta e zero desperdício no setup.
            </p>

            {/* CTA Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#cliches"
                className="bg-pmg-magenta hover:bg-pmg-magenta/90 text-white px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-pmg-magenta/20 flex items-center gap-2 group"
              >
                <span>Conhecer Tecnologias</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contato"
                className="bg-white/5 hover:bg-white/10 text-white border border-white/15 px-6 py-3.5 rounded-full font-semibold text-xs uppercase tracking-wider transition-all"
              >
                Falar com Especialista
              </a>
            </div>

            {/* Quick Summary Numbers */}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-10 max-w-lg divide-x divide-white/10">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-white whitespace-nowrap">24 Horas</div>
                <div className="text-xs text-slate-400 mt-0.5">Gravação Contínua*</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-pmg-magenta whitespace-nowrap">06</div>
                <div className="text-xs text-slate-400 mt-0.5">Gravadoras Digitais</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-white whitespace-nowrap">200 LPI</div>
                <div className="text-xs text-slate-400 mt-0.5">Retícula Everest®</div>
              </div>
            </div>
            <p className="text-[11px] text-slate-500 mt-3">*Gravação ininterrupta na planta de Vinhedo-SP.</p>
          </motion.div>

          {/* Right Column: Clean Cliché Highlights Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 sm:p-8 shadow-2xl space-y-4">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="text-xs font-bold uppercase tracking-widest text-slate-300">
                  Diferenciais PMG Flexo
                </div>
                <span className="text-[10px] text-pmg-magenta font-bold bg-pmg-magenta/10 px-2.5 py-1 rounded-full uppercase">
                  Engenharia Própria
                </span>
              </div>

              {/* Everest */}
              <a 
                href="#cliches" 
                className="block p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-pmg-magenta/40 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-pmg-magenta/15 text-pmg-magenta flex items-center justify-center shrink-0">
                      <Layers size={20} />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h2 className="text-sm font-bold text-white group-hover:text-pmg-magenta transition-colors">Retícula Everest® HD</h2>
                        <span className="text-[10px] text-pmg-magenta bg-pmg-magenta/10 px-1.5 py-0.5 rounded font-bold">200 LPI</span>
                      </div>
                      <p className="text-xs text-slate-400">Padrão rotogravura com transições a zero</p>
                    </div>
                  </div>
                  <ArrowRight size={14} className="text-white/30 group-hover:text-pmg-magenta group-hover:translate-x-0.5 transition-all" />
                </div>
              </a>

              {/* Glaciar */}
              <a 
                href="#cliches" 
                className="block p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-blue-400/40 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center shrink-0">
                      <Droplets size={20} />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h2 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">Glaciar® White</h2>
                        <span className="text-[10px] text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded font-bold">Opaco</span>
                      </div>
                      <p className="text-xs text-slate-400">Deposição uniforme sem micro-furos (pinholing)</p>
                    </div>
                  </div>
                  <ArrowRight size={14} className="text-white/30 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
                </div>
              </a>

              {/* Gravação Digital HD */}
              <a 
                href="#cliches" 
                className="block p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-cyan-400/40 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center shrink-0">
                      <Zap size={20} />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h2 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">Gravação Digital HD</h2>
                        <span className="text-[10px] text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded font-bold">Ponto Plano</span>
                      </div>
                      <p className="text-xs text-slate-400">Ponto plano digital e estabilidade em altas velocidades</p>
                    </div>
                  </div>
                  <ArrowRight size={14} className="text-white/30 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
                </div>
              </a>

              {/* GMG Proofs */}
              <a 
                href="#provas" 
                className="block p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-emerald-400/40 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h2 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">GMG Certified Proofs</h2>
                        <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded font-bold">ISO</span>
                      </div>
                      <p className="text-xs text-slate-400">Provas contratuais e mockups em substratos reais</p>
                    </div>
                  </div>
                  <ArrowRight size={14} className="text-white/30 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                </div>
              </a>

            </div>
          </motion.div>

        </div>

        {/* Bottom Slide Indicator & Controls from sitepmg1 */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-slate-300">
              <ImageIcon size={13} className="text-pmg-magenta" />
              <span className="font-medium text-[11px] text-white">
                {BACKGROUND_IMAGES[currentSlide].caption}
              </span>
            </div>
          </div>

          {/* Dots and Prev/Next */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              aria-label="Slide anterior"
              className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white flex items-center justify-center transition-colors"
            >
              <ChevronLeft size={14} />
            </button>

            <div className="flex items-center gap-1.5 px-2">
              {BACKGROUND_IMAGES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Ir para slide ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentSlide === idx 
                      ? 'w-6 bg-pmg-magenta' 
                      : 'w-1.5 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              aria-label="Próximo slide"
              className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white flex items-center justify-center transition-colors"
            >
              <ChevronRight size={14} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
