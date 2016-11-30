import React from 'react'

// components
// import ReminderListItem from './reminder_list_item'

class Reminderlist extends React.Component {

  render () {
    let reminderItems = <h1>Test</h1>
    return (
      <div>
        <ul className="reminder-list">
          { reminderItems }
        </ul>
      </div>
    )
  }
}
