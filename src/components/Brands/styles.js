import { Link } from 'gatsby'
import styled from 'styled-components'
import { device } from '../../utils/breakpoints'

export const BrandsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  > h3 {
    font-weight: 300;
    display: block;
    width: 100%;
    margin-top: 0;
  }
`

export const Brand = styled(Link)`
  background-color: #fff;
  border: 1px solid #eee;
  margin-left: -1px;
  margin-bottom: -1px;
  padding: .3rem 0;
  position: relative;
  flex-basis: 50%;
  max-width: 50%;
  height: 120px;
  .gatsby-image-wrapper{
    vertical-align: middle;
    max-width: 100px;
    max-height: 95%;
    height: auto;
    margin: auto;
  }
  @media ${device.tablet}{
    flex-basis: 33.33333%;
    max-width: 33.33333%;
    &:hover{
      border-color: #ccc;
      box-shadow: inset 0 0 0 0.2rem #ccc;
    } 
  }
  @media ${device.laptop}{
    flex-basis: 16.66667%;
    max-width: 16.66667%;
  }
`
