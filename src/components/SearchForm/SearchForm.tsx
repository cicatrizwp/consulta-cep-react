import React, { useContext, useState } from 'react';
import styled from 'styled-components'

import Button from "../Button/Button";
import InputField from "../InputField/InputField";

const SearchFormWrapper = styled.form`
  background: gainsboro;
  box-sizing: border-box;
  padding: 2rem 2rem 4rem;
  width: 100%;
`

const SearchFormLabel = styled.div`
  font-weight: 600;
  margin-bottom: 2rem;
`

const SearchBar = styled.div`
  color: darkgray;
  display: flex;
`

const Wrapper = styled.label`
  > * {
    margin-right: 1rem;
  }
`
const SearchForm = () => {
  // const ctx = useContext(Store)
  const [zipCode, setZipCode] = useState('')

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!zipCode) return

    // await fetchAddress(zipCode)
  }

  return (
    <SearchFormWrapper onSubmit={onSubmit} data-testid='form-search-container'>
      <SearchFormLabel>Consultar</SearchFormLabel>
      <SearchBar>
        <Wrapper htmlFor="search-field">
          <span>CEP</span>
          <InputField id="search-field" value={zipCode} onChange={setZipCode} />
        </Wrapper>
        <Button />
      </SearchBar>
    </SearchFormWrapper>
  )
}

export default SearchForm;