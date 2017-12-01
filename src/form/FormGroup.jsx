import React from 'react'
import classNames from 'classnames'

const defaultClassNames = {
  'form-group': true
}

const FormGroup = ({className, children, ...others}) => (
  <div 
    className={ classNames(defaultClassNames, className) }
    {...others}
  >
    {children}
  </div>
)

export default FormGroup