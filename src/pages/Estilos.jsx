import React from 'react';

export default function Estilos() {
  return (
    <section id="estilos" className="styles-section">
      <div className="section-header">
        <h2 className="style-title">Estilos De Hidromel</h2>
        <p className='style-subtitle'>Conheça as diferentes categorias e características de cada estilo</p>
      </div>

      <div className="styles-grid">
        <div className="style-card">
          <h3>Tradicional</h3>
          <p>Produzido apenas com mel, água e levedura. Sabor puro e equilibrado que destaca a qualidade do mel.</p>
          <div className="style-tags"><span className="tag">Sabor Limpo</span><span className="tag">Equilibrado</span></div>
        </div>
        <div className="style-card">
          <h3>Melomel</h3>
          <p>Hidromel com adição de frutas (maçã, uva, morango, etc). Oferece complexidade e frescor.</p>
          <div className="style-tags"><span className="tag">Frutas Naturais</span><span className="tag">Complexo</span></div>
        </div>
        {/* Continue com Metheglyn, Seco, Amadeirado e Sack conforme seu original */}
      </div>
    </section>
  );
}