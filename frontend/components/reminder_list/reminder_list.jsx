import React from 'react'

// components
import ReminderListItem from './reminder_list_item'
import ReminderForm from './reminder_form'

class ReminderList extends React.Component {

  componentDidMount () {
    this.props.fetchReminders()
  }

  render () {
    const { reminders, errors, createReminder, clearErrors } = this.props
    const reminderItems = reminders.map(reminder => {
      return (
        <ReminderListItem
          key={`reminder-list-item${reminder.id}`}
          reminder={reminder}
          removeReminder={this.props.removeReminder}
          receiveReminder={this.props.receiveReminder} />
      )
    })

    return (
      <div className="reminder-list">
        <p>Reminder List Presentational</p>
        <ReminderForm createReminder={createReminder} clearErrors={clearErrors} errors={errors} />
        {reminderItems}
      </div>
    )
  }
}

export default ReminderList
