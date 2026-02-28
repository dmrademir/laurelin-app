import React from 'react';
import pairingsImg from '../assets/images/harmonizacao-tabua.png';

export default function Harmonizacoes() {
  return (
    <section id="harmonizacoes" className="pairing-showcase-section">
      <div className="pairing-showcase-container">
        <div className="pairing-showcase-header">
          <h2 className="title">Harmonizações Gastronômicas</h2>
          <p className="subtitle">Descubra combinações perfeitas entre hidromel e pratos deliciosos</p>
        </div>
        <div className="pairing-grid">
          <div className="pairing-image-wrap">
            <img src={pairingsImg} alt="Harmonização Laurelin" />
          </div>
          <div className="pairing-info-wrap">
             {/* Lista de harmonizações (Tradicional, Amadeirado, etc) */}
          </div>
        </div>
      </div>
    </section>
  );
}