import React, { memo } from 'react'
import styled from 'styled-components'
import GoogleMapReact, { Coords } from 'google-map-react'

import markerSvg from './images/marker.svg'

/**
 * Modifique essa linha para inserir a chave gerada pela API do Google Maps
 */
const API_KEY = 'MOCK'

interface IMap {
  coordinates?: Coords
}

const MapWrapper = styled.div`
  height: 100vh;
  width: 100%;
`

const MarkerWrapper = styled.div`
  height: 2rem;
  width: 2rem;
`

const Marker = memo((props: any) =>
  <MarkerWrapper>
    {props.children}
  </MarkerWrapper>
)

const MapComponent = (props: IMap) =>
  <MapWrapper>
    <GoogleMapReact
      bootstrapURLKeys={{ key: API_KEY }}
      defaultCenter={{ lat: -15.5, lng: -57 }}
      center={props.coordinates}
      defaultZoom={15}
    >
      <Marker {...props.coordinates}>
        <img src={markerSvg} alt="marker" />
      </Marker>
    </GoogleMapReact>
  </MapWrapper>

export default MapComponent
