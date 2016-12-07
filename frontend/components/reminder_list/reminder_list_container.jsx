import { connect } from 'react-redux'
import ReminderList from './reminder_list'

// actions
import { receiveReminders, fetchReminders, createReminder } from '../../actions/reminder_actions'
import { clearErrors } from '../../actions/error_actions'
// selectors
import { allReminders } from '../../reducers/selector'

const mapStateToProps = state => ({
  reminders: allReminders(state),
  errors: state.errors
})

const mapDispatchToProps = (dispatch, { reminder }) => ({
  createReminder: (reminder) => dispatch(createReminder({reminder})),
  receiveReminders: () => dispatch(receiveReminders()),
  fetchReminders: () => dispatch(fetchReminders()),
  clearErrors: () => dispatch(clearErrors())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReminderList)
