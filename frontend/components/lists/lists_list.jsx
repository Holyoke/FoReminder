import React from 'react'

// components
import ListGroup from 'react-bootstrap/lib/ListGroup'
import ListsListItem from './lists_list_item'

class ListsList extends React.Component {
  componentDidMount () {
    this.props.fetchLists()
    this.handleListItemClick = this.handleListItemClick.bind(this)
  }

  handleListItemClick (list) {
    this.props.receiveCurrentList(list)
    this.props.router.push("/reminders")
  }

  render () {
    const { lists, receiveCurrentList } = this.props

    const listItems = lists.map((list, idx) => {
      return (<ListsListItem key={list.id} list={list} handleClick={() => this.handleListItemClick(list)} />)
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
