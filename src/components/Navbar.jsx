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

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <header className={`header-main-v5 ${showNavbar ? 'visible' : 'hidden-scroll'}`}>
      {/* NÍVEL 1: LOGO CENTRALIZADO */}
      <div className="logo-row-v5" onClick={() => { navigate('/'); closeMenu(); }}>
        <img src={laurelinLogo} alt="Laurelin Logo" className="logo-img-v5" />
        <h1 className="logo-text-v5">LAURELIN</h1>
      </div>

      {/* NÍVEL 2: LINKS DA NAVBAR */}
      <nav className={`nav-row-v5 ${showNavbar ? 'visible' : 'hidden-scroll'}`}>
            <div className="nav-links-container-v5">
              <Link to="/" onClick={closeMenu}>Laurelin</Link>
              <Link to="/historia" onClick={closeMenu}>História</Link>
              <Link to="/curiosidades" onClick={closeMenu}>Curiosidades</Link>
              <Link to="/estilos" onClick={closeMenu}>Estilos</Link>
              <Link to="/produto" onClick={closeMenu}>Produto</Link>
              <Link to="/harmonizacoes" onClick={closeMenu}>Harmonizações</Link>
              <Link to="/drinks" onClick={closeMenu}>Drinks</Link>
              <Link to="/contato" onClick={closeMenu}>Contato</Link>
              
              {/* Adicione a classe 'no-pill' aqui no <a> */}
              <a href="https://produto.mercadolivre.com.br/MLB-6257299332" target="_blank" rel="noopener noreferrer" className="no-pill">
                <button className="buy-btn-v5">Comprar</button>
              </a>
            </div>
          </nav>

    </header>
  );
}