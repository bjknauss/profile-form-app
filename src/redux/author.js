const AUTHOR_PREFIX = '@@AUTHOR'
export const GET_ALL = `${AUTHOR_PREFIX}/GET_ALL`
const GET_ALL_DONE = `${AUTHOR_PREFIX}/GET_ALL_DONE`

const SELECT_AUTHOR = `${AUTHOR_PREFIX}/SELECT_AUTHOR`
const FETCH_AUTHOR_DONE = `${AUTHOR_PREFIX}/FETCH_AUTHOR_DONE`
const FETCH_AUTHOR = `${AUTHOR_PREFIX}/FETCH_AUTHOR`
export const SUBMIT_AUTHOR = `${AUTHOR_PREFIX}/SUBMIT_AUTHOR`
export const SUBMIT_AUTHOR_DONE = `${AUTHOR_PREFIX}/SUBMIT_AUTHOR_DONE`

const initialState = {
  authors: {},
  selected: '',
  fetching: false,
  submitting: false
}

export const getAll = () => ({
  type: GET_ALL
})

export const getAllDone = payload => ({
  type: GET_ALL_DONE,
  payload
})

export const selectAuthor = payload => ({
  type: SELECT_AUTHOR,
  payload
})

export const fetchAuthor = (payload) => ({
  type: FETCH_AUTHOR,
  payload
})

export const fetchAuthorDone = payload => ({
  type: FETCH_AUTHOR_DONE,
  payload
})

export const submitAuthor = payload => ({
  type: SUBMIT_AUTHOR,
  payload
})

export const submitAuthorDone = payload => ({
  type: SUBMIT_AUTHOR_DONE,
  payload
})

const reducer = (state = initialState, {type, payload}) => {
  let authors
  switch(type){
    case FETCH_AUTHOR:
      return {
        ...state,
        fetching: true
      }

    case FETCH_AUTHOR_DONE:
      authors = { ...state.authors }
      authors[payload.id] = payload
      return {
        ...state,
        fetching: false,
        authors
      }

    case SELECT_AUTHOR:
      return {
        ...state,
        selected: payload
      }

    case GET_ALL:
      return {
        ...state,
        fetching: true
      }
  case GET_ALL_DONE:
      authors = {}
      payload.forEach(a => {
        authors[a.id] = a
      });
      return {
        ...state,
        fetching: false,
        authors
      }
  case SUBMIT_AUTHOR:
      return {
        ...state,
        submitting: true
      }
  case SUBMIT_AUTHOR_DONE:
      return {
        ...state,
        submitting: false
      }

    default:
      return state
  }
}

export default reducer