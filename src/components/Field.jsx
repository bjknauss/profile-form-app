import React from 'react'


export default class Field extends React.Component {

  render(){
    let {
      name, type, value,
      label, placeholder, touched,
      onChange, onBlur, error
    } = this.props
    label = label || name
    if(touched === undefined){
      touched = true
    }

    let errorMessage
    if(error && touched){
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