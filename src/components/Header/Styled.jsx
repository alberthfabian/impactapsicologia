import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { WHITE, BLUE } from '../Styled'

export const Head = styled.header `
  display: flex;
  justify-content: space-between;
  height: 80px;
  background-color: ${BLUE};
  padding-left: 3%;
  padding-right: 3%;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: center;
    h1 {
      margin: 0px;
      font-family: 'Playfair Display', serif;
      color: ${WHITE};
    }
`;

export const Logo = styled.img `
  height: 70px;
  margin-left: 5%;
  margin-top: 5px;
  &:hover {
    height: 75px;
  }
`;