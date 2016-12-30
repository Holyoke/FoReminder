import React from 'react'

// components
import CommentListItemContainer from './comment_list_item/comment_list_item_container'
import CommentForm from './comment_form'

class CommentList extends React.Component {

  componentDidMount () {
    const { fetchComments, reminder_id } = this.props
    fetchComments(reminder_id)
  }

  render () {
    const { reminder_id, comments, receiveComment } = this.props

    const commentItems = comments.map(comment => {
      return (
        <CommentListItemContainer
          key={`comment-list-item${comment.id}`}
          comment={comment}
        />
      )
    })

    return (
      <div className="comment-list">
        <h4>Comment List for reminder id:{reminder_id}</h4>
        <CommentForm reminder_id={reminder_id} receiveComment={receiveComment} />
        <ul>{commentItems}</ul>
      </div>
    )
  }
}

export default CommentList
