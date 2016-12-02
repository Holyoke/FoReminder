import React from 'react'

// components
import CommentListContainer from '../comment_list/comment_list_container'

class ReminderDetailView extends React.Component {
  render () {
    const { reminder, removeReminder } = this.props
    const { body, remind_date} = reminder
    const reminder_id = reminder.id
    return (
      <div className='reminder-detail-view'>
        <table>
          <tbody>
            <tr>
              <th>Body</th>
              <th>Remind Date</th>
            </tr>
            <tr>
              <td>{body}</td>
              <td>{remind_date}</td>
            </tr>
          </tbody>
        </table>
        <button onClick={ removeReminder }>Delete reminder</button>
        <CommentListContainer reminder_id={reminder_id} />
      </div>
    )
  }
}

export default ReminderDetailView
