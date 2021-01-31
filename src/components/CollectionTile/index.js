import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { CollectionTileWrapper, CollectionTileContent, Title, Description } from './styles'
import { StyledLink } from '../StyledLink'

const CollectionTile = ({destination, description, title, backgroundImage, sale}) => {
  return (
    <CollectionTileWrapper>
      <BackgroundImage fluid={backgroundImage}/>
      <CollectionTileContent>
        <div>
          <Title sale={sale}>{title}</Title>
          <Description sale={sale}>{description}</Description>
          <StyledLink to={destination}>Shop Now</StyledLink>
        </div>
      </CollectionTileContent>
    </CollectionTileWrapper>
  )
}

export default CollectionTile