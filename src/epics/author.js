import Rx, { Observable, of, map } from 'rxjs/Rx'
import { ajax } from 'rxjs/observable/dom/ajax'

import { GET_ALL, getAll, getAllDone, submitAuthorDone, SUBMIT_AUTHOR, SUBMIT_AUTHOR_DONE } from '../redux/author'

const authorsUrl = 'http://localhost:3001/authors'

const ajaxHeaders = {
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
          JSON.stringify(action.payload), ajaxHeaders)
            .map(response => submitAuthorDone(response))
      )

// export const submitNewAuthorEpic = actions$ => 
//   actions$.ofType(SUBMIT_AUTHOR_NEW)
//     .mergeMap(action => 
//       ajax.put(`${authorsUrl}/${action.payload.id}`, 
//         JSON.stringify(action.payload), ajaxHeaders)
//           .map(response => submitAuthorDone(response))
//         )

export const submitAuthorDoneEpic = actions$ =>
    actions$.ofType(SUBMIT_AUTHOR_DONE)
      .map(action => getAll())

export default getAllEpic