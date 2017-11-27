import React from 'react'

class TestForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      firstName: '',
      lastName: ''
    }
  }

  handleChange = ({ target}) => {
    const { name, value } = target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    console.log('target:', event._targetInst)
    Object.keys(event).map((key) => {
      console.log(`key[${key}: ${event[key]}`)
      return key;
    });
    event.preventDefault()    
  }

  render(){
    return (
      <form name="testForm" onSubmit={this.handleSubmit}>
        <div>
          First Name: 
          <input type="text" 
              name="firstName" 
              value={this.state.firstName}
              onChange={this.handleChange} />
        </div>
        <div>
          Last Name:
          <input type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange} />
        </div>
        <button type="submit" value="Submit" />
      </form>
    )
  }
}

export default TestForm