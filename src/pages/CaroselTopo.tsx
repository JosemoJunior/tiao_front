import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import imagem1 from '../assets/Professions/eletricista1.jpg';
import imagem2 from '../assets/Professions/pedreiro1.png';
import imagem3 from '../assets/Professions/encanador1.jpg';


const CaroselTopo: React.FC = () => {
  return (
    <Container fluid style={{ padding: 0, margin: 0 }}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imagem1}
            alt="Primeira imagem"
            style={{ maxHeight: '400px', objectFit: 'cover' }} 
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imagem2}
            alt="Segunda imagem"
            style={{ maxHeight: '400px', objectFit: 'cover' }} 
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imagem3}
            alt="Terceira imagem"
            style={{ maxHeight: '400px', objectFit: 'cover' }} 
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default CaroselTopo;
