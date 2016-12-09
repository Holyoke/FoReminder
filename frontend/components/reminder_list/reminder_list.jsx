import React from 'react'

// components
import ReminderListItem from './reminder_list_item'
import ReminderForm from './reminder_form'
import ListGroup from 'react-bootstrap/lib/ListGroup'
import ReminderDetailViewContainer from './reminder_detail_view_container'

class ReminderList extends React.Component {

  constructor (props) {
    super(props)
    this.state = { showModal: false, selectedReminder: {} }
    this.selectReminder = this.selectReminder.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
  }

  componentDidMount () {
    this.props.fetchReminders()
  }

  toggleModal (e) {
    if (e) e.preventDefault()
    this.setState({ showModal: !this.state.showModal })
  }

  selectReminder (reminder) {
    this.setState({selectedReminder: reminder, showModal: true})
  }

  render () {
    const { reminders, errors, createReminder } = this.props

    const reminderItems = reminders.map(reminder => {
      return (
        <ReminderListItem
          key={`reminder-list-item${reminder.id}`}
          reminder={reminder}
          selectReminder={this.selectReminder.bind(this)}
          removeReminder={this.props.removeReminder}
          updateReminder={this.props.updateReminder} />
      )
    })

    const { selectedReminder } = this.state
    const reminderModal = <ReminderDetailViewContainer
                                reminder={selectedReminder}
                                show={this.state.showModal}
                                onHide={this.toggleModal.bind(this)} />

    return (
      <ListGroup className="reminder-list" onClick={this.debug}>
        <h2>Reminder List</h2>
        <ReminderForm createReminder={createReminder} errors={errors} />
        {reminderItems}
        {reminderModal}
      </ListGroup>
    )
  }
}

export default ReminderList
