import React, { FormEvent, useState, useContext } from 'react'
import styled from 'styled-components'

import { Store } from '../../contexts/store'
import Button from '../Button/Button'
import InputField from '../InputField/InputField'

const SearchFormContainerWrapper = styled.form`
  background: #0d47a1;
  box-sizing: border-box;
  padding: 2rem 2rem 4rem;
  width: 100%;
  color: white;
`

const SearchFormFieldWrapperLabel = styled.div`
  font-weight: 600;
  margin-bottom: 2rem;
`

const SearchBar = styled.div`
  display: flex;
`

const LabelWrapper = styled.label`
  > * {
    margin-right: 1rem;
  }
`

const SearchFormContainer = () => {
  const ctx = useContext(Store)
  const [zipCode, setZipCode] = useState('')

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!zipCode) return

    await ctx.action.fetchAddress(zipCode)
  }

  return (
    <SearchFormContainerWrapper onSubmit={onSubmit} data-testid='form-search-container'>
      <SearchFormFieldWrapperLabel>Consultar</SearchFormFieldWrapperLabel>
      <SearchBar>
        <LabelWrapper htmlFor="search-field">
          <span>CEP</span>
          <InputField id="search-field" value={zipCode} onChange={setZipCode} />
        </LabelWrapper>
        <Button />
      </SearchBar>
    </SearchFormContainerWrapper>
  )
}

export default SearchFormContainer
