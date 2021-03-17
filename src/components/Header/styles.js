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
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.2);
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  transition: all 200ms ${(props) => (props.show ? 'ease-in' : 'ease-out')};
  transform: ${(props) => (props.show ? 'none' : 'translate(0, -100%)')};
`;

export const Nav = styled.nav`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 10px 10px;
  max-width: 1360px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  justify-content: space-between;

  *:nth-child(3){
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
    > img {
      vertical-align: middle;
      width: 80px;
    }
    &:hover{
      text-decoration: underline;
    }
  }
  @media ${device.tablet}{
    padding: 10px 20px;
    > button {
      margin-right: 1rem;   
    }
    *:nth-child(3){
      order: initial;
    }
    ${StyledLink}{
      > img {
        width: 100px;
      }
      &:first-of-type{
        margin-right: 1.5rem;
      }
    }
  }
  @media ${device.laptop}{
    > button {
      display: none;
    }
  }
`