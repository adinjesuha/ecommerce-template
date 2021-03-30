import styled from 'styled-components'
import { device } from '../../utils/breakpoints'

export const SearchFormWrapper = styled.div`
  width: 100%;
  padding: 0 10px;
  position: absolute;
  left: 0;
  z-index: 10;
  > button {
    position: absolute;
    top: ${props => props.openSearchInput ? '0px' : '-22px'};
    right: ${props => props.openSearchInput ? '10px' : '58px'};
    background: none;
    &:hover{
      background: none !important;
    }
  }
  @media ${device.tablet}{
    width: auto;
    margin-left: auto;
    position: initial;
    padding: 0;
    > button {
      display: none;
    }
  }
`

export const SearchForm = styled.form`
  display: flex;
  display: ${props => props.openSearchInput ? 'block' : 'none'};
  > div {
    width: 100%;
    position: relative;
    > svg {
      pointer-events: none;
      display: block;
      position: absolute;
      width: 24px;
      height: 24px;
      top: calc(50% - 12px);
      left: 10px;
    }
    > input {
      width: 100%;
      font-size: 0.875rem;
      color: rgb(18, 34, 46);
      background-color: rgb(243, 243, 245);
      border: 2px solid rgb(243, 243, 245);
      border-radius: 4px;
      padding: 8px 14px 8px 36px;
      height: 44px;
      text-transform: capitalize;
      &::placeholder{
        text-transform: uppercase;
      }
    }
  }
  @media ${device.tablet}{
    > div {
      width: auto;
      > input {
        height: auto;
      }
    }
  }
`