import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#050505] text-[#A0A0A0] font-sans selection:bg-[#D4AF37] selection:text-black flex flex-col">
      
      {/* HEADER / NAVBAR INTEGRADO */}
      <header className="w-full py-6 px-8 border-b border-[#D4AF37]/20 flex justify-between items-center bg-[#050505]/90 sticky top-0 z-50 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <img src="/src/assets/images/laurelin-logo-new.png" alt="Laurelin Logo" className="h-10 w-auto" />
          <h1 className="font-serif text-[#D4AF37] text-xl tracking-[0.2em] uppercase">Laurelin</h1>
        </div>
        
        <nav className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.3em] font-medium">
          <a href="#inicio" className="hover:text-[#D4AF37] transition-colors">Início</a>
          <a href="#produtos" className="hover:text-[#D4AF37] transition-colors">Produtos</a>
          <a href="#historia" className="hover:text-[#D4AF37] transition-colors">História</a>
          <a href="#contato" className="hover:text-[#D4AF37] transition-colors">Contato</a>
        </nav>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="flex-grow">
        {children}
      </main>

      {/* FOOTER INTEGRADO */}
      <footer className="w-full py-12 px-8 border-t border-[#D4AF37]/20 bg-[#020202] text-center">
        <img src="/src/assets/images/laurelin-logo-new.png" alt="Logo" className="h-12 mx-auto mb-6 opacity-50 grayscale hover:grayscale-0 transition-all" />
        <p className="font-serif text-[#D4AF37] tracking-widest text-sm mb-4">A BEBIDA DOS DEUSES</p>
        <div className="text-[10px] tracking-widest text-gray-600 uppercase">
          &copy; 2026 Laurelin Hidromel Art - Todos os direitos reservados.
        </div>
      </footer>
      
    </div>
  );
};

export default Layout;