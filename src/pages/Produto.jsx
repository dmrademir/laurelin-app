import React from 'react';
import productHero from '../assets/images/hidromel-sack-product.jpeg';

export default function Produto() {
  return (
    <section id="produto" className="product-showcase-section">
      <div className="product-showcase-container">
        <div className="product-showcase-header">
          <h2 className="product-showcase-title">Conheça Nosso Produto</h2>
          <p>Descubra a excelência do Hidromel Sack Laurelin - premium, envelhecido e sofisticado</p>
        </div>

        <div className="product-grid">
          <div className="product-image-wrap">
            <img src={productHero} alt="Hidromel Sack Laurelin Premium" />
          </div>
          <div className="product-info-wrap">
            <h3 className="product-title">Hidromel Sack</h3>
            <p className="product-description">O Hidromel Sack Laurelin é uma criação premium que representa o ápice da arte de produzir hidromel.</p>
            {/* Detalhes técnicos e specs aqui */}
            <button className="product-cta-btn">Solicitar Informações</button>
          </div>
        </div>
      </div>
    </section>
  );
}