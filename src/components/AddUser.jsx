import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import SelectField from '../components/SelectField'
import validators from '../validators'
import { addUser } from '../reducers/users'
import Field from './Field'

const mapDispatchToProps = dispatch => ({
  addUser: (user) => {
    dispatch(addUser(user))
  },
  push: (location) => {
    dispatch(push(location))
  }
})
class AddUser extends React.Component {

  constructor(props){
    super(props)
    this.statusTypes = ['active', 'pending', 'inactive']
    this.state = this.reset()
  }

  reset = () => {
    this.touched = {
      username: false,
      age: true,
      status: true
    }
    this.valid = {
      username: false,
      age: true,
      status: true
    }
    let state = {
      user: {
        username: '',
        age: 25,
        status: this.statusTypes[0]
      },
      errors: {},
      touched: {
        'username': false,
        'age': true,
        'status': true
      },
      _error: '',
      _message: ''
    }
    for(let key in state.user){
      state.errors[key] = ''
    }
    return state;
  }

  onBlur = (event) => {
    const { value, name } = event.target
    this.setState((prevState) => {
      let state = {}
      state.touched = {
        ...prevState.touched,
        [name]: true
      }
      return state
    })
    this.validate(name, value)
  }

  validate = (name, value) => {
    let result = validators(name, value)
    this.valid[name] = result === '' 
    if(this.state.errors[name] !== result){
      this.setState((prevState) => {
        let newState = {}
        newState.errors = {
          ...prevState.errors,
          [name]: result
        }
        return newState
      })
    }
  }

  setValue = (name, value) => {
    this.setState((prevState) => {
      let newState = {}
      newState.user = {
        ...prevState.user,
        [name]: value
      }
      return newState
    })
    this.validate(name, value)    
  }

  onChange = (event) => {
    const { value, name } = event.target
    this.setValue(name, value)
  }

  onSubmit = (event) => {
    event.preventDefault()
    let validForm = Object.values(this.valid).every(v => v === true)
    if(validForm){
      this.props.addUser(this.state.user)
      this.props.push('/')
      this.setState({
        _message: 'Form Submitted.'
      })
    }else{
      this.setState({
        _error: 'There was a problem submitting your form.'
      })
    }
  }

  render() {
    let { user, errors, validForm, touched, _error, _message } = this.state

    let errorMessage, formMessage

    if(_error){
      errorMessage = <div className="alert alert-danger">{_error}</div>
    }
    if(_message){
      formMessage = <div className="alert alert-success">{_message}</div>
    }

    return (
      <form className="new-user" onSubmit={this.onSubmit} >
        <h4>New User</h4>
        { _message }
        { _error }
        <Field name="username" type="text"
          value={user.username}
          error={errors.username} 
          touched={touched.username}
          onChange={this.onChange}
          onBlur={this.onBlur} />

        <Field name="age" type="number"
          value={user.age}
          error={errors.age}
          touched={touched.age}
          onChange={this.onChange}
          onBlur={this.onBlur} />

        <SelectField name="status" value={user.status}
          options={this.statusTypes}
          onChange={this.onChange}
          onBlur={this.onBlur} />

        <button type="submit" 
            value="submit"
            className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

let ConnectedAddUser = connect(
  null,
  mapDispatchToProps
)(AddUser)

export default ConnectedAddUser