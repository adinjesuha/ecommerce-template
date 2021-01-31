import styled from 'styled-components'

export const ImageThumbNailWrapper = styled.div`
  cursor: pointer;
  border: 4px solid ${props => props.isActive ? 'blue' : '#eee'};
  height: 80px;
  padding: 4px;
  .gatsby-image-wrapper{
    height: 100%;
    margin: 0 !important;
  }
`