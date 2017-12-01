import React from 'react'
import classNames from 'classnames'

const defaultClasses = {

}

const Label = ({htmlFor, className, children, ...others}) => (
  <label htmlFor={htmlFor} 
    className={classNames(defaultClasses, className)}
    {...others}
  >
    {children}
  </label>
)

export default Label