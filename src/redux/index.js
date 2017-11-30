import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import commentReducer from './comments'
import userReducer from './users'
import selectedUserReducer from './selectedUser'
import author from './author'

const reducer = combineReducers({
  users: userReducer,
  comments: commentReducer,
  router: routerReducer,
  selectedUser: selectedUserReducer,
  form: formReducer,
  author
})

export default reducer