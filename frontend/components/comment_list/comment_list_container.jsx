import { connect } from 'react-redux'
import CommentList from './comment_list'

// actions
import { receiveComment } from '../../actions/comment_actions'
// selectors
import { commentsByReminderId } from '../../reducers/selector'

const mapStateToProps = (state, {reminder_id}) => ({
  comments: commentsByReminderId(state, reminder_id),
  reminder_id
})

const mapDispatchToProps = dispatch => ({
  receiveComment: comment => dispatch(receiveComment(comment))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList)
