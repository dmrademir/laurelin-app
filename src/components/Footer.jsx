import React from 'react';
import footerLogo from '../assets/images/laurelin-logo-new.png';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Conteúdo do seu footer original */}
        <div className="footer-logo-wrap">
          <img src={footerLogo} alt="Laurelin Logo" width="30" />
          <h3>LAURELIN</h3>
        </div>
        <div className="footer-copyright">
          <p>© 2026 Laurelin Hidromel Artesanal. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}