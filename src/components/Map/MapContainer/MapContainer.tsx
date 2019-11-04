import React, { Fragment, useContext } from 'react'
import styled from 'styled-components'

import { Store } from '../../../contexts/store'
import MapComponent from '../MapComponent/MapComponent'

const MapContainerWrapper = styled.div`
  border: 2px solid gainsboro;
  box-sizing: border-box;
  margin-top: 1rem;
  padding: 3rem;
  position: relative;
`

const AddressWrapper = styled.div`
  margin-bottom: 2rem;

  > * {
    margin-bottom: 1rem;  
  }
`

const Street = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`

const MapContainer = () => {
  const { state } = useContext(Store)

  const shouldShowMap = () => {
    if (state.status === 'ERROR') return <div>CEP não encontrado!</div>

    return (
      <Fragment>
        <AddressWrapper>
          <Street>{state.address.logradouro}</Street>
          <p>Bairro: {state.address.bairro}</p>
          <p>Cidade/UF: {state.address.localidade} - {state.address.uf}</p>
          <p>CEP: {state.address.cep}</p>
        </AddressWrapper>

        <MapComponent coordinates={state.address.mapsCoordinates} />
      </Fragment>
    )
  }
  console.log('state.status------------>', state.status)
  if (!['LOADED', 'ERROR'].includes(state.status)) return null

  return (
    <MapContainerWrapper >
      {shouldShowMap()}
    </MapContainerWrapper>
  )
}


export default MapContainer
