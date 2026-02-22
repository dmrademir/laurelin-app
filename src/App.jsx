import React from 'react';
import './assets/css/laurelin.css';
import laurelinLogo from './assets/images/laurelin-logo-new.png';
import heroBg from './assets/images/hvDkt1dzTGj2aQCzgoje5l-img-1_1770765704000_na1fn_aGVyby1oaWRyb21lbC1nb2xkZW4.png';
import ingredientesImg from './assets/images/hvDkt1dzTGj2aQCzgoje5l-img-3_1770765699000_na1fn_aW5ncmVkaWVudHMtaG9uZXktYmVlcw.png';
import productImg from './assets/images/hidromel-sack-product.jpeg';
import vikingImg from './assets/images/hvDkt1dzTGj2aQCzgoje5l-img-2_1770765702000_na1fn_aGlzdG9yeS1hbmNpZW50LW1lYWQ.png';
import productHero from './assets/images/hidromel-sack-product.jpeg';


function App() {
  return (
    <div className="app-wrapper" id="inicio">
      
      <header className="header-container">
        <div className="logo-area" style={{ cursor: 'pointer' }} onClick={() => window.location.href='#inicio'}>
          <img  src={laurelinLogo} alt="Laurelin Logo" style={{ height: '55px' }} />
          <h1  >LAURELIN</h1>
        </div>
        
        <nav className="nav-links">
          <a href="#laurelin">Laurelin</a>
          <a href="#historia">História</a>
          <a href="#curiosidades">Curiosidades</a>
          <a href="#estilos">Estilos</a>
          <a href="#produto">Produto</a>
          <a href="#harmonizacoes">Harmonizações</a>
          <a href="#drinks">Drinks</a>
          <a href="#contato">Contato</a>
          <a href="https://produto.mercadolivre.com.br/MLB-6257299332?matt_tool=38524122#origin=share&sid=share&action=copy" target="_blank" rel="noopener noreferrer">
          <button className="nav-buy-btn">Comprar</button>
          </a>
        </nav>
      </header>

      <section className="hero">
        <img src={heroBg} className="hero-bg" alt="Background Taça de Hidromel" />
        <div className="hero-overlay"></div>
        
        <div className="hero-content">
          {/* SVG da Coroa com a nova classe CSS */}
          <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="hero-crown"
          >
            <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path>
            <path d="M5 21h14"></path>

          </svg>
          <h1 className="hero-title">A Bebida dos Deuses</h1>
          
          {/* Aplicada a classe hero-subtitle configurada no CSS */}
          <p className="hero-subtitle">
            Descubra o hidromel, a bebida alcoólica mais antiga do mundo, com mais de 9.000 anos de história milenar
          </p>
            <a href="#laurelin" className="hero-btn-link">
          <button className="hero-btn">
          {/* Ícone Book Open original */}
          
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="lucide lucide-book-open"
          >
            <path d="M12 7v14"></path>
            <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
          </svg>
          
          Descubra Nossa História
          </button></a>
        </div>
      </section>
      <div style={{ height: '0vh', background: '#050505', position: 'relative', zIndex: '20' }}>
        <h2 style={{ color: 'white', textAlign: 'center', paddingTop: '0px' }}>
          
        </h2>
      </div>
      

      <section id="" className="about-section">
              <div className="about-container">
    
    <div className="about-image">
      <img src={ingredientesImg} alt="Mel e Abelhas" />
    </div>

    <div className="about-content">
      <div className="about-icon-top">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B38728" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"/><path d="M7 10h10"/><path d="M12 15v7"/><path d="M8 22h8"/></svg>
      </div>
      
      <h2 className="about-title">O Que É Hidromel?</h2>
      
      <p className="about-text">
        O hidromel é uma bebida alcoólica fermentada cuja maior parcela dos açúcares provém do mel. Conhecido como o <span className="highlight-gold">"Néctar dos deuses"</span>, é considerado a bebida alcoólica mais antiga do mundo, com evidências de 9.000 anos.
      </p>
      
      <p className="about-text">
        Produzido através da fermentação de mel, água e leveduras, pode ter teor alcoólico de 4% a 20%. Sua versatilidade permite adicionar frutas, especiarias, ervas e flores.
      </p>

      <div className="info-cards-grid">
        <div className="info-card">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
          <p>Ingredientes Naturais</p>
        </div>
        <div className="info-card">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
          <p>9.000 Anos</p>
        </div>
        <div className="info-card">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z"/><path d="M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0"/></svg>
          <p>4% a 20% ABV</p>
        </div>
      </div>
          </div>
        </div>
      </section>

      <section id="laurelin" className="origin-section">
        <div className="origin-container">
          
          {/* Texto à Direita (invertendo a ordem para variar o layout) */}
          <div className="origin-content">
            <h2 className="origin-title">A Origem Da Laurelin</h2>
            
            <p className="origin-text">
              A história da Laurelin tem início muito antes de sua formalização como marca. Ela nasce da tradição, da experimentação e do respeito ao tempo.
            </p>
            
            <p className="origin-text">
              O primeiro contato de Nicolas Lavitschka com o hidromel ocorreu ainda durante o ensino médio, baseado em uma antiga receita de família utilizada pelo seu avô.
            </p>
            
            <p className="origin-text">
              Com o tempo, o projeto demandou uma parceria sólida. Foi então que Nicolas encontrou em Jonnathan o sócio ideal, alguém alinhado aos mesmos valores e visão de longo prazo.
            </p>

            <p className="origin-text origin-highlight">
              Assim nasce oficialmente a Laurelin: uma marca construída sobre tradição, paciência, técnica e propósito.
            </p>
          </div>

          {/* Imagem do Produto à Esquerda */}
          <div className="origin-image" style={{ gridRow: 1 }}>
            <img src={productImg} alt="Garrafa de Hidromel Laurelin em um bar" />
          </div>

        </div>
      </section>

      <section id="historia" className="history-section">
        <div className="history-header">
          <div className="section-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          </div>
          <h2 className="history-title">História Milenar</h2>
          <p className='history-subtitle'>Descubra os marcos mais importantes na história do hidromel</p>
        </div>

        <div className="timeline-grid">
          {/* Item 1 */}
          <div className="timeline-item">
            <div className="timeline-number">1</div>
            <div className="timeline-content">
              <span className="timeline-epoch">9.000 a.C.</span>
              <h3>Origem na China Antiga</h3>
              <p>Primeiras evidências de produção de hidromel na China, quando a fermentação de mel com água era usada para criar bebidas rituais.</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="timeline-item">
            <div className="timeline-number">2</div>
            <div className="timeline-content">
              <span className="timeline-epoch">3.000 a.C.</span>
              <h3>Egito Antigo</h3>
              <p>Egípcios refinam a produção de hidromel, adicionando especiarias e ervas. A bebida se torna símbolo de celebrações e rituais.</p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="timeline-item">
            <div className="timeline-number">3</div>
            <div className="timeline-content">
              <span className="timeline-epoch">1.000 d.C.</span>
              <h3>Idade Média Europeia</h3>
              <p>Hidromel torna-se a bebida preferida da nobreza europeia. Monges aperfeiçoam receitas e técnicas de fermentação em mosteiros.</p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="timeline-item">
            <div className="timeline-number">4</div>
            <div className="timeline-content">
              <span className="timeline-epoch">Século XVI</span>
              <h3>Era de Ouro</h3>
              <p>Hidromel atinge seu pico de popularidade na Europa, sendo servido em cortes reais e celebrações importantes.</p>
            </div>
          </div>

          {/* Item 5 */}
          <div className="timeline-item">
            <div className="timeline-number">5</div>
            <div className="timeline-content">
              <span className="timeline-epoch">Século XVII-XVIII</span>
              <h3>Declínio Gradual</h3>
              <p>Vinho e cerveja ganham popularidade. Hidromel começa a perder espaço nas preferências das pessoas.</p>
            </div>
          </div>

          {/* Item 6 */}
          <div className="timeline-item">
            <div className="timeline-number">6</div>
            <div className="timeline-content">
              <span className="timeline-epoch">Século XXI</span>
              <h3>Renascimento Artesanal</h3>
              <p>Movimento de resgate das tradições ancestrais. Produtores artesanais como a Laurelin trazem o hidromel de volta com qualidade premium.</p>
            </div>
          </div>
        </div>

        <div className="history-footer">
          <img src={vikingImg} alt="Cultura e História do Hidromel" className="history-footer-img" />
        </div>
      </section>

      <section id="curiosidades" className="curiosities-section">
        <div className="section-header">
          <div className="curiosity-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
          </div>
          <h2 className="section-title curiosities-title">Curiosidades Fascinantes</h2>
          <p className="curiosities-subtitle">Descubra fatos surpreendentes sobre a bebida mais antiga do mundo</p>
        </div>

        <div className="curiosities-grid">
          {/* Card 1 */}
          <div className="curiosity-card">
            <div className="curiosity-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
            </div>
            <h3>Bebida Dos Deuses</h3>
            <p>Na mitologia grega, o hidromel era considerado a bebida dos deuses do Olimpo, símbolo de imortalidade e sabedoria.</p>
          </div>

          {/* Card 2 */}
          <div className="curiosity-card">
            <div className="curiosity-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <h3>Tradição Viking</h3>
            <p>Os Vikings acreditavam que o hidromel tinha propriedades mágicas e o consumiam em celebrações e rituais de guerra.</p>
          </div>

          {/* Card 3 */}
          <div className="curiosity-card">
            <div className="curiosity-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
            </div>
            <h3>Lua De Mel</h3>
            <p>O termo 'lua de mel' origina-se da tradição de casais receberem hidromel como presente de casamento na Idade Média.</p>
          </div>

          {/* Card 4 */}
          <div className="curiosity-card">
            <div className="curiosity-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.38 5.38 0 0 1-4.4 2.26 5.4 5.4 0 0 1-4.14-1.9 5.38 5.38 0 0 1 1.48-8.85A9 9 0 0 0 12 3Z"/></svg>
            </div>
            <h3>Afrodisíaco Natural</h3>
            <p>Historicamente, o hidromel era considerado um afrodisíaco poderoso e era servido em noites de núpcias.</p>
          </div>

          {/* Card 5 */}
          <div className="curiosity-card">
            <div className="curiosity-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
            </div>
            <h3>Envelhecimento Fino</h3>
            <p>Hidromel pode envelhecer por décadas, desenvolvendo complexidade e profundidade de sabor similares a vinhos premium.</p>
          </div>

          {/* Card 6 */}
          <div className="curiosity-card">
            <div className="curiosity-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z"/><path d="M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0"/></svg>
            </div>
            <h3>Versatilidade Única</h3>
            <p>Pode ser seco, doce, espumante ou envelhecido em madeira, oferecendo infinitas possibilidades de sabor.</p>
          </div>
        </div>
      </section>

      <section id="estilos" className="styles-section">
        <div className="section-header">
          <div className="section-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19c.7 0 1.2-.6 1.2-1.3V8.8c0-.4-.2-.8-.6-1L12 4 5.9 7.8c-.4.2-.6.6-.6 1v8.9c0 .7.5 1.3 1.2 1.3h11z"/><path d="M12 21v-8"/></svg>
          </div>
          <h2 className="style-title">Estilos De Hidromel</h2>
          <p className='style-subtitle'>Conheça as diferentes categorias e características de cada estilo</p>
        </div>

        <div className="styles-grid">
          {/* TRADICIONAL */}
          <div className="style-card">
            <div>
              <h3>Tradicional</h3>
              <p>Produzido apenas com mel, água e levedura. Sabor puro e equilibrado que destaca a qualidade do mel.</p>
            </div>
            <div className="style-tags">
              <span className="tag">Sabor Limpo</span>
              <span className="tag">Equilibrado</span>
              <span className="tag">Versátil</span>
            </div>
          </div>

          {/* MELOMEL */}
          <div className="style-card">
            <div>
              <h3>Melomel</h3>
              <p>Hidromel com adição de frutas (maçã, uva, morango, etc). Oferece complexidade e frescor.</p>
            </div>
            <div className="style-tags">
              <span className="tag">Frutas Naturais</span>
              <span className="tag">Complexo</span>
              <span className="tag">Refrescante</span>
            </div>
          </div>

          {/* METHEGLYN */}
          <div className="style-card">
            <div>
              <h3>Metheglyn</h3>
              <p>Enriquecido com especiarias, ervas e flores. Notas aromáticas sofisticadas e únicas.</p>
            </div>
            <div className="style-tags">
              <span className="tag">Especiarias</span>
              <span className="tag">Aromático</span>
              <span className="tag">Sofisticado</span>
            </div>
          </div>

          {/* SECO */}
          <div className="style-card">
            <div>
              <h3>Seco</h3>
              <p>Fermentação completa resulta em baixo teor de açúcar residual. Ideal para acompanhar refeições.</p>
            </div>
            <div className="style-tags">
              <span className="tag">Baixo Açúcar</span>
              <span className="tag">Elegante</span>
              <span className="tag">Gastronômico</span>
            </div>
          </div>

          {/* AMADEIRADO */}
          <div className="style-card">
            <div>
              <h3>Amadeirado</h3>
              <p>Envelhecido em barris de carvalho, desenvolvendo notas de madeira, caramelo e complexidade.</p>
            </div>
            <div className="style-tags">
              <span className="tag">Envelhecido</span>
              <span className="tag">Encorpado</span>
              <span className="tag">Premium</span>
            </div>
          </div>

          {/* SACK */}
          <div className="style-card">
            <div>
              <h3>Sack</h3>
              <p>Estilo premium com envelhecimento prolongado em carvalho. Sabor profundo e sofisticado.</p>
            </div>
            <div className="style-tags">
              <span className="tag">Luxuoso</span>
              <span className="tag">Complexo</span>
              <span className="tag">Envelhecido</span>
            </div>
          </div>
        </div>
      </section>      

      <section id="produto" className="product-showcase-section">
        <div className="product-showcase-container">
          
          <div className="product-showcase-header">
            <div className="section-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19c.7 0 1.2-.6 1.2-1.3V8.8c0-.4-.2-.8-.6-1L12 4 5.9 7.8c-.4.2-.6.6-.6 1v8.9c0 .7.5 1.3 1.2 1.3h11z"/><path d="M12 21v-8"/></svg>
            </div>
            <h2 className="product-showcase-title">Conheça Nosso Produto</h2>
            <p>Descubra a excelência do Hidromel Sack Laurelin - premium, envelhecido e sofisticado</p>
          </div>

          <div className="product-grid">
            {/* Lado Esquerdo: Imagem */}
            <div className="product-image-wrap">
              <img src={productHero} alt="Hidromel Sack Laurelin Premium" />
            </div>

            {/* Lado Direito: Informações Técnicas */}
            <div className="product-info-wrap">
              <h3 className="product-title">Hidromel Sack</h3>
              <p className="product-subtitle" style={{ color: 'var(--gold)', fontWeight: '600', marginBottom: '20px' }}>
                A Sofisticação do Mel Envelhecido em Carvalho
              </p>
              
              <p className="product-description">
                O Hidromel Sack Laurelin é uma criação premium que representa o ápice da arte de produzir hidromel. Produzido com méis selecionados e envelhecido em barris de primeira qualidade.
              </p>

          <div className="product-details-list">
            {/* Detalhe 1: Envelhecimento (Ícone de Barril/Tempo) */}
            <div className="product-detail-item">
              <div className="product-detail-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M2 12h20" />
                  <ellipse cx="12" cy="12" rx="10" ry="5" />
                  <ellipse cx="12" cy="12" rx="10" ry="5" transform="rotate(90 12 12)" />
                </svg>
              </div>
              <div className="product-detail-info">
                <h4>Envelhecimento Premium</h4>
                <p className="product-description">Envelhecido em barril, desenvolvendo notas complexas de mel tostado, caramelo e madeira.</p>
              </div>
            </div>

            {/* Detalhe 2: Teor/Qualidade (Ícone de Selo/Coroa) */}
            <div className="product-detail-item">
              <div className="product-detail-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
                </svg>
              </div>
              <div className="product-detail-info">
                <h4>Sabor Encorpado</h4>
                <p className="product-description">Com 14% de teor alcoólico, oferece corpo robusto e complexidade de sabores que evoluem a cada gole.</p>
              </div>
            </div>

            {/* Detalhe 3: Artesanal (Ícone de Mão/Criação) */}
            <div className="product-detail-item">
              <div className="product-detail-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div className="product-detail-info">
                <h4>Produção Artesanal</h4>
                <p className="product-description">Cada garrafa é produzida com dedicação e cuidado, respeitando métodos tradicionais de fermentação.</p>
              </div>
            </div>
          </div>

              <div className="product-specs">
                <span><span className="spec-label">Formato:</span> Garrafa 500ml</span>
                <span><span className="spec-label">Teor Alcoólico:</span> 14% vol</span>
              </div>

              <button className="product-cta-btn">Solicitar Informações</button>
            </div>
          </div>
        </div>
      </section>

    </div>
    
  );
}

export default App;