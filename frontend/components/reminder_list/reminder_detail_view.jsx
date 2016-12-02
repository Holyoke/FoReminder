import React from 'react'

class ReminderDetailView extends React.Component {
  render () {
    const { reminder, removeReminder } = this.props
    const { body, remind_date } = reminder
    return (
      <div className='reminder-detail-view'>
        <table>
          <tr>
            <th>Body</th>
            <th>Remind Date</th>
          </tr>
          <tr>
            <td>{body}</td>
            <td>{remind_date}</td>
          </tr>
        </table>
        <button onClick={ removeReminder }>Delete reminder</button>
      </div>
    )
  }
}

export default ReminderDetailView
