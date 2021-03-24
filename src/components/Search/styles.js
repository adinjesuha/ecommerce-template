import styled, { css } from 'styled-components'
import { device } from '../../utils/breakpoints'

export const SearchFormWrapper = styled.div`
  background-color: var(--red-brand);
  margin-left: -20px;
  margin-bottom: -11px;
  margin-right: -20px;
  padding: ${props => props.hideSearchInput ? '0' : '10px'};;
  width: calc(100% + 40px);
  height: ${props => props.hideSearchInput ? 'auto' : '64px'};
  > button {
    background-color: ${props => props.hideSearchInput ? '#fff' : 'var(--red-brand)'};
    margin-left: 10px;
    display: inline-block;
    position: absolute;
    top: 10px;
    left: 50px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    > svg {
      fill: var(--blue-brand);
    }
    &:hover:not(:disabled){
      background-color: ${props => props.hideSearchInput ? '#fff' : 'var(--red-brand)'};
    }
  }
  @media ${device.tablet}{
    background-color: transparent;
    padding: 0;
    margin-left: auto;
    margin-right: 0;
    margin-bottom: 0;
    width: auto;
    height: auto;
    > button {
      display: none;
    }
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