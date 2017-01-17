import React from 'react'
import uniqueId from '../../util/id_generator'

// components
import ErrorsListContainer from '../errors_list/errors_list_container'
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem'
import Button from 'react-bootstrap/lib/Button'

class ListForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = { title: '' }
    this.resetForm = this.resetForm.bind(this)
    this.update = this.update.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  update (property) {
    return (e) => this.setState({[property]: e.target.value})
  }
  handleSubmit (e) {
    e.preventDefault()
    const list = Object.assign({}, this.state, {id: uniqueId()})
    const { createList } = this.props
    createList(list).then(this.resetForm())
  }
  resetForm () {
    this.setState({
      title: ''
    })
  }
  render () {
    return(
      <ListGroupItem>
        <form className="list-form" onSubmit={this.handleSubmit}>
          <input
            className="input"
            ref="title"
            value={this.state.title}
            placeholder="Create list"
            onChange={this.update('title')}
             />
        </form>
      </ListGroupItem>
    )
  }
}

export default ListForm
