import React from 'react';

export default function Curiosidades() {
  return (
    <section id="curiosidades" className="curiosities-section">
      <div className="section-header">
        <div className="curiosity-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
        </div>
        <h2 className="section-title curiosities-title">Curiosidades Fascinantes</h2>
        <p className="curiosities-subtitle">Descubra fatos surpreendentes sobre a bebida mais antiga do mundo</p>
      </div>

      <div className="curiosities-grid">
        <div className="curiosity-card">
          <h3>Bebida Dos Deuses</h3>
          <p>Na mitologia grega, o hidromel era considerado a bebida dos deuses do Olimpo, símbolo de imortalidade e sabedoria.</p>
        </div>
        <div className="curiosity-card">
          <h3>Tradição Viking</h3>
          <p>Os Vikings acreditavam que o hidromel tinha propriedades mágicas e o consumiam em celebrações e rituais de guerra.</p>
        </div>
        <div className="curiosity-card">
          <h3>Lua De Mel</h3>
          <p>O termo 'lua de mel' origina-se da tradição de casais receberem hidromel como presente de casamento na Idade Média.</p>
        </div>
        {/* Adicione os outros cards de curiosidade do seu arquivo original aqui */}
      </div>
    </section>
  );
}