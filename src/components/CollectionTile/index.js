import React from 'react'
import { CollectionTileWrapper, Title} from './styles'
import { StyledLink } from '../StyledLink'

const CollectionTile = ({destination, title, backgroundImage, featured}) => {
  return (
    <CollectionTileWrapper 
      fluid={backgroundImage}
      featured={featured} 
    >
      <StyledLink to={destination}>
        <Title>{title}</Title>
      </StyledLink>
    </CollectionTileWrapper>
  )
}

export default CollectionTile