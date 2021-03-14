import styled from 'styled-components'
import { device } from '../../utils/breakpoints'

export const ProductQuantityAdderWrapper = styled.div`
  margin-top: 20px;
  background-color: #f9f9f9;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 20px;
  margin-right: -20px;
  margin-left: -20px;
  > strong {
    display: block;
    margin-bottom: 10px;
  }
  > form {
    display: flex;
    flex-direction: column;
    input {
      margin-bottom: 10px;
    }
  }
  @media ${device.tablet}{
    margin-right: 0;
    margin-left: 0;
    border-radius: 4px;
    border: 1px solid #eee;
  }
  @media ${device.laptop}{
    background-color: transparent;
    border: 0px solid transparent;
    border-radius: 0;
    padding: 0;
    > form {
      flex-direction: row;
      input {
        margin-bottom: 0;
        margin-right: 0.8rem;
      }
    }
  }
`