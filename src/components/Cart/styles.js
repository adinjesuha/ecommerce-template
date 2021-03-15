import styled from 'styled-components'
import { StyledLink } from '../StyledLink'

import { device } from '../../utils/breakpoints'

export const CartWrapper = styled(StyledLink).attrs(() => ({
  to: '/cart',
}))`
  color: black;
  text-decoration: none;
  width: 40px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  > div:last-child {
    padding-left: 8px;
    margin: auto 0;
  }
  > svg {
    fill: var(--blue-brand);
  }
  &:hover{
    text-decoration: underline;
  }
  @media ${device.tablet}{
    padding-left: 1rem;
  }
` 