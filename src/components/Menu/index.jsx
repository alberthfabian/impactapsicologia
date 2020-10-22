import React from 'react';
import menu from '../../assets/img/icons/Menu.png';
import { useServer } from '../../context';
import { Div } from './Styled'; 

const Menu = () => {

  const { modal } = useServer();

  return (
    <Div>
       <button onClick={() => modal(true)}>
        <img src={menu} alt='Burger'/>
       </button> 
    </Div>
  )
};

export default Menu;