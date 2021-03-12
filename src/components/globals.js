import styled, { css } from 'styled-components'

export const LayoutWrapper = styled.div`
  margin: 0 auto;
  max-width: 1360px;
  box-sizing: border-box;
  padding: 0 20px 40px 20px;
`

export const Button = styled.button`
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
  background: white;
  color: 1px solid black;
  white-space: nowrap;

  &:hover:not(:disabled){
    color: white;
    background: black;
    border: 1px solid rgba(0,0,0,0);
  }

  &:disabled{
    border-color: #999;
    cursor: not-allowed;
    color: #999;
  }

  ${props => props.fullWidth && css`
    display: block;
    width: 100%
  `}

`

export const Input = styled.input`
  border: 1px solid #ccc;
  display: block;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  border-radius: 0;
  padding: 5px 10px;
  height: 44px;
  box-sizing: border-box;
  min-width: 0;
  &:focus{
    border-color: black;
  }
`