import React, { lazy, Suspense } from 'react'
import styled from 'styled-components'

import SearchForm from '../components/SearchForm/SearchForm'

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: arial;
`

const Title = styled.h1`
  font-size: 2rem;
  margin-block: 0;
  font-weight: bold;
  padding: 2rem 0;
  background: #002171;
  height: 100%
  color: white;
  padding-inline: 2rem;
`

const MapContainer = lazy(() => import('../components/Map/MapContainer/MapContainer'))

const Template = () =>
  <AppWrapper>
    <Title>Consulta de CEP</Title>
    <SearchForm />
    <Suspense fallback={<div>Carregando informações...</div>}>
      <MapContainer />
    </Suspense>
  </AppWrapper>

export default Template
