import React from 'react'

// components
import ListGroup from 'react-bootstrap/lib/ListGroup'
import ListsListItem from './lists_list_item'
import ListForm from './list_form'

class ListsList extends React.Component {
  constructor (props) {
    super(props)
    this.handleListItemClick = this.handleListItemClick.bind(this)
  }
  componentDidMount () {
    this.props.fetchLists()
    this.handleListItemClick = this.handleListItemClick.bind(this)
  }

  handleListItemClick (list) {
    const { receiveCurrentList, router } = this.props
    router.push('/reminders')
    receiveCurrentList(list)
  }

  render () {
    const { lists, createList, deleteList } = this.props

    const listItems = lists.map((list, idx) => {
      return (<ListsListItem key={list.id}
        list={list}
        deleteList={() => deleteList(list)}
        handleClick={() => this.handleListItemClick(list)} />)
    })

    return (
      <ListGroup className="lists-list">
        <h2>Lists</h2>
        {listItems}
        <ListForm createList={createList} />
      </ListGroup>
    )
  }
}

export default ListsList
