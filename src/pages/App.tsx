import React from 'react'

import Template from './Template'
import { StoreProvider } from '../contexts/store'

const AppPage = () =>
  <StoreProvider>
    <Template />
  </StoreProvider>

export default AppPage
