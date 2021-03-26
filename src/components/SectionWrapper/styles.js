import styled from 'styled-components'

export const SectionWrapperStyled = styled.section`
  margin-bottom: 2.5rem;
  padding-bottom: 2.5rem;
  &:not(:last-of-type) {
    display: block;
    border-bottom: 1px solid #ddd;
    width: 100%;
  }
`