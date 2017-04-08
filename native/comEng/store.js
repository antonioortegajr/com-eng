import { createStore, combineReducers, applyMiddleware } from 'redux'
import createHistory from 'history/createMemoryHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import reducers from './reducers'

export const history = createHistory()

const middleware = routerMiddleware(history)

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

export default createStore(
  combineReducers({
      ...reducers,
      router: routerReducer
  }),
    applyMiddleware(logger, middleware)
)
