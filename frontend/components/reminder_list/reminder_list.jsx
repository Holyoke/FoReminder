import React from 'react'

// components
import ReminderListItem from './reminder_list_item'

class ReminderList extends React.Component {

  render () {
    const { reminders } = this.props
    const reminderItems = reminders.map(reminder => {
      return (
        <ReminderListItem
          key={`reminder-list-item${reminder.id}`}
          reminder={reminder} />
      )
    })

    return (
      <div>
        <p>Reminder List Presentational</p>
        { reminderItems }
      </div>
    )
  }
}

export default ReminderList
