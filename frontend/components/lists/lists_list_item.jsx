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
    const { title } = list

    let containerStyle = {display: 'flex'}
    let deleteButtonStyle = {alignSelf: 'flex-end', marginLeft: 'auto'}
    let headerStyle = {width: '100%'}
    return (
      <ListGroupItem style={containerStyle}>
        <h4 style={headerStyle} onClick={handleClick}>{title}</h4>
        <Button style={deleteButtonStyle} onClick={this.handleDeleteClick} className="glyphicon glyphicon-minus-sign" />
      </ListGroupItem>
    )
  }
}

export default ListsListItem
