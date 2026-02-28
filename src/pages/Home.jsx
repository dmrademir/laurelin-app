import React from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/images/hvDkt1dzTGj2aQCzgoje5l-img-1_1770765704000_na1fn_aGVyby1oaWRyb21lbC1nb2xkZW4.png';
import ingredientesImg from '../assets/images/hvDkt1dzTGj2aQCzgoje5l-img-3_1770765699000_na1fn_aW5ncmVkaWVudHMtaG9uZXktYmVlcw.png';

export default function Home() {
  return (
    <>
      <section className="hero">
        <img src={heroBg} className="hero-bg" alt="Background" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">A Bebida dos Deuses</h1>
          <p className="hero-subtitle">Descubra o hidromel com mais de 9.000 anos de história.</p>
          <Link to="/historia" className="hero-btn-link">
            <button className="hero-btn">Descubra Nossa História</button>
          </Link>
        </div>
      </section>

      <section className="about-section">
        <div className="about-container">
          <div className="about-image">
            <img src={ingredientesImg} alt="Mel e Abelhas" />
          </div>
          <div className="about-content">
            <h2 className="about-title">O Que É Hidromel?</h2>
            <p className="about-text">O hidromel é uma bebida fermentada onde os açúcares provêm do mel...</p>
          </div>
        </div>
      </section>
    </>
  );
}