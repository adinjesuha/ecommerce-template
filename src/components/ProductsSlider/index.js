import React from 'react'

import { ProductsSliderWrapper, SliderWrapper } from './styles'
import ProductsSliderItem from './ProductsSliderItem'

const ProductsSlider = ({name, collection}) => {
  const settings = {
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 375,
        settings: { 
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
    ]
  }
  return (
    <ProductsSliderWrapper>
      <h3>{name}</h3>
      <SliderWrapper {...settings}>
        {collection[0].products.map(product => (
          <ProductsSliderItem
            key={product.shopifyId} 
            product={product}
          />
        ))}
      </SliderWrapper>
    </ProductsSliderWrapper>
  )
}

export default ProductsSlider

