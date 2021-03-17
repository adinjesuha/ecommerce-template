import styled from 'styled-components'

export const Icon = styled.div`
  cursor: pointer;
  color: var(--black-60);
  width: 24px;
  height: 24px;
  &:hover{
    color: red;
  }
  > svg{
    width: 100%;
    height: 100%;
  }
`