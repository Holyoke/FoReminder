import { combineReducers } from 'redux'
import remindersReducer from './reminders_reducer'
import commentsReducer from './comments_reducer'
import errorsReducer from './errors_reducer'

const RootReducer = combineReducers({
  reminders: remindersReducer,
  comments: commentsReducer,
  errors: errorsReducer
})

export default RootReducer
