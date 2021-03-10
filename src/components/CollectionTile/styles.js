import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { StyledLink } from '../StyledLink'

export const CollectionTileWrapper = styled(BackgroundImage)`
  height: ${props => props.featured ? '420px' : '520px'};
  max-height: 100vh;
  display: flex;
  position: relative;
  margin-bottom: 40px;
  ${StyledLink}{
    padding: 0 10px;
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,0.5);
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: background-color .3s ease;
    &:hover{
      color: white;
      background: rgba(0,0,0,0.8);
    }
  }
`

export const Title = styled.div`
  color: #fff;
  padding: 5px 10px;
  margin-bottom: 5px;
  display: inline-block;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: bold;
`