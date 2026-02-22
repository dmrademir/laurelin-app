import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-background text-gold-primary font-serif py-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Laurelin Hidromel. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
