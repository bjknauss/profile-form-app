import React from 'react'


export default class Field extends React.Component {

  render(){
    let {
      name, type, value,
      label, placeholder,
      onChange, onBlur, error
    } = this.props
    label = label || name

    let errorMessage
    if(error){
      errorMessage = <div className="alert alert-danger">{error}</div>
    }

    return (
      <div className="form-group">
        <label>{label}: </label>
        <input type={type} value={value} 
            name={name} placeholder={placeholder}
            className="form-control"
            onChange={onChange}
            onBlur={onBlur} />
        {errorMessage}
      </div>
    )
  }
}