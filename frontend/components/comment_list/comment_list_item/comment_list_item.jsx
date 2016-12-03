import React from 'react'

class CommentListItem extends React.Component {
  render () {
    const { comment } = this.props
    const { title, body } = comment
    return (
      <li className='comment-list-item'>
        <h5>{title}</h5>
        <section>{body}</section>
      </li>
    )
  }
}

export default CommentListItem
