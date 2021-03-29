import styled from 'styled-components'
import { device } from '../../utils/breakpoints'

export const LogoWrapper = styled.div`
  width: 80px;
  svg {
    .st0{
      fill: #F04359;
    }
    .st1{
      fill: #FFFFFF;
    }
    .st2{
      fill: #222649;
    }
  }
  @media ${device.tablet}{
    width: 100px;
  }
`