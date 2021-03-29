import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { navigate, useLocation } from '@reach/router'
import queryString from 'query-string'

import { SearchForm, SearchFormWrapper } from './styles'
import { Button, Input } from '../globals'

export default function Search(){
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
    <SearchFormWrapper>
      <SearchForm onSubmit={handleSubmit}>
        <Input  
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.currentTarget.value)} 
          placeholder="Estoy buscando..." 
          searchInput
        />
        <Button searchButton name="search-button">
          <FaSearch />
        </Button>
      </SearchForm>
    </SearchFormWrapper>
  )
}