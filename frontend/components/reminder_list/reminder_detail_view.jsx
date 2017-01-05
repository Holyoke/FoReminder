import React from 'react'
import moment from 'moment'

// components
import Modal from 'react-bootstrap/lib/Modal'
import Button from 'react-bootstrap/lib/Button'
import ContentEditable from 'react-contenteditable'

import CommentListContainer from '../comment_list/comment_list_container'

class ReminderDetailView extends React.Component {
  constructor (props) {
    super (props)
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
    this.state = { body: "" }
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.loadReminder = this.loadReminder.bind(this)
    this.handleCloseClick = this.handleCloseClick.bind(this)
  }

  handleDeleteClick (e) {
    e.preventDefault()
    const { deleteReminder, reminder, toggleModal } = this.props
    deleteReminder(reminder)
    toggleModal(e)
  }

  handleChange (e) {
    this.setState({body: e.target.value})
  }

  loadReminder () {
    const { body } = this.props.reminder
    this.setState({body})
  }

  handleCloseClick () {
    const { reminder } = this.props
    reminder.body = this.state.body
    const data = { reminder }
    this.props.updateReminder(data)
    this.props.toggleModal()
  }

  render () {
    const { reminder, show } = this.props
    const reminder_id = reminder.id
    let { body, remind_date, title } = reminder
    remind_date = moment(remind_date).format('MM/DD/YY')
    const style = {width: '75%', marginLeft: 'auto', marginRight: 'auto', marginTop: '12.5%'}
    const reminderBody = body === '' ? 'Click to add a description' : body

    return (
      <Modal style={style} className='reminder-detail-view' show={show} onHide={this.props.onHide} onShow={this.loadReminder} >
        <Modal.Header className='reminder-modal-header'>
          <Modal.Title>{title}</Modal.Title>
          <section>Due {remind_date}</section>
          <Button bsStyle="warning" bsSize="xsmall" onClick={this.handleDeleteClick}>Delete</Button>
        </Modal.Header>

        <Modal.Body>
          <section style={{fontStyle: 'italic', fontSize: '0.75em'}}>
            <ContentEditable html={reminderBody} disabled={false} onChange={this.handleChange} />
          </section>
          <CommentListContainer reminder_id={reminder_id} />
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={this.handleCloseClick}>Close</Button>
        </Modal.Footer>

      </Modal>
    )
  }
}

export default ReminderDetailView
