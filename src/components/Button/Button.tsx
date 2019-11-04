import React from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.button`
  border-radius: 5px;
  border: 0.5px #cfcfcf;
  background: #9e9e9e;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  padding: .35rem 1rem;
  
  &:hover {
    border: 1px solid #cfcfcf;
  }
`

const Button = () =>
  <ButtonWrapper>
    Buscar
  </ButtonWrapper>

export default Button;
