import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';

export default function Contato() {
  const location = useLocation();
  const formRef = useRef(); // Referência para capturar os dados do formulário
  
  // Estados para controle de UI e Formulário
  const [assunto, setAssunto] = useState('produtos');
  const [enviando, setEnviando] = useState(false);

  // Hook para detectar se o usuário veio da página de Produto com um "state"
  useEffect(() => {
    if (location.state && location.state.assunto) {
      setAssunto(location.state.assunto);
    }
  }, [location]);

  // Função para processar o envio do e-mail
  const handleSendEmail = (e) => {
    e.preventDefault();
    setEnviando(true);

    // CONFIGURAÇÃO EMAILJS: Substitua pelos seus IDs do painel EmailJS
    // No seu handleSendEmail, substitua as strings fixas por:
    console.log("DEBUG SERVICE_ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;

    console.log("DEBUG TEMPLATE_ID:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);)
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    console.log("DEBUG KEY:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        alert("Mensagem enviada com sucesso! A Laurelin entrará em contato em breve.");
        formRef.current.reset();
        setAssunto('produtos'); // Reseta para o padrão
      })
      .catch((error) => {
        alert("Erro ao enviar mensagem. Por favor, tente novamente.");
        console.error("Erro EmailJS:", error);
      })
      .finally(() => {
        setEnviando(false);
      });
  };

  return (
    <section id="contato" className="contact-showcase-section">
      <div className="contact-showcase-container">
        
        <div className="contact-showcase-header">
          <div className="section-icon" style={{ marginBottom: '20px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </div>
          <div className="contact-title-container">
            <h2 className="title">Entre em Contato</h2>
          </div>
          <div className="contact-subtitle-container">
            <p className="subtitle">Tire suas dúvidas ou faça seu pedido</p>
          </div>
        </div>

        <div className="contact-grid">
          {/* Lado Esquerdo: Info */}
          <div className="contact-info-column">
            <div className="contact-info-top">
              <h3 className="pairing-title">Entre em Contato</h3> 
              
              <div className="contact-method">
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p className="pairing-subtitle">laurelinhidromel@laurelinhidromel.com.br</p>
                  <p style={{fontSize: '0.8rem', opacity: 0.7}}>Respondemos em até 24 horas</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className="contact-text">
                  <h4>WhatsApp</h4>
                  <p className="pairing-subtitle">(11) 97872-7672</p>
                  <p style={{fontSize: '0.8rem', opacity: 0.7}}>Atendimento de segunda a sexta, 9h às 18h</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="contact-text">
                  <h4>Localização</h4>
                  <p className="pairing-subtitle">São Paulo, SP</p>
                  <p style={{fontSize: '0.8rem', opacity: 0.7}}>Agende sua visita à produção</p>
                </div>
              </div>
            </div>

            <div className="contact-business-hours-card">
              <h4 className="contact-hours-title">Horário de Funcionamento</h4>
              <div className="contact-hours-list">
                <p className="pairing-subtitle">Segunda a Sexta: 9h às 18h</p>
                <p className="pairing-subtitle">Sábado: 10h às 14h</p>
                <p className="pairing-subtitle">Domingo: Fechado</p>
              </div>
            </div>
          </div>

          {/* Lado Direito: Formulário */}
          <form className="contact-form" ref={formRef} onSubmit={handleSendEmail}>
            <div className="form-group">
              <label>Nome Completo *</label>
              <input type="text" name="user_name" className="contact-input" placeholder="Seu nome" required />
            </div>
            <div className="form-group">
              <label>Email *</label>
              <input type="email" name="user_email" className="contact-input" placeholder="seu@email.com" required />
            </div>
            <div className="form-group">
              <label>Telefone/WhatsApp</label>
              <input type="text" name="user_phone" className="contact-input" placeholder="(11) 9 8765-4321" />
            </div>
            
            <div className="form-group">
              <label>Assunto *</label>
              <select 
                name="subject"
                className="contact-select" 
                required
                value={assunto}
                onChange={(e) => setAssunto(e.target.value)}
              >
                <option value="produtos">Dúvida sobre Produtos</option>
                <option value="pedidos">Fazer um Pedido</option>
                <option value="revenda">Distribuição/Revenda</option>
                <option value="parceria">Evento/Parceria</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <div className="form-group">
              <label>Mensagem *</label>
              <textarea name="message" className="contact-textarea" rows="5" placeholder="Conte-nos mais sobre sua dúvida ou pedido..." required></textarea>
            </div>
            
            <button type="submit" className="btn-send" disabled={enviando}>
              <span>➤</span> {enviando ? "Enviando..." : "Enviar Mensagem"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}