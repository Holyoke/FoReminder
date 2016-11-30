import { connect } from 'react-redux'
import ReminderList from './reminder_list'

// actions
import { receiveReminders, receiveReminder, removeReminder } from '../../actions/reminder_actions'
import { allReminders } from '../../reducers/selector'

const mapStateToProps = state => ({
  reminders: allReminders(state)
})

const mapDispatchToProps = (dispatch, { reminder }) => ({
  receiveReminder: (reminder) => dispatch(receiveReminder(reminder)),
  receiveReminders: () => dispatch(receiveReminders()),
  removeReminder: (reminder) => dispatch(removeReminder(reminder))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReminderList)
