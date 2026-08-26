import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Quem Somos', href: '#quem-somos' },
    { name: 'O Que Fazemos', href: '#o-que-fazemos' },
    { name: 'Tecnologias', href: '#cliches' },
    { name: 'Provas & Mockups', href: '#provas' },
    { name: 'Sistema Kaiaki', href: '#kaiaki' },
    { name: 'PMG Academy', href: '#academy' },
    { name: 'Expo & Label', href: '#expo-label' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-pmg-navy/95 backdrop-blur-md py-3.5 border-b border-white/10 shadow-lg'
        : 'bg-pmg-navy/80 backdrop-blur-sm py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center gap-6">

        {/* Brand Group with Official Logo */}
        <a href="#home" className="flex items-center shrink-0 group" id="nav-logo">
          <img
            src="https://i.ibb.co/NgZcFb4B/Logo-PMG-FLEXO-BRANCO-E-VERMELHO.png"
            alt="PMG Flexo Clicheria"
            className="h-9 sm:h-10 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-semibold text-slate-300 hover:text-white transition-colors uppercase tracking-wider whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contato"
            id="nav-cta-btn"
            className="shrink-0 bg-pmg-magenta hover:bg-pmg-magenta/90 text-white px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-md hover:shadow-pmg-magenta/20 flex items-center gap-1.5 whitespace-nowrap"
          >
            <span>Contato</span>
            <ArrowRight size={13} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          id="nav-mobile-toggle"
          aria-label="Abrir menu"
          className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors shrink-0"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="w-full bg-pmg-navy/98 backdrop-blur-xl border-t border-white/10 px-6 py-6 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-medium text-slate-200 hover:text-pmg-magenta py-1 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-pmg-magenta text-white px-6 py-3 rounded-full font-bold text-center text-xs uppercase tracking-wider mt-1 shadow-lg shadow-pmg-magenta/20"
              >
                Falar com Especialista
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
