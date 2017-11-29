// Actions
const SELECT_USER = 'SELECT_USER'

// Reducer
let reducer = (state = '', action) => {
  console.log("SELECTED USER REDUCER")
  switch(action.type){
    case SELECT_USER:
      return action.userId

    default:
      return state
  }
}
// Action Creators
export const selectUser = (id) => {
  return {
    type: SELECT_USER,
    userId: id
  }
}

export default reducer