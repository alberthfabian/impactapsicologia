import React from 'react';
import { Li, Ul, P, StyledLink } from './Styled.jsx';

const NavbarMobile = () => { 
  return (
    <nav>
      <Ul>
        <Li>
          <StyledLink to='/'>
            <P>Inicio</P> 
          </StyledLink>
        </Li>
        <Li>
          <StyledLink to='/about'>
            <P>Selección</P> 
          </StyledLink>
        </Li>
        <Li>
          <StyledLink to='/projects'>
            <P>Bienestar</P> 
          </StyledLink>
        </Li>
        <Li>
          <StyledLink to='/skills'>
            <P>Formación y Capacitación</P> 
          </StyledLink>
        </Li>
        <Li>
          <StyledLink to='/certificates'>
            <P>Consultoría</P> 
          </StyledLink>
        </Li>
      </Ul>
    </nav>
  )
};

export default NavbarMobile;