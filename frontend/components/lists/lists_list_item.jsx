import React from 'react'

import ListGroupItem from 'react-bootstrap/lib/ListGroupItem'
import Button from 'react-bootstrap/lib/Button'

class ListsListItem extends React.Component {
  constructor (props) {
    super(props)
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
  }

  handleDeleteClick (e) {
    e.preventDefault()
    this.props.deleteList()
  }

  render () {
    const { list, handleClick } = this.props
    const { title, reminders_count, incomplete_reminders_count } = list


    let containerStyle = {display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}
    let deleteButtonStyle = {width: '3em', height: '3em'}
    let leftGroupStyle = {cursor: 'alias', display: 'flex', marginRight: 'auto'}
    let rightGroupStyle = {display: 'inline-flex', alignItems: 'center'}
    let listCountsStyle = {marginRight: '1em'}
    let titleStyle = {}
    if (incomplete_reminders_count <= 0) {
      titleStyle.color = 'lightgrey'
    }

    // reminder counts
    let reminderCounts = ''
    if (reminders_count > 0) {
      reminderCounts =
          <div className="list-counts" style={listCountsStyle}>
            <h6>{reminders_count} reminders</h6>
            <h6>{incomplete_reminders_count} incomplete</h6>
          </div>
    }

    return (
      <ListGroupItem style={containerStyle}>
        <section onClick={handleClick} className="list-item-left-group" style={leftGroupStyle}>
          <h4 style={titleStyle}>{title}</h4>
        </section>
        <section className="list-item-right-group" style={rightGroupStyle}>
          {reminderCounts}
          <Button style={deleteButtonStyle} onClick={this.handleDeleteClick} className="glyphicon glyphicon-minus-sign" />
        </section>
      </ListGroupItem>
    )
  }
}

export default ListsListItem
