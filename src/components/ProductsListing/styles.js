import styled from 'styled-components'

export const ProductListingWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  @media(min-width: 768px){
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media(min-width: 1024px){
    grid-template-columns: ${props => props.hasFilters ? '1fr 1fr 1fr 1fr' : '1fr 1fr 1fr 1fr 1fr'};
  }
`