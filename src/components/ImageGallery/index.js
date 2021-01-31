import React, { useEffect, useState } from 'react'
import Image from 'gatsby-image'

import { ImageGalleryWrapper } from './styles'
import ImageThumbnail from './ImageThumbnail'

export default function ImageGallery({images, selectedVariantImageId}){
  const [ activeImageThumbnail, setActiveImageThumbnail ] = useState(
    images.find(({id}) => id === selectedVariantImageId) || images[0]
  )

  useEffect(() => {
    setActiveImageThumbnail(
      images.find(({id}) => id === selectedVariantImageId) || images[0]
    )
  }, [selectedVariantImageId, images, setActiveImageThumbnail])
  const handleClick = image => {
    setActiveImageThumbnail(image)
  }
  return (
    <ImageGalleryWrapper>
      <div className="selected-image">
        <Image 
          fluid={activeImageThumbnail.localFile.childImageSharp.fluid}
          // style={{ margin: '1rem', maxHeight: 'calc(50vh - 4rem)' }}
          imgStyle={{ objectFit: 'contain' }}
        />
      </div>
      <div>
      {images.map(image => (
        <ImageThumbnail 
          key={image.id} 
          isActive={activeImageThumbnail.id === image.id}
          onClick={handleClick} 
          image={image}
        />
      ))}
      </div>
    </ImageGalleryWrapper>
  )
}