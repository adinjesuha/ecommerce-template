import styled from 'styled-components'
import { device } from '../../utils/breakpoints'

export const HeaderBrand = styled.div`
  height: 100px;
  margin: 0 -20px;
  margin-bottom: 20px;
  > .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
  @media ${device.tablet}{
    height: 150px;
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    overflow: hidden;
    margin: 0 0 1.5rem 0;
  }
  @media ${device.laptop}{
    height: 250px;
  }
  @media ${device.desktop}{
    height: 300px;
  }
`