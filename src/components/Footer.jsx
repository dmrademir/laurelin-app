import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from '../assets/images/laurelin-logo-new.png';
import "../assets/css/Footer.css"; // Garante a importação do CSS manual

export default function Footer() {
  return (
    <footer className="footer-laurelin-v5">
      <div className="footer-container-v5">
        <div className="footer-grid-v5">
            
            {/* Coluna 1: Branding (Logo + Texto) */}
            <div className="footer-col-v5 brand-col">
              <div className="footer-logo-wrap-v5">
                <img src={footerLogo} alt="Laurelin Logo" className="footer-img-v5" />
                <h3 className="footer-title-v5">LAURELIN</h3>
              </div>
              <p className="footer-desc-v5">Hidromel artesanal premium com mais de 9.000 anos de tradição.</p>
            </div>

            {/* Coluna 2: Links Rápidos (Pills no Mobile) */}
            <div className="footer-col-v5 links-col">
              <h4 className="footer-heading-v5">LINKS RÁPIDOS</h4>
              <nav className="footer-nav-v5">
                <Link to="/historia">História</Link>
                <Link to="/produto">Produto</Link>
                <Link to="/drinks">Drinks</Link>
                <Link to="/contato">Contato</Link>
              </nav>
            </div>

            {/* Coluna 3: Social */}
            <div className="footer-col-v5 social-col">
              <h4 className="footer-heading-v5">REDES SOCIAIS</h4>
              <p className="footer-desc-v5">Siga-nos para novidades e promoções.</p>
              <a href="https://www.instagram.com/laurelinhidromel" target="_blank" rel="noreferrer" className="social-pill-v5">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>

              </a>
            </div>

          </div>

          <div className="footer-copyright-v5">
            <p>© 2026 Laurelin Hidromel Artesanal. Todos os direitos reservados.</p>
          </div>
      </div>
    </footer>
  );
}