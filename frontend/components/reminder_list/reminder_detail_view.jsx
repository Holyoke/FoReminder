import React from 'react'

// components
import Modal from 'react-bootstrap/lib/Modal'
import CommentListContainer from '../comment_list/comment_list_container'

class ReminderDetailView extends React.Component {
  constructor (props) {
    super(props)
    this.debug = this.debug.bind(this)
  }

  debug (e) {
    e.preventDefault()
  }

  render () {
    console.table(this.props)
    const { reminder, deleteReminder, show } = this.props
    const { body, remind_date } = reminder
    const reminder_id = reminder.id
    return (
      <Modal className='reminder-detail-view' show={show} onHide={this.props.onHide} >
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
        <button onClick={deleteReminder}>Delete reminder</button>
        <CommentListContainer reminder_id={reminder_id} />
      </Modal>
    )
  }
}

export default ReminderDetailView
