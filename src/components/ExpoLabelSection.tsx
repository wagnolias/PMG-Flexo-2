import React, { useState } from 'react';
import { Award, Users, Sparkles, MapPin, Calendar, Check, ExternalLink, X, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PhotoItem {
  url: string;
  title: string;
  category: string;
  description: string;
}

export const ExpoLabelSection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  const fotos: PhotoItem[] = [
    {
      url: "https://i.ibb.co/hFGrLB0Z/IMG-4480.jpg",
      title: "Stand Institucional PMG Group",
      category: "Ecossistema Integrado",
      description: "Apresentação conjunta da PMG Flexo, PMG Narrow, Tizza Tecnologia (Kaiaki) e VP Filmes na Expo & Label 2026."
    },
    {
      url: "https://i.ibb.co/Zys776T/IMG-4493.jpg",
      title: "Demonstração Técnica & Amostras",
      category: "Tecnologias Everest® & Glaciar®",
      description: "Exibição de matrizes fotopolímeras gravadas a 200 LPI e impressos com simulação de cor certificada GMG."
    },
    {
      url: "https://i.ibb.co/L2g4kf3/IMG-4499.jpg",
      title: "Espaço de Negócios & Atendimento",
      category: "Relacionamento com Convertedores",
      description: "Recepção de gráficas convertedoras, brand owners e parceiros estratégicos do setor de embalagens."
    },
    {
      url: "https://i.ibb.co/gLmzcv8V/IMG-4500.jpg",
      title: "Soluções Digitais & Sistema Kaiaki",
      category: "Software & Automação Web",
      description: "Apresentação da plataforma de RIP em nuvem, aprovação de arquivos online e gestão de fluxos de trabalho."
    },
    {
      url: "https://i.ibb.co/XrVQpT4q/IMG-4586.jpg",
      title: "Equipe Técnica & Comercial PMG",
      category: "Engenharia & Consultoria",
      description: "Especialistas da PMG à disposição para consultorias de ganho de ponto, anilox e padronização operacional."
    },
    {
      url: "https://i.ibb.co/S4nyFXrB/IMG-4588.jpg",
      title: "Inovação para Banda Larga & Estreita",
      category: "Excelência Flexográfica",
      description: "Conexão completa desde a distribuição de filmes técnicos (VP Filmes) até o fornecimento de matrizes de alto padrão."
    }
  ];

  return (
    <section id="expo-label" className="py-20 sm:py-28 bg-slate-900 text-white relative overflow-hidden border-t border-b border-white/10">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-pmg-magenta/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-pmg-magenta uppercase tracking-wider mb-4">
              <Calendar size={13} />
              <span>Eventos & Feiras • Expo & Label 2026</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              PMG Flexo na <span className="text-pmg-magenta">Expo & Label 2026</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-light max-w-2xl mt-3 leading-relaxed">
              Confira os registros da nossa participação no principal encontro do mercado flexográfico, rótulos e embalagens, conectando tecnologia de ponta e convertedores de todo o Brasil.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <div className="px-4 py-2 rounded-2xl bg-white/[0.04] border border-white/10 text-xs font-semibold text-slate-300 flex items-center gap-2">
              <Award size={16} className="text-pmg-magenta" />
              <span>Presença Nacional</span>
            </div>
            <div className="px-4 py-2 rounded-2xl bg-white/[0.04] border border-white/10 text-xs font-semibold text-slate-300 flex items-center gap-2">
              <Users size={16} className="text-blue-400" />
              <span>Ecossistema Integrado</span>
            </div>
          </div>
        </div>

        {/* 6 Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {fotos.map((foto, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onClick={() => setSelectedPhoto(foto)}
              className="group relative rounded-3xl overflow-hidden bg-slate-950 border border-white/10 hover:border-pmg-magenta/50 transition-all duration-300 cursor-pointer flex flex-col shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-800">
                <img
                  src={foto.url}
                  alt={foto.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Tag pill */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/15">
                    {foto.category}
                  </span>
                </div>

                {/* Hover zoom icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/15 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn size={14} />
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between bg-white/[0.02]">
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-pmg-magenta transition-colors mb-1.5">
                    {foto.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {foto.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                  <span>Feira Expo & Label 2026</span>
                  <span className="text-pmg-magenta group-hover:underline flex items-center gap-1 font-semibold">
                    Ampliar foto
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlights Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-pmg-magenta/20 via-slate-800/60 to-blue-900/20 border border-white/10 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-pmg-magenta text-white flex items-center justify-center font-bold shrink-0 shadow-lg shadow-pmg-magenta/30">
              <Sparkles size={22} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Inovação e proximidade constante com o mercado</h4>
              <p className="text-xs sm:text-sm text-slate-300 font-light">
                Leve a excelência apresentada na feira para a linha de produção da sua convertedora.
              </p>
            </div>
          </div>

          <a
            href="#contato"
            className="shrink-0 bg-white text-pmg-navy hover:bg-slate-100 px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-lg"
          >
            Falar com a Equipe Técnica
          </a>
        </div>

      </div>

      {/* Modal for full photo view */}
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

              <div className="p-6 sm:p-8 bg-slate-900 border-t border-white/10">
                <span className="text-xs font-bold text-pmg-magenta uppercase tracking-widest block mb-1">
                  {selectedPhoto.category}
                </span>
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
