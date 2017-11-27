import React from 'react'

export default class AddComment extends React.Component {
  constructor(){
    super()
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
      <div>
        <h4>Add Comment</h4>
        <input type="text" value={value} onChange={this.onChange} />
        <button type="button" onClick={onClick} >
          Add
        </button>
      </div>
    )
  }
}