import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Estilos e Utilitários
import './assets/css/laurelin.css';
import ScrollToTop from './components/ScrollToTop';

// Componentes e Páginas
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Historia from './pages/Historia';
import Curiosidades from './pages/Curiosidades';
import Estilos from './pages/Estilos';
import Produto from './pages/Produto';
import Harmonizacoes from './pages/Harmonizacoes';
import Drinks from './pages/Drinks';
import Contato from './pages/Contato';

function App() {
  return (
    <div className="app-wrapper">
      <ScrollToTop /> {/* O ScrollToTop continua aqui */}
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/curiosidades" element={<Curiosidades />} />
          <Route path="/estilos" element={<Estilos />} />
          <Route path="/produto" element={<Produto />} />
          <Route path="/harmonizacoes" element={<Harmonizacoes />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;