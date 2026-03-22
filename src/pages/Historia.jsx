import React from 'react';
import productImg from '../assets/images/hidromel-sack-product.jpeg';
import vikingImg from '../assets/images/hvDkt1dzTGj2aQCzgoje5l-img-2_1770765702000_na1fn_aGlzdG9yeS1hbmNpZW50LW1lYWQ.png';

export default function Historia() {
	return (
		<>
		<section className="origin-section">
		<div className="origin-container">

		{/* Imagem do Produto à Esquerda */}
		<div className="origin-image">
		<img src={productImg} alt="Garrafa de Hidromel Laurelin em um bar" />
		</div>

		
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
		</>
	);
}
