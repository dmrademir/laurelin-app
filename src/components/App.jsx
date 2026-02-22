import './assets/css/index-DflrhiSM.css';
import './assets/css/laurelin.css';
import laurelinLogo from './assets/images/laurelin-logo-new.png';
import hidromelSack from './assets/images/hidromel-sack-product.jpeg';
import historiaImg from './assets/images/hvDkt1dzTGj2aQCzgoje5l-img-2_1770765702000_na1fn_aGlzdG9yeS1hbmNpZW50LW1lYWQ.png';
import ingredientesImg from './assets/images/hvDkt1dzTGj2aQCzgoje5l-img-3_1770765699000_na1fn_aW5ncmVkaWVudHMtaG9uZXktYmVlcw.png';
import pairingImg from './assets/images/hvDkt1dzTGj2aQCzgoje5l-img-5_1770765702000_na1fn_cGFpcmluZy1mb29kLWNoZWVzZQ.png';

function App() {
  return (
    <>
      <section aria-label="Notifications alt+T" tabIndex="-1" aria-live="polite" aria-relevant="additions text"
        aria-atomic="false"></section>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
          <div className="hidden md:block container mx-auto px-6 py-4 border-b border-border/50">
            <div className="flex items-center justify-center"><a href="#"
              className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"><img
                alt="Laurelin Logo" className="h-14 w-14 object-contain glow-gold"
                src={laurelinLogo} /><span
                  className="text-3xl font-bold text-gradient">LAURELIN</span></a>
            </div>
          </div>
          <div className="hidden md:block container mx-auto px-6 py-4">
            <div className="flex items-center justify-center gap-8"><a
              href="#laurelin"
              className="text-sm hover:text-primary transition-colors">Laurelin</a><a
                href="#historia"
                className="text-sm hover:text-primary transition-colors">Historia</a><a
                  href="#curiosidades"
                  className="text-sm hover:text-primary transition-colors">Curiosidades</a><a
                    href="#estilos"
                    className="text-sm hover:text-primary transition-colors">Estilos</a><a
                      href="#produto"
                      className="text-sm hover:text-primary transition-colors">Produto</a><a
                        href="#harmonizacoes"
                        className="text-sm hover:text-primary transition-colors">Harmonizacoes</a><a
                          href="#drinks"
                          className="text-sm hover:text-primary transition-colors">Drinks</a><a
                            href="#contato"
                            className="text-sm hover:text-primary transition-colors">Contato</a></div>
          </div>
          <div className="md:hidden container mx-auto px-6 py-4">
            <div className="flex items-center justify-center"><a
              href="#"
              className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"><img
                alt="Laurelin Logo" className="h-12 w-12 object-contain glow-gold"
                src={laurelinLogo} /><span
                  className="text-2xl font-bold text-gradient">LAURELIN</span></a>
            </div>
          </div>
          <div
            className="md:hidden container mx-auto px-6 py-3 border-t border-border transition-all duration-300 overflow-hidden max-h-40 opacity-100">
            <div className="flex flex-wrap gap-2 justify-center"><a
              href="#laurelin"
              className="text-xs px-3 py-1 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-full transition-colors">Laurelin</a><a
                href="#historia"
                className="text-xs px-3 py-1 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-full transition-colors">Historia</a><a
                  href="#curiosidades"
                  className="text-xs px-3 py-1 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-full transition-colors">Curiosidades</a><a
                    href="#estilos"
                    className="text-xs px-3 py-1 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-full transition-colors">Estilos</a><a
                      href="#produto"
                      className="text-xs px-3 py-1 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-full transition-colors">Produto</a><a
                        href="#harmonizacoes"
                        className="text-xs px-3 py-1 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-full transition-colors">Harmonizacoes</a><a
                          href="#drinks"
                          className="text-xs px-3 py-1 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-full transition-colors">Drinks</a><a
                            href="#contato"
                            className="text-xs px-3 py-1 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-full transition-colors">Contato</a>
            </div>
          </div>
        </nav>
        <section
          className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{ backgroundImage: "url('https://private-us-east-1.manuscdn.com/sessionFile/uah81WvfdWm61vp5eSYUeY/sandbox/hvDkt1dzTGj2aQCzgoje5l-img-1_1770765704000_na1fn_aGVyby1oaWRyb21lbC1nb2xkZW4.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdWFoODFXdmZkV202MXZwNWVTWVVlWS9zYW5kYm94L2h2RGt0MWR6VEdqMmFRQ3pnb2plNWwtaW1nLTFfMTc3MDc2NTcwNDAwMF9uYTFmbl9hR1Z5Ynkxb2FXUnliMjFsYkMxbmIyeGtaVzQucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=f3~Bjcfxx7m3cbr15HcOhW0XKCaSwKweG5MkmohwdX6sZW5zo1BLxWXkYatKBcVkDPtp1AusjBhPoeLLI-7jaHeLHpN82tqgmLJKVDtaUikDcG8cmDNUWrgeTK-2KmQHq8Vf53JZD5VXobrLVGB3orS6h3jcu~N8FINa6qdRPzQEc7XRMFcRj34zXlmEEOn7qeavgSAPhwU6NWcwML4s0zE89Ed0hcPf8YmsWiLvAtcStzdmD4FZDPV6YAIZpoMk843rTe9YbFxLOhBBumrDerWiFrkknNsQXaB5A5b0ROpdJCU8MXWj6LaQtHQTGyNCayYsy2Bc4a4Dw7UoIyxbpw__')" }}>
          </div>
          <div
            className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background"></div>
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <div className="mb-8 animate-fade-in"><svg
              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="lucide lucide-crown w-20 h-20 text-primary mx-auto mb-6 animate-pulse">
              <path
                d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z">
              </path>
              <path d="M5 21h14"></path>
            </svg></div>
            <h1
              className="text-6xl md:text-7xl font-bold mb-6 text-gradient animate-slide-up">A Bebida dos Deuses</h1>
            <p
              className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Descubra o hidromel, a bebida alcoólica mais antiga do mundo, com mais de 9.000 anos de história milenar</p>
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*=&#39;size-&#39;])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-10 rounded-md px-6 has-[&gt;svg]:px-4 bg-primary text-primary-foreground hover:bg-primary/90 glow-gold font-semibold animate-slide-up"
              style={{ animationDelay: '0.2s' }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round" className="lucide lucide-book-open mr-2 h-5 w-5">
                <path d="M12 7v14"></path>
                <path
                  d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z">
                </path>
              </svg>Descubra Nossa História</button>
            <div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block"><svg
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-message-circle w-6 h-6 text-primary/50">
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
              </svg></div>
          </div>
        </section>
        <section className="py-24 bg-card/30">
          <div className="container px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-up">
                <div className="relative"><img
                  alt="Mel e abelhas" className="rounded-lg shadow-2xl glow-gold"
                  src={ingredientesImg} />
                </div>
              </div>
              <div className="animate-slide-up"><svg
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-wine w-12 h-12 text-primary mb-4">
                <path d="M8 22h8"></path>
                <path d="M7 10h10"></path>
                <path d="M12 15v7"></path>
                <path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"></path>
              </svg>
                <h2 className="text-5xl font-bold mb-6 text-gradient">O Que é
                  Hidromel?</h2>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">O
                  hidromel é uma bebida alcoólica fermentada cuja maior parcela dos açúcares provém do mel. Conhecido como
                  o <span className="text-primary font-semibold">"néctar dos
                    deuses"</span>, é considerado a bebida alcoólica mais antiga do mundo, com evidências que remontam a
                  9.000 anos atrás na China.</p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Produzido através da fermentação de mel, água e leveduras, o hidromel pode ter teor alcoólico variando
                  de 4% a 20%. Sua versatilidade permite a adição de frutas, especiarias, ervas e flores, criando uma
                  infinidade de estilos e sabores únicos.</p>
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div
                    className="text-center p-4 bg-card rounded-lg border border-border"><svg
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className="lucide lucide-leaf w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-2">
                      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                    </svg>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Ingredientes Naturais</p>
                  </div>
                  <div
                    className="text-center p-4 bg-card rounded-lg border border-border"><svg
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className="lucide lucide-sparkles w-8 h-8 text-primary mx-auto mb-2">
                      <path
                        d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z">
                      </path>
                      <path d="M20 3v4"></path>
                      <path d="M22 5h-4"></path>
                      <path d="M4 17v2"></path>
                      <path d="M5 18H3"></path>
                    </svg>
                    <p className="text-sm text-muted-foreground">9.000 Anos</p>
                  </div>
                  <div
                    className="text-center p-4 bg-card rounded-lg border border-border"><svg
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      className="lucide lucide-glass-water w-8 h-8 text-primary mx-auto mb-2">
                      <path d="M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z"></path>
                      <path d="M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0"></path>
                    </svg>
                    <p className="text-sm text-muted-foreground">4% a 20% ABV</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="laurelin" className="py-24">
          <div className="container px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-up"><img
                alt="Hidromel Sack Laurelin"
                className="rounded-lg shadow-2xl glow-gold w-full"
                src={hidromelSack} /></div>
              <div className="animate-slide-up">
                <h2 className="text-5xl font-bold mb-6 text-gradient">A Origem da
                  Laurelin</h2>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">A
                  história da Laurelin tem início muito antes de sua formalização como marca. Ela nasce da tradição, da
                  experimentação e do respeito ao tempo.</p>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">O
                  primeiro contato de Nicolas Lavitschka com o hidromel ocorreu ainda durante o ensino médio, quando
                  passou a produzi-lo artesanalmente ao lado de familiares e amigos próximos. A base da produção era uma
                  antiga receita de família, um método tradicional utilizado pelo avó de um dos envolvidos.</p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Anos mais tarde, em um novo momento de vida e maturidade profissional, a ideia foi retomada. Nicolas
                  voltou a estudar, testar e aperfeiçoar receitas, agora com foco técnico, padronização de processos e
                  consistência sensorial. Nesse estágio, tornou-se evidente que o projeto demandava uma parceria sólida.
                  Foi então que Nicolas encontrou em Jonnathan o sócio ideal, alguém alinhado aos mesmos valores, com
                  visão de longo prazo e comprometimento com a construção de algo duradouro.</p>
                <p className="text-lg text-primary font-semibold">Assim nasce
                  oficialmente a Laurelin: uma marca construída sobre tradição, paciência, técnica e propósito.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="historia" className="py-24 bg-card/30">
          <div className="container px-6">
            <div className="text-center mb-16 animate-slide-up"><svg
              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="lucide lucide-clock w-12 h-12 text-primary mx-auto mb-4">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
              <h2 className="text-5xl font-bold mb-4 text-gradient">História Milenar
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Descubra
                os marcos mais importantes na história do hidromel</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="animate-slide-up" style={{ animationDelay: '0s' }}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div
                      className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20 border border-primary/30">
                      <span className="text-primary font-bold text-sm">1</span></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-primary font-semibold text-sm">9.000 a.C.</p>
                    <h3 className="text-lg font-bold mb-2">Origem na China Antiga
                    </h3>
                    <p className="text-muted-foreground">Primeiras evidências de
                      produção de hidromel na China, quando a fermentação de mel com água era usada para criar bebidas
                      rituais.</p>
                  </div>
                </div>
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div
                      className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20 border border-primary/30">
                      <span className="text-primary font-bold text-sm">2</span></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-primary font-semibold text-sm">3.000 a.C.</p>
                    <h3 className="text-lg font-bold mb-2">Egito Antigo</h3>
                    <p className="text-muted-foreground">Egípcios refinam a produção
                      de hidromel, adicionando especiarias e ervas. A bebida se torna símbolo de celebrações e rituais.
                    </p>
                  </div>
                </div>
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div
                      className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20 border border-primary/30">
                      <span className="text-primary font-bold text-sm">3</span></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-primary font-semibold text-sm">1.000 d.C.</p>
                    <h3 className="text-lg font-bold mb-2">Idade Média Europeia</h3>
                    <p className="text-muted-foreground">Hidromel torna-se a bebida
                      preferida da nobreza europeia. Monges aperfeiçoam receitas e técnicas de fermentação em mosteiros.
                    </p>
                  </div>
                </div>
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div
                      className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20 border border-primary/30">
                      <span className="text-primary font-bold text-sm">4</span></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-primary font-semibold text-sm">Século XVI</p>
                    <h3 className="text-lg font-bold mb-2">Era de Ouro</h3>
                    <p className="text-muted-foreground">Hidromel atinge seu pico de
                      popularidade na Europa, sendo servido em cortes reais e celebrações importantes.</p>
                  </div>
                </div>
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div
                      className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20 border border-primary/30">
                      <span className="text-primary font-bold text-sm">5</span></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-primary font-semibold text-sm">Século
                      XVII-XVIII</p>
                    <h3 className="text-lg font-bold mb-2">Declínio Gradual</h3>
                    <p className="text-muted-foreground">Vinho e cerveja ganham
                      popularidade. Hidromel começa a perder espaço nas preferências das pessoas.</p>
                  </div>
                </div>
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div
                      className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20 border border-primary/30">
                      <span className="text-primary font-bold text-sm">6</span></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-primary font-semibold text-sm">Século XXI</p>
                    <h3 className="text-lg font-bold mb-2">Renascimento Artesanal
                    </h3>
                    <p className="text-muted-foreground">Movimento de resgate das
                      tradições ancestrais. Produtores artesanais como a Laurelin trazem o hidromel de volta com qualidade
                      premium.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 animate-slide-up"><img
              alt="Vikings celebrando com hidromel"
              className="rounded-lg shadow-2xl w-full max-w-3xl mx-auto glow-gold"
              src={historiaImg} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;