import React from 'react';
import { MessageSquare } from 'lucide-react';

export const WhatsAppButton = () => (
  <a 
    href="https://wa.me/5547991479234?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20clich%C3%AAs%20e%20solu%C3%A7%C3%B5es%20da%20PMG%20Flexo." 
    target="_blank" 
    rel="noopener noreferrer"
    aria-label="Atendimento Comercial WhatsApp PMG Flexo"
    className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group flex items-center justify-center"
  >
    <MessageSquare size={26} />
    <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-pmg-navy px-3.5 py-1.5 rounded-lg text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-100">
      Fale com um especialista agora
    </span>
  </a>
);
