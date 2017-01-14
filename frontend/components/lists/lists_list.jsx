import React from 'react'

// components
import ListGroup from 'react-bootstrap/lib/ListGroup'
import ListsListItem from './lists_list_item'

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
    receiveCurrentList(list)
    router.push('/reminders')
  }

  render () {
    const { lists } = this.props

    const listItems = lists.map((list, idx) => {
      return (<ListsListItem key={list.id} list={list} handleClick={() => this.handleListItemClick(list)} />)
    })

    return (
      <ListGroup className='lists-list'>
        <h2>Lists</h2>
        {listItems}
      </ListGroup>
    )
  }
}

export default ListsList
