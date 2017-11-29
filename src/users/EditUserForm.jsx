import React from 'react'

import Field from '../components/Field'
import SelectField from '../components/SelectField'
import validators from '../validators'

export default class EditUserForm extends React.Component {
  constructor(props){
    super(props)
    let { user } = props
    this.statusTypes = ['active', 'pending', 'inactive']

    this.initialUser = user
    this.state = this.newState(user)
  }

  newState = (user) => {
    let state = {
      user,
      dirty: {},
      errors: {},
      clean: true,
      valid: true
    }
    for(let key in user){
      state.dirty[key] = false
      state.errors[key] = ''
    }
    return state
  }

  componentWillReceiveProps({user}) {
    if(user.id === this.initialUser.id){
      this.setState(this.newState(user))
    }else{
      this.setState(this.newState(user))
    }
  }

  onChange = (event) => {
    const { target, type } = event
    const { value, name } = target
    let dirtyValue = target.value !== this.initialUser[name]
    let errMsg = validators(name, value)

    let dirty = {
      ...this.state.dirty,
      [name]: dirtyValue
    }
    let errors = {
      ...this.state.errors,
      [name]: errMsg
    }
    let clean = Object.values(dirty).every((dirt) => !dirt)
    let valid = Object.values(errors).every(e => e === '')

    this.setState({
      user: {
        ...this.state.user,
        [name]: target.value
      },
      errors,
      dirty,
      clean,
      valid
    })
  }

  onSubmit = (event) => {
    let user = this.state.user
    this.props.onSet(user)
    this.setState(this.setState(user))
    event.preventDefault()
  }

  render(){
    return (
      <form className="userform" onSubmit={this.onSubmit}>
        <h4>Id: { this.state.user.id }</h4>
        <Field type="text" name="username" 
          value={ this.state.user.username }
          onChange={ this.onChange }
          error={ this.state.errors.username } />

        <Field type="number" name="age"
          value={ this.state.user.age }
          onChange={ this.onChange }
          error={ this.state.errors.age } />

        <SelectField name="status" value={this.state.user.status}
          options={this.statusTypes}
          onChange={this.onChange} />

        <button type="submit" 
            className="btn btn-primary"
            disabled={this.state.clean || !this.state.valid} >Submit</button>
        <button type="button"
            className="btn btn-danger"
            onClick={() => this.props.onRemove(this.state.user)}>Delete User</button>
      </form>
    )
  }

}