import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { WHITE, ROSEWOOD, device} from '../Styled';

export const StyledLink = styled(Link)`
  text-decoration: none;
`

export const Li = styled.li `
  list-style:none;
  margin-left: 10px;
`

export const Ul = styled.ul `
  display: flex;
`

export const P = styled.p `
  color: ${WHITE};
  font-family: 'Playfair Display', serif;

  &:hover {
    color: ${ROSEWOOD};
  }
`

export const Nav = styled.nav `
@media ${device.mobileS} { 
  display: none;
}

@media ${device.laptop} { 
  display: block;
}
`