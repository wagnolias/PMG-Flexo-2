import React, { useState } from 'react';
import { GraduationCap, TrendingUp, Check, ArrowRight, X, ZoomIn, Calendar, Users, Award, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AcademyPhoto {
  url: string;
  title: string;
  category: 'workshops' | 'laboratorio' | 'certificacao';
  categoryLabel: string;
  date: string;
  description: string;
}

export const SummitAcademy = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<AcademyPhoto | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'workshops' | 'laboratorio' | 'certificacao'>('all');

  const academyPhotos: AcademyPhoto[] = [
    {
      url: "https://i.ibb.co/TBNRdKT4/IMG-20250507-090246.jpg",
      title: "Recepção & Abertura da Turma PMG Academy",
      category: "workshops",
      categoryLabel: "Abertura & Metodologia",
      date: "07/05/2025",
      description: "Boas-vindas aos convertedores e início do programa de imersão técnica em variáveis de impressão flexográfica."
    },
    {
      url: "https://i.ibb.co/v4pMxsv0/IMG-20250507-091306.jpg",
      title: "Apresentação Institucional & Metodologia",
      category: "workshops",
      categoryLabel: "Workshops Técnicos",
      date: "07/05/2025",
      description: "Alinhamento das diretrizes de qualidade, controle de ganho de ponto e engenharia de matrizes."
    },
    {
      url: "https://i.ibb.co/20RHyZsZ/IMG-20250507-092246.jpg",
      title: "Módulo Teórico: Variáveis de Chão de Fábrica",
      category: "workshops",
      categoryLabel: "Workshops Técnicos",
      date: "07/05/2025",
      description: "Discussão aprofundada sobre viscosidade, fitas dupla-face, lineatura de anilox e pressão de impressão."
    },
    {
      url: "https://i.ibb.co/Fqhs9cSR/IMG-20250507-092305.jpg",
      title: "Análise de Casos Reais de Convertedores",
      category: "workshops",
      categoryLabel: "Workshops Técnicos",
      date: "07/05/2025",
      description: "Estudo de casos de setup, redução de refugo e resolução de problemas de empastamento."
    },
    {
      url: "https://i.ibb.co/d0wKNc91/IMG-20250507-102509.jpg",
      title: "Tecnologia de Fotopolímeros & Ponto Plano",
      category: "laboratorio",
      categoryLabel: "Laboratório & Matrizes",
      date: "07/05/2025",
      description: "Compreensão da física do ponto plano (Flat Top Dot) e reprodução de micro-texturas na chapa."
    },
    {
      url: "https://i.ibb.co/DgvXwjJ7/IMG-20250507-110520.jpg",
      title: "Treinamento Prático: Setup Rápido & Curvas",
      category: "workshops",
      categoryLabel: "Workshops Técnicos",
      date: "07/05/2025",
      description: "Metodologia para estabilização de máquina e acerto de cores em menos de 15 minutos."
    },
    {
      url: "https://i.ibb.co/sdVYCY1L/IMG-20250507-112956.jpg",
      title: "Dinâmica Interativa em Sala de Aula",
      category: "workshops",
      categoryLabel: "Workshops Técnicos",
      date: "07/05/2025",
      description: "Troca de experiências entre impressores, supervisores de gráfica e engenheiros da PMG."
    },
    {
      url: "https://i.ibb.co/20snKDXw/IMG-20250507-164318.jpg",
      title: "Medição Espectral & Controle Delta E",
      category: "laboratorio",
      categoryLabel: "Laboratório & Medição",
      date: "07/05/2025",
      description: "Uso de espectrofotômetros para validação de tolerâncias colorimétricas e aprovação digital de provas."
    },
    {
      url: "https://i.ibb.co/qLy9Fcrg/IMG-20250508-090818.jpg",
      title: "Workshop Prático de Diagnóstico de Falhas",
      category: "laboratorio",
      categoryLabel: "Laboratório Prático",
      date: "08/05/2025",
      description: "Identificação e eliminação de marcas de engrenagem, halo de pressão, pinholing e ganho excessivo."
    },
    {
      url: "https://i.ibb.co/ZzF4W0Qj/IMG-20250508-094410.jpg",
      title: "Auditoria de Anilox & Transferência de Tinta",
      category: "laboratorio",
      categoryLabel: "Laboratório & Medição",
      date: "08/05/2025",
      description: "Inspeção microscópica de células de anilox e cálculo de volume BCM para alta densidade."
    },
    {
      url: "https://i.ibb.co/Cs3xRbJ7/IMG-20250508-120118.jpg",
      title: "Integração Técnica com convertedores",
      category: "certificacao",
      categoryLabel: "Integração & Equipes",
      date: "08/05/2025",
      description: "Aproximação direta entre a equipe de pré-impressão PMG e os operadores gráficos."
    },
    {
      url: "https://i.ibb.co/nN4hHsXw/IMG-20250508-121337.jpg",
      title: "Padronização de Curvas de Compensação",
      category: "laboratorio",
      categoryLabel: "Laboratório & Curvas",
      date: "08/05/2025",
      description: "Aplicação das curvas Everest® e Glaciar® para linearização precisa entre arte e chapa."
    },
    {
      url: "https://i.ibb.co/Q7cPF21t/IMG-20250508-121356.jpg",
      title: "Demonstração de Padrões de Cor",
      category: "laboratorio",
      categoryLabel: "Laboratório & Cor",
      date: "08/05/2025",
      description: "Utilização das cartelas Mínimo | Nominal | Máximo para aprovação instantânea em máquina."
    },
    {
      url: "https://i.ibb.co/LdpzrWZ9/IMG-20250508-155545.jpg",
      title: "Laboratório de Pré-Impressão Aplicada",
      category: "laboratorio",
      categoryLabel: "Laboratório Prático",
      date: "08/05/2025",
      description: "Análise de trapping, overprint e reticulagem em arquivos reais dos convertedores participantes."
    },
    {
      url: "https://i.ibb.co/0Rvz8zF8/IMG-20250508-174938.jpg",
      title: "Encerramento de Turma & Certificação Técnica",
      category: "certificacao",
      categoryLabel: "Certificação & Formatura",
      date: "08/05/2025",
      description: "Entrega de certificados e encerramento oficial do ciclo de treinamento técnico PMG Academy."
    }
  ];

  const filteredPhotos = activeFilter === 'all'
    ? academyPhotos
    : academyPhotos.filter(p => p.category === activeFilter);

  return (
    <section id="academy" className="py-24 bg-white text-pmg-dark border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pmg-magenta/10 text-pmg-magenta text-xs font-bold uppercase tracking-wider mb-4 border border-pmg-magenta/20">
            <GraduationCap size={15} />
            <span>Capacitação Técnica & Performance Industrial</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-pmg-navy tracking-tight mb-4">
            PMG Academy & <span className="text-pmg-magenta">Padronização</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
            Treinamento contínuo, vivência prática e engenharia de processos para elevar a produtividade, eliminar paradas de máquina e padronizar resultados.
          </p>
        </div>

        {/* 2 Main Columns: Academy & Standardization */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">

          {/* 1. ACADEMY */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between shadow-sm hover:border-pmg-magenta/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-pmg-navy text-white flex items-center justify-center font-bold shadow-md shadow-pmg-navy/20">
                  <GraduationCap size={24} />
                </div>
                <span className="text-[10px] font-bold text-pmg-magenta uppercase tracking-wider bg-pmg-magenta/10 px-3.5 py-1 rounded-full border border-pmg-magenta/20">
                  Treinamento Especializado
                </span>
              </div>

              <h3 className="text-2xl font-bold text-pmg-navy mb-1">PMG Academy</h3>
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-4">Capacitação Prática para Convertedores</p>

              <p className="text-slate-600 text-sm font-light leading-relaxed mb-6">
                Módulos ministrados nas instalações modelo da PMG ou <em>in-company</em>, alinhando operadores de impressora, supervisores e equipes de pré-impressão.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <Check size={16} className="text-pmg-magenta shrink-0 mt-0.5" />
                  <span>Conservação, manuseio e montagem correta de fotopolímeros Everest® e Glaciar®</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <Check size={16} className="text-pmg-magenta shrink-0 mt-0.5" />
                  <span>Redução do tempo de setup e padronização de variáveis de impressão</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <Check size={16} className="text-pmg-magenta shrink-0 mt-0.5" />
                  <span>Diagnóstico prático de falhas de impressão, anilox e controle de viscosidade</span>
                </div>
              </div>
            </div>

            <a
              href="#contato"
              className="bg-pmg-navy hover:bg-pmg-magenta text-white py-3.5 px-6 rounded-full font-bold text-xs uppercase tracking-wider text-center transition-all flex items-center justify-center gap-2 shadow-md"
            >
              <span>Agendar Treinamento para sua Equipe</span>
              <ArrowRight size={14} />
            </a>
          </div>

          {/* 2. PADRONIZAÇÃO DE PROCESSOS & CURVAS */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between shadow-sm hover:border-blue-300 transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-md shadow-blue-600/20">
                  <TrendingUp size={24} />
                </div>
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider bg-blue-100 px-3.5 py-1 rounded-full border border-blue-200">
                  Engenharia de Processos
                </span>
              </div>

              <h3 className="text-2xl font-bold text-pmg-navy mb-1">Padronização de Processos</h3>
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-4">Metodologia de Repetibilidade & Ganho de Ponto</p>

              <p className="text-slate-600 text-sm font-light leading-relaxed mb-6">
                Consultoria técnica e calibração de curvas de impressão para garantir que o resultado na impressora seja idêntico à prova contratual aprovada.
              </p>

              <div className="space-y-2.5 mb-8">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 flex items-center justify-between shadow-xs">
                  <span className="text-xs font-bold text-pmg-navy">1. Calibração de Anilox & Curvas</span>
                  <span className="text-[11px] text-slate-500 font-medium">Mapeamento de ganho de ponto</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 flex items-center justify-between shadow-xs">
                  <span className="text-xs font-bold text-pmg-navy">2. Controle de Tolerâncias (Delta E)</span>
                  <span className="text-[11px] text-slate-500 font-medium">Estabilidade colorimétrica</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 flex items-center justify-between shadow-xs">
                  <span className="text-xs font-bold text-pmg-navy">3. Repetibilidade em Tiragens</span>
                  <span className="text-[11px] text-slate-500 font-medium">Alta performance contínua</span>
                </div>
              </div>
            </div>

            <a
              href="#contato"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3.5 px-6 rounded-full font-bold text-xs uppercase tracking-wider text-center transition-all flex items-center justify-center gap-2 shadow-md"
            >
              <span>Solicitar Consultoria Técnica</span>
              <ArrowRight size={14} />
            </a>
          </div>

        </div>

        {/* PMG ACADEMY PHOTO GALLERY (15 IMAGES) */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-pmg-magenta uppercase tracking-wider mb-2">
                <Users size={14} />
                <span>Galeria de Treinamentos & Workshops</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-pmg-navy">
                Registros das Turmas PMG Academy
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm font-light mt-1">
                Acompanhe o dia a dia dos nossos workshops presenciais, aulas práticas em laboratório e certificação de convertedores.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  activeFilter === 'all'
                    ? 'bg-pmg-navy text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Todas ({academyPhotos.length})
              </button>
              <button
                onClick={() => setActiveFilter('workshops')}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  activeFilter === 'workshops'
                    ? 'bg-pmg-navy text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Workshops & Aulas
              </button>
              <button
                onClick={() => setActiveFilter('laboratorio')}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  activeFilter === 'laboratorio'
                    ? 'bg-pmg-navy text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Laboratório & Prática
              </button>
              <button
                onClick={() => setActiveFilter('certificacao')}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  activeFilter === 'certificacao'
                    ? 'bg-pmg-navy text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Certificação & Equipes
              </button>
            </div>
          </div>

          {/* 15 Photos Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            <AnimatePresence>
              {filteredPhotos.map((foto, idx) => (
                <motion.div
                  key={foto.url}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: idx * 0.03 }}
                  onClick={() => setSelectedPhoto(foto)}
                  className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-pmg-magenta/50 transition-all duration-300 cursor-pointer"
                >
                  <img
                    src={foto.url}
                    alt={foto.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

                  {/* Top Badge */}
                  <div className="absolute top-2.5 left-2.5">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-white bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/15">
                      {foto.categoryLabel}
                    </span>
                  </div>

                  {/* Hover Zoom Icon */}
                  <div className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn size={12} />
                  </div>

                  {/* Bottom Title */}
                  <div className="absolute bottom-0 inset-x-0 p-3 flex flex-col justify-end">
                    <span className="text-[11px] font-bold text-white leading-snug group-hover:text-pmg-magenta transition-colors line-clamp-2">
                      {foto.title}
                    </span>
                    <span className="text-[9px] text-slate-400 font-light mt-0.5 flex items-center gap-1">
                      <Calendar size={10} />
                      {foto.date}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Padronização de Cor Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-pmg-navy text-white flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10 shadow-xl">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pmg-magenta/20 text-pmg-magenta text-xs font-bold uppercase tracking-wider mb-3 border border-pmg-magenta/30">
              Padronização de Cor
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Padronização de cores sem parar a máquina
            </h3>
            <p className="text-slate-300 text-sm font-light leading-relaxed">
              Economize até 60h mensais de máquina parada gerando novos padrões. A cartela Mínimo | Nominal | Máximo assegura tolerâncias objetivas de aprovação em linha de produção.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="#contato"
              className="bg-pmg-magenta hover:bg-pmg-magenta/90 text-white px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2 shadow-lg shadow-pmg-magenta/20"
            >
              <span>Solicitar Padronização de Cor</span>
              <ArrowRight size={13} />
            </a>
          </div>
        </div>

      </div>

      {/* Lightbox Modal for Full View */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-slate-900 border border-white/20 rounded-3xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-pmg-magenta flex items-center justify-center transition-colors"
                aria-label="Fechar"
              >
                <X size={20} />
              </button>

              <div className="relative max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={selectedPhoto.url}
                  alt={selectedPhoto.title}
                  className="max-h-[70vh] w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 sm:p-8 bg-slate-900 border-t border-white/10 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-pmg-magenta uppercase tracking-widest">
                    {selectedPhoto.categoryLabel}
                  </span>
                  <span className="text-xs text-slate-400">• {selectedPhoto.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{selectedPhoto.title}</h3>
                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  {selectedPhoto.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
