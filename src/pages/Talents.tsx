import React from 'react';

const Talents: React.FC = () => {
  return (
    <div style={{ position: 'relative', fontFamily: 'Roboto, sans-serif', marginTop: '60px' }}> 
      <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '0px',
        gap: '16px',
        width: '100%', 
        maxWidth: '1200px', 
        margin: '0 auto', 
        left: '83px', 
        top: '488px' 
      }}>
        <h2 style={{ 
          margin: 0,
          fontSize: '28px',
          fontWeight: '700',
          lineHeight:'32.81px',
          color: '#323232' 
        }}>
          Encontre talentos em diversas áreas em um só lugar!
        </h2>
        <p style={{ 
          margin: 0,
          fontSize: '20px',
          fontWeight:'400',
          lineHeight:'23.44px',
          color: '#323232'
        }}>
          Nosso sistema conecta você a profissionais qualificados, prontos para atender às suas necessidades. Simplifique sua busca e contrate os melhores em apenas alguns cliques. Descubra como nossos serviços podem fazer a diferença para você.
        </p>
      </div>
    </div>
  );
};

export default Talents;
