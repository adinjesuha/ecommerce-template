import React, { useContext } from "react"
import { useLocation } from '@reach/router'
import queryString from 'query-string'

import ProductContext from '../context/ProductContext'
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductsListing from '../components/ProductsListing'
import { LayoutWrapper } from "../components/globals"

const AllProductsPage = () => {
  const { products, collections } = useContext(ProductContext)
  const collectionProductMap = {}
  const { search } = useLocation()
  const qs = queryString.parse(search)
  const selectedCollectionIds = qs.c?.split(',').filter(c => !!c) || [];
  const selectedCollectionIdsMap = {}
  const searchTerm = qs.s

  selectedCollectionIds.forEach(collectionId => {
    selectedCollectionIdsMap[collectionId] = true;
  })  

  if(collections){
    collections.forEach(collection => {
      collectionProductMap[collection.shopifyId] = {}
      collection.products.forEach(product => {
        collectionProductMap[collection.shopifyId][product.shopifyId] = true;
      })
    })
  }

  // const filterByCategory = product => {
  //   if(Object.keys(selectedCollectionIdsMap).length){
  //     for( let key in selectedCollectionIdsMap){
  //       if(collectionProductMap[key]?.[product.shopifyId]){
  //         return true
  //       }
  //     }
  //     return false
  //   }
  //   return true
  // }

  const filterBySearchTerm = product => {
    if(searchTerm){
      return product.title.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0
    }
    return true
  }

  const filteredProducts = products
    .filter(filterBySearchTerm)

  return (
    <Layout>
      <SEO title="All Products" />
      <LayoutWrapper>
        {!!searchTerm && !!filteredProducts.length && (
          <h3>
            Search Term: <strong>'{searchTerm}'</strong>
          </h3>
        )}
        {!!filteredProducts.length && (
          <h4>{filteredProducts.length} Products</h4>
        )}
        {!filteredProducts.length && (
          <div>
            <h3>
              <span>Oh no! Nada coincide con</span>
              &nbsp;
              <strong>'{searchTerm}'</strong>
            </h3>
            <div>
              Para ayudarte con tu búsqueda, por qué no pruebas:
              <br />
              <br />
              <ul>
                <li>Revisando tu ortografía</li>
                <li>Usando menos palabras</li>
                <li>Intenta usar un término de búsqueda diferente</li>
              </ul>
            </div>
          </div>
        )}
        {!!filteredProducts.length && (
          <ProductsListing products={filteredProducts}/>
        )}
      </LayoutWrapper>
    </Layout>
  )
}

export default AllProductsPage