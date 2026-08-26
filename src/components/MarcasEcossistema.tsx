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

export const MarcasEcossistema = () => {
  return (
    <section id="ecossistema" className="py-24 bg-white text-pmg-dark border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pmg-magenta/10 text-pmg-magenta text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles size={13} />
            <span>Ecossistema Integrado</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-pmg-navy tracking-tight mb-4">
            A força do ecossistema a serviço da sua impressão
          </h2>
          <p className="text-slate-600 text-base font-light">
            A <strong>PMG Flexo</strong> atua em sinergia com frentes especializadas em banda estreita, software em nuvem e distribuição de filmes.
          </p>
        </div>

        {/* 4 Brands Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">

          {/* 1. PMG FLEXO (DESTAQUE PRINCIPAL) */}
          <div id="pmg-flexo" className="rounded-3xl bg-slate-900 text-white border-2 border-pmg-magenta/40 p-8 sm:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden">
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
                Referência nacional em matrizes flexográficas de alta definição. Laboratórios climatizados, plataforma HRX com as tecnologias Everest® e Glaciar®, e operação 24 horas em Vinhedo-SP e Goiânia-GO.
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
          <div id="pmg-narrow" className="rounded-3xl bg-slate-50 border border-slate-200/80 p-8 sm:p-10 flex flex-col justify-between scroll-mt-24 shadow-sm hover:border-blue-300 transition-all">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="h-11 flex items-center">
                  <img 
                    src="https://www.pmgnarrow.com.br/wp-content/uploads/2026/05/PMG-Narrow.svg" 
                    alt="Logo PMG Narrow" 
                    className="h-10 w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-[10px] font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full uppercase">
                  Rótulos & Sleeves
                </span>
              </div>

              <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">Banda Estreita & Etiquetas Técnicas</div>
              <h3 className="text-xl sm:text-2xl font-bold text-pmg-navy mb-3">PMG Narrow Clicheria</h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
                Unidade altamente especializada no atendimento a convertedores de rótulos autoadesivos, etiquetas técnicas e mangas termoencolhíveis (sleeves).
              </p>

              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <Check size={14} className="text-blue-600 shrink-0" />
                  <span>Tecnologias ESKO Digital Pixel+ e Kodak NX para ponto plano estável</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <Check size={14} className="text-blue-600 shrink-0" />
                  <span>Provas contratuais de alta fidelidade P5000 e calibração espectral i1iO</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <Check size={14} className="text-blue-600 shrink-0" />
                  <span>Pontos de atendimento em Blumenau, São Paulo, Valinhos, Vinhedo e Goiânia</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200/60 flex flex-wrap items-center justify-between gap-3">
              <a 
                href="https://www.pmgnarrow.com.br/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2.5 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 transition-all shadow-md shadow-blue-600/20"
              >
                <span>Acessar pmgnarrow.com.br</span>
                <ExternalLink size={13} />
              </a>
              <span className="text-xs text-slate-500 font-medium">Banda Estreita</span>
            </div>
          </div>

          {/* 3. TIZZA TECNOLOGIA / KAIAKI */}
          <div id="tizza-kaiaki" className="rounded-3xl bg-slate-900 text-white border border-[#009FE3]/30 p-8 sm:p-10 flex flex-col justify-between scroll-mt-24 shadow-lg">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="h-10 flex items-center">
                  <img 
                    src="https://i.ibb.co/WvtGBSxN/Logo-Tizza-BRANCO-01-1024x461.png" 
                    alt="Logo Tizza Tecnologia" 
                    className="h-8 w-auto object-contain"
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
          <div id="vp-filmes" className="rounded-3xl bg-slate-50 border border-slate-200/80 p-8 sm:p-10 flex flex-col justify-between scroll-mt-24">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="h-10 flex items-center">
                  <img 
                    src="https://i.ibb.co/PGDXcCTN/LOGO-VP-AZUL.png" 
                    alt="Logo VP Filmes" 
                    className="h-8 w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full uppercase">
                  Distribuição de Filmes
                </span>
              </div>

              <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">Filmes Flexíveis para Embalagens</div>
              <h3 className="text-xl sm:text-2xl font-bold text-pmg-navy mb-3">VP Filmes</h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Distribuidora técnica de filmes flexíveis (BOPP e PEAD) para convertedores, sem volume mínimo obrigatório. Estoque regulador, alta barreira e suporte em Blumenau-SC.
              </p>

              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <Check size={14} className="text-emerald-600 shrink-0" />
                  <span>BOPP: Transparente, Metalizado, Mate e Branco Cavitado</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <Check size={14} className="text-emerald-600 shrink-0" />
                  <span>PEAD: Filmes técnicos para laminação e selagem</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <Check size={14} className="text-emerald-600 shrink-0" />
                  <span>Assessoria técnica na especificação ideal para cada substrato</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200/60 flex flex-wrap items-center justify-between gap-3">
              <a 
                href="https://www.vpfilmes.com.br/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2.5 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 transition-all shadow-md shadow-emerald-600/20"
              >
                <span>Acessar vpfilmes.com.br</span>
                <ExternalLink size={13} />
              </a>
              <div className="text-xs text-slate-400 font-medium flex items-center gap-1">
                <MapPin size={12} className="text-emerald-600" />
                <span>Blumenau-SC</span>
              </div>
            </div>
          </div>

        </div>

        {/* Ecosystem Overview Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="text-xs font-bold text-pmg-magenta uppercase tracking-wider mb-2">
              Solução Completa
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Da pré-impressão ao substrato: integração total
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
              O ecossistema garante que o convertedor tenha clichês de padrão mundial com a <strong>PMG Flexo</strong>, matrizes especializadas em banda estreita com a <strong>PMG Narrow</strong>, gestão digital em nuvem com o <strong>Kaiaki</strong> e fornecimento ágil de filmes com a <strong>VP Filmes</strong>.
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
