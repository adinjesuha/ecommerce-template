import styled from 'styled-components'

export const QuantityAdjusterWrapper = styled.div`
  border-radius: 28px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px 16px;
  width: 100px;
  div{
    width: calc(100% - 35px);
    font-size: 1.125rem;
    font-weight: 600;
    text-align: center;
  }
`

export const AdjusterButton = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  cursor: pointer;
  color: var(--black-60);
`