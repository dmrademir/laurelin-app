import React from 'react';
import productHero from '../assets/images/hidromel-sack-product.jpeg';

export default function Produto() {
  return (
      <section id="produto" className="product-showcase-section">
        <div className="product-showcase-container">
          
          <div className="product-showcase-header">
            <div className="section-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19c.7 0 1.2-.6 1.2-1.3V8.8c0-.4-.2-.8-.6-1L12 4 5.9 7.8c-.4.2-.6.6-.6 1v8.9c0 .7.5 1.3 1.2 1.3h11z"/><path d="M12 21v-8"/></svg>
            </div>
            <h2 className="product-showcase-title">Conheça Nosso Produto</h2>
            <p>Descubra a excelência do Hidromel Sack Laurelin - premium, envelhecido e sofisticado</p>
          </div>

          <div className="product-grid">
            {/* Lado Esquerdo: Imagem */}
            <div className="product-image-wrap">
              <img src={productHero} alt="Hidromel Sack Laurelin Premium" />
            </div>

            {/* Lado Direito: Informações Técnicas */}
            <div className="product-info-wrap">
              <h3 className="product-title">Hidromel Sack</h3>
              <p className="product-subtitle" style={{ color: 'var(--gold)', fontWeight: '600', marginBottom: '20px' }}>
                A Sofisticação do Mel Envelhecido em Carvalho
              </p>
              
              <p className="product-description">
                O Hidromel Sack Laurelin é uma criação premium que representa o ápice da arte de produzir hidromel. Produzido com méis selecionados e envelhecido em barris de primeira qualidade.
              </p>

          <div className="product-details-list">
            {/* Detalhe 1: Envelhecimento (Ícone de Barril/Tempo) */}
            <div className="product-detail-item">
              <div className="product-detail-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M2 12h20" />
                  <ellipse cx="12" cy="12" rx="10" ry="5" />
                  <ellipse cx="12" cy="12" rx="10" ry="5" transform="rotate(90 12 12)" />
                </svg>
              </div>
              <div className="product-detail-info">
                <h4>Envelhecimento Premium</h4>
                <p className="product-description">Envelhecido em barril, desenvolvendo notas complexas de mel tostado, caramelo e madeira.</p>
              </div>
            </div>

            {/* Detalhe 2: Teor/Qualidade (Ícone de Selo/Coroa) */}
            <div className="product-detail-item">
              <div className="product-detail-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
                </svg>
              </div>
              <div className="product-detail-info">
                <h4>Sabor Encorpado</h4>
                <p className="product-description">Com 14% de teor alcoólico, oferece corpo robusto e complexidade de sabores que evoluem a cada gole.</p>
              </div>
            </div>

            {/* Detalhe 3: Artesanal (Ícone de Mão/Criação) */}
            <div className="product-detail-item">
              <div className="product-detail-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div className="product-detail-info">
                <h4>Produção Artesanal</h4>
                <p className="product-description">Cada garrafa é produzida com dedicação e cuidado, respeitando métodos tradicionais de fermentação.</p>
              </div>
            </div>
          </div>

              <div className="product-specs">
                <span><span className="spec-label">Formato:</span> Garrafa 500ml</span>
                <span><span className="spec-label">Teor Alcoólico:</span> 14% vol</span>
              </div>

              <button className="product-cta-btn">Solicitar Informações</button>
            </div>
          </div>
        </div>
      </section>
  );
}