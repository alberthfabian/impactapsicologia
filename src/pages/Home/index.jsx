import React from 'react';
import landscape from '../../assets/img/Background.jpg';
import { Div } from './Styled';

const Home = () => {
  return (
    <Div>
      <img src={landscape} alt='Landscape'/>
      <h3>Clima laboral, productividad, gestión del cambio, adaptabilidad, impacto social</h3>
      <h1>¡Por que tu empresa lo vale, impacta en tus procesos!</h1>
    </Div>
  )
};

export default Home;