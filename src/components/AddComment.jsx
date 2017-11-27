import React from 'react'

export default class AddComment extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: ''
    }
  }

  onChange = (event) => {
    this.setState({
      value: event.target.value
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
            onChange={this.onChange} className="form-control" />
        <button type="button" onClick={onClick} className="btn btn-primary" >
          Add
        </button>
      </div>
    )
  }
}