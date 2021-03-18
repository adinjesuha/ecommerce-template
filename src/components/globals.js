import styled, { css, createGlobalStyle } from 'styled-components'
import reset from "styled-reset"

export const GlobalStyle = createGlobalStyle`
  ${reset}
  select{
    height: 40px;
    font-size: 16px;
  }
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body{
    font-family: 'Open Sans', sans-serif;
    line-height: 1.2;
  }
  strong{
    font-weight: bold;
  }
  h1,h2,h3,h4,h5,h6{
    margin: 20px 0;
  }
  h1{
    font-size: 3em;
  }
  h2{
    font-size: 2.5em;
  }
  h3{
    font-size: 2em;
  }
  h4{
    font-size: 1.5em;
  }
  h5{
    font-size: 1em;
  }
  h6{
    font-size: 0.75em;
  }
`

export const LayoutWrapper = styled.div`
  margin: 0 auto;
  max-width: 1360px;
  box-sizing: border-box;
  padding: 0 20px 40px 20px;
`

export const Button = styled.button`
  background: var(--red-brand);
  border: 0px solid transparent;
  border-radius: 4px;
  outline: none;
  padding: 0 10px;
  height: 44px;
  line-height: 44px;
  box-shadow: none;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  color: white;
  white-space: nowrap;
  transition: background-color .3s ease;
  > svg {
    display: inline-block;
    vertical-align: middle;
  }
  &:hover:not(:disabled){
    color: white;
    background: var(--red-brand-60);
  }

  &:disabled{
    cursor: not-allowed;
    color: var(--red-brand-60);
    background-color: var(--red-20);
  }
  ${props => props.secondary && css`
    background: transparent;
    border: 1px solid var(--red-brand);
    color: var(--red-brand);
    &:hover{
      border: 1px solid var(--red-brand-60);
    }
  `}
  ${props => props.fullWidth && css`
    display: block;
    width: 100%
  `}
  ${props => props.searchButton && css`
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    padding: 0 14px;
  `}
  ${props => props.isHamburger && css`
    padding: 0 5px;
    > svg {
      width: 30px;
      height: 30px;
      fill: var(--blue-brand);
    }
  `}
`

export const Input = styled.input`
  border: 1px solid #ccc;
  display: block;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  border-radius: 4px;
  padding: 5px 10px;
  height: 44px;
  box-sizing: border-box;
  min-width: 0;
  transition: border-color .3s ease;
  ${props => props.searchInput && css`
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: none;
  `}
  &:focus{
    border-color: var(--red-brand);
    outline: none;
  }
  &::placeholder{
    color: #ccc;
  }
`