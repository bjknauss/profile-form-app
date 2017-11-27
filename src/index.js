import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import { createEpicMiddleware } from 'redux-observable'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import App from './App';
import reducer from './reducers'
import pingEpic from './epics'

const epicMiddleware = createEpicMiddleware(pingEpic)
const history = createHistory()
const routeMiddleware = routerMiddleware(history)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// const store = createStore(reducer, composeEnhancers(applyMiddleware(logger, epicMiddleware, routerMiddleware)))
const store = createStore(reducer, composeEnhancers(applyMiddleware(logger, epicMiddleware, routeMiddleware)))
window.dispatch = store.dispatch;

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root'));
