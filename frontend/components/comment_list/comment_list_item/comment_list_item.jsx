import React from 'react'
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem'
import Button from 'react-bootstrap/lib/Button'
import ToolTip from 'react-bootstrap/lib/ToolTip'
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger'
import ContentEditable from 'react-contenteditable'

class CommentListItem extends React.Component {
  constructor (props) {
    super(props)
    this.toggleComment = this.toggleComment.bind(this)
    this.update = this.update.bind(this)
  }

  toggleComment (e) {
    e.preventDefault()
    const { updateComment, comment } = this.props
    comment.active = !comment.active
    updateComment().then(
      () => this.setState({active: comment.active})
    )
  }

  update (e) {
    console.log(e.target.value)
  }

  render () {
    const { comment, deleteComment } = this.props
    const { body } = comment
    const textColor = comment.active ? 'black' : 'lightgray'

    //  comment body
    const commentBody = <h5 onClick={this.toggleComment} style={{color: textColor}}>
      {body}
    </h5>

    //  delete button
    const deleteButtonToolTip = <ToolTip id="delete-tool-tip">Delete comment</ToolTip>
    const deleteButton =
      <OverlayTrigger placement="bottom" overlay={deleteButtonToolTip}>
        <Button className="glyphicon glyphicon-minus-sign" style={{top: '-0.5px'}} onClick={deleteComment} />
      </OverlayTrigger>

    //  toggle button
    const glyph = comment.active ? 'glyphicon glyphicon-eye-open' : 'glyphicon glyphicon-eye-close'
    const toggleButtonTip = <ToolTip id="toggle-comment-tool-tip">Toggle comment</ToolTip>
    const toggleButton =
      <OverlayTrigger placement="bottom" overlay={toggleButtonTip}>
        <Button style={{marginRight: '1em', marginLeft: 'auto'}} onClick={this.toggleComment}>
          <span className={glyph} aria-hidden="true"></span>
        </Button>
      </OverlayTrigger>

    return (
      <ListGroupItem className="comment-list-item" style={{display: 'flex', justifyContent: 'space-between'}}>
        {commentBody}
        {toggleButton}
        {deleteButton}
      </ListGroupItem>
    )
  }
}

export default CommentListItem
