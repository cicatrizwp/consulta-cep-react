import React, { useContext } from 'react'
import styled from 'styled-components'

import MapComponent from '../MapComponent/MapComponent'
import Address from '../../../services/adress'

const MapContainerWrapper = styled.div`
  border: 2px solid gainsboro;
  box-sizing: border-box;
  margin-top: 1rem;
  padding: 3rem;
  position: relative;
`

const AddressContainer = styled.div`
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
  const { state } = useContext(Address)

  const shouldShowMap = () => {
    if (state.status === 'ERROR') return <div>CEP não encontrado!</div>

    return (
      <>
        <AddressContainer>
          <Street>{state.address.logradouro}</Street>
          <p>{state.address.bairro}</p>
          <p>{state.address.localidade} - {state.address.uf}</p>
          <p>{state.address.cep}</p>
        </AddressContainer>

        <MapComponent coordinates={state.address.mapsCoordinates} />
      </>
    )
  }

  return (
    <MapContainerWrapper >
      {shouldShowMap()}
    </MapContainerWrapper>
  )
}

export default MapContainer
