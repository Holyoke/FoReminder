import { connect } from 'react-redux'
import CommentListItem from './comment_list_item'

// actions
import { updateComment, deleteComment } from '../../../actions/comment_actions'

const mapStateToProps = (state, {comment}) => ({
  comment
})

const mapDispatchToProps = (dispatch, {comment, reminder_id}) => ({
  deleteComment: () => dispatch(deleteComment(comment, reminder_id)),
  updateComment: () => dispatch(updateComment(comment, reminder_id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentListItem)
