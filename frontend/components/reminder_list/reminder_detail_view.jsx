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
    this.state = { body: "", title: "", edited: false }
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
    this.update = this.update.bind(this)
    this.loadReminder = this.loadReminder.bind(this)
    this.handleCloseClick = this.handleCloseClick.bind(this)
  }

  handleDeleteClick (e) {
    e.preventDefault()
    const { deleteReminder, reminder, toggleModal } = this.props
    deleteReminder(reminder)
    toggleModal(e)
  }

  update (property) {
    return (e) => this.setState({[property]: e.target.value, edited: true })
  }

  loadReminder () {
    const { body,title } = this.props.reminder
    this.setState({body, title, edited: false})
  }

  handleCloseClick () {
    const { reminder, updateReminder, toggleModal } = this.props
    reminder.body = this.state.body
    reminder.title = this.state.title
    const data = { reminder }
    if (this.state.edited) { updateReminder(data) }
    toggleModal()
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
          <Modal.Title>
            <ContentEditable html={title} disabled={false} onChange={this.update('title')} />
          </Modal.Title>
          <section>Due {remind_date}</section>
          <Button bsStyle="warning" bsSize="xsmall" onClick={this.handleDeleteClick}>Delete</Button>
        </Modal.Header>

        <Modal.Body>
          <section style={{fontStyle: 'italic', fontSize: '0.75em'}}>
            <ContentEditable html={reminderBody} disabled={false} onChange={this.update('body')} />
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
