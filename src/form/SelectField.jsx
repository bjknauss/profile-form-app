import React from 'react'
import classNames from 'classnames'

const defaultClassNames = {
  'form-control': true
}

const SelectField = ({ 
  input, options, className, ...others
}) => {
  let opts = options.map((o) => (
    <option value={o}>{o}</option>
  ))
  let mergedClassNames = classNames(defaultClassNames, className)

  return (
      <select 
        {...input}
        className={mergedClassNames}
        {...others}
      >
        {opts}
      </select>
  )
}

export default SelectField