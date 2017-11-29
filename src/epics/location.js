import 'rxjs'
// import { LOCATION_CHANGE } from 'react-router-redux'
// import { matchPath } from 'react-router'

// import { selectUser } from '../reducers/selectedUser'

const pingEpic = action$ =>
  action$.ofType('PING')
    .delay(3000)
    .mapTo({type: 'PONG'})

// const selectUserEpic = action$ => {
//   return action$.ofType(LOCATION_CHANGE)
//     .map((action) => {
//       let match = matchPath(action.payload.pathname, {
//         path: '/user/:id',
//         exact: false,
//         strict: false
//       })
//       action.match = match
//       return action
//     })
//     .filter((action) => {
//       if(action.match && action.match.params && action.match.params.id){
//         return true
//       }
//       return false
//     })
//     .map((action) => {
//       return selectUser(action.match.params.id)
//     })
//   }
export default pingEpic