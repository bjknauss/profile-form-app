import React from 'react'
import classNames from 'classnames'

import Label from './Label'
import FormGroup from './FormGroup'
import ErrorMessage from '../messages/ErrorMessage'

const GroupedField = ({className, InputComponent, label, meta: { touched, error }, ...others}) => (
  <FormGroup className={className}>
    <Label>{label}</Label>
    <InputComponent
      {...others}
    />
    {
      touched && error &&
      <ErrorMessage message={error} />
    }
  </FormGroup>
)

export default GroupedField