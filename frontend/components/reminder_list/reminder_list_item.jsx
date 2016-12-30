import React from 'react'
import merge from 'lodash/merge'

// components
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem'
import Button from 'react-bootstrap/lib/Button'

class ReminderListItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = { detail: false }
    this.toggleDone = this.toggleDone.bind(this)
    this.toggleDetail = this.toggleDetail.bind(this)
  }

  toggleDetail (e) {
    if (e) e.preventDefault() // to catch nested events
    this.setState({detail: !this.state.detail})
  }

  toggleDone (e) {
    e.preventDefault()
    const { updateReminder, reminder } = this.props
    const toggledReminder = merge({}, reminder, { done: !reminder.done })
    updateReminder(toggledReminder)
  }


  render () {
    const { reminder, selectReminder } = this.props
    const { title, done } = reminder
    const glyph = done ? "glyphicon glyphicon-check" : "glyphicon glyphicon-unchecked"
    const toggleButton =
      <Button onClick={this.toggleDone}>
        <span className={glyph} aria-hidden="true"></span>
      </Button>

    return (
      <ListGroupItem className="reminder-list-item">
          {toggleButton}
          <h4 onClick={() => selectReminder(reminder)}>{title}</h4>
          <section>Done: {done.toString()}</section>
      </ListGroupItem>
    )
  }
}

export default ReminderListItem
