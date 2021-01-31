import React from 'react'
import Image from 'gatsby-image'
import { ImageThumbNailWrapper } from './styles'

export default function ImageThumbnail({isActive, onClick, image}){
  const handleClick = () => {
    onClick(image)
  }
  return(
    <ImageThumbNailWrapper onClick={handleClick} isActive={isActive}>
      <Image 
        fluid={image.localFile.childImageSharp.fluid}
        // alt={product.title}
        style={{ margin: '1rem', maxHeight: 'calc(50vh - 2rem)' }}
        imgStyle={{ objectFit: 'contain' }}
      />
    </ImageThumbNailWrapper>
  )
}