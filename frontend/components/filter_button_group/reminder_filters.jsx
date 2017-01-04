import React from 'react'
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup'
import Button from 'react-bootstrap/lib/Button'
import Badge from 'react-bootstrap/lib/Badge'

class ReminderFilters extends React.Component {
  constructor(props) {
    super(props)
    this.updateFilter = this.updateFilter.bind(this)
  }

  updateFilter (e) {
    const { filter } = e.target.dataset
    this.props.receiveFilter(filter)
  }

  render () {
    const {updateFilter} = this
    const { filter } = this.props.remindersFilter
    const { counts } = this.props
    const filters = ['SHOW_ALL', 'SHOW_COMPLETED', 'SHOW_INCOMPLETE']
    const buttonItems = filters.map((rFilter, idx) => {
      // assumes filters starts with 'SHOW_'...
      const filterName = rFilter[5] + rFilter.substring(6, rFilter.length).toLowerCase()
      const _badge = counts[filterName] > 0
        ? <Badge style={{padding: '4px 3px', marginLeft: '5px'}}> {counts[filterName]}</Badge>
        : ''

      return (
        <ButtonGroup key={idx}>
          <Button active={filter === {rFilter}}
            data-filter={rFilter}
            onClick={updateFilter}>
              {filterName}
              {_badge}
          </Button>
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
