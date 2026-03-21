import React from 'react';
import pairingsImg from '../assets/images/harmonizacao-tabua.png';

export default function Harmonizacoes() {
  return (
    <section id="harmonizacoes" className="pairing-showcase-section">
      <div className="pairing-showcase-container">
        
        <div className="pairing-showcase-header">
          {/* ÍCONE PRINCIPAL MANTIDO NO TOPO DA SEÇÃO */}
          <div className="section-icon" style={{ marginBottom: '20px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/>
              <line x1="6" y1="17" x2="18" y2="17"/>
            </svg>
          </div>
          
          <div className="pairing-title-container">
            <h2 className="title">Harmonizações Gastronômicas</h2>
          </div>
          
          <div className="pairing-subtitle-container">
            <p className="subtitle">Descubra combinações perfeitas entre hidromel e pratos deliciosos</p>
          </div>
        </div>

        <div className="pairing-grid">
          <div className="pairing-image-wrap">
            <img src={pairingsImg} alt="Harmonização Laurelin" />
          </div>

          <div className="pairing-info-wrap"> // info sobre as Harmonizações
            <div className="pairing-detail-item">
              <div className="pairing-detail-info">
                <h4>Hidromel Tradicional</h4>
                <p>Queijos suaves (brie, gouda)</p>
                <p>Frango assado com ervas</p>
                <p>Risotos delicados</p>
                <p>Comida oriental (sushi, yakisoba)</p>
              </div>
            </div>

            <div className="pairing-detail-item">
              <div className="pairing-detail-info">
                <h4>Hidromel Amadeirado</h4>
                <p>Carnes grelhadas</p>
                <p>Queijos curados (parmesão)</p>
                <p>Massas com molhos encorpados</p>
              </div>
            </div>

            <div className="pairing-detail-item">
              <div className="pairing-detail-info">
                <h4>Hidromel com Frutas</h4>
                <p>Sobremesas de frutas</p>
                <p>Tábua de frios</p>
                <p>Chocolates meio amargos</p>
              </div>
            </div>

            <div className="pairing-detail-item">
              <div className="pairing-detail-info">
                <h4>Hidromel Seco</h4>
                <p>Carnes de caça</p>
                <p>Churrasco</p>
                <p>Pratos intensos e condimentados</p>
              </div>
            </div>

            <div className="pairing-detail-item">
              <div className="pairing-detail-info">
                <h4>Hidromel Sack</h4>
                <p>Pratos sofisticados</p>
                <p>Queijos envelhecidos</p>
                <p>Sobremesas nobres</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
