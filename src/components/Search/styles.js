import styled, { css } from 'styled-components'
import { device } from '../../utils/breakpoints'

export const SearchFormWrapper = styled.div`
  width: 100%;
  @media ${device.tablet}{
    width: auto;
    margin-left: auto;
  }
`

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