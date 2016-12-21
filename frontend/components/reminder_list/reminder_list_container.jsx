import { connect } from 'react-redux'
import ReminderList from './reminder_list'

// actions
import { receiveReminders, fetchReminders, createReminder, updateReminder, removeReminder } from '../../actions/reminder_actions'

// selectors
import { allReminders, parseErrors } from '../../reducers/selector'

const mapStateToProps = state => ({
  reminders: allReminders(state),
  errors: parseErrors(state)
})

const mapDispatchToProps = (dispatch, { reminder }) => ({
  createReminder: (reminder) => dispatch(createReminder({reminder})),
  fetchReminders: () => dispatch(fetchReminders()),
  updateReminder: (reminder) => dispatch(updateReminder({reminder}))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReminderList)
