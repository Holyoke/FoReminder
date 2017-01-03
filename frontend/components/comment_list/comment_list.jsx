import React from 'react'

// components
import CommentListItemContainer from './comment_list_item/comment_list_item_container'
import CommentForm from './comment_form'
import ListGroup from 'react-bootstrap/lib/ListGroup'
import ToolTip from 'react-bootstrap/lib/ToolTip'
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger'

class CommentList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {showForm: false}
    this.toggleForm = this.toggleForm.bind(this)
  }

  componentDidMount () {
    const { fetchComments, reminder_id } = this.props
    fetchComments(reminder_id)
  }

  toggleForm () {
    this.setState({ showForm: !this.state.showForm })
  }

  render () {
    const {reminder_id, comments, createComment} = this.props

    const commentItems = comments.map(comment => {
      return (
        <CommentListItemContainer
          key={`comment-list-item${comment.id}`}
          comment={comment}
          reminder_id={reminder_id} />
      )
    })

    const commentForm = this.state.showForm
      ? <CommentForm reminder_id={reminder_id} createComment={createComment} /> : ''

    const commentsHeaderTooltip = <ToolTip id="comments-header-tooltip">Click to add more comments!</ToolTip>

    const commentsHeader = commentItems.length === 0
      ? <h5 onClick={this.toggleForm}>Click to add comments...</h5>
      : <h5 onClick={this.toggleForm}>
        <OverlayTrigger placement="right" overlay={commentsHeaderTooltip}>
          <span>Comments</span>
        </OverlayTrigger>
      </h5>


    return (
      <ListGroup className="comment-list">
        {commentsHeader}
        {commentForm}
        <ul>{commentItems}</ul>
      </ListGroup>
    )
  }
}

export default CommentList
