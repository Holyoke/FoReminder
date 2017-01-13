import { connect } from 'react-redux'
import ReminderList from './reminder_list'

// actions
import { fetchReminders, createReminder, updateReminder } from '../../actions/reminder_actions'
import { fetchList } from '../../actions/list_actions'

// selectors
import { getVisibleReminders, parseErrors } from '../../reducers/selector'

const mapStateToProps = state => ({
  currentList: state.currentList,
  reminders: getVisibleReminders(state),
  errors: parseErrors(state)
})

const mapDispatchToProps = (dispatch, { reminder }) => ({
  createReminder: (reminder) => dispatch(createReminder({reminder})),
  fetchList: (list) => dispatch(fetchList(list)),
  fetchReminders: () => dispatch(fetchReminders()),
  updateReminder: (reminder) => dispatch(updateReminder({reminder}))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReminderList)
