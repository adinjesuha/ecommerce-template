import styled from 'styled-components'

export const RemainingCollection = styled.div`
  display: flex;
  flex-wrap: wrap;
  > div {
    flex-grow: 1;
    min-width: 100%;
    @media (min-width: 768px){
      min-width: calc(50% - 40px);
      margin-right: 40px;
      &:nth-child(n+2){
        margin-right: 0px;
      }
    }
    @media (min-width: 1024px){
      min-width: 33%;
    }
  }
`