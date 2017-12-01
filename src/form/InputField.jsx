import React from 'react'
import classNames from 'classnames'

const defaultClassNames = {
  'form-control': true
}

const InputField = ({ input, className, type, ...others}) => (
    <input {...input} 
      type={type}
      className={classNames(defaultClassNames, className)}
      {...others}
    />
)

export default InputField