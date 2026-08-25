import React, { useState } from 'react';
import { 
  Layers, 
  Cpu, 
  GraduationCap, 
  ArrowRight, 
  Check, 
  Sliders, 
  ShieldCheck, 
  Zap, 
  Sparkles,
  PackageCheck,
  Tag,
  Box,
  Truck
} from 'lucide-react';
import { motion } from 'motion/react';

export const ProdutosSolucoes = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'cliches' | 'software' | 'academy'>('all');

  const products = [
    {
      id: 'cliche-banda-larga',
      category: 'cliches',
      tag: 'Mais Vendido',
      tagColor: 'bg-pmg-magenta text-white',
      icon: Layers,
      title: 'Clichês Everest para Banda Larga',
      subtitle: 'Embalagens Flexíveis, Filmes Técnicos e Pouches',
      description: 'Clichês fotopolímeros de alta resolução para impressão em PE, BOPP, PET e filmes metalizados. Retículas de topo plano que eliminam halos e garantem repetibilidade em tiragens milionárias.',
      specs: [
        'Espessuras padrão: 1.14mm, 1.70mm e 2.84mm',
        'Gravação digital HD com micro-texturização',
        'Compatível com tintas à base de solvente e UV',
        'Estabilidade em velocidades superiores a 350 m/min'
      ],
      idealFor: 'Alimentos, pet food, higiene e limpeza'
    },
    {
      id: 'cliche-banda-estreita',
      category: 'cliches',
      tag: 'Alta Resolução',
      tagColor: 'bg-blue-600 text-white',
      icon: Tag,
      title: 'Clichês Everest para Banda Estreita',
      subtitle: 'Rótulos Autoadesivos, Sleeves e Etiquetas Premium',
      description: 'Matrizes ultrafinas para gráficas de etiquetas e rótulos de alto valor agregado. Permite reproduzir microtextos, degrades a 0% suaves e sólidos densos na mesma chapa.',
      specs: [
        'Espessuras: 0.95mm, 1.14mm e 1.70mm',
        'Gama tonal completa de 0,5% a 99,5%',
        'Excelente transferência de tintas UV e LED-UV',
        'Redução drástica de ganho de ponto em máquina'
      ],
      idealFor: 'Cosméticos, bebidas, farmacêutica e químicos'
    },
    {
      id: 'cliche-papelao',
      category: 'cliches',
      tag: 'Industrial',
      tagColor: 'bg-amber-600 text-white',
      icon: Box,
      title: 'Clichês para Papelão Ondulado & Sacarias',
      subtitle: 'Corrugados, Pré-Impressão e Pós-Impressão',
      description: 'Chapas de alta resistência física e química, desenvolvidas para suportar substratos abrasivos sem perder a fidelidade de traço e cobertura de tinta.',
      specs: [
        'Espessuras: 2.84mm, 3.94mm, 4.70mm e 6.35mm',
        'Fotopolímero de alta resiliência e recuperação elástica',
        'Menor acúmulo de pó de papel durante o processo',
        'Montagem de matrizes em poliéster estabilizado'
      ],
      idealFor: 'Caixas de papelão, sacarias industriais e sacolas kraft'
    },
    {
      id: 'sistema-kaiaki-licenca',
      category: 'software',
      tag: 'Software Digital',
      tagColor: 'bg-indigo-600 text-white',
      icon: Cpu,
      title: 'Sistema Kaiaki - Gestão & RIP Remoto',
      subtitle: 'Plataforma SaaS para Convertedores Gráficos',
      description: 'Software exclusivo da PMG Flexo para controle digital de pedidos de clichês, orçamentação automática de consumo de tinta, visualização de trapping em 3D e aprovação remota.',
      specs: [
        'RIP em nuvem ultra-rápido com prova de cor digital',
        'Cálculo preciso de volume anilox e consumo de tinta',
        'Rastreabilidade total do status de produção das chapas',
        'Integração direta com o workflow da pré-impressão'
      ],
      idealFor: 'Gerentes de produção, convertedores e gráficas'
    },
    {
      id: 'pre-impressao-servico',
      category: 'software',
      tag: 'Engenharia Gráfica',
      tagColor: 'bg-purple-600 text-white',
      icon: Sliders,
      title: 'Engenharia de Pré-Impressão & Colorimetria',
      subtitle: 'Tratamento de Arquivos e Curvas ISO',
      description: 'Serviço técnico completo de adequação de arquivos de design para o processo flexográfico, eliminando incompatibilidades antes da gravação das chapas.',
      specs: [
        'Curvas de calibração personalizadas por impressora',
        'Geração de finger-print e caracterização de máquina',
        'Separação de cores com Gamut Expandido (ECG/OGV)',
        'Trapping automático inteligente e conferência minuciosa'
      ],
      idealFor: 'Equipes de desenvolvimento de embalagens e convertedores'
    },
    {
      id: 'pmg-academy-treinamento',
      category: 'academy',
      tag: 'Capacitação',
      tagColor: 'bg-emerald-600 text-white',
      icon: GraduationCap,
      title: 'PMG Academy - Treinamento In-Company',
      subtitle: 'Capacitação Técnica e Certificação Operacional',
      description: 'Programas de treinamento práticos e teóricos ministrados por especialistas da PMG Flexo diretamente na sua fábrica ou em nossos centros de excelência.',
      specs: [
        'Treinamentos mensais com certificação para operadores',
        'Módulos de acerto de máquina, anilox e dosagem de tinta',
        'Técnicas de preservação e limpeza correta de clichês',
        'Redução comprovada de tempo de setup e paradas não programadas'
      ],
      idealFor: 'Operadores de impressora, impressores-chefe e pré-impressores'
    }
  ];

  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(p => p.category === activeTab);

  return (
    <section id="produtos-servicos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-pmg-magenta/10 text-pmg-magenta text-xs font-bold uppercase tracking-widest mb-4">
            <PackageCheck size={14} />
            <span>O Que Nós Comercializamos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-pmg-navy mb-6">
            Produtos, Softwares e Serviços Técnicos
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Conheça tudo o que você pode contratar e comprar com a PMG Flexo para garantir máxima estabilidade e rentabilidade na sua impressão.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'all'
                ? 'bg-pmg-navy text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Todos os Produtos & Serviços ({products.length})
          </button>
          <button
            onClick={() => setActiveTab('cliches')}
            className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'cliches'
                ? 'bg-pmg-navy text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Clichês Fotopolímeros Everest (3)
          </button>
          <button
            onClick={() => setActiveTab('software')}
            className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'software'
                ? 'bg-pmg-navy text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Software & Pré-Impressão (2)
          </button>
          <button
            onClick={() => setActiveTab('academy')}
            className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'academy'
                ? 'bg-pmg-navy text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Academy & Treinamentos (1)
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProducts.map((product) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              key={product.id}
              className="rounded-3xl bg-slate-50 border border-slate-200/80 p-8 flex flex-col justify-between hover:shadow-xl hover:border-pmg-magenta/40 transition-all group"
            >
              <div>
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-pmg-navy text-white flex items-center justify-center group-hover:bg-pmg-magenta transition-colors shadow-sm">
                    <product.icon size={24} />
                  </div>
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${product.tagColor}`}>
                    {product.tag}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-pmg-navy mb-1 group-hover:text-pmg-magenta transition-colors">
                  {product.title}
                </h3>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-4">
                  {product.subtitle}
                </p>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Specs List */}
                <div className="space-y-2.5 pt-4 border-t border-slate-200 mb-6">
                  {product.specs.map((spec, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check size={14} className="text-pmg-magenta shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                {/* Ideal for Tag */}
                <div className="p-3 rounded-xl bg-white border border-slate-200/70 text-xs mb-6">
                  <span className="font-bold text-pmg-navy">Indicado para: </span>
                  <span className="text-slate-600">{product.idealFor}</span>
                </div>
              </div>

              {/* Action Button */}
              <a
                href="#contato"
                className="w-full bg-white hover:bg-pmg-magenta text-pmg-navy hover:text-white border border-slate-200 hover:border-pmg-magenta py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-center transition-all flex items-center justify-center gap-2 group-hover:shadow-md"
              >
                <span>Solicitar Orçamento deste Item</span>
                <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom Delivery / Logistics note */}
        <div className="p-6 rounded-2xl bg-pmg-navy text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-pmg-magenta/20 text-pmg-magenta flex items-center justify-center shrink-0">
              <Truck size={22} />
            </div>
            <div>
              <div className="font-bold text-sm text-white">Logística Ágil para Todo o Território Nacional</div>
              <div className="text-xs text-slate-300">Entregas rápidas a partir de nossas unidades em SP, SC e GO com rastreamento integrado.</div>
            </div>
          </div>
          <a 
            href="#contato" 
            className="text-xs font-bold text-pmg-magenta hover:text-white underline uppercase tracking-wider whitespace-nowrap"
          >
            Consultar Prazos de Entrega
          </a>
        </div>

      </div>
    </section>
  );
};
