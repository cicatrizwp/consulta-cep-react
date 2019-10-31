import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
  border-radius: 6px;
  background: #7e7aec;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  padding: .35rem 1rem;
  
  &:hover {
    border: 1px solid #7e7aec;
  }
`

const Button = () =>
  <Wrapper>
    Buscar
  </Wrapper>

export default Button;