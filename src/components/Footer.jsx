import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import footerLogo from '../assets/images/laurelin-logo-new.png';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
<div className="footer-grid">
            
            {/* Coluna 1: Branding */}
            <div className="footer-brand">
              <div className="footer-logo-wrap">
                <img src={footerLogo} alt="Laurelin Logo" width="30" />
                <h3>LAURELIN</h3>
              </div>
              <p>Hidromel artesanal premium com mais de 9.000 anos de tradição</p>
            </div>

            {/* Coluna 2: Links Rápidos */}
            <div className="footer-column">
              <h4 className="footer-column-title">Links Rápidos</h4>
              <ul className="footer-links">
                <li><Link to="/historia">História</Link></li>
                <li><Link to="/produto">Produto</Link></li>
                <li><Link to="/drinks">Drinks</Link></li>
                <li><Link to="/contato">Contato</Link></li>
              </ul>
            </div>

            {/* Coluna 3: Redes Sociais */}
            <div className="footer-social">
              <h4 className="footer-column-title">Redes Sociais</h4>
              <p>Siga-nos para novidades e promoções exclusivas</p>
              <a href="https://www.instagram.com/laurelinhidromel" className="social-icon-link" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
            </div>

          </div>

          <div className="footer-copyright">
            <p>© 2026 Laurelin Hidromel Artesanal. Todos os direitos reservados.</p>
          </div>
      </div>
    </footer>
  );
}