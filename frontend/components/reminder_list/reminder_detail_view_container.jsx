import { connect } from 'react-redux'
import ReminderDetailView from './reminder_detail_view'

//  actions
import { deleteReminder, updateReminder } from '../../actions/reminder_actions'
import { receiveComments } from '../../actions/comment_actions'

const mapDispatchToProps = (dispatch, { reminder }) => ({
  deleteReminder: () => dispatch(deleteReminder({reminder})),
  receiveComments: () => dispatch(receiveComments()),
  updateReminder: (reminder) => dispatch(updateReminder(reminder))
})

export default connect(
  null,
  mapDispatchToProps
)(ReminderDetailView)
