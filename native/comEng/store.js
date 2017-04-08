import { createStore, combineReducers, applyMiddleware } from 'redux'
import createHistory from 'history/createMemoryHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import reducers from './reducers'

export const history = createHistory()

const middleware = routerMiddleware(history)

export default createStore(
  combineReducers({
      ...reducers,
      router: routerReducer
  }),
    applyMiddleware(middleware)
)
