import Rx, { Observable, of, map } from 'rxjs/Rx'
import { ajax } from 'rxjs/observable/dom/ajax';
import { ofType } from 'redux-observable'

import { GET_ALL, GET_ALL_DONE, getAll, getAllDone, submitAuthorDone, SUBMIT_AUTHOR, SUBMIT_AUTHOR_DONE } from '../redux/author'

const authorsUrl = 'http://localhost:3001/authors'

const putHeaders = {
  'Content-Type': 'application/json'
}

export const getAllEpic = actions$ =>
actions$.ofType(GET_ALL)
  .mergeMap(action => 
    ajax.getJSON(authorsUrl)
      .map(response => getAllDone(response)))


export const submitAuthorEpic = actions$ => 
    actions$.ofType(SUBMIT_AUTHOR)
      .mergeMap(action => 
        ajax.put(`${authorsUrl}/${action.payload.id}`, 
          JSON.stringify(action.payload), putHeaders)
            .map(response => submitAuthorDone(response))
      )

export const submitAuthorDoneEpic = actions$ =>
    actions$.ofType(SUBMIT_AUTHOR_DONE)
      .map(action => getAll())

export default getAllEpic