import styled from 'styled-components'

export const ShareButtonsWrapper = styled.div`
  display: flex;
`

export const ButtonWrapper = styled.div`
  margin-right: 8px;
  &:last-child{
    margin-right: 0;
  }
  > button:focus{
    outline: none;
    > svg:focus {
      outline: none;
    }
  }
`