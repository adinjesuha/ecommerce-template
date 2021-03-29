import styled from 'styled-components'
import { StyledLink } from '../StyledLink'
import { device } from '../../utils/breakpoints';


const HeaderBase = styled.header`
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1030;
`

export const HeaderWrapper = styled(HeaderBase)`
  border-bottom: 1px solid #eee;
  z-index: 5000;
  position: sticky;
  top: 0px;
  left: 0px;
  right: 0px;
`;

export const Nav = styled.nav`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 5px 10px;
  max-width: 1220px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  justify-content: space-between;

  *:nth-child(4){
    order: 4;
  }
  
  > button {
    background: #fff;
    &:hover:not(:disabled){
      background: #fff;
    }
  }

  ${StyledLink}{
    color: var(--blue-brand);
    text-decoration: none;
    &:hover{
      text-decoration: underline;
    }
  }
  @media ${device.tablet}{
    padding: 10px 20px;
    > button:first-of-type {
      margin-right: 1rem;   
    }
    *:nth-child(4){
      order: initial;
    }
  }
  @media ${device.laptop}{
    > button:first-of-type {
      display: none;
    }
  }
`