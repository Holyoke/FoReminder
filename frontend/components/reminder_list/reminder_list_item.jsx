import React from 'react'
import merge from 'lodash/merge'

class ReminderListItem extends React.Component {
  constructor (props) {
    super(props)

    this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this)
  }

  handleDeleteButtonClick (e) {
    e.preventDefault()
    this.props.removeReminder(this.props.reminder)
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
        </div>
      </li>
    )
  }
}

export default ReminderListItem
