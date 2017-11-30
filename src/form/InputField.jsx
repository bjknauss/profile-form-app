import React from 'react'

const InputField = ({ input, label, type, meta: { touched, error} }) => (
  <div className="form-group">
    <label>{label}</label>
    <input {...input} type={type}
      placeholder={label} />
    {
      touched && error &&
      <div className="alert alert-danger">{error}</div>
    }
  </div>
)

export default InputField