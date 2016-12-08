import { connect } from 'react-redux'
import ReminderDetailView from './reminder_detail_view'

//  actions
import { deleteReminder } from '../../actions/reminder_actions'
import { receiveComments } from '../../actions/comment_actions'

const mapDispatchToProps = (dispatch, { reminder }) => ({
  deleteReminder: () => dispatch(deleteReminder({reminder})),
  receiveComments: () => dispatch(receiveComments())
})

export default connect(
  null,
  mapDispatchToProps
)(ReminderDetailView)
