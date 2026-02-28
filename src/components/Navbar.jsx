import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import laurelinLogo from '../assets/images/laurelin-logo-new.png';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="header-container">
      <div className="logo-area" style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
        <img src={laurelinLogo} alt="Laurelin Logo" style={{ height: '55px' }} />
        <h1>LAURELIN</h1>
      </div>
      <nav className="nav-links">
        <Link to="/">Laurelin</Link>
        <Link to="/historia">História</Link>
        <Link to="/curiosidades">Curiosidades</Link>
        <Link to="/estilos">Estilos</Link>
        <Link to="/produto">Produto</Link>
        <Link to="/harmonizacoes">Harmonizações</Link>
        <Link to="/drinks">Drinks</Link>
        <Link to="/contato">Contato</Link>
        <a href="https://produto.mercadolivre.com.br/MLB-6257299332" target="_blank" rel="noopener noreferrer">
          <button className="nav-buy-btn">Comprar</button>
        </a>
      </nav>
    </header>
  );
}