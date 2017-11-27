const SELECT_USER = 'SELECT_USER'

let reducer = (state = '', action) => {
  console.log("SELECTED USER REDUCER")
  switch(action.type){
    case SELECT_USER:
      console.log("user selected")
      return action.userId

    default:
      return state
  }
}

export const selectUser = (id) => {
  return {
    type: SELECT_USER,
    userId: id
  }
}

export default reducer