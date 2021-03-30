import React, { useState } from 'react'
import { navigate, useLocation } from '@reach/router'
import queryString from 'query-string'

import { SearchForm, SearchFormWrapper } from './styles'
import { Button } from '../globals'

export default function Search(){
  const [ openSearchInput, setOpenSearchInput ] = useState(false)
  const [ searchTerm, setSearchTerm ] = useState('')
  const { search } = useLocation()
  const c = queryString.parse(search)?.c || ''

  const handleSubmit = e => {
    e.preventDefault()
    if(c){
      navigate(`/all-products?s=${encodeURIComponent(searchTerm)}&c=${encodeURIComponent(c)}`)
    }else {
      navigate(`/all-products?s=${encodeURIComponent(searchTerm)}`)
    }
  }

  return(
    <SearchFormWrapper openSearchInput={openSearchInput}>
      <SearchForm 
        openSearchInput={openSearchInput}
        onSubmit={handleSubmit}
      >
        {/* <Input  
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.currentTarget.value)} 
          placeholder="Estoy buscando..." 
          searchInput
        /> */}
        <div>
          <svg width="24" height="24" viewBox="0 0 24 24"><g><path fill="#12222E" d="M18.032 16.618l3.675 3.675a1 1 0 0 1-1.414 1.414l-3.675-3.675a9 9 0 1 1 1.414-1.414zM11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"></path></g></svg>
          <input 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.currentTarget.value)} 
            placeholder="Buscar"
          />
        </div>
      </SearchForm>
      <Button 
        name="search-button"
        onClick={() => setOpenSearchInput(!openSearchInput)}
      >
        { openSearchInput ? (
          <svg width="24" height="24" viewBox="0 0 24 24"><g><path fill="#12222E" d="M10.586 12L4.293 5.707a1 1 0 0 1 1.414-1.414L12 10.586l6.293-6.293a1 1 0 0 1 1.414 1.414L13.414 12l6.293 6.293a1 1 0 0 1-1.414 1.414L12 13.414l-6.293 6.293a1 1 0 1 1-1.414-1.414L10.586 12z"></path></g></svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24"><g><path fill="#12222E" d="M18.032 16.618l3.675 3.675a1 1 0 0 1-1.414 1.414l-3.675-3.675a9 9 0 1 1 1.414-1.414zM11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"></path></g></svg>
        )}
      </Button>
    </SearchFormWrapper>
  )
}