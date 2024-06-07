import React from 'react';
//import NavBar from './NavBar/NavBar';
import CaroselTopo from './CaroselTopo';
import Talents from './Talents';
import Carosellow from './Carosellow'
import Benefits from './Benefits';


const Home: React.FC = () => {
  return (
    <div>
      <CaroselTopo />
      <Talents />
      <Carosellow />
      <Benefits />
    </div>
  );
};

export default Home;
