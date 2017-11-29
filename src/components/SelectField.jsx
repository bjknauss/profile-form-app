import React from 'react'


export default class SelectField extends React.Component {

  render(){
    let {
      name, value, options,
      label, error,
      onChange
    } = this.props
    label = label || name

    let errorMessage
    if(error){
      errorMessage = <div className="alert alert-danger">{error}</div>
    }

    let opts = options.map(o => <option key={o} value={o}>{o}</option>)

    return (
      <div className="form-group">
        <label>{label}: </label>
        <select name={name} value={value} onChange={onChange} className="form-control" >
          {opts}
        </select>
        {errorMessage}
      </div>
    )
  }
}