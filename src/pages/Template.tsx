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
  font-weight: bold;
  padding: 2rem 0;
`

const MapContainer = lazy(() => import('../components/Map/MapContainer/MapContainer'))

const Template = () =>
  <AppWrapper>
    <Title>Consulta de CEP</Title>
    <SearchForm />
    <Suspense fallback={<div>Carregando, aguarde...</div>}>
      <MapContainer />
    </Suspense>
  </AppWrapper>

export default Template
