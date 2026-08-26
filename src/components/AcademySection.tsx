import React from 'react';
import { 
  Zap, 
  Target, 
  Settings, 
  ArrowRight,
  GraduationCap,
  Award,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';

export const AcademySection = () => {
  const academyImages = [
    "https://i.ibb.co/QFVtbHz1/IMG-20250507-090246.jpg",
    "https://i.ibb.co/Fkg2p09z/IMG-20250507-091302.jpg",
    "https://i.ibb.co/Kj43pFJz/IMG-20250507-164317.jpg",
    "https://i.ibb.co/zTVFxf6z/IMG-20250508-171925.jpg"
  ];

  return (
    <section id="academy" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-pmg-navy/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Hero Academy */}
        <div className="relative bg-pmg-navy rounded-[2.5rem] p-8 md:p-16 text-white flex flex-col lg:flex-row items-center gap-12 shadow-2xl mb-20 overflow-hidden">
          {/* Background Image Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
              alt="Futuristic Training Background"
              className="w-full h-full object-cover opacity-30"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-pmg-navy via-pmg-navy/80 to-transparent"></div>
          </div>

          <div className="lg:w-3/5 relative z-10">
            <div className="mb-6">
              <img 
                src="https://i.postimg.cc/7PJBLYRw/PMG_Academy_black.png" 
                alt="PMG Academy Logo" 
                className="h-14 w-auto object-contain brightness-0 invert"
                referrerPolicy="no-referrer"
              />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
              Capacitação técnica para que sua equipe alcance o topo da performance.
            </h2>
            <p className="text-base md:text-lg text-white/70 mb-6 leading-relaxed">
              Na PMG Flexo, acreditamos que clicheria não é apenas entrega de matrizes; é a construção de resultados previsíveis. A <strong className="text-white">PMG Academy</strong> integra o conhecimento especializado à rotina operacional da sua gráfica.
            </p>
            <p className="text-base md:text-lg text-white/70 mb-8 leading-relaxed">
              Para alcançar o <span className="text-pmg-magenta font-bold">Padrão Máximo de Qualidade</span>, o convertedor e o time da PMG Flexo precisam falar a mesma língua técnica.
            </p>
            <a 
              href="#contato"
              className="inline-flex items-center gap-2 bg-white text-pmg-navy hover:bg-pmg-silver px-7 py-3.5 rounded-full font-bold text-sm transition-all shadow-lg"
            >
              <span>Agendar Treinamento para sua Equipe</span>
              <ArrowRight size={16} />
            </a>
          </div>
          
          <div className="lg:w-2/5 grid grid-cols-1 gap-6 relative z-10 w-full">
            <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl backdrop-blur-sm">
              <h3 className="text-pmg-magenta font-bold text-lg mb-3 flex items-center gap-2">
                <Zap size={18} /> O que é a PMG Academy?
              </h3>
              <p className="text-white/70 leading-relaxed text-sm">
                Programa de capacitação contínua com módulos práticos e teóricos mensais, focado nos desafios reais do convertedor: ganho de ponto, acerto de cores, setup rápido e preservação de clichês.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-pmg-magenta p-5 rounded-2xl shadow-lg">
                <div className="text-2xl sm:text-3xl font-bold mb-1">100%</div>
                <div className="text-[11px] text-white/90 uppercase font-bold tracking-tight leading-tight">Alinhamento Técnico</div>
              </div>
              <div className="bg-blue-600 p-5 rounded-2xl shadow-lg">
                <div className="text-2xl sm:text-3xl font-bold mb-1">ISO</div>
                <div className="text-[11px] text-white/90 uppercase font-bold tracking-tight leading-tight">Padronização</div>
              </div>
            </div>
          </div>
        </div>

        {/* Objectives & Pillars */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-pmg-navy mb-8 flex items-center gap-3">
              <div className="w-10 h-10 bg-pmg-navy text-white rounded-xl flex items-center justify-center">
                <Target size={22} />
              </div>
              Nosso objetivo com você
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-pmg-magenta/10 text-pmg-magenta flex items-center justify-center shrink-0 font-bold text-sm">01</div>
                <div>
                  <h4 className="font-bold text-pmg-navy text-lg mb-1">Alinhamento Total</h4>
                  <p className="text-slate-600 text-sm">Garantir que sua equipe aproveite 100% do potencial da plataforma HRX, reduzindo setups e eliminando o improviso em máquina.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-pmg-magenta/10 text-pmg-magenta flex items-center justify-center shrink-0 font-bold text-sm">02</div>
                <div>
                  <h4 className="font-bold text-pmg-navy text-lg mb-1">Unificação de Processos</h4>
                  <p className="text-slate-600 text-sm">Quando o impressor e a pré-impressão dominam as mesmas curvas ISO, a cor deixa de ser sorte e passa a ser matemática.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-pmg-magenta/10 text-pmg-magenta flex items-center justify-center shrink-0 font-bold text-sm">03</div>
                <div>
                  <h4 className="font-bold text-pmg-navy text-lg mb-1">Crescimento Mútuo</h4>
                  <p className="text-slate-600 text-sm">Impulsionar convertedores através da educação aplicada, transformando a clicheria técnica em uma vantagem competitiva real.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-pmg-navy mb-8 flex items-center gap-3">
              <div className="w-10 h-10 bg-pmg-navy text-white rounded-xl flex items-center justify-center">
                <Settings size={22} />
              </div>
              Nossos Pilares de Treinamento
            </h3>
            <div className="grid grid-cols-1 gap-3.5">
              {[
                { title: "Pré-Impressão Avançada", desc: "Como preparar arquivos para garantir que boa parte do sucesso nasça antes da máquina." },
                { title: "Plataforma HRX & Reticulagem", desc: "Domínio das retículas de topo plano Everest® e K2® para degradês perfeitos e alta velocidade." },
                { title: "Gestão Digital com Sistema Kaiaki", desc: "Autonomia total para gerenciar pedidos, RIP remoto e quantitativo de tintas." },
                { title: "Manutenção & Conservação de Clichês", desc: "Técnicas de lavagem, secagem e armazenamento para prolongar a vida útil das chapas." }
              ].map((pilar, i) => (
                <div key={i} className="bg-slate-50 p-5 rounded-2xl border border-slate-100 hover:border-pmg-magenta/30 transition-colors">
                  <h4 className="font-bold text-pmg-navy text-sm sm:text-base mb-1">{pilar.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-500">{pilar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-pmg-navy mb-1">Vivência Prática & Workshops</h3>
            <p className="text-slate-500 text-sm">Registros de nossos treinamentos técnicos presenciais com clientes.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {academyImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <img 
                  src={img} 
                  alt={`Treinamento PMG Academy ${i + 1}`} 
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
