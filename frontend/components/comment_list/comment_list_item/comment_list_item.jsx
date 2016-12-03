import React from 'react'

class CommentListItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = { active: true }
    this.toggleComment = this.toggleComment.bind(this)
  }

  toggleComment (e) {
    e.preventDefault()
    this.setState({active: !this.state.active})
  }


  render () {
    const { comment, removeComment } = this.props
    const { title, body } = comment
    const { active } = this.state
    return (
      <li className='comment-list-item'>
        <h5>{title}</h5>
        <section>{body}</section>
        <section>active:{ active.toString() }</section>
        <button onClick={this.toggleComment}>Toggle Comment</button>
        <button onClick={removeComment}>Remove Comment</button>
      </li>
    )
  }
}

export default CommentListItem
