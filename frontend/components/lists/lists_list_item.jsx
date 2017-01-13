import React from 'react'

import ListGroupItem from 'react-bootstrap/lib/ListGroupItem'

class ListsListItem extends React.Component {
  render () {
    const { list } = this.props
    const { title } = list
    return (
      <ListGroupItem>
        {title}
      </ListGroupItem>
    )
  }
}

export default ListsListItem
