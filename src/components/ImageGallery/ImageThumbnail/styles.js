import styled from 'styled-components'
import { device } from '../../../utils/breakpoints'

export const ImageThumbNailWrapper = styled.div`
  width: 100%;
  height: 230px;
  .gatsby-image-wrapper{
    height: 100%;
    margin: 0 !important;
  }
  @media ${device.mobile}{
    padding: 4px;
    height: 60px;
    width: 60px;
    cursor: pointer;
    border: 1px solid ${props => props.isActive ? 'var(--red-brand)' : '#ddd'};
    border-radius: 4px;
  }
`