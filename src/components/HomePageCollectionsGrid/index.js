import React from 'react'
import CollectionTile from '../CollectionTile'

import { RemainingCollection } from './styles'

const HomePageCollectionsGrid = ({collections}) => {
  const saleCollection = collections.find(collection => collection.title === "Destacados")
  const remainingCollections = collections.filter(collection => collection.title !== "Destacados")
  return (
    <div>
      {!!saleCollection && (
        <CollectionTile
          featured
          destination={`/all-products?c=${encodeURIComponent(saleCollection.shopifyId)}`}
          title={saleCollection.title}
          description={saleCollection.description}
          backgroundImage={saleCollection.image?.localFile.childImageSharp.fluid}
        />
      )}
      <RemainingCollection>
        {remainingCollections.map(collection => (
          <CollectionTile 
            destination={collection.handle}
            key={collection.shopifyId}
            title={collection.title}
            description={collection.description}
            backgroundImage={collection.image?.localFile.childImageSharp.fluid}
          />
        ))}
      </RemainingCollection>
    </div>
  )
}

export default HomePageCollectionsGrid