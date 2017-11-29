import React from 'react'

export default class AddComment extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: '',
      valid: false
    }
  }

  onChange = (event) => {
    let { value } = event.target
    let valid = value.length > 0
    this.setState({
      value: event.target.value,
      valid
    })
  }

  render(){
    const { add } = this.props;
    const { value } = this.state;
    const onClick = event => {
      add(value)
      this.setState({ value: ''})
    }

    return (
      <div className="input-group">
        <label className="col-form-label">Add Comment</label>
        <input type="text" value={value}
            placeholder='This person is neat.'
            onChange={this.onChange} 
            className="form-control" />
        <button type="button" 
            onClick={onClick} 
            disabled={!this.state.valid}
            className="btn btn-primary" >
          Add
        </button>
      </div>
    )
  }
}