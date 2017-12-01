import React from 'react'
import classNames from 'classnames'

import Label from './Label'
import ErrorMessage from '../messages/ErrorMessage'

const defaultClassNames = {
  'form-group': true
}

const GroupedField = ({className, InputComponent, label, meta: { touched, error }, ...others}) => (
  <div className={classNames(defaultClassNames, className)}>
    <Label>{label}</Label>
    <InputComponent
      {...others}
    />
    {
      touched && error &&
      <ErrorMessage message={error} />
    }
  </div>
)

export default GroupedField