import React from 'react';
import productImg from '../assets/images/hidromel-sack-product.jpeg';
import vikingImg from '../assets/images/hvDkt1dzTGj2aQCzgoje5l-img-2_1770765702000_na1fn_aGlzdG9yeS1hbmNpZW50LW1lYWQ.png';

export default function Historia() {
  return (
    <>
      <section className="origin-section">
        <div className="origin-container">
          <div className="origin-content">
            <h2 className="origin-title">A Origem Da Laurelin</h2>
            <p className="origin-text">A história nasce da tradição de família de Nicolas Lavitschka...</p>
          </div>
          <div className="origin-image">
            <img src={productImg} alt="Garrafa Laurelin" />
          </div>
        </div>
      </section>

      <section className="history-section">
        <h2 className="history-title">História Milenar</h2>
        {/* Aqui você coloca a sua timeline-grid que estava no arquivo original */}
        <div className="history-footer">
          <img src={vikingImg} alt="Viking" className="history-footer-img" />
        </div>
      </section>
    </>
  );
}