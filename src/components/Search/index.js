import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { navigate, useLocation } from '@reach/router'
import queryString from 'query-string'

import { SearchForm, SearchFormWrapper } from './styles'
import { Button, Input } from '../globals'

export default function Search(){
  const [ hidesearchInput, setHideSearchInput ] = useState(true)
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
  const handleSearchInput = e => {
    e.preventDefault()
    setHideSearchInput(!hidesearchInput)
  }

  return(
    <SearchFormWrapper hideSearchInput={hidesearchInput}>
      <SearchForm onSubmit={handleSubmit} hideSearchInput={hidesearchInput}>
        <Input  
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.currentTarget.value)} 
          placeholder="Estoy buscando..." 
          searchInput
        />
        <Button searchButton>
          <FaSearch />
        </Button>
      </SearchForm>
      <Button onClick={handleSearchInput}>
        <FaSearch />
      </Button>
    </SearchFormWrapper>
  )
}