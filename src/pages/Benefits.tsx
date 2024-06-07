import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'; 

const Benefits: React.FC = () => {
    return (
        <div className="container" style={{ maxWidth: '1300px', margin: '130px auto 0', padding: '0 20px', fontFamily: 'Roboto, sans-serif' }}>
            <div className="row">
                <div className="col-md-6" style={{ marginBottom: '20px' }}>
                    <h2 style={{ fontSize: '28px', fontWeight: '700', lineHeight: '32.81px', color: '#525252' }}>Você é um desses talentos?</h2>
                    <p style={{ fontSize: '20px', fontWeight: '400', lineHeight: '28px', color: '#323232' }}>Destaque suas habilidades e alcance novos clientes! Inscreva-se agora em nosso sistema para conectar-se a uma vasta rede de usuários em busca de talentos como o seu. Aumente sua visibilidade e oportunidades de negócio hoje mesmo.</p>
                </div>
                <div className="col-md-6" style={{ 
                    width: '430px',
                    height: '295px',
                    padding: '32px 20px',
                    gap: '5px',
                    borderRadius: '15px',
                    background: '#FFFFFF', 
                    boxShadow: '0px 2px 12px rgba(50, 50, 50, 0.25)',
                    transform: 'translateX(140px)', 
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <h2 style={{ fontSize: '24px', fontWeight: '600', lineHeight: '23.44px', color: '#393939', textAlign: 'center' }}>Benefícios para profissionais</h2>
                    <ul style={{ paddingLeft: '20px', margin: '20px 0 0 0', fontSize: '18px', fontWeight: '500', lineHeight:'18.75px', color: '#393939', textAlign: 'left', listStyleType: 'none' }}> 
                        <li style={{ marginBottom: '17px', display: 'flex', alignItems: 'center' }}><FontAwesomeIcon icon={faCircleCheck} style={{ marginRight: '15px', color: '#002d72' }} /> Visibilidade ampliada em mercado online;</li>
                        <li style={{ marginBottom: '17px', display: 'flex', alignItems: 'center' }}><FontAwesomeIcon icon={faCircleCheck} style={{ marginRight: '15px', color: '#002d72' }} /> Acesso a oportunidades de trabalho;</li>
                        <li style={{ marginBottom: '17px', display: 'flex', alignItems: 'center' }}><FontAwesomeIcon icon={faCircleCheck} style={{ marginRight: '15px', color: '#002d72' }} /> Facilidade de gerenciamento de clientes;</li>
                        <li style={{ marginBottom: '17px', display: 'flex', alignItems: 'center' }}><FontAwesomeIcon icon={faCircleCheck} style={{ marginRight: '15px', color: '#002d72' }} /> Feedbacks e avaliações dos clientes;</li>
                        <li style={{ marginBottom: '17px', display: 'flex', alignItems: 'center' }}><FontAwesomeIcon icon={faCircleCheck} style={{ marginRight: '10px', color: '#002d72' }} /> Promoção da sua marca pessoal</li>
                    </ul>
                </div>
            </div>
            <div style={{ marginBottom: '20px' }}></div>
        </div>
    );
};

export default Benefits;
