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
    const filters = ['SHOW_ALL', 'SHOW_COMPLETED', 'SHOW_INCOMPLETE']
    // assumes filters starts with 'SHOW_'...
    const buttonItems = filters.map((rFilter, idx) => {
      return(
        <ButtonGroup key={idx}>
          <Button active={ filter === {rFilter}}
                  data-filter={rFilter}
                  onClick={updateFilter}>
                  {rFilter[5] + rFilter.substring(6, rFilter.length).toLowerCase()}</Button>
        </ButtonGroup>
      )
    })
    return (
        <ButtonGroup justified>
          {buttonItems}
        </ButtonGroup>
    )
  }
}

export default ReminderFilters
