import React from 'react'
import merge from 'lodash/merge'

class ReminderListItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const { reminder } = this.props
    const { title } = reminder

    return (
      <li className="reminder-list-item">
        <p>{title}</p>
      </li>
    )
  }
}

export default ReminderListItem
