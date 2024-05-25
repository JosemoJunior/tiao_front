//import React from 'react';
import './Home.css';
//import './ImageGallery.css'; 
import './TalentBenefits.css'; 
import './ArrowButton.css'; 
import BenefitsCard from '../components/card/BenefitsCard';

/**
 *  
// Componente ArrowButton
interface ArrowButtonProps {
    direction: 'left' | 'right'; // Especifica que direction pode ser 'left' ou 'right'
}
 
const ArrowButton: React.FC<ArrowButtonProps> = ({ direction }) => {
    return (
        <button className={`arrow-button ${direction}`}>
        <img
            src={`https://placehold.co/20x20`}
            alt={`${direction === 'left' ? 'Left' : 'Right'} Arrow`}
        />
        </button>
    );
};

// Componente ImageGallery 
// Teoricamente é pra ser usado antes do <TalentBenefits />
// Deve ter um jeito melhor de fazer Carrossel

 const ImageGallery = () => {
   return (
     <div className="image-gallery">
       <ArrowButton direction="left" />
       <div className="image-container">
         - images go here -
       </div>
       <ArrowButton direction="right" />
     </div>
   );
 };
 */


// Componente TalentBenefits
const TalentBenefits = () => {
  return (
    <div className="talent-benefits">
      <div className="benefits">
        <h3 className="benefits-title">Você é um desses talentos?</h3>
        <p className="benefits-description">
          Destaque suas habilidades e alcance novos clientes! Inscreva-se agora em nosso sistema
          para conectar-se a uma vasta rede de usuários em busca de talentos como o seu. Aumente sua
          visibilidade e oportunidades de negócio hoje mesmo.
        </p>
      </div>
      <div className="benefits-card-container">
        <BenefitsCard />
      </div>
    </div>
  );
};

// Componente TiaoComponent
const Home = () => {
  return (
    <div className="tiao-component">
      <div className="decorative-elements">
        <div className="element"></div>
        <div className="element"></div>
        <div className="element"></div>
      </div>
      <section className="main-section">
        <h2 className="section-title">Encontre talentos em diversas áreas em um só lugar!</h2>
        <p className="section-description">
          Nosso sistema conecta você a profissionais qualificados, prontos para atender às suas
          necessidades. Simplifique sua busca e contrate os melhores em apenas alguns cliques.
          Descubra como nossos serviços podem fazer a diferença para você.
        </p>
        {/* <ImageGallery /> */}
      </section>
      <section className="benefits-section">
        <TalentBenefits />
      </section>
    </div>
  );
};

export default Home;