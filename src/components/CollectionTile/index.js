import React from 'react'
import { CollectionTileWrapper } from './styles'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

const CollectionTile = ({destination, backgroundImage, featured}) => {
  return (
    <CollectionTileWrapper featured={featured} >
      <Link to={destination}>
        <Img fluid={backgroundImage} />
      </Link>
    </CollectionTileWrapper>
  )
}

export default CollectionTile