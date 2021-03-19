import styled from 'styled-components'
import { device } from '../../utils/breakpoints'

export const HeaderBrand = styled.div`
  width: 100%;
  height: 70px;
  > .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
  @media ${device.mobileL}{
    height: 100px;
  }
  @media ${device.tablet}{
    height: 150px;
  }
  @media ${device.laptop}{
    height: 250px;
  }
  @media ${device.desktop}{
    height: 300px;
  }
`