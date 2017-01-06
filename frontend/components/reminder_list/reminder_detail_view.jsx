import React from 'react'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

// components
import Modal from 'react-bootstrap/lib/Modal'
import Button from 'react-bootstrap/lib/Button'
import ContentEditable from 'react-contenteditable'
import CommentListContainer from '../comment_list/comment_list_container'

class ReminderDetailView extends React.Component {
  constructor (props) {
    super(props)
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
    this.state = { body: "", title: "", edited: false, remind_date: moment() }
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
    this.update = this.update.bind(this)
    this.loadReminder = this.loadReminder.bind(this)
    this.handleCloseClick = this.handleCloseClick.bind(this)
    this.handleDataChange = this.handleDataChange.bind(this)
    this._sanitizeContentEditable = this._sanitizeContentEditable.bind(this)
  }

  handleDeleteClick (e) {
    e.preventDefault()
    const { deleteReminder, reminder, toggleModal } = this.props
    deleteReminder(reminder)
    toggleModal(e)
  }

  update (property) {
    return (e) => { this.setState({[property]: e.target.value, edited: true }) }
  }

  handleDataChange (date) { this.setState({ remind_date: date, edited: true }) }

  loadReminder () {
    const { body,title, remind_date } = this.props.reminder
    this.setState({body, title, edited: false, remind_date: moment(remind_date)})
  }

  _sanitizeContentEditable (string) {
    // regex to remove tags created after pressing enter
    string = string.replace(/<div>/g, '')
    string = string.replace(/<\/div>/g, '')
    string = string.replace(/<br>/g, '')
    return string
  }

  handleCloseClick () {
    const { reminder, updateReminder, toggleModal } = this.props
    const edittedTitle = this._sanitizeContentEditable(this.state.title)
    reminder.title = edittedTitle !== '' ? edittedTitle : reminder.title
    reminder.body = this._sanitizeContentEditable(this.state.body)
    reminder.remind_date = this.state.remind_date.format()
    const data = { reminder }

    if (this.state.edited) {
      updateReminder(data).then(() => {},
      (err) => this.setState({title: reminder.body}))
    }
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
      <Modal style={style}
             className='reminder-detail-view'
             show={show}
             onHide={this.handleCloseClick}
             onShow={this.loadReminder}>

        <Modal.Header className='reminder-modal-header'>
          <Modal.Title>
            <ContentEditable html={title} disabled={false} onChange={this.update('title')} />
          </Modal.Title>
          <label>
            <DatePicker
              selected={this.state.remind_date}
              onChange={this.handleDataChange} />
          </label>
          <br />
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
