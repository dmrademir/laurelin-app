import React from "react";
import { Link } from "react-router-dom";
import heroBg from "../assets/images/hidromel-hero.png";
import ingredientesImg from "../assets/images/hidromel-ingredientes.png";

export default function Home() {
  return (
    <>
      <section className="hero">
        <img src={heroBg} className="hero-bg" alt="Background" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          {/* A COROA MAJESTOSA (SVG Inserido aqui) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#f3bc34"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="hero-crown-svg"
          >
            <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path>
            <path d="M5 21h14"></path>
          </svg>

          <h1 className="hero-title">A Bebida dos Deuses</h1>
          <p className="hero-subtitle">
            Descubra o hidromel, a bebida alcoólica mais antiga do mundo, com
            mais de 9.000 anos de história milenar
          </p>
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
            <div className="about-icon-top">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#B38728"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z" />
                <path d="M7 10h10" />
                <path d="M12 15v7" />
                <path d="M8 22h8" />
              </svg>
            </div>
            <h2 className="about-title">O Que É Hidromel?</h2>
            <p className="about-text">
              O hidromel é uma bebida alcoólica fermentada cuja maior parcela
              dos açúcares provém do mel. Conhecido como o{" "}
              <span className="highlight-gold">"Néctar dos deuses"</span>, é
              considerado a bebida alcoólica mais antiga do mundo, com
              evidências de 9.000 anos.
            </p>
            <p className="about-text">
              Produzido através da fermentação de mel, água e leveduras, pode
              ter teor alcoólico de 4% a 20%. Sua versatilidade permite
              adicionar frutas, especiarias, ervas e flores.
            </p>
            <div className="info-cards-grid">
              <div className="info-card">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
                <p>Ingredientes Naturais</p>
              </div>
              <div className="info-card">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                </svg>
                <p>9.000 Anos</p>
              </div>
              <div className="info-card">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z" />
                  <path d="M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0" />
                </svg>
                <p>4% a 20% ABV</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
