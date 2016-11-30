import React from 'react'
import merge from 'lodash/merge'

class ReminderlistItem extends react.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const { reminders } = this.props
    const { title } = reminder

    return (
      <li className="reminder-list-item">
        <p>{title}</p>
      </li>
    )
  }
}
