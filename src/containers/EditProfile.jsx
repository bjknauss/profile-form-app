import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { setUser, removeUser } from '../reducers/users'
import { selectUser } from '../reducers/selectedUser'

import EditUserForm from '../users/EditUserForm'
import EditCommentList from '../components/EditCommentList'

const mapStateToProps = state => {
  let selectedUser = state.users.find((value) => value.id === state.selectedUser)
  return {
    selectedUser: state.selectedUser,
    user: selectedUser
  }
}

class EditProfile extends React.Component {

  componentWillReceiveProps(nextProps){
    let { match, selectedUser, selectUser } = nextProps
    if(match.params.id !== selectedUser){
      selectUser(match.params.id)
    }
  }

  componentWillMount() {
    let { match, selectedUser, selectUser } = this.props
    console.log('mount', match.params.id)
    if(match.params.id !== selectedUser){
      selectUser(match.params.id)
    }
  }

  render() {
    let { 
      user,
      setUser, removeUser,
      push, match
    } = this.props

    if(!user){
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
        <hr />
        <EditCommentList />
      </div>
    )
  }
}

EditProfile = connect(
  mapStateToProps,
  { setUser, removeUser, push, selectUser }
)(EditProfile)

export default EditProfile