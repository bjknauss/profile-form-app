import { combineEpics } from 'redux-observable'

import selectUserEpic from './location'
import { getAllEpic, submitAuthorEpic, submitAuthorDoneEpic } from './author'

const rootEpic = combineEpics(getAllEpic, submitAuthorEpic, submitAuthorDoneEpic)

export default rootEpic