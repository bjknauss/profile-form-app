import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { setUser, removeUser } from '../reducers/users'

import EditUserForm from '../components/EditUserForm'

const mapStateToProps = state => {
  let selectedUserId = state.selectedUser
  let selectedUser = state.users.find((value) => value.id === state.selectedUser)
  return {
    selectedUser: state.selectedUser,
    user: selectedUser
  }
}

let EditProfile = ({user, setUser, removeUser}) => {
  if(user === undefined){
    return <h1>Select User</h1>
  }

  return (
    <div className="edit-profile">
      <EditUserForm user={user} 
          onSet={(user) => setUser(user)}  
          onRemove={(user) => {
            removeUser(user.id)
            push('/')
          }}/>
    </div>
  )
}

EditProfile = connect(
  mapStateToProps,
  { setUser, removeUser, push }
)(EditProfile)

export default EditProfile