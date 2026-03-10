import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import laurelinLogo from '../assets/images/laurelin-logo-new.png';
import "../assets/css/Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Lógica para esconder/mostrar ao rolar
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        // Se rolar para baixo e passar de 100px, esconde. Se subir, mostra.
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <header className={`header-container ${showNavbar ? 'visible' : 'hidden-scroll'}`}>
      <div className="logo-area" style={{ cursor: 'pointer' }} onClick={() => { navigate('/'); closeMenu(); }}>
        <img src={laurelinLogo} alt="Laurelin Logo" style={{ height: '55px' }} />
        <h1>LAURELIN</h1>
      </div>

      <button className={`mobile-menu-icon ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Menu">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={closeMenu}>Laurelin</Link>
        <Link to="/historia" onClick={closeMenu}>História</Link>
        <Link to="/curiosidades" onClick={closeMenu}>Curiosidades</Link>
        <Link to="/estilos" onClick={closeMenu}>Estilos</Link>
        <Link to="/produto" onClick={closeMenu}>Produto</Link>
        <Link to="/harmonizacoes" onClick={closeMenu}>Harmonizações</Link>
        <Link to="/drinks" onClick={closeMenu}>Drinks</Link>
        <Link to="/contato" onClick={closeMenu}>Contato</Link>
        <a href="https://produto.mercadolivre.com.br/MLB-6257299332" target="_blank" rel="noopener noreferrer">
          <button className="nav-buy-btn">Comprar</button>
        </a>
      </nav>
    </header>
  );
}