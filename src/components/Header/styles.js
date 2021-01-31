import styled from 'styled-components'
import { StyledLink } from '../StyledLink'

export const HeaderWrapper = styled.header`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 10px 20px;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  ${StyledLink}{
    color: black;
    text-decoration: none;
    &:first-of-type{
      margin-right: 1.5rem;
    }
    &:hover{
      text-decoration: underline;
    }
  }
`