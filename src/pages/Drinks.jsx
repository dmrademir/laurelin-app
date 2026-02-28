import React from 'react';

export default function Drinks() {
  return (
    <section id="drinks" className="drinks-showcase-section">
      <div className="drinks-showcase-container">
        
        <div className="drinks-showcase-header">
          <div className="section-icon" style={{ marginBottom: '20px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </div>
          
          <div className="drinks-title-container">
            <h2 className="title">Drinks Com Hidromel</h2>
          </div>
          
          <div className="drinks-subtitle-container">
            <p className="subtitle">Receitas exclusivas que elevam o hidromel a novas dimensões de sabor</p>
          </div>
        </div>

        <div className="drinks-grid">
          {/* Receita 1 */}
          <div className="drink-recipe-card">
            <h3 className="drink-title">Negroni</h3>
            <span className="drink-section-label">Ingredientes:</span>
            <ul className="drink-ingredients">
              <li>Vermouth Rosso</li>
              <li>Campari</li>
              <li>Laurelin</li>
              <li>Casca de Laranja</li>
            </ul>
            <span className="drink-section-label">Modo de Preparo:</span>
            <p className="drink-method">
              Em um copo com gelo, combine 30ml de Vermouth Rosso, 30ml de Campari e 30ml de Laurelin. Mexa bem e decore com casca de laranja. Serve-se em copo old fashioned com gelo.
            </p>
          </div>

          {/* Receita 2 */}
          <div className="drink-recipe-card">
            <h3 className="drink-title">Ginger & Lime</h3>
            <span className="drink-section-label">Ingredientes:</span>
            <ul className="drink-ingredients">
              <li>Suco de Limão Fresco</li>
              <li>Xarope de Gengibre</li>
              <li>Água com Gás</li>
              <li>Laurelin</li>
            </ul>
            <span className="drink-section-label">Modo de Preparo:</span>
            <p className="drink-method">
              Em um copo com gelo, adicione 15ml de suco de limão fresco, 15ml de xarope de gengibre e 60ml de Laurelin. Complete com água com gás e mexa suavemente. Decore com rodela de limão e gengibre fresco.
            </p>
          </div>

          {/* Receita 3 */}
          <div className="drink-recipe-card">
            <h3 className="drink-title">PCL Sour</h3>
            <span className="drink-section-label">Ingredientes:</span>
            <ul className="drink-ingredients">
              <li>Suco de Abacaxi Fresco</li>
              <li>Laurelin</li>
              <li>Clara de Ovo</li>
              <li>Canela em Pó</li>
            </ul>
            <span className="drink-section-label">Modo de Preparo:</span>
            <p className="drink-method">
              Em um coqueteleira, combine 45ml de suco de abacaxi fresco, 60ml de Laurelin e uma clara de ovo. Agite vigorosamente por 15 segundos. Coe em copo com gelo e polvilhe canela em pó na espuma.
            </p>
          </div>

          {/* Receita 4 */}
          <div className="drink-recipe-card">
            <h3 className="drink-title">London Honey</h3>
            <span className="drink-section-label">Ingredientes:</span>
            <ul className="drink-ingredients">
              <li>Gin Premium</li>
              <li>Hidromel Laurelin</li>
              <li>Limão Siciliano Fresco</li>
            </ul>
            <span className="drink-section-label">Modo de Preparo:</span>
            <p className="drink-method">
              Em um copo com gelo, combine 45ml de gin premium e 45ml de Laurelin. Aperte uma fatia de limão siciliano fresco sobre a bebida e adicione a casca como decoração. Mexa suavemente e aprecie a harmonia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}