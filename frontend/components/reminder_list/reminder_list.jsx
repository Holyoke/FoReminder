import React from 'react'

// components
import ReminderListItem from './reminder_list_item'
import ReminderForm from './reminder_form'

class ReminderList extends React.Component {

  componentDidMount () {
    this.props.fetchReminders()
  }

  render () {
    const { reminders, errors, createReminder } = this.props
    const reminderItems = reminders.map(reminder => {
      return (
        <ReminderListItem
          key={`reminder-list-item${reminder.id}`}
          reminder={reminder}
          removeReminder={this.props.removeReminder}
          updateReminder={this.props.updateReminder} />
      )
    })

    return (
      <div className="reminder-list">
        <h2>Reminder List</h2>
        <ReminderForm createReminder={createReminder} errors={errors} />
        {reminderItems}
      </div>
    )
  }
}

export default ReminderList
