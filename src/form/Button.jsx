import React from 'react'
import classnames from 'classnames'

const defaultClasses = {
  btn: true
}

const Button = ({ type, disabled, onClick, children, className = 'btn-primary', ...others }) => (
  <button 
    {...others}
    type={type}
    disabled={disabled}
    onClick={onClick}
    className={classnames(defaultClasses, className)}
  >
    {children}
  </button>
)

export default Button