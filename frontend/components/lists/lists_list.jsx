import React from 'react'

// components
import ListGroup from 'react-bootstrap/lib/ListGroup'
import ListsListItem from './lists_list_item'

class ListsList extends React.Component {
  componentDidMount () {
    this.props.fetchLists()
  }

  render () {
    const { lists } = this.props

    const listItems = lists.map((list, idx) => {
      return (<ListsListItem key={list.id} list={list} />)
    })

    return (
      <ListGroup className="lists-list">
        <h2>Lists</h2>
        {listItems}
      </ListGroup>
    )
  }
}

export default ListsList
