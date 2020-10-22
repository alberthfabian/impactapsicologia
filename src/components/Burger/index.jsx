import React from 'react';
import { useServer } from '../../context';
import NavbarMobile from '../NavbarMobile';
import cross from '../../assets/img/icons/Cross.png';
import { Div, Section, Article } from './Styled';

const Burger = () => {

  const { menu, modal } = useServer();

  return (
    <>
      {menu === false ?
        <Article>
          <Section>
            <div>
              <button onClick={() => modal(false)}>
                <img src={cross} alt='Cross'/>
              </button>
            </div>
            <NavbarMobile/>
          </Section>
        </Article> :
        <Div onClick={() => modal(false)}>
          <Section>
            <div>
              <button onClick={() => modal(false)}>
                <img src={cross} alt='Cross'/>
              </button>
            </div>
            <NavbarMobile/>
          </Section>
        </Div> 
      }
    </>
  )
};

export default Burger;