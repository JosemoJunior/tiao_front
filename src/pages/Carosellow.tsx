import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import Prof_1 from '../assets/Professions/Prof_1.jpg';
import Prof_2 from '../assets/Professions/Prof_2.jpg';
import Prof_3 from '../assets/Professions/Prof_3.jpg';
import Prof_4 from '../assets/Professions/Prof_4.jpg';
import Prof_5 from '../assets/Professions/Prof_5.jpg';
import Prof_6 from '../assets/Professions/Prof_6.jpg';
import Prof_7 from '../assets/Professions/Prof_7.jpg';
import Prof_8 from '../assets/Professions/Prof_8.jpg';
import Prof_9 from '../assets/Professions/Prof_9.jpg';
import Prof_10 from '../assets/Professions/Prof_10.jpg';
import Prof_11 from '../assets/Professions/Prof_11.jpg';
import Prof_12 from '../assets/Professions/Prof_12.jpeg';

const images = [
  Prof_1, Prof_2, Prof_3, Prof_4, Prof_5, Prof_6,
  Prof_7, Prof_8, Prof_9, Prof_10, Prof_11, Prof_12
];

const CaroselLow: React.FC = () => {
  const chunkSize = 6;
  const imageGroups = [];

  for (let i = 0; i < images.length; i += chunkSize) {
    imageGroups.push(images.slice(i, i + chunkSize));
  }

  return (
    <div className="custom-carousel">
      <style>
        {`
          .custom-carousel .carousel-control-prev,
          .custom-carousel .carousel-control-next {
            left: -95px;
            right: auto;
            background: none;
            border: none;
            color: #ff0000; 
          }

          .custom-carousel .carousel-control-next {
            left: auto;
            right: -95px;
          }

          .custom-carousel .carousel-control-prev-icon, .custom-carousel .carousel-control-next-icon {
            filter: invert(100%); 
          }
        `}
      </style>
      <Carousel
        className="custom-carousel"
        style={{ width: '100%', maxWidth: '1200px', margin: '30px auto 0' }} 
        interval={null}
        indicators={false}
        slide={true}
        pause={false}
        prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
        nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
      >
        {imageGroups.map((group, index) => (
          <Carousel.Item key={index}>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '24px' }}>
              {group.map((image, subIndex) => (
                <img key={subIndex} src={image} alt={`Imagem ${subIndex + 1}`} style={{ width: '180px', height: '180px', margin: '0 10px' }} />
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CaroselLow;
