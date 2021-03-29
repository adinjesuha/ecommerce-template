import styled from 'styled-components'
import { device } from '../../utils/breakpoints'

export const SectionWrapperStyled = styled.section`
  margin-bottom: 2.5rem;
  padding-bottom: 2.5rem;
  &:not(:last-of-type) {
    display: block;
    border-bottom: 1px solid #ddd;
    width: 100%;
  }
  &:last-of-type{
    margin-bottom: 0;
  }
  &:first-of-type{
    margin-top: 40px;
  }
  @media ${device.tablet}{
    &:first-of-type{
      margin-top: 10px;
    }
  }
`