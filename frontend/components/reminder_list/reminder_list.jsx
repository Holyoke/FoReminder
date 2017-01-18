import React from 'react'

// components
import ReminderListItem from './reminder_list_item'
import ReminderForm from './reminder_form'
import ListGroup from 'react-bootstrap/lib/ListGroup'
import ReminderDetailViewContainer from './reminder_detail_view_container'
import ReminderFiltersContainer from '../filter_button_group/reminder_filters_container'
import ContentEditable from 'react-contenteditable'

class ReminderList extends React.Component {

  constructor (props) {
    super(props)
    this.state = { showModal: false, selectedReminder: {} }
    this.selectReminder = this.selectReminder.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
    this.handleTitleEdit = this.handleTitleEdit.bind(this)
    this.checkKeyPress = this.checkKeyPress.bind(this)
  }

  checkKeyPress (e) {
    console.log(e.charCode, e.charCode === 13)
    if (e.charCode === 13) {
      e.preventDefault()
      return false
    }
  }

  componentDidMount () {
    const { fetchList, currentList, setCurrentList } = this.props
    const suc = (list) => setCurrentList(list)
    const err = () => fetchList({id: 'default'}).then(suc)
    fetchList(currentList).then(suc, err)
  }

  handleTitleEdit (e) {
    e.preventDefault()
    const {updateList, setCurrentList} = this.props
    let {currentList} = this.props

    if (e.target.innerText === '') {
      e.target.innerText = currentList.title
    }

    let text = e.target.innerText
    let updatedList = Object.assign({}, currentList, {title: text})
    if (updatedList.title !== currentList.title) {
      updateList(updatedList).then(setCurrentList(updatedList))
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

    const headerStyle = {display: 'inline'}

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
        <h2>
          <ContentEditable style={headerStyle}
          html={currentList.title}
          disabled={false}
          onBlur={this.handleTitleEdit}
          onKeyPress={this.checkKeyPress} />
        </h2>
        <ReminderFiltersContainer />
        {reminderItems}
        <ReminderForm createReminder={createReminder} errors={errors} list_id={currentList.id} />
        {reminderModal}
      </ListGroup>
    )
  }
}

export default ReminderList
