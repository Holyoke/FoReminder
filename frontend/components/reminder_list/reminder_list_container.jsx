import { connect } from 'react-redux'
import ReminderList from './reminder_list'

// actions
import { receiveReminders, receiveReminder, fetchReminders } from '../../actions/reminder_actions'

// selectors
import { allReminders } from '../../reducers/selector'

const mapStateToProps = state => ({
  reminders: allReminders(state)
})

const mapDispatchToProps = (dispatch, { reminder }) => ({
  receiveReminder: (reminder) => dispatch(receiveReminder(reminder)),
  receiveReminders: () => dispatch(receiveReminders()),
  fetchReminders: () => dispatch(fetchReminders())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReminderList)
