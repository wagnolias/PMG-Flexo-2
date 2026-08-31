import React from 'react';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-pmg-navy text-white border-t border-white/10 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
          {/* Brand block */}
          <div className="lg:col-span-1">
            <img
              src="https://i.ibb.co/NgZcFb4B/Logo-PMG-FLEXO-BRANCO-E-VERMELHO.png"
              alt="PMG Flexo"
              className="h-9 w-auto object-contain mb-4"
              referrerPolicy="no-referrer"
            />
            <p className="text-sm text-slate-400 font-light leading-relaxed mb-5">
              Clicheria técnica em fotopolímero para embalagens flexíveis, rótulos e etiquetas.
            </p>
            <a
              href="https://wagnolias.github.io/PMG-Group-A/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mb-5 group w-fit"
            >
              <span className="text-[11px] text-slate-400 font-light">Uma empresa do ecossistema</span>
              <img
                src={`${import.meta.env.BASE_URL}assets/pmg-group-white.png`}
                alt="PMG Group"
                className="h-4 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </a>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-300 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                VINHEDO-SP · 24H
              </span>
              <span className="text-[11px] font-semibold text-slate-300 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                GOIÂNIA-GO
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">Navegação</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#apresentacao" className="hover:text-white transition-colors">Quem Somos</a></li>
              <li><a href="#cliches" className="hover:text-white transition-colors">Soluções</a></li>
              <li><a href="#operacao" className="hover:text-white transition-colors">Ecossistema</a></li>
              <li><a href="#academy" className="hover:text-white transition-colors">Academy & Eventos</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">Ecossistema</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="https://www.pmgnarrow.com.br/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1">
                  PMG Narrow <span className="text-[10px]">↗</span>
                </a>
              </li>
              <li><a href="#kaiaki" className="hover:text-white transition-colors">Tizza Tecnologia (Kaiaki)</a></li>
              <li>
                <a href="https://www.vpfilmes.com.br/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1">
                  VP Filmes <span className="text-[10px]">↗</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">Contato</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>suporte@pmgflexo.com.br</li>
              <li>(47) 9 9183-1636</li>
            </ul>
            <div className="flex items-center gap-3 mt-4">
              <a href="https://www.instagram.com/pmgflexo/" target="_blank" rel="noopener noreferrer" aria-label="Instagram PMG Flexo" className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-pmg-magenta transition-colors">
                <Instagram size={15} />
              </a>
              <a href="https://www.linkedin.com/company/pmgflexo/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn PMG Flexo" className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-pmg-magenta transition-colors">
                <Linkedin size={15} />
              </a>
              <a href="https://www.facebook.com/pmgflexo" target="_blank" rel="noopener noreferrer" aria-label="Facebook PMG Flexo" className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-pmg-magenta transition-colors">
                <Facebook size={15} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span>
            © 2026 PMG Flexo · CNPJ em processo de atualização · Desenvolvido pela{' '}
            <a
              href="https://wagnolias.github.io/PMG-Tizza/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Tizza Tecnologia
            </a>
          </span>
          <button onClick={scrollToTop} className="hover:text-white transition-colors">
            Clicheria técnica em fotopolímero
          </button>
        </div>

      </div>
    </footer>
  );
};
