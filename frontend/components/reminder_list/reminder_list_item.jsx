import React from 'react'
import merge from 'lodash/merge'

// components
import ReminderDetailViewContainer from './reminder_detail_view_container'

class ReminderListItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {detail: false}
    this.toggleDone = this.toggleDone.bind(this)
    this.toggleDetail = this.toggleDetail.bind(this)
  }

  toggleDetail (e) {
    e.preventDefault()
    this.setState({detail: !this.state.detail})
  }

  toggleDone (e) {
    e.preventDefault(e)
    const { receiveReminder, reminder } = this.props
    const toggledReminder = merge({}, reminder, { done: !reminder.done })
    receiveReminder(toggledReminder)
  }


  render () {
    const { reminder } = this.props
    const { title, done } = reminder
    let detailView

    if (this.state.detail) {
      detailView = <ReminderDetailViewContainer reminder={reminder} />
    }

    return (
      <li className="reminder-list-item">
        <div className="reminder">
          <h4 onClick={this.toggleDetail}>Reminder: {title}</h4>
          <section>Done: {done.toString()}</section>
          <button onClick={this.toggleDone}>Complete reminder</button>
          <button onClick={this.toggleDetail}>More Details</button>
          { detailView }
        </div>
      </li>
    )
  }
}

export default ReminderListItem
