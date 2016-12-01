import React from 'react'
import merge from 'lodash/merge'

class ReminderListItem extends React.Component {
  constructor (props) {
    super(props)

    this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this)
    this.handleDoneButtonClick = this.handleDoneButtonClick.bind(this)
  }

  handleDeleteButtonClick (e) {
    e.preventDefault()
    const { removeReminder, reminder} = this.props
    removeReminder(reminder)
  }

  handleDoneButtonClick (e) {
    e.preventDefault(e)
    const { receiveReminder, reminder } = this.props
    const toggledReminder = merge(
      {},
      reminder,
      { done: !reminder.done }
    )
    receiveReminder(toggledReminder)
  }


  render () {
    const { reminder, removeReminder } = this.props
    const { title, remind_date, body, done } = reminder
    return (
      <li className="reminder-list-item">
        <div className='reminder'>
          <h4>Title: {title}</h4>
          <section>{body}</section>
          <section>Done: {done.toString() }</section>
          <section>Remind Date: {remind_date}</section>
          <button onClick={this.handleDeleteButtonClick}>Delete reminder</button>
          <button onClick={this.handleDoneButtonClick}>Complete reminder</button>
        </div>
      </li>
    )
  }
}

export default ReminderListItem
