import styled from 'styled-components'
import { device } from '../../utils/breakpoints'

export const CollectionTileWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  > a {
    width: 100%;
    .gatsby-image-wrapper{
      width: 100%;
    }
  }
  @media ${device.tablet}{
    flex-basis: 50%;
    max-width: 50%;
    padding-right: 0.8rem;
    padding-left: 0.8rem;
  }
`