import React from 'react'
import merge from 'lodash/merge'
import moment from 'moment'

// components
import * as styles from '../../styles/reminder_styles'
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem'
import Button from 'react-bootstrap/lib/Button'
import ToolTip from 'react-bootstrap/lib/ToolTip'
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger'

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
    e.preventDefault()
    const { updateReminder, reminder } = this.props
    const toggledReminder = merge({}, reminder, { done: !reminder.done })
    updateReminder(toggledReminder)
  }

  render () {
    const { reminder, selectReminder } = this.props
    let { title, done, remind_date } = reminder
    remind_date = moment(remind_date).format('MM/DD')

    // button for toggling
    const glyph = done ? 'glyphicon glyphicon-check' : 'glyphicon glyphicon-unchecked'
    const toggleButton =
      <Button style={{marginRight: '1em'}} onClick={this.toggleDone}>
        <span className={glyph} aria-hidden="true"></span>
      </Button>

    const dateColor = moment().isBefore(reminder.remind_date) ? 'grey' : 'red'
    const itemTextStatus = done ? 'line-through' : ''

    //  tooltip for expanding modal
    const reminderItemTip = <ToolTip id="reminder-item-tip" arrowOffsetLeft={"-100px !important"}>
      Click for more details
    </ToolTip>

    return (
      <ListGroupItem className="reminder-list-item">
            {toggleButton}
            <OverlayTrigger overlay={reminderItemTip} placement="top" delayShow={600}>
              <div style={styles.reminderListItemTitleDate} className="title-date" onClick={() => selectReminder(reminder)}>
                <div style={{textDecoration: itemTextStatus}}>{title}</div>
                <div style={{fontSize: '0.75em', color: dateColor }}>{remind_date}</div>
              </div>
            </OverlayTrigger>
      </ListGroupItem>
    )
  }
}

export default ReminderListItem
