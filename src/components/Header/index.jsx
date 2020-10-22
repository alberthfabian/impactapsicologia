import React from 'react';
import Menu from '../Menu';
import logo from '../../assets/img/Logo.png';
import Navbar from '../Navbar';
import linkedIn from '../../assets/img/icons/linkedIn.png';
import facebook from '../../assets/img/icons/facebook.png';
import instagram from '../../assets/img/icons/Instagram.png';
import twitter from '../../assets/img/icons/Twitter.png';
import { Logo, Head, StyledLink, Social } from './Styled.jsx';

const Header = () => {
  return (
    <Head>
      <article>
        <StyledLink to='/'>
          <Logo src={logo} alt='Logo' />
          <h1>ImpactaPsicología</h1>
        </StyledLink>
      </article>
      <Menu/>
      <Navbar/>
      <Social>
        <img src={linkedIn} alt='LinkedIn'/>
        <img src={facebook} alt='Facebook'/>
        <img src={instagram} alt='Instagram'/>
        <img src={twitter} alt='Twitter'/>
      </Social>
    </Head>
  );
};

export default Header;