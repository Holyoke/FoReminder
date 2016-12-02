import { connect } from 'react-redux'
import ReminderDetailView from './reminder_detail_view'

//  actions
import { removeReminder } from '../../actions/reminder_actions'

const mapDispatchToProps = (dispatch, { reminder }) => ({
  removeReminder: (reminder) => dispatch(removeReminder(reminder))
})

export default connect(
  null,
  mapDispatchToProps
)(ReminderDetailView)
