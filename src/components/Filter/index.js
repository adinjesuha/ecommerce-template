import React, { useContext } from 'react'
import { FilterWrapper } from './styles'

import ProductContext from '../../context/ProductContext'
import CategoryFilterItem from './CategoryFilterItem'

const Filter = ({}) => {
  const { collections } = useContext(ProductContext)
  return (
    <FilterWrapper>
      <strong>Categories</strong>
      {collections.map(collection => (
        <CategoryFilterItem 
          key={collection.shopifyId} 
          title={collection.title}
          id={collection.shopifyId}
        />
      ))}
    </FilterWrapper>
  )
}

export default Filter