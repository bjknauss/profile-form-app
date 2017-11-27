import { Observable } from 'rxjs/Observable'
import { ofType } from 'redux-observable'
import delay from 'rxjs/add/operator/delay'
import mapTo from 'rxjs/add/operator/mapTo'
import selectUserEpic from './location'

export default selectUserEpic