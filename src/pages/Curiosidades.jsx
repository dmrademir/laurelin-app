import React from "react";

export default function Curiosidades() {
  return (
    <section id="curiosidades" className="curiosities-section">
      <div className="section-header">
        <div className="curiosity-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
          </svg>
        </div>
        <h2 className="section-title curiosities-title">
          Curiosidades Fascinantes
        </h2>
        <p className="subtitle">
          Descubra fatos surpreendentes sobre a bebida mais antiga do mundo
        </p>
      </div>

      <div className="curiosities-grid">
        {/* Card 1 */}
        <div className="curiosity-card">
          <div className="curiosity-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
            </svg>
          </div>
          <h3>Bebida Dos Deuses</h3>
          <p>
            Na mitologia grega, o hidromel era considerado a bebida dos deuses
            do Olimpo, símbolo de imortalidade e sabedoria.
          </p>
        </div>

        {/* Card 2 */}
        <div className="curiosity-card">
          <div className="curiosity-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <h3>Tradição Viking</h3>
          <p>
            Os Vikings acreditavam que o hidromel tinha propriedades mágicas e o
            consumiam em celebrações e rituais de guerra.
          </p>
        </div>

        {/* Card 3 */}
        <div className="curiosity-card">
          <div className="curiosity-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </div>
          <h3>Lua De Mel</h3>
          <p>
            O termo 'lua de mel' origina-se da tradição de casais receberem
            hidromel como presente de casamento na Idade Média.
          </p>
        </div>

        {/* Card 4 */}
        <div className="curiosity-card">
          <div className="curiosity-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.38 5.38 0 0 1-4.4 2.26 5.4 5.4 0 0 1-4.14-1.9 5.38 5.38 0 0 1 1.48-8.85A9 9 0 0 0 12 3Z" />
            </svg>
          </div>
          <h3>Afrodisíaco Natural</h3>
          <p>
            Historicamente, o hidromel era considerado um afrodisíaco poderoso e
            era servido em noites de núpcias.
          </p>
        </div>

        {/* Card 5 */}
        <div className="curiosity-card">
          <div className="curiosity-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
            </svg>
          </div>
          <h3>Envelhecimento Fino</h3>
          <p>
            Hidromel pode envelhecer por décadas, desenvolvendo complexidade e
            profundidade de sabor similares a vinhos premium.
          </p>
        </div>

        {/* Card 6 */}
        <div className="curiosity-card">
          <div className="curiosity-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z" />
              <path d="M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0" />
            </svg>
          </div>
          <h3>Versatilidade Única</h3>
          <p>
            Pode ser seco, doce, espumante ou envelhecido em madeira, oferecendo
            infinitas possibilidades de sabor.
          </p>
        </div>
      </div>
    </section>
  );
}
