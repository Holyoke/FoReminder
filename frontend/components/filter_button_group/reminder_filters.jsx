import React from 'react'
import ButtonToolBar from 'react-bootstrap/lib/ButtonToolBar'
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup'
import DropdownButton from 'react-bootstrap/lib/DropdownButton'
import Button from 'react-bootstrap/lib/Button'

class ReminderFilters extends React.Component {
  constructor(props) {
    super(props)
    this.updateFilter = this.updateFilter.bind(this)
    this.buttonActive = this.buttonActive.bind(this)
  }

  updateFilter (e) {
    const { filter } = e.target.dataset
    this.props.receiveFilter(filter)
  }

  buttonActive (e) {
    debugger
  }

  render () {
    const { buttonActive, updateFilter} = this
    const { filter } = this.props.remindersFilter
    return (
        <ButtonGroup justified>
          <ButtonGroup>
            <Button active={ filter === 'SHOW_ALL'} data-filter='SHOW_ALL' onClick={updateFilter}>All</Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button active={ filter === 'SHOW_COMPLETED'} data-filter='SHOW_COMPLETED' onClick={updateFilter}>Complete</Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button active={ filter === 'SHOW_INCOMPLETE'} data-filter='SHOW_INCOMPLETE' onClick={updateFilter}>Incomplete</Button>
          </ButtonGroup>
        </ButtonGroup>
    )
  }
}

export default ReminderFilters
