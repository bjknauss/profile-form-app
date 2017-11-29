import React, { Component } from 'react';

import { applyMiddleware, createStore, compose } from 'redux'
import { Provider } from 'react-redux'

// Middleware-related
import { createEpicMiddleware } from 'redux-observable'
import createHistory from 'history/createBrowserHistory'
import logger from 'redux-logger'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'

import reducer from './reducers'
import pingEpic from './epics'
import Layout from './containers/Layout'


const epicMiddleware = createEpicMiddleware(pingEpic)
const history = createHistory()
const routeMiddleware = routerMiddleware(history)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(logger, epicMiddleware, routeMiddleware)))
window.dispatch = store.dispatch;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Layout />
        </ConnectedRouter>
    </Provider>
    )
  }
}

export default App;
