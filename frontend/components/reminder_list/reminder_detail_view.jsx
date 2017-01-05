import React from 'react'
import moment from 'moment'

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
    const { reminder, deleteReminder, show, toggleModal } = this.props
    const reminder_id = reminder.id
    let { body, remind_date, title } = reminder
    remind_date = moment(remind_date).format('MM/DD/YY')
    const style = {width: '75%', marginLeft: 'auto', marginRight: 'auto', marginTop: '12.5%'}

    return (
      <Modal style={style} className='reminder-detail-view' show={show} onHide={this.props.onHide} >
        <Modal.Header className='reminder-modal-header'>
          <Modal.Title>{title}</Modal.Title>
          <section>Due {remind_date}</section>
          <Button bsStyle="warning" bsSize="xsmall" onClick={this.handleDeleteClick}>Delete</Button>
        </Modal.Header>

        <Modal.Body>
          <section>{body}</section>
          <CommentListContainer reminder_id={reminder_id} />
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={toggleModal}>Close</Button>
        </Modal.Footer>

      </Modal>
    )
  }
}

export default ReminderDetailView
