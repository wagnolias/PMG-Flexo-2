import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  Droplets, 
  Eye, 
  FileCheck, 
  GraduationCap, 
  ArrowRight,
  Zap,
  Target,
  Calendar,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const QUEM_SOMOS_SLIDES = [
  {
    url: "https://i.ibb.co/ymW6f30m/IMG-3453.jpg",
    title: "Parque Fabril & Gravadoras Digitais",
    subtitle: "Clicheria Técnica de Alta Resolução"
  },
  {
    url: "https://i.ibb.co/Ng2yS9Hq/IMG-3454.jpg",
    title: "Laboratório Climatizado & Matrizes",
    subtitle: "Controle Rigoroso de Temperatura e Umidade"
  },
  {
    url: "https://i.ibb.co/Kcy2mZt4/IMG-3452.jpg",
    title: "Engenharia de Pré-Impressão & Colorimetria",
    subtitle: "Tratamento Técnico e Separação de Cores"
  },
  {
    url: "https://i.ibb.co/DHQMP3Gq/IMG-3451.jpg",
    title: "Processamento & Gravação 24 Horas",
    subtitle: "Capacidade de Produção Ininterrupta"
  },
  {
    url: "https://i.ibb.co/9HbLRNSN/IMG-3450.jpg",
    title: "Tecnologia Everest® & Ponto Plano",
    subtitle: "Matrizes Fotopolímeras para Altas Tiragens"
  }
];

export const QuemSomosOQueFazemos = () => {
  const [activeTab, setActiveTab] = useState<'quem-somos' | 'o-que-fazemos'>('quem-somos');
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % QUEM_SOMOS_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const nextQuemSomosSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % QUEM_SOMOS_SLIDES.length);
  };

  const prevQuemSomosSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + QUEM_SOMOS_SLIDES.length) % QUEM_SOMOS_SLIDES.length);
  };

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#quem-somos') {
        setActiveTab('quem-somos');
      } else if (hash === '#o-que-fazemos') {
        setActiveTab('o-que-fazemos');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const marcos = [
    { year: "2018", title: "Goiânia (GO)", desc: "Fundação com foco em flexografia de alta definição e atendimento técnico." },
    { year: "2019", title: "Vinhedo (SP)", desc: "Inauguração da planta matriz no principal polo de conversão do Brasil." },
    { year: "2020", title: "Esko Pixel+", desc: "Avanço tecnológico com retículas digitais e automação em pré-impressão." },
    { year: "2024", title: "Nova Sede & Expansão", desc: "Planta modelo com laboratórios climatizados e ampliação de capacidade." },
    { year: "2025", title: "Retícula Everest® 200 LPI", desc: "Pioneirismo em gravação digital de 200 LPI com ponto plano e padrão rotogravura." },
    { year: "2026", title: "Expo & Label 2026", desc: "Presença de destaque na feira e consolidação do ecossistema integrado com gravação 24h." }
  ];

  const unidades = [
    {
      cidade: "Vinhedo - SP",
      destaque: "Matriz & Operação 24h",
      desc: "Localizada no principal polo de conversão de embalagens do Brasil, com gravação ininterrupta e laboratório climatizado."
    },
    {
      cidade: "Goiânia - GO",
      destaque: "Planta Centro-Oeste",
      desc: "Atendimento ágil para as regiões Centro-Oeste, Norte e Nordeste com estrutura completa de pré-impressão e gravação."
    }
  ];

  const pilaresQuemSomos = [
    {
      icon: <Cpu className="text-pmg-magenta" size={22} />,
      title: "Tecnologia de Gravação de Ponta",
      desc: "6 Gravadoras digitais de última geração (CDI Esko Pixel+) operando com as retículas mais avançadas do mercado."
    },
    {
      icon: <ShieldCheck className="text-blue-400" size={22} />,
      title: "Padronização & Tolerância Zero",
      desc: "Laboratórios 100% climatizados com controle rigoroso de temperatura, umidade e parâmetros ópticos."
    },
    {
      icon: <Clock className="text-emerald-400" size={22} />,
      title: "Operação 24 Horas",
      desc: "Prontidão operacional ininterrupta para garantir prazos de entrega ultra-ágeis e atendimento a urgências da indústria gráfica."
    },
    {
      icon: <Target className="text-purple-400" size={22} />,
      title: "Engenharia Focada no Convertedor",
      desc: "Acompanhamento técnico que vai além do clichê: ajustamos curvas, anilox e perfis para zerar o desperdício em máquina."
    }
  ];

  const servicosOQueFazemos = [
    {
      id: "cliches-hd",
      icon: <Layers className="text-pmg-magenta" size={24} />,
      title: "Gravação de Matrizes Flexográficas (Clichês)",
      tag: "Tecnologia Própria",
      tagColor: "bg-pmg-magenta/10 text-pmg-magenta border-pmg-magenta/20",
      desc: "Produção de matrizes fotopolímeras digitais em alta resolução para banda larga e banda estreita com nossas tecnologias exclusivas:",
      bullets: [
        "Everest® HD: Retículas até 200 LPI com transições tonais suaves a 0%, igualando o padrão de rotogravura.",
        "Glaciar® White: Máxima opacidade no branco e eliminação total de microfuros (pinholing).",
        "Gravação Digital HD: Ponto plano de alta estabilidade para altas velocidades e máxima repetibilidade de impressão."
      ],
      link: "#cliches",
      linkText: "Ver Tecnologias de Clichês"
    },
    {
      id: "provas-mockups",
      icon: <Eye className="text-blue-500" size={24} />,
      title: "Provas Contratuais GMG & Mockups 3D",
      tag: "Fidelidade Certificada",
      tagColor: "bg-blue-50 text-blue-600 border-blue-200",
      desc: "Simulação de cor precisa antes de gravar o fotopolímero ou ligar a impressora:",
      bullets: [
        "Provas GMG OpenColor calibradas com a curva espectral real da impressora flexográfica.",
        "Mockups físicos em substratos reais (BOPP mate, brilhante, metalizado, PE, PET e rótulos).",
        "Visualizador 3D interativo para validação geométrica de embalagens e rótulos."
      ],
      link: "#provas",
      linkText: "Conhecer Provas e Mockups"
    },
    {
      id: "pre-impressao",
      icon: <FileCheck className="text-purple-500" size={24} />,
      title: "Engenharia de Pré-Impressão & Colorimetria",
      tag: "Arquivos Prontos para Rodar",
      tagColor: "bg-purple-50 text-purple-600 border-purple-200",
      desc: "Tratamento técnico profissional dos arquivos gráficos recebidos de agências e marcas:",
      bullets: [
        "Preflight avançado, trapping micrométrico e separação técnica de cores (ECG / Expanded Gamut).",
        "Padronização de mínimos, nominais e máximos de densidade e ganho de ponto.",
        "Softwares líderes homologados: HYBRID Software, PACKZ, CLOUDFLOW, ESKO e GMG."
      ],
      link: "#kaiaki",
      linkText: "Explorar Automação & Pré-Impressão"
    },
    {
      id: "academy-suporte",
      icon: <GraduationCap className="text-emerald-600" size={24} />,
      title: "Consultoria Técnica & PMG Academy",
      tag: "Capacitação & Suporte",
      tagColor: "bg-emerald-50 text-emerald-600 border-emerald-200",
      desc: "Transferência de conhecimento prático para convertedores, operadores e gestores:",
      bullets: [
        "Acompanhamento presencial em máquina nas primeiras tiragens de novos projetos.",
        "Auditoria de anilox, fitas dupla-face, tintas e calibração de curvas de ganho de ponto.",
        "Treinamentos técnicos PMG Academy para capacitação prática e padronização operacional."
      ],
      link: "#academy",
      linkText: "Saber Mais sobre o Academy"
    }
  ];

  return (
    <section id="apresentacao" className="py-20 bg-slate-900 text-white relative border-b border-white/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Navigation Tabs Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-pmg-magenta uppercase tracking-wider mb-6">
            <span>Apresentação Institucional</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 max-w-2xl">
            Conheça a essência da <span className="text-pmg-magenta">PMG Flexo</span>
          </h2>
          
          <p className="text-slate-300 text-sm sm:text-base font-light max-w-xl mb-8">
            Selecione uma das abas abaixo para entender nossa estrutura operacional e nossas soluções especializadas para a indústria de embalagens.
          </p>

          {/* Clean Dual Tabs Selector */}
          <div className="inline-flex p-1.5 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-md shadow-lg" role="tablist">
            <button
              id="tab-btn-quem-somos"
              onClick={() => setActiveTab('quem-somos')}
              role="tab"
              aria-selected={activeTab === 'quem-somos'}
              className={`flex items-center gap-2.5 px-6 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                activeTab === 'quem-somos'
                  ? 'bg-pmg-magenta text-white shadow-md shadow-pmg-magenta/30'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Building2 size={16} />
              <span>Quem Somos</span>
            </button>

            <button
              id="tab-btn-o-que-fazemos"
              onClick={() => setActiveTab('o-que-fazemos')}
              role="tab"
              aria-selected={activeTab === 'o-que-fazemos'}
              className={`flex items-center gap-2.5 px-6 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                activeTab === 'o-que-fazemos'
                  ? 'bg-pmg-magenta text-white shadow-md shadow-pmg-magenta/30'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Layers size={16} />
              <span>O Que Fazemos</span>
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          {activeTab === 'quem-somos' ? (
            <motion.div
              key="tab-quem-somos"
              id="quem-somos"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="scroll-mt-24"
            >
              {/* Introduction Box */}
              <div className="grid lg:grid-cols-12 gap-8 items-center bg-white/[0.03] border border-white/10 rounded-3xl p-8 sm:p-12 mb-10">
                <div className="lg:col-span-7">
                  <span className="text-xs font-bold text-pmg-magenta uppercase tracking-widest block mb-2">
                    Liderança & Especialização Flexográfica
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                    Clicheria técnica dedicada à máxima performance gráfica
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed mb-4">
                    A <strong>PMG Flexo</strong> é uma clicheria de alta tecnologia especializada no fornecimento de matrizes fotopolímeras digitais, pré-impressão e gerenciamento de cores para a indústria de <strong>embalagens flexíveis, rótulos e etiquetas</strong>.
                  </p>
                  <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                    Com estrutura de produção de última geração e equipe de engenharia altamente qualificada, transformamos arquivos complexos em matrizes perfeitas, reduzindo o tempo de setup em máquina, eliminando paradas não planejadas e assegurando padrão fotográfico consistente.
                  </p>
                </div>

                <div className="lg:col-span-5 flex flex-col gap-4">
                  {/* Interactive 5-Image Slideshow */}
                  <div className="rounded-2xl overflow-hidden border border-white/15 relative aspect-[16/10] sm:aspect-[16/9] shadow-xl bg-slate-950 group">
                    <AnimatePresence mode="wait">
                      <motion.img 
                        key={QUEM_SOMOS_SLIDES[currentSlideIndex].url}
                        src={QUEM_SOMOS_SLIDES[currentSlideIndex].url} 
                        alt={QUEM_SOMOS_SLIDES[currentSlideIndex].title}
                        initial={{ opacity: 0, scale: 1.04 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </AnimatePresence>

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-between p-3.5 pointer-events-none">
                      {/* Top badge */}
                      <div className="flex justify-between items-center">
                        <span className="text-[9px] font-bold uppercase tracking-wider text-white bg-pmg-magenta/80 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20">
                          Estrutura PMG Flexo
                        </span>
                        <span className="text-[10px] font-medium text-slate-300 bg-black/50 backdrop-blur-md px-2 py-0.5 rounded-full">
                          {currentSlideIndex + 1} / {QUEM_SOMOS_SLIDES.length}
                        </span>
                      </div>

                      {/* Bottom Caption and Dots */}
                      <div className="flex items-end justify-between gap-2">
                        <div>
                          <div className="text-xs font-bold text-white leading-tight">
                            {QUEM_SOMOS_SLIDES[currentSlideIndex].title}
                          </div>
                          <div className="text-[10px] text-slate-300 font-light">
                            {QUEM_SOMOS_SLIDES[currentSlideIndex].subtitle}
                          </div>
                        </div>

                        {/* Slide Dots */}
                        <div className="flex items-center gap-1.5 pointer-events-auto">
                          {QUEM_SOMOS_SLIDES.map((_, dotIdx) => (
                            <button
                              key={dotIdx}
                              onClick={() => setCurrentSlideIndex(dotIdx)}
                              aria-label={`Ir para foto ${dotIdx + 1}`}
                              className={`h-1.5 rounded-full transition-all duration-300 ${
                                currentSlideIndex === dotIdx 
                                  ? 'w-4 bg-pmg-magenta' 
                                  : 'w-1.5 bg-white/40 hover:bg-white/70'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Prev / Next Arrows */}
                    <button
                      onClick={prevQuemSomosSlide}
                      aria-label="Imagem anterior"
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-pmg-magenta text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 shadow-md backdrop-blur-sm"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={nextQuemSomosSlide}
                      aria-label="Próxima imagem"
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-pmg-magenta text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 shadow-md backdrop-blur-sm"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3">
                    {unidades.map((u, i) => (
                      <div key={i} className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
                        <div className="flex items-center gap-2 text-pmg-magenta font-bold text-xs mb-1">
                          <MapPin size={14} />
                          <span>{u.cidade}</span>
                        </div>
                        <div className="text-[11px] font-semibold text-white mb-1">{u.destaque}</div>
                        <p className="text-[11px] text-slate-400 leading-relaxed font-light">{u.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 4 Pillars of Quem Somos */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {pilaresQuemSomos.map((pilar, idx) => (
                  <div 
                    key={idx} 
                    className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                        {pilar.icon}
                      </div>
                      <h4 className="text-base font-bold text-white mb-2">{pilar.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed font-light">{pilar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Industrial Plant & Technology Photo Gallery */}
              <div className="mb-12">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-xs font-bold text-pmg-magenta uppercase tracking-wider block">Infraestrutura de Produção</span>
                    <h4 className="text-xl font-bold text-white">Laboratórios & Linhas de Produção</h4>
                  </div>
                  <span className="text-xs text-slate-400 font-light hidden sm:inline-block">Operação 24 Horas</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {[
                    { url: "https://i.ibb.co/DDRQf7Zk/IMG-20250819-154720.jpg", title: "Gravadoras Digitais CDI Esko Pixel+" },
                    { url: "https://i.ibb.co/9kzXzQwh/IMG-20250819-154650.jpg", title: "Laboratório Climatizado de Gravação" },
                    { url: "https://i.ibb.co/5xSDVZnj/IMG-20250819-154716.jpg", title: "Central de Pré-Impressão & RIP" },
                    { url: "https://i.ibb.co/ccTQjcQ2/IMG-20250819-154549.jpg", title: "Lavagem & Processamento Automático" },
                    { url: "https://i.ibb.co/ZpzYQMKS/IMG-20250819-154538.jpg", title: "Controle e Inspeção Óptica Digital" },
                    { url: "https://i.ibb.co/p6ZSJK8Y/IMG-20250819-154535.jpg", title: "Linhas de Acabamento & Expedição" },
                    { url: "https://i.ibb.co/RpHpsjV7/IMG-20250819-154505.jpg", title: "Área de Matrizes Fotopolímeras" },
                    { url: "https://i.ibb.co/DHQMP3Gq/IMG-3451.jpg", title: "Engenharia Técnica de Clicheria" }
                  ].map((item, idx) => (
                    <div 
                      key={idx} 
                      className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-white/5 border border-white/10 shadow-sm hover:border-pmg-magenta/50 transition-all"
                    >
                      <img
                        src={item.url}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity flex items-end p-3">
                        <span className="text-[11px] font-semibold text-white/90">{item.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trajectory Milestones */}
              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 mb-8">
                <div className="flex items-center gap-2 mb-6">
                  <Calendar size={18} className="text-pmg-magenta" />
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-300">Marcos de Evolução & Infraestrutura</span>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {marcos.map((item, index) => (
                    <div 
                      key={index}
                      className="p-4 rounded-xl bg-white/[0.02] border border-white/5"
                    >
                      <div className="text-base font-extrabold text-pmg-magenta mb-1">
                        {item.year}
                      </div>
                      <div className="text-xs font-bold text-white mb-1">
                        {item.title}
                      </div>
                      <p className="text-[12px] text-slate-400 leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Contact Link */}
              <div className="mt-10 text-center">
                <a 
                  href="#contato"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-pmg-magenta hover:text-white transition-colors"
                >
                  <span>Conhecer nossas unidades e equipe de atendimento</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="tab-o-que-fazemos"
              id="o-que-fazemos"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="scroll-mt-24"
            >
              {/* Grid of 4 Main Service Areas */}
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                {servicosOQueFazemos.map((servico) => (
                  <div 
                    key={servico.id}
                    className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-pmg-magenta/40 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          {servico.icon}
                        </div>
                        <span className={`text-[10px] font-bold uppercase px-3 py-1 rounded-full border ${servico.tagColor}`}>
                          {servico.tag}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pmg-magenta transition-colors">
                        {servico.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-4">
                        {servico.desc}
                      </p>

                      <ul className="space-y-2 mb-6">
                        {servico.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                            <CheckCircle2 size={14} className="text-pmg-magenta shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-white/10">
                      <a 
                        href={servico.link}
                        className="text-xs font-bold text-white group-hover:text-pmg-magenta uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                      >
                        <span>{servico.linkText}</span>
                        <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Callout */}
              <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-pmg-magenta/10 border border-pmg-magenta/20 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-base font-bold text-white mb-1">
                    Precisa de uma análise técnica da sua linha de impressão?
                  </h4>
                  <p className="text-xs text-slate-300 font-light">
                    Nossos engenheiros gráficos avaliam suas artes, anilox e substratos para indicar o melhor pacote tecnológico.
                  </p>
                </div>
                <a 
                  href="#contato"
                  className="bg-pmg-magenta hover:bg-pmg-magenta/90 text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap shrink-0 shadow-lg shadow-pmg-magenta/20"
                >
                  Solicitar Avaliação Técnica
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
