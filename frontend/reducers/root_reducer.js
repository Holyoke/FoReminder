import { combineReducers } from 'redux'
import RemindersReducer from './reminders_reducer'

const RootReducer = combineReducers({
  reminders: RemindersReducer
})

export default RootReducer
