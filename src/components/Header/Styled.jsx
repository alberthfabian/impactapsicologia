import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { WHITE, BLUE, device } from '../Styled';

export const Head = styled.header `
  display: flex;
  @media ${device.mobileS} {
    justify-content: space-between;
  }
  @media ${device.laptop} {
    justify-content: space-around;
  }
  background-color: ${BLUE};
  article {
    display: flex;
  }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: center;
    h1 {
      margin: 0px;
      font-family: 'Playfair Display', serif;
      color: ${WHITE};
      margin-left: -15px;
      @media ${device.mobileS} {
        display: none;
      }
      @media ${device.mobileM} {
        display: flex;
      }
    }
`;

export const Logo = styled.img `
  height: 70px;
`;

export const Social = styled.div ` 
  align-items: center;
  img {
    width: 30px;
    height: 30px;
    margin-left: 10px;
  }
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.laptop} {
    display: flex;
  }
`