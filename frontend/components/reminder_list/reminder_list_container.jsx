import { connect } from 'react-redux'
import ReminderList from './reminder_list'

// actions
import { receiveReminders, receiveReminder } from '../../actions/reminder_actions'
import { allReminders } from '../../reducers/selector'

const mapStateToProps = state =>({
  reminders: allReminders(state)
})

const mapDispatchToProps = dispatch => ({
  receiveReminder: (reminder) => dispatch(receiveReminder(reminder)),
  receiveReminders: () => dispatch(receiveReminders())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReminderList)
