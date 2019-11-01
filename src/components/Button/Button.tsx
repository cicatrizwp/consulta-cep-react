import React from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.button`
  border-radius: 5px;
  background: lightblue;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  padding: .35rem 1rem;
  
  &:hover {
    border: 1px solid lightblue;
  }
`

const Button = () =>
  <ButtonWrapper>
    Buscar
  </ButtonWrapper>

export default Button;
