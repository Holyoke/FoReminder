import { connect } from 'react-redux'
import ReminderList from './reminder_list'

// actions
import { fetchReminders, createReminder, updateReminder } from '../../actions/reminder_actions'
import { fetchList, updateList } from '../../actions/list_actions'
import { receiveCurrentList } from '../../actions/current_list_actions'

// selectors
import { getVisibleReminders, parseErrors } from '../../reducers/selector'

const mapStateToProps = state => ({
  currentList: state.currentList,
  reminders: getVisibleReminders(state),
  errors: parseErrors(state)
})

const mapDispatchToProps = (dispatch, { reminder, currentList }) => ({
  createReminder: (reminder, list_id) => dispatch(createReminder({reminder, list_id})),
  fetchList: (list) => dispatch(fetchList(list)),
  setCurrentList: (list) => dispatch(receiveCurrentList(list)),
  fetchReminders: () => dispatch(fetchReminders()),
  updateReminder: (reminder) => dispatch(updateReminder({reminder})),
  updateList: (list) => dispatch(updateList({list}))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReminderList)
