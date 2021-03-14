import styled from 'styled-components'
import { device } from '../../utils/breakpoints'

export const ImageGalleryWrapper = styled.section`
  .selected-image{
    height: 320px;
    margin-bottom: 1rem;
    display: none;
    .gatsby-image-wrapper{
      height: 100%;
    }
  }
  @media ${device.mobile}{
    .selected-image{
      height: 500px;
      display: block;
      width: 100%;
    }
  }
` 