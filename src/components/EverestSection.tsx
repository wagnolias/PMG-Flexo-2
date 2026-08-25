import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const EverestSection = () => {
  return (
    <section id="everest" className="py-24 bg-pmg-navy text-white overflow-hidden relative">
      {/* Background Everest Image with Overlay */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-20 pointer-events-none">
        <img 
          src="https://i.ibb.co/mVkGppLh/lucid-origin-A-hyper-realistic-cinematic-interpretation-of-Mount-Everest-where-the-mountain-i-0.jpg" 
          alt="Mount Everest Peak" 
          className="w-full h-full object-cover grayscale brightness-150"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-pmg-navy"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-pmg-magenta text-white text-xs font-bold uppercase tracking-widest mb-6">
              TECNOLOGIA EXCLUSIVA
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8">Tecnologia <span className="text-pmg-magenta">everest</span></h2>
            <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed">
              A <span className="text-white font-bold">tecnologia everest</span> representa o mais alto padrão técnico da PMG Flexo no desenvolvimento e gravação de clichês flexográficos.
            </p>
            <p className="text-base sm:text-lg text-white/60 mb-8 leading-relaxed">
              Combinando controle rigoroso de processos, engenharia de pré-impressão e tecnologia avançada de gravação a laser digital, a Everest garante:
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Maior estabilidade de impressão em alta velocidade",
                "Fidelidade de cores absoluta com gama estendida",
                "Redução drástica de desperdícios de plástico e tintas",
                "Repetibilidade perfeita entre tiragens consecutivas"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-base sm:text-lg">
                  <CheckCircle2 className="text-pmg-magenta shrink-0" size={24} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contato"
                className="bg-pmg-magenta hover:bg-pmg-magenta/90 text-white px-7 py-3.5 rounded-full font-bold text-sm flex items-center gap-2 transition-all shadow-lg shadow-pmg-magenta/25"
              >
                <span>Solicitar Teste com Everest</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group">
              <img 
                src="https://i.ibb.co/sv3Cv2jG/lucid-origin-A-hyper-realistic-cinematic-interpretation-of-Mount-Everest-where-the-mountain-i-1.jpg" 
                alt="Mount Everest" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pmg-navy via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-10 left-10 right-10">
                <div className="text-3xl sm:text-4xl font-black text-white mb-2">EVEREST</div>
                <div className="text-pmg-magenta font-bold tracking-[0.2em] uppercase text-sm">O Topo da Flexografia</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
