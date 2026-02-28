import React from 'react';

export default function Drinks() {
  return (
    <section id="drinks" className="drinks-showcase-section">
      <div className="drinks-showcase-container">
        <div className="drinks-showcase-header">
          <h2 className="title">Drinks Com Hidromel</h2>
          <p className="subtitle">Receitas exclusivas que elevam o hidromel a novas dimensões de sabor</p>
        </div>
        <div className="drinks-grid">
          <div className="drink-recipe-card">
            <h3 className="drink-title">Negroni</h3>
            <p className="drink-method">Combine 30ml de Vermouth Rosso, 30ml de Campari e 30ml de Laurelin...</p>
          </div>
          {/* Adicione Ginger & Lime, PCL Sour e London Honey aqui */}
        </div>
      </div>
    </section>
  );
}