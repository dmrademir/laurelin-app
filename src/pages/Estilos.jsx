import React from "react";

export default function Estilos() {
  return (
    <section id="estilos" className="styles-section">
      <div className="section-header">
        <div className="section-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--gold)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17.5 19c.7 0 1.2-.6 1.2-1.3V8.8c0-.4-.2-.8-.6-1L12 4 5.9 7.8c-.4.2-.6.6-.6 1v8.9c0 .7.5 1.3 1.2 1.3h11z" />
            <path d="M12 21v-8" />
          </svg>
        </div>
        <h2 className="style-title">Estilos De Hidromel</h2>
        <p className="subtitle">
          Conheça as diferentes categorias e características de cada estilo
        </p>
      </div>

      <div className="styles-grid">
        {/* TRADICIONAL */}
        <div className="style-card">
          <div>
            <h3>Tradicional</h3>
            <p>
              Produzido apenas com mel, água e levedura. Sabor puro e
              equilibrado que destaca a qualidade do mel.
            </p>
          </div>
          <div className="style-tags">
            <span className="tag">Sabor Limpo</span>
            <span className="tag">Equilibrado</span>
            <span className="tag">Versátil</span>
          </div>
        </div>

        {/* MELOMEL */}
        <div className="style-card">
          <div>
            <h3>Melomel</h3>
            <p>
              Hidromel com adição de frutas (maçã, uva, morango, etc). Oferece
              complexidade e frescor.
            </p>
          </div>
          <div className="style-tags">
            <span className="tag">Frutas Naturais</span>
            <span className="tag">Complexo</span>
            <span className="tag">Refrescante</span>
          </div>
        </div>

        {/* METHEGLYN */}
        <div className="style-card">
          <div>
            <h3>Metheglyn</h3>
            <p>
              Enriquecido com especiarias, ervas e flores. Notas aromáticas
              sofisticadas e únicas.
            </p>
          </div>
          <div className="style-tags">
            <span className="tag">Especiarias</span>
            <span className="tag">Aromático</span>
            <span className="tag">Sofisticado</span>
          </div>
        </div>

        {/* SECO */}
        <div className="style-card">
          <div>
            <h3>Seco</h3>
            <p>
              Fermentação completa resulta em baixo teor de açúcar residual.
              Ideal para acompanhar refeições.
            </p>
          </div>
          <div className="style-tags">
            <span className="tag">Baixo Açúcar</span>
            <span className="tag">Elegante</span>
            <span className="tag">Gastronômico</span>
          </div>
        </div>

        {/* AMADEIRADO */}
        <div className="style-card">
          <div>
            <h3>Amadeirado</h3>
            <p>
              Envelhecido em barris de carvalho, desenvolvendo notas de madeira,
              caramelo e complexidade.
            </p>
          </div>
          <div className="style-tags">
            <span className="tag">Envelhecido</span>
            <span className="tag">Encorpado</span>
            <span className="tag">Premium</span>
          </div>
        </div>

        {/* SACK */}
        <div className="style-card">
          <div>
            <h3>Sack</h3>
            <p>
              Estilo premium com envelhecimento prolongado em carvalho. Sabor
              profundo e sofisticado.
            </p>
          </div>
          <div className="style-tags">
            <span className="tag">Luxuoso</span>
            <span className="tag">Complexo</span>
            <span className="tag">Envelhecido</span>
          </div>
        </div>
      </div>
    </section>
  );
}
