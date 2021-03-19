import { Link } from 'gatsby'
import styled from 'styled-components'
import { device } from '../../utils/breakpoints'

export const BrandSection = styled.div`
  margin-top: 3rem;
`

export const BrandsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`

export const Brand = styled(Link)`
  background-color: #fff;
  border: 1px solid #eee;
  margin-left: -.1rem;
  margin-bottom: -.1rem;
  padding: .3rem 0;
  position: relative;
  flex-basis: 33.33333%;
  max-width: 33.33333%;
  height: 120px;
  .gatsby-image-wrapper{
    vertical-align: middle;
    max-width: 100px;
    max-height: 95%;
    height: auto;
    margin: auto;
  }
  @media ${device.laptop}{
    flex-basis: 16.66667%;
    max-width: 16.66667%;
    &:hover{
      border-color: #ccc;
      box-shadow: inset 0 0 0 0.2rem #ccc;
    } 
  }
`
