import { combineReducers } from 'redux'
import ReminderReducer from './reminder_reducer'

const RootReducer = combineReducers(
  ReminderReducer
)

export default RootReducer
