import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { navigate, useLocation } from '@reach/router'
import queryString from 'query-string'

import { SearchForm } from './styles'
import { Input } from '../Input'
import { Button } from '../Button'

export default function Search(){
  const [ searchTerm, setSearchTerm ] = useState('')
  const { search } = useLocation()
  const c = queryString.parse(search)?.c || '';

  const handleSubmit = e => {
    e.preventDefault()
    if(c){
      navigate(`/all-products?s=${encodeURIComponent(searchTerm)}&c=${encodeURIComponent(c)}`)  
    }else {
      navigate(`/all-products?s=${encodeURIComponent(searchTerm)}`)
    }
  }
  return(
    <SearchForm onSubmit={handleSubmit}>
      <Input value={searchTerm} onChange={(e) => setSearchTerm(e.currentTarget.value)} placeholder="Search"/>
      <Button>
        <FaSearch />
      </Button>
    </SearchForm>
  )
}