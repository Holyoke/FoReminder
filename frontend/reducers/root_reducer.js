import { combineReducers } from 'redux'
import remindersReducer from './reminders_reducer'
import remindersFilterReducer from './reminders_filter_reducer'
import commentsReducer from './comments_reducer'
import errorsReducer from './errors_reducer'
import sessionReducer from './session_reducer'

const RootReducer = combineReducers({
  session: sessionReducer,
  reminders: remindersReducer,
  remindersFilter: remindersFilterReducer,
  comments: commentsReducer,
  errors: errorsReducer
})

export default RootReducer
