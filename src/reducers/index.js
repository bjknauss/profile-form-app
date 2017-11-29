import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import commentReducer from './comments'
import userReducer from './users'
import selectedUserReducer from './selectedUser'

const reducer = combineReducers({
  users: userReducer,
  comments: commentReducer,
  router: routerReducer,
  selectedUser: selectedUserReducer,
})

export default reducer