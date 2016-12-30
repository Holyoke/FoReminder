import React from 'react'
import uniqueId from '../../util/id_generator'

class CommentForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      body: '',
      active: true,
      reminder_id: this.props.reminder_id
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update (property) {
    return (e) => this.setState({[property]: e.target.value})
  }

  handleSubmit (e) {
    e.preventDefault()
    const comment = Object.assign({}, this.state, {id: uniqueId() })

    this.props.createComment(comment).then(
      () => { this.setState({ body:'' }) }
    )
  }

  render () {
    return (
      <form className="comment-form" onSubmit={this.handleSubmit}>
        <label>Add comment:
          <input
            className="input"
            ref="title"
            value={this.state.body}
            placeholder="Enter a new comment..."
            onChange={this.update('body')}
            required />
        </label>
      </form>
    )
  }
}

export default CommentForm
