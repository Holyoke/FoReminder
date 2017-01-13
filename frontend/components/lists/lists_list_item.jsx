import React from 'react'

import ListGroupItem from 'react-bootstrap/lib/ListGroupItem'

class ListsListItem extends React.Component {
  render () {
    const { list, handleClick } = this.props
    const { title } = list
    return (
      <ListGroupItem onClick={handleClick}>
        {title}
      </ListGroupItem>
    )
  }
}

export default ListsListItem
