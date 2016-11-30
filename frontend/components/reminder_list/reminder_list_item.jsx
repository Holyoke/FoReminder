import React from 'react'
import merge from 'lodash/merge'

class ReminderListItem extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { reminder } = this.props
    const { title, remind_date } = reminder
    return (
      <li className="reminder-list-item">
        <p>Title: {title}</p>
        <p>Remind Date: {remind_date}</p>
      </li>
    )
  }
}

export default ReminderListItem
