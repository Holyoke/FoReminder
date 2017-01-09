import React from 'react'
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem'
import Button from 'react-bootstrap/lib/Button'
import ToolTip from 'react-bootstrap/lib/ToolTip'
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger'

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
    const { comment, deleteComment } = this.props
    const { body } = comment
    const { active } = this.state
    const textColor = active ? 'black' : 'lightgray'
    const deleteButtonToolTip = <ToolTip id="delete-tool-tip">Delete comment</ToolTip>
    const deleteButton =
    <OverlayTrigger placement="bottom" overlay={deleteButtonToolTip}>
      <Button className="glyphicon glyphicon-minus-sign" onClick={deleteComment}>
      </Button>
    </OverlayTrigger>

    return (
      <ListGroupItem className="comment-list-item">
        <h5 onClick={this.toggleComment} style={{color: textColor}}>
          {body}
        </h5>
        {deleteButton}
      </ListGroupItem>
    )
  }
}

export default CommentListItem
