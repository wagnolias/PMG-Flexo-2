/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
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

export default function App() {
  return (
    <div className="relative min-h-screen bg-white text-pmg-dark selection:bg-pmg-magenta selection:text-white font-sans antialiased">
      <Navbar />
      <main>
        <HeroGroup />
        <QuemSomosOQueFazemos />
        <TecnologiasCliche />
        <ProvasMockups />
        <KaiakiSection />
        <OperacaoGroup />
        <SummitAcademy />
        <ExpoLabelSection />
        <MarcasEcossistema />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
