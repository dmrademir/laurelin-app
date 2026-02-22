import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-background text-gold-primary font-serif shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold">Laurelin Hidromel</div>
          <ul className="flex space-x-6">
            <li><a href="/" className="hover:text-gold-light">Início</a></li>
            <li><a href="/produtos" className="hover:text-gold-light">Produtos</a></li>
            <li><a href="/sobre" className="hover:text-gold-light">Sobre</a></li>
            <li><a href="/contato" className="hover:text-gold-light">Contato</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
