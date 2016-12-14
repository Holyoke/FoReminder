import { createStore, applyMiddleware } from 'redux'
import RootReducer from '../reducers/root_reducer'
// import thunk from '../middlewares/thunk_middleware.js'
import thunk from 'redux-thunk'

const configureStore = (preloadedState = {}) => {
  const store = createStore(RootReducer, preloadedState, applyMiddleware(thunk))
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState())
  })

  return store
}

export default configureStore
