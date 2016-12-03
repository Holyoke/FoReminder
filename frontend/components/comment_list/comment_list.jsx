import React from 'react'

import CommentListItemContainer from './comment_list_item/comment_list_item_container'

class CommentList extends React.Component {

  render () {
    const { reminder_id, comments } = this.props
    const commentItems = comments.map(comment => {
      return (
        <CommentListItemContainer
          key={`comment-list-item${comment.id}`}
          comment={comment}
        />
      )
    })
    return(
      <div className='comment-list'>
        <h4 onClick={() => console.table(this.props)}>Comment List for reminder id:{reminder_id}</h4>
        <ul> { commentItems } </ul>
      </div>
    )
  }
}

export default CommentList
