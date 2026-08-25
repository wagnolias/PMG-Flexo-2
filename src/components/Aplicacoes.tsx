import React from 'react';
import { motion } from 'motion/react';
import { Package, Sparkles, Utensils, HeartPulse, Sparkle, Factory } from 'lucide-react';

export const Aplicacoes = () => {
  const segments = [
    { title: "Embalagens Flexíveis", icon: Package, desc: "Filmes técnicos, pouches stand-up e laminados de alta barreira." },
    { title: "Alimentos & Bebidas", icon: Utensils, desc: "Impressão em conformidade para o setor alimentício e frigoríficos." },
    { title: "Cosméticos & Beleza", icon: Sparkles, desc: "Degradês ultra suaves a 0%, micro-textos e vernizes especiais." },
    { title: "Pet Food", icon: HeartPulse, desc: "Sacos de alta resistência mecânica e cores vibrantes na gôndola." },
    { title: "Higiene & Limpeza", icon: Sparkle, desc: "Filmes termoencolhíveis e rótulos resistentes a agentes químicos." },
    { title: "Papelão Ondulado", icon: Factory, desc: "Caixas de embarque, displays e sacarias industriais com alta cobertura." }
  ];

  return (
    <section id="aplicacoes" className="py-24 bg-slate-900 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-xs sm:text-sm font-bold text-pmg-magenta uppercase tracking-[0.3em] mb-4">Aplicações Industriais</h2>
          <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">Versatilidade em Todos os Substratos</p>
          <p className="text-base sm:text-lg text-white/60">
            A PMG Flexo desenvolve matrizes para diferentes tipos de materiais e máquinas, garantindo estabilidade cromática em qualquer desafio produtivo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {segments.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-pmg-magenta/40 transition-all flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-pmg-magenta/20 text-pmg-magenta flex items-center justify-center shrink-0">
                <s.icon size={22} />
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">{s.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
