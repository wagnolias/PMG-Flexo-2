/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Navbar, SectionKey } from './components/Navbar';
import { HeroGroup } from './components/HeroGroup';
import { QuemSomosOQueFazemos } from './components/QuemSomosOQueFazemos';
import { TecnologiasCliche } from './components/TecnologiasCliche';
import { ProvasMockups } from './components/ProvasMockups';
import { KaiakiSection } from './components/KaiakiSection';
import { OperacaoGroup } from './components/OperacaoGroup';
import { SummitAcademy } from './components/SummitAcademy';
import { ExpoLabelSection } from './components/ExpoLabelSection';
import { MarcasEcossistema } from './components/MarcasEcossistema';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

const HASH_TO_SECTION: Record<string, SectionKey> = {
  apresentacao: 'quem-somos',
  cliches: 'solucoes',
  provas: 'solucoes',
  kaiaki: 'solucoes',
  operacao: 'ecossistema',
  ecossistema: 'ecossistema',
  academy: 'academy',
  'expo-label': 'academy',
};

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionKey>('quem-somos');
  const pendingAnchor = useRef<string | null>(null);

  useEffect(() => {
    const resolveHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && HASH_TO_SECTION[hash]) {
        pendingAnchor.current = hash;
        setActiveSection(HASH_TO_SECTION[hash]);
      }
    };
    resolveHash();
    window.addEventListener('hashchange', resolveHash);
    return () => window.removeEventListener('hashchange', resolveHash);
  }, []);

  useEffect(() => {
    if (pendingAnchor.current) {
      const id = pendingAnchor.current;
      pendingAnchor.current = null;
      requestAnimationFrame(() => {
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 60);
      });
    }
  }, [activeSection]);

  const handleNavigate = (section: SectionKey, anchor?: string) => {
    if (section === activeSection && anchor) {
      document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    setActiveSection(section);
    pendingAnchor.current = anchor || null;
    if (!anchor) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-white text-pmg-dark selection:bg-pmg-magenta selection:text-white font-sans antialiased">
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      <main>
        <HeroGroup />

        {activeSection === 'quem-somos' && <QuemSomosOQueFazemos />}

        {activeSection === 'solucoes' && (
          <>
            <TecnologiasCliche />
            <ProvasMockups />
            <KaiakiSection />
          </>
        )}

        {activeSection === 'ecossistema' && (
          <>
            <OperacaoGroup />
            <MarcasEcossistema />
          </>
        )}

        {activeSection === 'academy' && (
          <>
            <SummitAcademy />
            <ExpoLabelSection />
          </>
        )}

        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
