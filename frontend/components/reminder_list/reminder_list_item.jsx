import React from 'react'
import merge from 'lodash/merge'

// components
import ReminderDetailViewContainer from './reminder_detail_view_container'
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem'

class ReminderListItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = { detail: false }
    this.toggleDone = this.toggleDone.bind(this)
    this.toggleDetail = this.toggleDetail.bind(this)
  }

  toggleDetail (e) {
    if (e) e.preventDefault() // to catch nested events
    this.setState({detail: !this.state.detail})
  }

  toggleDone (e) {
    e.preventDefault(e)
    const { updateReminder, reminder } = this.props
    const toggledReminder = merge({}, reminder, { done: !reminder.done })
    updateReminder(toggledReminder)
  }


  render () {
    const { reminder } = this.props
    const { title, done } = reminder

    return (
      <ListGroupItem className="reminder-list-item">
          <h4 onClick={this.toggleDetail}>Reminder: {title}</h4>
          <section>Done: {done.toString()}</section>
          <button onClick={this.toggleDone}>Complete reminder</button>
          <button onClick={this.toggleDetail}>Modal: {this.state.detail.toString()}</button>
          <ReminderDetailViewContainer
            reminder={reminder}
            show={this.state.detail}
            onHide={this.toggleDetail.bind(this)} />

      </ListGroupItem>
    )
  }
}

export default ReminderListItem
