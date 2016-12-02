import React from 'react'

class CommentListItem extends React.Component {
  render () {
    console.table(this.props)

    return (
      <li className='comment-list-item'>
        <p onClick={ () => console.table(this.props) }> Comment List Item for</p>
      </li>
    )
  }
}

export default CommentListItem
