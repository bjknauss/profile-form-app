import React from 'react'
import classnames from 'classnames'

const defaultClasses = {
  btn: true
}

const Button = ({ type = "button", children, className = 'btn-primary', ...others }) => (
  <button 
    {...others}
    type={type}
    className={classnames(defaultClasses, className)}
  >
    {children}
  </button>
)

export default Button