import React from 'react'

// components
import Modal from 'react-bootstrap/lib/Modal'
import Button from 'react-bootstrap/lib/Button'

import CommentListContainer from '../comment_list/comment_list_container'

class ReminderDetailView extends React.Component {
  constructor (props) {
    super (props)
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
  }

  handleDeleteClick (e) {
    e.preventDefault()
    const { deleteReminder, reminder, toggleModal} = this.props
    deleteReminder(reminder)
    toggleModal(e)
  }

  render () {
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
        <CommentListContainer reminder_id={reminder_id} />
        <Button bsStyle="warning" bsSize="xsmall" onClick={this.handleDeleteClick}>Delete reminder</Button>
      </Modal>
    )
  }
}

export default ReminderDetailView
