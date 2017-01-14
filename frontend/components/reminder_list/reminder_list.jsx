import React from 'react'

// components
import ReminderListItem from './reminder_list_item'
import ReminderForm from './reminder_form'
import ListGroup from 'react-bootstrap/lib/ListGroup'
import ReminderDetailViewContainer from './reminder_detail_view_container'
import ReminderFiltersContainer from '../filter_button_group/reminder_filters_container'

class ReminderList extends React.Component {

  constructor (props) {
    super(props)
    this.state = { showModal: false, selectedReminder: {} }
    this.selectReminder = this.selectReminder.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
  }

  componentDidMount () {
    const { fetchList, currentList, setCurrentList, reminders } = this.props
    const suc = (list) => setCurrentList(list)
    const err = () => fetchList({id: 'default'}).then(suc)

    let tmpId = typeof reminders[0] !== 'undefined' ? reminders[0].list_id : 'default'
    //  attempt to not make extra api calls
    if (currentList.id !== tmpId) {
      //  if currentList fails, then set default list from back end
      fetchList(currentList).then(suc, err)
    }
  }

  toggleModal (e) {
    if (e) e.preventDefault()
    this.setState({ showModal: !this.state.showModal })
  }

  selectReminder (reminder) {
    this.setState({selectedReminder: reminder, showModal: true})
  }

  render () {
    const { reminders, errors, createReminder, removeReminder, updateReminder, currentList } = this.props

    const reminderItems = reminders.map(reminder => {
      return (
        <ReminderListItem
          key={`reminder-list-item${reminder.id}`}
          reminder={reminder}
          selectReminder={this.selectReminder}
          removeReminder={removeReminder}
          updateReminder={updateReminder} />
      )
    })

    const { selectedReminder } = this.state
    const reminderModal = <ReminderDetailViewContainer
      reminder={selectedReminder}
      show={this.state.showModal}
      toggleModal={this.toggleModal} />

    return (
      <ListGroup className='reminder-list' onClick={this.debug}>
        <h2>{currentList.title}</h2>
        <ReminderFiltersContainer />
        {reminderItems}
        <ReminderForm createReminder={createReminder} errors={errors} list_id={currentList.id} />
        {reminderModal}
      </ListGroup>
    )
  }
}

export default ReminderList
