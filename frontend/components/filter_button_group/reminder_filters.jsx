import React from 'react'
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup'
import Button from 'react-bootstrap/lib/Button'

class ReminderFilters extends React.Component {

  updateFilter (e) {
    const { filter} = e.target.dataset
    this.props.receiveFilter(filter)
  }

  render () {
    return (
      <ButtonGroup>
        <Button data-filter='SHOW_ALL' onClick={this.updateFilter.bind(this)}>All</Button>
        <Button data-filter='SHOW_COMPLETED' onClick={this.updateFilter.bind(this)}>Complete</Button>
        <Button data-filter='SHOW_INCOMPLETE' onClick={this.updateFilter.bind(this)}>Incomplete</Button>
      </ButtonGroup>
    )
  }
}

export default ReminderFilters
