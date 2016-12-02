import { combineReducers } from 'redux'
import remindersReducer from './reminders_reducer'
import commentsReducer from './comments_reducer'

const RootReducer = combineReducers({
  reminders: remindersReducer,
  comments: commentsReducer
})

export default RootReducer
