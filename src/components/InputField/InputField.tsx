import React, { ChangeEvent } from 'react'
import styled from 'styled-components'
import InputMask from 'react-input-mask'
import { omit } from 'lodash'

interface IInputField {
  id: string
  onChange: any
  value: string
}

const InputFieldWrapper = styled(InputMask)`
  border: 1px solid darkgray;
  border-radius: 5px;
  box-shadow: 0;
  font-size: 1rem;
  padding: 5px 10px;
`

const InputField = (props: IInputField) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.value)
  }

  return (
    <InputFieldWrapper
      {...omit(props, 'onChange')}
      mask='99999-999'
      onChange={onChange}
      data-testid='search-field'
      placeholder='01234-567'
      required
    />
  )
}

export default InputField
