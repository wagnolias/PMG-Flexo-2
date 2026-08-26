import React from 'react';
import { 
  Layers, 
  ShieldCheck, 
  Settings, 
  Cpu, 
  BarChart3, 
  Zap 
} from 'lucide-react';
import { motion } from 'motion/react';

const FeatureCard = ({ icon: Icon, title, description, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
  >
    <div className="w-14 h-14 bg-pmg-navy rounded-xl flex items-center justify-center text-white mb-6 group-hover:bg-pmg-magenta transition-colors">
      <Icon size={28} />
    </div>
    <h3 className="text-xl font-bold mb-4 text-pmg-navy">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </motion.div>
);

export const Diferenciais = () => {
  const features = [
    {
      icon: Layers,
      title: "Precisão em retículas de topo plano",
      description: "Retículas de alta definição que garantem estabilidade de impressão, fidelidade cromática e melhor transferência de tinta."
    },
    {
      icon: ShieldCheck,
      title: "Ambientes climatizados e controlados",
      description: "Unidades com controle rigoroso de umidade e temperatura que preservam o fotopolímero e garantem chapas com máxima uniformidade."
    },
    {
      icon: Settings,
      title: "Otimização de ganho de ponto",
      description: "Ajustes colorimétricos e curvas de compensação ISO que reduzem distorções e garantem maior definição nos detalhes finos da arte."
    },
    {
      icon: Cpu,
      title: "Engenharia aplicada ao clichê",
      description: "Cada projeto passa por criteriosa análise técnica de finger-print para garantir eficiência máxima no processo de impressão."
    },
    {
      icon: BarChart3,
      title: "Controle de qualidade contínuo",
      description: "Monitoramento micrométrico com densitômetros e microscópios 3D para assegurar repetibilidade absoluta entre tiragens."
    },
    {
      icon: Zap,
      title: "Sustentabilidade Ambiental",
      description: "Menos desperdício de plástico e tinta em cada produção, seguindo as novas regras ambientais para embalagens."
    }
  ];

  return (
    <section id="diferenciais" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-xs sm:text-sm font-bold text-pmg-magenta uppercase tracking-[0.3em] mb-4">Diferenciais Técnicos</h2>
          <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-pmg-navy mb-6">Por que escolher a PMG Flexo?</p>
          <p className="text-lg sm:text-xl text-pmg-magenta font-bold italic">"Boa parte do sucesso da sua embalagem já se decide antes da máquina, na clicheria."</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <FeatureCard 
              key={i} 
              icon={f.icon} 
              title={f.title} 
              description={f.description} 
              delay={i * 0.1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};
