import styled, { css } from 'styled-components'
import { device } from '../../utils/breakpoints'

export const SearchForm = styled.form`
  display: flex;
  > button {
    display: none;
  }
  > input {
    width: 100%;
    border: 1px solid transparent;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  @media ${device.tablet}{
    > button {
      display: inline;
    }
    > input {
      border: 1px solid #ccc;
      border-right: none;
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    }
  }
  ${props => props.hideSearchInput && css `
    input {
      display: none;
    }
    @media ${device.tablet}{
      input {
        display: block;
      }
    }
  `}
`

export const SearchFormWrapper = styled.div`
  width: 100%;
  > button {
    background-color: #fff;
    display: inline-block;
    position: absolute;
    top: 10px;
    left: 50px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    > svg {
      fill: var(--blue-brand);
    }
    &:hover:not(:disabled) {
      background-color: #fff;
    }
  }
  @media ${device.tablet}{
    margin-left: auto;
    width: auto;
    > button {
      display: none;
    }
  }
  ${props => props.hideSearchInput && css `
    > button {
      background-color: transparent;
      &:hover:not(:disabled) {
        background-color: transparent;
      }
    }
  `}
`