import faker from 'faker'
import { Users as initialUsers } from '../mockdata'

const SET_USER = 'SET_USER'
const ADD_USER = 'NEW_USER'
const REMOVE_USER = 'REMOVE_USER'


let reducer = (state = initialUsers, action) => {
  console.log('check')
  switch (action.type){
    case SET_USER:
      return state.map((user) => {
        if(user.id === action.user.id){
          return action.user
        }
        return user
      })

    case ADD_USER:
      return [...state, {
        ...action.user,
        id: faker.random.uuid(),
      }]

    case REMOVE_USER:
      return state.filter((user) => user.id !== action.id)

    default:
      return state
  }
}

export function setUser(user){
  return {
    type: SET_USER,
    user
  }
}

export function addUser(user){
  return {
    type: ADD_USER,
    user
  }
}

export function removeUser(id){
  return {
    type: REMOVE_USER,
    id
  }
}

export default reducer