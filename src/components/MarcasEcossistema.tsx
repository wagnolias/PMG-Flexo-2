import React from 'react';
import {
  Layers,
  Tag,
  Cpu,
  Film,
  ArrowRight,
  Check,
  MapPin,
  Sparkles,
  ExternalLink
} from 'lucide-react';

const PmgNarrowLogo = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 147.59 40.5" className={className}>
    <defs>
      <style>{`
        .pmg-narrow-mono, .pmg-narrow-mono-fr { fill: #ffffff; }
        .pmg-narrow-mono-fr { fill-rule: evenodd; }
        .pmg-narrow-accent { fill: #00afef; stroke: #00afef; stroke-linecap: round; stroke-linejoin: round; stroke-width: .22px; }
      `}</style>
    </defs>
    <g>
      <path className="pmg-narrow-mono" d="M100.64,31.97s-.04-.03-.07-.01c-.33.21-.7.32-1.1.32-.56,0-1.04-.2-1.44-.6-.4-.4-.6-.89-.59-1.45,0-.52.19-.98.55-1.36.36-.39.8-.6,1.32-.64.46-.04.88.07,1.25.32.03.02.05.01.07-.02l.34-.49s.01-.05-.01-.07c-.51-.34-1.08-.48-1.7-.43-.68.05-1.25.33-1.73.81-.48.49-.74,1.07-.78,1.74-.04.79.2,1.46.75,2.03.25.27.55.48.88.62.35.15.71.23,1.09.23.54,0,1.04-.15,1.49-.44.03-.02.03-.04.02-.07l-.33-.49h0ZM102.91,32.27v-4.71s-.02-.05-.05-.05h-.6s-.05.01-.05.05v5.35s.02.05.05.05h3.03s.05-.02.05-.05v-.6s-.02-.05-.05-.05h-2.38ZM106.69,27.52s-.05.01-.05.05v5.35s.02.05.05.05h.6s.05-.02.05-.05v-5.35s-.02-.05-.05-.05h-.6ZM112.68,31.97s-.04-.03-.07-.01c-.33.21-.7.32-1.1.32-.56,0-1.04-.2-1.44-.6-.4-.4-.6-.89-.59-1.45,0-.52.19-.98.55-1.36.36-.39.8-.6,1.32-.64.46-.04.87.07,1.25.32.03.02.05.01.07-.02l.34-.49s.01-.05-.01-.07c-.51-.34-1.08-.48-1.7-.43-.68.05-1.25.33-1.73.81-.48.49-.74,1.07-.78,1.74-.04.79.2,1.46.75,2.03.25.27.55.48.88.62.35.15.71.23,1.09.23.54,0,1.04-.15,1.49-.44.03-.02.03-.04.01-.07l-.33-.49h0ZM117.54,27.52s-.05.01-.05.05v2.32h-2.54v-2.32s-.02-.05-.05-.05h-.6s-.05.02-.05.05v5.35s.02.05.05.05h.6s.05-.02.05-.05v-2.33h2.54v2.33s.02.05.05.05h.6s.05-.02.05-.05v-5.35s-.02-.05-.05-.05h-.6ZM120.04,27.52s-.05.01-.05.05v5.35s.02.05.05.05h3.54s.05-.02.05-.05v-.59s-.02-.05-.05-.05h-2.89v-1.68h2.09s.05-.02.05-.05v-.59s-.02-.05-.05-.05h-2.09v-1.69h2.89s.05-.02.05-.05v-.59s-.02-.05-.05-.05h-3.54ZM125.69,29.91v-1.7h1.36c.24,0,.44.08.6.25.17.17.25.37.25.6s-.08.43-.25.6c-.17.17-.37.25-.6.25,0,0-1.36,0-1.36,0ZM127.38,30.56c.34-.08.62-.25.85-.52.23-.27.35-.58.36-.94.01-.44-.13-.81-.44-1.12-.3-.31-.67-.47-1.11-.47h-2s-.05.01-.05.05v5.34s.02.05.05.05h.59s.05-.02.05-.05v-2.3h.94,0s1.28,2.33,1.28,2.33c0,.02.02.03.04.03h.68s.03,0,.04-.02c.01-.02.01-.03,0-.05l-1.28-2.33h0ZM130.14,27.53s-.05.01-.05.05v5.35s.02.05.05.05h.6s.05-.02.05-.05v-5.35s-.02-.05-.05-.05h-.6ZM133.85,30.18l.69-1.65.68,1.65h-1.37ZM134.27,27.51s-.04.01-.05.03l-2.23,5.36s0,.03,0,.04c0,.02.02.02.04.02h.61s.04-.01.04-.03l.87-2.1h1.93l.87,2.1s.02.03.05.03h.61s.03,0,.04-.02c.01-.01.01-.03,0-.04l-2.23-5.36s-.02-.03-.05-.03h-.53,0Z" />
      <path className="pmg-narrow-accent" d="M92.91,12.73c-.07,0-.1.03-.1.1v7.68l-5.8-7.74s-.05-.04-.08-.04h-.5c-.06,0-.1.03-.1.1v10.62c0,.06.03.1.1.1h1.12c.07,0,.1-.03.1-.1v-7.63l5.76,7.69s.04.04.08.04h.54c.07,0,.1-.03.1-.1v-10.62c0-.07-.03-.1-.1-.1,0,0-1.12,0-1.12,0ZM99.39,18.01l1.37-3.29,1.36,3.29h-2.73ZM100.23,12.72s-.07.02-.09.06l-4.42,10.64s-.01.06,0,.09c.02.03.05.05.08.05h1.21s.08-.02.09-.06l1.73-4.17h3.83l1.73,4.17s.04.06.09.06h1.21s.06-.02.08-.05c.02-.03.02-.06,0-.09l-4.42-10.64s-.05-.06-.09-.06h-1.05ZM108.76,17.49v-3.38h2.7c.47,0,.87.16,1.2.49.33.33.5.74.5,1.2s-.16.86-.5,1.19c-.33.33-.73.5-1.2.5h-2.7ZM112.13,18.77c.67-.16,1.23-.5,1.68-1.03.45-.54.69-1.16.71-1.86.03-.87-.26-1.61-.87-2.23-.6-.62-1.34-.93-2.2-.93h-3.97c-.06,0-.1.03-.1.1v10.6c0,.06.03.1.1.1h1.18c.06,0,.1-.03.1-.1v-4.57h1.87,0s2.54,4.63,2.54,4.63c.01.04.04.05.08.05h1.34s.07-.02.08-.05c.02-.03.02-.07,0-.1l-2.54-4.63h0ZM118.06,17.49v-3.38h2.69c.47,0,.87.16,1.2.49.33.33.5.74.5,1.2s-.16.86-.5,1.19c-.33.33-.73.5-1.2.5,0,0-2.69,0-2.69,0ZM121.43,18.77c.67-.16,1.23-.5,1.68-1.03.45-.54.69-1.16.72-1.86.03-.87-.26-1.61-.87-2.23-.6-.62-1.34-.93-2.21-.93h-3.97c-.06,0-.1.03-.1.1v10.6c0,.06.03.1.1.1h1.18c.06,0,.1-.03.1-.1v-4.57h1.87,0s2.53,4.63,2.53,4.63c.02.04.04.05.08.05h1.35s.07-.02.08-.05c.02-.03.02-.07,0-.1l-2.54-4.63h0ZM130.61,22.17c-1.11,0-2.06-.39-2.85-1.18-.78-.79-1.18-1.74-1.18-2.85s.39-2.06,1.18-2.84c.79-.79,1.73-1.18,2.85-1.18s2.06.39,2.84,1.18c.79.79,1.18,1.74,1.18,2.84s-.39,2.06-1.18,2.85c-.79.78-1.74,1.18-2.84,1.18ZM130.61,12.74c-1.49,0-2.77.53-3.82,1.59s-1.58,2.33-1.58,3.82.53,2.77,1.58,3.82c1.06,1.06,2.33,1.59,3.82,1.59s2.76-.53,3.82-1.59c1.06-1.06,1.59-2.33,1.59-3.82s-.53-2.76-1.59-3.82c-1.06-1.06-2.33-1.59-3.82-1.59ZM146.28,12.75c-.06,0-.1.03-.1.09l-.57,8.31-2.49-3.87s-.05-.05-.08-.05h-.44s-.06.02-.08.05l-2.51,3.88-.57-8.32c0-.06-.04-.09-.1-.09h-1.1c-.07,0-.1.03-.1.11l.73,10.61c0,.06.04.09.1.09h.99s.06-.02.09-.05l2.78-4.31,2.78,4.31s.05.05.08.05h.97c.06,0,.09-.03.1-.09l.72-10.61c0-.07-.03-.11-.1-.11h-1.1Z" />
      <path className="pmg-narrow-mono" d="M9.9,24.47c-1.66,0-3.1-.58-4.3-1.75-1.2-1.18-1.81-2.59-1.84-4.26v-.26c.03-1.68.64-3.11,1.84-4.28,1.2-1.18,2.64-1.76,4.3-1.76s3.15.6,4.37,1.8c1.2,1.21,1.8,2.67,1.8,4.37s-.6,3.14-1.8,4.34c-1.21,1.2-2.67,1.8-4.37,1.8h0ZM10.32,8.47c-2.46-.1-4.64.61-6.56,2.15v-1.82c0-.19-.1-.28-.28-.28H.29C.1,8.52,0,8.62,0,8.8v30.85c0,.2.1.29.29.29h3.18c.19,0,.28-.09.28-.29v-13.65c1.8,1.45,3.85,2.17,6.14,2.17,2.84,0,5.23-1.03,7.18-3.09.92-.98,1.62-2.1,2.08-3.36.49-1.3.67-2.66.58-4.06-.16-2.49-1.15-4.62-2.97-6.39-1.81-1.77-3.96-2.7-6.45-2.81h0ZM50.64,21.75v-3.41c-.01-.45-.02-.87-.02-1.24v-.64c0-.29-.01-.58-.05-.85-.07-.57-.2-1.12-.39-1.66-.38-1.12-.98-2.1-1.8-2.94-.82-.83-1.79-1.46-2.9-1.89-.54-.19-1.1-.33-1.67-.42h-.19c-.09-.01-.16-.02-.23-.04h-.24c-.08-.02-.14-.02-.17-.02h-.4l-.42.02c-1.06.08-2.07.37-3,.85-.83.44-1.57,1.01-2.19,1.71-.14.16-.28.33-.42.51-.2-.26-.41-.51-.64-.73-.82-.83-1.78-1.46-2.89-1.89-.55-.19-1.1-.33-1.67-.42h-.19c-.09-.01-.16-.02-.23-.04h-.24c-.09-.02-.14-.02-.17-.02h-.4l-.42.02c-1.06.08-2.07.37-3,.85-.31.16-.64.37-.99.61v-1.47c0-.2-.1-.29-.28-.29h-3.18c-.19,0-.29.1-.29.29v19.24c0,.19.1.28.29.28h3.18c.19,0,.28-.1.28-.28v-11.12l.02-.27c0-.07,0-.17.02-.31v-.17l.02-.07c.01-.1.04-.23.07-.4.08-.34.19-.66.35-.98.2-.41.46-.78.76-1.1.81-.86,1.8-1.33,2.99-1.38l.22-.02h.09l.17.02h.22s.05.01.11.01l.11.02c.32.05.63.13.92.25.61.23,1.14.59,1.58,1.07.45.47.78,1.01.98,1.63.1.31.17.61.2.92l.02.46v.64c0,.37,0,.79-.02,1.24v1.21c0,.99,0,1.72-.02,2.2,0,1.81,0,3.33-.02,4.54v1.56c0,.19.1.29.29.29h3.14c.19,0,.28-.1.28-.29v-1.56c-.01-1.21-.02-2.73-.02-4.54,0-.28,0-.62-.02-1.03v-1.12c0-.94,0-1.74-.02-2.39l.04-.7v-.31l.02-.11v-.07l.02-.07c.01-.1.04-.23.07-.4.08-.34.19-.66.35-.98.2-.41.46-.78.76-1.1.81-.86,1.8-1.33,2.99-1.38h.1l.11-.02h.09l.17.02h.22s.05.01.11.01l.11.02c.32.05.63.13.92.25.61.23,1.14.59,1.58,1.07.45.47.78,1.01.98,1.63.11.31.17.61.2.92l.02.46v.64c-.01.37-.02.79-.02,1.24v1.21c-.01.99-.02,1.72-.02,2.2l-.02,4.54v1.56c0,.19.1.29.28.29h3.14c.19,0,.28-.1.28-.29v-1.56c-.01-1.21-.03-2.73-.04-4.54h0ZM62.17,24.5c-1.71,0-3.17-.6-4.37-1.8-1.21-1.22-1.82-2.67-1.82-4.37s.61-3.15,1.82-4.37c1.2-1.2,2.66-1.8,4.37-1.8s3.15.6,4.37,1.8c1.2,1.21,1.8,2.67,1.8,4.37s-.61,3.15-1.8,4.37c-1.21,1.2-2.67,1.8-4.37,1.8ZM68.45,10.71c-1.92-1.6-4.12-2.35-6.61-2.26-2.52.09-4.7,1.02-6.54,2.79-1.83,1.79-2.82,3.93-2.98,6.43-.19,2.86.7,5.34,2.65,7.42.92.98,1.99,1.74,3.21,2.28,1.27.55,2.61.83,3.99.83,2.36,0,4.45-.76,6.28-2.26v1.8c0,1.39-.4,2.65-1.18,3.78-.82,1.15-1.88,1.91-3.18,2.31-1.34.41-2.67.37-3.99-.14-1.27-.48-2.28-1.3-3-2.46-.11-.16-.24-.19-.4-.08l-2.72,1.55c-.16.1-.2.24-.09.4.89,1.45,2.08,2.6,3.57,3.45,1.51.83,3.12,1.25,4.83,1.25,2.72,0,5.05-.97,6.98-2.9,1.93-1.93,2.89-4.26,2.89-6.97V8.69c0-.19-.09-.28-.28-.28h-3.14c-.19,0-.28.1-.28.28v2.02h0Z" />
      <path className="pmg-narrow-mono-fr" d="M74.72,2.95h.27c.32,0,.58-.11.58-.36,0-.23-.17-.38-.53-.38-.15,0-.26.01-.32.03v.71h0ZM74.71,4.36h-.58V1.87c.23-.05.55-.08.96-.08.47,0,.68.08.87.18.14.11.24.3.24.55,0,.27-.21.49-.52.58v.03c.24.09.38.27.46.61.08.38.12.53.18.62h-.62c-.08-.09-.12-.32-.2-.61-.05-.27-.2-.4-.52-.4h-.27v1h0ZM73.17,3.05c0,1.11.82,1.99,1.95,1.99s1.9-.88,1.9-1.98-.8-2.01-1.91-2.01-1.93.9-1.93,1.99ZM77.66,3.05c0,1.41-1.11,2.52-2.55,2.52s-2.57-1.11-2.57-2.52,1.14-2.49,2.57-2.49,2.55,1.11,2.55,2.49Z" />
      <polygon className="pmg-narrow-mono-fr" points="81.64 30.12 81.64 40.5 79.93 40.5 79.93 30.12 81.64 30.12" />
      <polygon className="pmg-narrow-mono-fr" points="81.64 26.52 81.64 28.39 79.93 28.39 79.93 26.52 81.64 26.52" />
      <polygon className="pmg-narrow-mono-fr" points="81.64 22.92 81.64 24.79 79.93 24.79 79.93 22.92 81.64 22.92" />
      <polygon className="pmg-narrow-mono-fr" points="81.64 19.32 81.64 21.19 79.93 21.19 79.93 19.32 81.64 19.32" />
      <polygon className="pmg-narrow-mono-fr" points="81.64 15.72 81.64 17.59 79.93 17.59 79.93 15.72 81.64 15.72" />
      <polygon className="pmg-narrow-mono-fr" points="81.64 12.12 81.64 13.99 79.93 13.99 79.93 12.12 81.64 12.12" />
      <polygon className="pmg-narrow-mono-fr" points="79.93 0 81.64 0 81.64 10.39 79.93 10.39 79.93 0" />
    </g>
  </svg>
);

export const MarcasEcossistema = () => {
  return (
    <section id="ecossistema" className="py-24 bg-pmg-navy text-white border-b border-white/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-pmg-magenta uppercase tracking-wider mb-4">
            <Sparkles size={13} />
            <span>Ecossistema Integrado</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            A força do ecossistema a serviço da sua impressão
          </h2>
          <p className="text-slate-300 text-base font-light">
            A <strong>PMG Flexo</strong> atua em banda larga, em sinergia com frentes especializadas em banda estreita, software em nuvem e distribuição de filmes.
          </p>
        </div>

        {/* 4 Brands Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">

          {/* 1. PMG FLEXO (DESTAQUE PRINCIPAL) */}
          <div id="pmg-flexo" className="rounded-3xl bg-slate-950 text-white border-2 border-pmg-magenta/40 p-8 sm:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pmg-magenta/10 rounded-full blur-3xl pointer-events-none"></div>

            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="h-11 flex items-center">
                  <img
                    src="https://i.ibb.co/NgZcFb4B/Logo-PMG-FLEXO-BRANCO-E-VERMELHO.png"
                    alt="Logo PMG Flexo"
                    className="h-10 w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-pmg-magenta bg-pmg-magenta/20 px-3 py-1 rounded-full border border-pmg-magenta/30">
                  Operação Principal
                </span>
              </div>

              <div className="text-xs font-bold text-pmg-magenta uppercase tracking-wider mb-2">Banda Larga & Embalagens Flexíveis</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">PMG Flexo Clicheria</h3>

              <p className="text-slate-300 text-sm font-light leading-relaxed mb-6">
                Especializada em clichês em fotopolímero de alta definição. Laboratórios climatizados, tecnologias Everest® e Glaciar®, e operação 24 horas na planta de Vinhedo-SP.
              </p>

              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check size={14} className="text-pmg-magenta shrink-0" />
                  <span>Gravação digital HD até 200 LPI com retícula Everest®</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check size={14} className="text-pmg-magenta shrink-0" />
                  <span>2 Plantas industriais com 6 gravadoras digitais de alta resolução (CDI Esko Pixel+)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check size={14} className="text-pmg-magenta shrink-0" />
                  <span>Provas contratuais GMG OpenColor e mockups em escala real</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <a href="#cliches" className="text-xs font-bold text-white hover:text-pmg-magenta uppercase tracking-wider flex items-center gap-1.5 transition-colors">
                <span>Explorar Tecnologias</span>
                <ArrowRight size={13} />
              </a>
              <span className="text-xs text-slate-400 font-medium">Vinhedo / Goiânia</span>
            </div>
          </div>

          {/* 2. PMG NARROW */}
          <div id="pmg-narrow" className="rounded-3xl bg-white/[0.04] border border-white/10 p-8 sm:p-10 flex flex-col justify-between scroll-mt-24 hover:border-blue-400/40 transition-all">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="h-11 flex items-center">
                  <PmgNarrowLogo className="h-10 w-auto" />
                </div>
                <span className="text-[10px] font-bold text-blue-400 bg-blue-500/15 px-3 py-1 rounded-full uppercase border border-blue-400/30">
                  Rótulos & Sleeves
                </span>
              </div>

              <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">Banda Estreita & Etiquetas Técnicas</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">PMG Narrow Clicheria</h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                Unidade altamente especializada no atendimento a convertedores de rótulos autoadesivos, etiquetas técnicas e mangas termoencolhíveis (sleeves).
              </p>

              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check size={14} className="text-blue-400 shrink-0" />
                  <span>Tecnologias ESKO Digital Pixel+ para ponto plano estável</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check size={14} className="text-blue-400 shrink-0" />
                  <span>Provas contratuais de alta fidelidade P5000 e calibração espectral i1iO</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check size={14} className="text-blue-400 shrink-0" />
                  <span>Pontos de atendimento em Blumenau, São Paulo, Valinhos, Vinhedo e Goiânia</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <a
                href="https://www.pmgnarrow.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 px-4 py-2.5 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 transition-all shadow-md shadow-blue-600/20"
              >
                <span>Acessar pmgnarrow.com.br</span>
                <ExternalLink size={13} />
              </a>
              <span className="text-xs text-slate-400 font-medium">Banda Estreita</span>
            </div>
          </div>

          {/* 3. TIZZA TECNOLOGIA / KAIAKI */}
          <div id="tizza-kaiaki" className="rounded-3xl bg-slate-950 text-white border border-[#009FE3]/30 p-8 sm:p-10 flex flex-col justify-between scroll-mt-24 shadow-lg">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="h-11 flex items-center">
                  <img
                    src="https://i.ibb.co/WvtGBSxN/Logo-Tizza-BRANCO-01-1024x461.png"
                    alt="Logo Tizza Tecnologia"
                    className="h-10 w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-[10px] font-bold text-[#009FE3] bg-[#009FE3]/15 px-3 py-1 rounded-full uppercase border border-[#009FE3]/30">
                  Software & RIP Web
                </span>
              </div>

              <div className="text-xs font-bold text-[#009FE3] uppercase tracking-wider mb-2">Automação & Gestão Gráfica</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Tizza Tecnologia • Sistema Kaiaki</h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                A tecnologia que conecta o convertedor diretamente à produção da PMG Flexo com aprovação 3D, preflight em nuvem e rastreamento em tempo real.
              </p>

              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check size={14} className="text-[#009FE3] shrink-0" />
                  <span>Aprovação visual de artes e visualizador 3D de embalagens</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check size={14} className="text-[#009FE3] shrink-0" />
                  <span>Preflight automático, comparação de versões e acervo digital</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check size={14} className="text-[#009FE3] shrink-0" />
                  <span>Redução comprovada de tempo de ciclo pré-impressão</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <a href="#kaiaki" className="text-xs font-bold text-[#009FE3] hover:text-cyan-300 uppercase tracking-wider flex items-center gap-1.5 transition-colors">
                <span>Conhecer o Kaiaki</span>
                <ArrowRight size={13} />
              </a>
              <span className="text-xs text-slate-400 font-medium">100% Online</span>
            </div>
          </div>

          {/* 4. VP FILMES */}
          <div id="vp-filmes" className="rounded-3xl bg-white/[0.04] border border-white/10 p-8 sm:p-10 flex flex-col justify-between scroll-mt-24 hover:border-emerald-400/40 transition-all">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="h-11 flex items-center">
                  <img
                    src="https://i.ibb.co/PGDXcCTN/LOGO-VP-AZUL.png"
                    alt="Logo VP Filmes"
                    className="h-10 w-auto object-contain"
                    style={{ filter: 'saturate(4) brightness(1.7) hue-rotate(-22deg)' }}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/15 px-3 py-1 rounded-full uppercase border border-emerald-400/30">
                  Distribuição de Filmes
                </span>
              </div>

              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">Filmes Flexíveis para Embalagens</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">VP Filmes</h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Distribuidora técnica de filmes flexíveis (BOPP e PEAD) para convertedores, sem volume mínimo obrigatório. Estoque regulador, alta barreira e suporte em Blumenau-SC.
              </p>

              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check size={14} className="text-emerald-400 shrink-0" />
                  <span>BOPP: Transparente, Metalizado, Mate e Branco Cavitado</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check size={14} className="text-emerald-400 shrink-0" />
                  <span>PEAD: Filmes técnicos para laminação e selagem</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check size={14} className="text-emerald-400 shrink-0" />
                  <span>Assessoria técnica na especificação ideal para cada substrato</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <a
                href="https://www.vpfilmes.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 px-4 py-2.5 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 transition-all shadow-md shadow-emerald-600/20"
              >
                <span>Acessar vpfilmes.com.br</span>
                <ExternalLink size={13} />
              </a>
              <div className="text-xs text-slate-400 font-medium flex items-center gap-1">
                <MapPin size={12} className="text-emerald-400" />
                <span>Blumenau-SC</span>
              </div>
            </div>
          </div>

        </div>

        {/* Ecosystem Overview Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-950 text-white border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="text-xs font-bold text-pmg-magenta uppercase tracking-wider mb-2">
              Solução Completa
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Da pré-impressão ao substrato: integração total
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
              Clichê com a <strong>PMG Flexo</strong>, banda estreita com a <strong>PMG Narrow</strong>, gestão digital com o <strong>Kaiaki</strong>, filmes com a <strong>VP Filmes</strong>.
            </p>
          </div>

          <div className="shrink-0 flex items-center justify-center">
            <img
              src="https://i.ibb.co/N2f7Yddq/Marcas-da-Pmg.png"
              alt="Marcas da PMG"
              className="max-h-20 sm:max-h-24 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
