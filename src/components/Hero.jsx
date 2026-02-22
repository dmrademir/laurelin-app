import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Imagem de Fundo com Overlay Escuro */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/src/assets/images/hvDkt1dzTGj2aQCzgoje5l-img-3_1770765699000_na1fn_aW5ncmVkaWVudHMtaG9uZXktYmVlcw.png" 
          alt="Honey Background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/60 to-[#050505]"></div>
      </div>

      {/* Conteúdo Central */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div className="flex justify-center mb-6">
           <img src="/src/assets/images/laurelin-logo-new.png" alt="Icon" className="h-16 w-auto brightness-110" />
        </div>
        
        <h2 className="font-serif text-[#D4AF37] text-sm tracking-[0.5em] uppercase mb-4 animate-pulse">
          Laurelin Hidromel Art
        </h2>
        
        <h1 className="font-serif text-5xl md:text-7xl text-white mb-8 leading-tight">
          A BEBIDA DOS <span className="text-[#D4AF37]">DEUSES</span>
        </h1>
        
        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto font-light tracking-wide">
          Sinta a essência do mel em uma experiência única, produzida com técnicas ancestrais e o rigor da engenharia moderna.
        </p>

        <button className="group relative px-10 py-4 bg-transparent overflow-hidden border border-[#D4AF37] transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
          <span className="relative z-10 font-serif text-[#D4AF37] group-hover:text-black transition-colors duration-300 uppercase tracking-widest text-sm">
            Conheça Mais
          </span>
          <div className="absolute inset-0 bg-[#D4AF37] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300"></div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
