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

export const CartCount = styled.span`
  display: block;
  position: absolute;
  top: 0;
  right: -6px;
  opacity: ${props => props.isVisible ? '1' : '0'};
  &:after{
    content: attr(data-header-cart-count);
    display: block;
    height: 22px;
    min-width: 22px;
    padding: 3px;
    font-size: 0.6875rem;
    line-height: 12px;
    color: white;
    text-align: center;
    text-decoration: none;
    background-color: var(--red-brand);
    border: 2px solid white;
    border-radius: 50%;
  }
  @media ${device.tablet}{
    right: -14px;
  }
`