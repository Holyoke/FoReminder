import React from 'react'

class ReminderDetailView extends React.Component {
  render () {
    const { reminder, removeReminder } = this.props

    return (
      <div className='reminder-detail-view'>
        <p>Reminder Detail View</p>
        <button onClick={ removeReminder }>Delete reminder</button>
      </div>
    )
  }
}

export default ReminderDetailView
