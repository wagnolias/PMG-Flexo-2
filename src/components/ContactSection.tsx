import React, { useState } from 'react';
import { MapPin, Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    email: '',
    telefone: '',
    marcaInteresse: 'PMG Flexo (Banda Larga / HRX)',
    mensagem: ''
  });

  const units = [
    { city: "Vinhedo - SP", phone: "(19) 3030-3411", role: "Matriz & Gravação 24h" },
    { city: "Goiânia - GO", phone: "(62) 3586-6690", role: "Planta Centro-Oeste" },
    { city: "Valinhos - SP", phone: "(19) 3327-6473", role: "Suporte Técnico" },
    { city: "Blumenau - SC", phone: "(47) 3308-6836", role: "VP Filmes / Sul" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.email) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contato" className="py-24 bg-slate-50 border-t border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pmg-magenta/10 text-pmg-magenta text-xs font-semibold uppercase tracking-wider mb-4">
                Atendimento
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-pmg-navy tracking-tight mb-4">
                Fale com nossos especialistas
              </h2>
              <p className="text-slate-600 text-base font-light mb-8">
                Prontos para atender demandas técnicas, cotações de clichês e filmes ou agendamento de testes industriais.
              </p>
              
              {/* Units Grid */}
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {units.map((u, i) => (
                  <div key={i} className="p-3.5 rounded-2xl bg-white border border-slate-200/80">
                    <div className="flex items-center gap-1.5 text-pmg-navy font-bold text-xs mb-0.5">
                      <MapPin size={13} className="text-pmg-magenta shrink-0" />
                      <span>{u.city}</span>
                    </div>
                    <div className="text-[11px] text-slate-500">{u.role}</div>
                    <div className="text-[11px] font-bold text-pmg-magenta mt-1">{u.phone}</div>
                  </div>
                ))}
              </div>

              {/* Direct Channels */}
              <div className="space-y-3 p-5 bg-white rounded-2xl border border-slate-200/80 mb-6">
                <a 
                  href="mailto:diego@pmgflexo.com.br" 
                  className="flex items-center gap-3 text-slate-700 hover:text-pmg-magenta transition-colors"
                >
                  <div className="w-9 h-9 bg-pmg-magenta/10 text-pmg-magenta rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase">E-mail Comercial</div>
                    <div className="text-xs font-bold text-pmg-navy">diego@pmgflexo.com.br</div>
                  </div>
                </a>

                <a 
                  href="https://wa.me/5547991479234" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 text-slate-700 hover:text-emerald-600 transition-colors pt-2 border-t border-slate-100"
                >
                  <div className="w-9 h-9 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                    <MessageSquare size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase">WhatsApp Direto</div>
                    <div className="text-xs font-bold text-pmg-navy">(47) 9 9147-9234</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="text-xs text-slate-400 font-light">
              Suporte com operação 24 horas na unidade de Vinhedo-SP.
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-pmg-navy rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden border border-white/10 shadow-2xl">
              
              {formSubmitted ? (
                <div className="py-12 text-center">
                  <div className="w-14 h-14 rounded-full bg-pmg-magenta/20 text-pmg-magenta mx-auto flex items-center justify-center mb-4">
                    <CheckCircle2 size={30} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Mensagem enviada com sucesso!</h3>
                  <p className="text-slate-300 text-sm max-w-sm mx-auto mb-6">
                    Agradecemos o contato, <strong>{formData.nome}</strong>. Nossa equipe técnica responderá prontamente.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        nome: '',
                        empresa: '',
                        email: '',
                        telefone: '',
                        marcaInteresse: 'PMG Flexo (Banda Larga / HRX)',
                        mensagem: ''
                      });
                    }}
                    className="bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-full text-xs font-semibold transition-all"
                  >
                    Enviar nova mensagem
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-pmg-magenta">Solicitação Online</span>
                    <h3 className="text-2xl font-bold text-white">Solicite atendimento ou cotação</h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] font-bold uppercase tracking-wider text-slate-300 block mb-1">Nome *</label>
                        <input 
                          type="text" 
                          required
                          value={formData.nome}
                          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                          className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white focus:border-pmg-magenta focus:bg-white/10 outline-none transition-all" 
                          placeholder="Seu nome" 
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-bold uppercase tracking-wider text-slate-300 block mb-1">Empresa / Convertedor *</label>
                        <input 
                          type="text" 
                          required
                          value={formData.empresa}
                          onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                          className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white focus:border-pmg-magenta focus:bg-white/10 outline-none transition-all" 
                          placeholder="Nome da sua empresa" 
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] font-bold uppercase tracking-wider text-slate-300 block mb-1">E-mail Corporativo *</label>
                        <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white focus:border-pmg-magenta focus:bg-white/10 outline-none transition-all" 
                          placeholder="voce@empresa.com.br" 
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-bold uppercase tracking-wider text-slate-300 block mb-1">Telefone / WhatsApp</label>
                        <input 
                          type="tel" 
                          value={formData.telefone}
                          onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                          className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white focus:border-pmg-magenta focus:bg-white/10 outline-none transition-all" 
                          placeholder="(11) 99999-9999" 
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-300 block mb-1">Operação / Solução de Interesse</label>
                      <select
                        value={formData.marcaInteresse}
                        onChange={(e) => setFormData({ ...formData, marcaInteresse: e.target.value })}
                        className="w-full bg-slate-800 border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white focus:border-pmg-magenta outline-none transition-all"
                      >
                        <option value="PMG Flexo (Banda Larga / HRX)">PMG Flexo (Banda Larga / HRX)</option>
                        <option value="PMG Narrow (Banda Estreita / Rótulos)">PMG Narrow (Banda Estreita / Rótulos)</option>
                        <option value="Tizza Tecnologia (Sistema Kaiaki)">Tizza Tecnologia (Sistema Kaiaki)</option>
                        <option value="VP Filmes (Distribuição BOPP / PEAD)">VP Filmes (Distribuição BOPP / PEAD)</option>
                        <option value="Provas GMG & Mockups em Substratos">Provas GMG & Mockups em Substratos</option>
                        <option value="PMG Academy & Treinamento">PMG Academy & Treinamento</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-300 block mb-1">Mensagem ou Descrição da Demanda</label>
                      <textarea 
                        rows={3}
                        value={formData.mensagem}
                        onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                        className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white focus:border-pmg-magenta focus:bg-white/10 outline-none transition-all" 
                        placeholder="Descreva brevemente sua necessidade..."
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-pmg-magenta hover:bg-pmg-magenta/90 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg shadow-pmg-magenta/20 flex items-center justify-center gap-2"
                    >
                      <Send size={15} />
                      <span>Enviar Solicitação</span>
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
