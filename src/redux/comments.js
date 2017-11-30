import {Comments as initialComments} from '../mockdata'
import faker from 'faker'

const ADD_COMMENT = 'ADD_COMMENT'
const REMOVE_COMMENT = 'REMOVE_COMMENT'
const EDIT_COMMENT = 'EDIT_COMMENT'


const reducer = (state = initialComments, action) => {
  switch(action.type){
    case ADD_COMMENT:
      return [...state, {
        ...action.comment,
        id: faker.random.uuid()
      }]

    case REMOVE_COMMENT:
      return state.filter((comment) => action.id !== comment.id)

    case EDIT_COMMENT:
      return state.map((comment) => {
        if(action.comment.id === comment.id){
          return {
            ...comment,
            ...action.comment
          }
        }
        return comment
      })

    default:
      return state
  }
}

export function addComment(comment){
  return {
    type: ADD_COMMENT,
    comment
  }
}

export function removeComment(id){
  return {
    type: REMOVE_COMMENT,
    id
  }
}

export function editComment(comment){
  return {
    type: EDIT_COMMENT,
    comment
  }
}

export default reducer