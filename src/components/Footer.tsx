import React from 'react';
import { Mail, Phone, MapPin, ArrowUp, Instagram, Linkedin, Facebook } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-pmg-navy text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Minimal Strip */}
        <div className="flex flex-col md:flex-row items-center justify-between pb-10 border-b border-white/10 gap-6">
          <div className="flex items-center gap-3">
            <img 
              src="https://i.ibb.co/NgZcFb4B/Logo-PMG-FLEXO-BRANCO-E-VERMELHO.png" 
              alt="PMG Flexo" 
              className="h-9 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
            <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 border-l border-white/20 pl-3">CLICHERIA DE ALTA DEFINIÇÃO</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-400">
            <span className="text-white font-semibold">PMG Flexo</span>
            <span>•</span>
            <a 
              href="https://www.pmgnarrow.com.br/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-1 transition-colors"
            >
              <span>PMG Narrow</span>
              <span className="text-[10px]">↗</span>
            </a>
            <span>•</span>
            <span className="text-[#009FE3] font-semibold">Tizza Tecnologia</span>
            <span>•</span>
            <a 
              href="https://www.vpfilmes.com.br/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-1 transition-colors"
            >
              <span>VP Filmes</span>
              <span className="text-[10px]">↗</span>
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 text-xs text-slate-300">
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-3 text-[11px]">PMG Flexo</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#quem-somos" className="hover:text-white transition-colors">Quem Somos</a></li>
              <li><a href="#o-que-fazemos" className="hover:text-white transition-colors">O Que Fazemos</a></li>
              <li><a href="#cliches" className="hover:text-white transition-colors">Tecnologias de Clichê</a></li>
              <li><a href="#provas" className="hover:text-white transition-colors">Provas GMG & Mockups</a></li>
              <li><a href="#academy" className="hover:text-white transition-colors">PMG Academy</a></li>
              <li><a href="#expo-label" className="hover:text-white text-pmg-magenta font-semibold transition-colors">Expo & Label 2026</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-3 text-[11px]">Plataforma & Automação</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#kaiaki" className="hover:text-white transition-colors">Sistema Kaiaki (Tizza)</a></li>
              <li><a href="#kaiaki" className="hover:text-white transition-colors">Aprovação 3D Web</a></li>
              <li><a href="#kaiaki" className="hover:text-white transition-colors">Preflight & Compare</a></li>
              <li><a href="#kaiaki" className="hover:text-white transition-colors">Cloud Storage</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-3 text-[11px]">Programas & Plantas</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#academy" className="hover:text-white transition-colors">PMG Academy</a></li>
              <li><a href="#academy" className="hover:text-white transition-colors">Padronização de Processos</a></li>
              <li><a href="#academy" className="hover:text-white transition-colors">Color Standard (Min/Nom/Max)</a></li>
              <li><a href="#operacao" className="hover:text-white transition-colors">Planta Vinhedo-SP (24h)</a></li>
              <li><a href="#operacao" className="hover:text-white transition-colors">Planta Goiânia-GO</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-3 text-[11px]">Contato Técnico</h4>
            <ul className="space-y-2 text-slate-400">
              <li>diego@pmgflexo.com.br</li>
              <li>(47) 9 9147-9234</li>
              <li>(19) 3030-3411 (Vinhedo-SP)</li>
              <li>(62) 3586-6690 (Goiânia-GO)</li>
            </ul>
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://www.instagram.com/pmgflexo/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram PMG Flexo"
                className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-pmg-magenta transition-colors"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://www.linkedin.com/company/pmgflexo/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn PMG Flexo"
                className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-pmg-magenta transition-colors"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="https://www.facebook.com/pmgflexo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook PMG Flexo"
                className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-pmg-magenta transition-colors"
              >
                <Facebook size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 PMG FLEXO. Matrizes flexográficas de alta definição para convertedores.
          </div>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-white transition-colors text-slate-400"
          >
            <span>Voltar ao topo</span>
            <ArrowUp size={13} />
          </button>
        </div>

      </div>
    </footer>
  );
};
