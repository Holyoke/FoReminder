import { connect } from 'react-redux'
import CommentListItem from './comment_list_item'

// actions
import { receiveComment, removeComment } from '../../../actions/comment_actions'
// selectors
import { commentsByReminderId } from '../../../reducers/selector'

const mapStateToProps = (state, {comment}) => ({
  comment
})

const mapDispatchToProps = (dispatch, {comment}) => ({
  receiveComment: comment => dispatch(receiveComment(comment)),
  removeComment: () => dispatch(removeComment(comment))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentListItem)
