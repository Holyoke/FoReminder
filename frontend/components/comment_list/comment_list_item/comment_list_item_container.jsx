import { connect } from 'react-redux'
import CommentListItem from './comment_list_item'

// actions
import { receiveComment, deleteComment } from '../../../actions/comment_actions'
// selectors
import { commentsByReminderId } from '../../../reducers/selector'

const mapStateToProps = (state, {comment}) => ({
  comment
})

const mapDispatchToProps = (dispatch, {comment, reminder_id}) => ({
  deleteComment: () => {
    dispatch(deleteComment(comment, reminder_id))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentListItem)
