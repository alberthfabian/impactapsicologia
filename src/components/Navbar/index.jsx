import React from 'react';
import { Li, Ul, P, StyledLink, Nav } from './Styled.jsx';

const Navbar = () => {
  return (
    <Nav>
      <Ul>
        <Li>
          <StyledLink to='/'>
            <P>Inicio</P> 
          </StyledLink>
        </Li>
        <Li>
          <StyledLink to='/'>
            <P>Selección</P> 
          </StyledLink>
        </Li>
        <Li>
          <StyledLink to='/'>
            <P>Bienestar</P> 
          </StyledLink>
        </Li>
        <Li>
          <StyledLink to='/'>
            <P>Formación y Capacitación</P> 
          </StyledLink>
        </Li>
        <Li>
          <StyledLink to='/'>
            <P>Consultoría</P> 
          </StyledLink>
        </Li>
      </Ul>
    </Nav>
  )
};

export default Navbar;