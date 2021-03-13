import styled, { css } from 'styled-components';

const fullWidthStyles = ({ fullWidth }) => {
  if (fullWidth) {
    return css`
      display: block;
      width: 100%;
    `;
  }
};

const searchButtonStyles = ({ searchButton }) => {
  if(searchButton) {
    return css`
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    `
  }
}

export const Button = styled.button`
  background: var(--bgColor);
  border: 1px solid var(--bgColor);
  outline: none;
  padding: 0 10px;
  height: 44px;
  line-height: 44px;
  box-shadow: none;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  white-space: nowrap;
  ${searchButtonStyles}
  ${fullWidthStyles}
  > svg {
    display: inline-block;
    vertical-align: middle;
  }
  &:hover:not(:disabled) {
    color: white;
    background: black;
    border: 1px solid rgba(0, 0, 0, 0);
  }
  &:disabled {
    border-color: #999;
    cursor: not-allowed;
    color: #999;
  }
`;