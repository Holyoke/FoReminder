import { combineReducers } from 'redux'
import remindersReducer from './reminders_reducer'

const RootReducer = combineReducers({
  reminders: remindersReducer
})

export default RootReducer
