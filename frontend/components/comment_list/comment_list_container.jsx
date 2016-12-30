import { connect } from 'react-redux'
import CommentList from './comment_list'

// actions
import { createComment, fetchComments } from '../../actions/comment_actions'
// selectors
import { commentsByReminderId } from '../../reducers/selector'

const mapStateToProps = (state, {reminder_id}) => ({
  comments: commentsByReminderId(state, reminder_id),
  reminder_id
})

const mapDispatchToProps = (dispatch, {reminder_id}) => ({
  createComment: (comment) => dispatch(createComment(comment, reminder_id)),
  fetchComments: () => dispatch(fetchComments(reminder_id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList)
