import styled from 'styled-components';
import { WHITE, BLACK, device } from '../../components/Styled';

export const Div = styled.div ` 
  text-align: center;
  img {
    width: 100%;
    height: 100%;
  }
  h3 {
    color: ${WHITE};
    font-family: 'Playfair Display',serif;
    @media ${device.mobileS} {
      position: absolute;
      top: 40px;
      font-size: 14px;
      padding: 30px;
    }
  }
  h1 {
    color: ${BLACK};
    font-family: 'Playfair Display',serif;
    @media ${device.mobileS} {
      position: absolute;
      top: 80px;
      font-size: 23px;
      padding: 30px;
    }
  }
`