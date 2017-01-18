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
    let listGroupItemStyle = {}
    let formStyle = {alignSelf: 'center'}
    let addButtonStyle = {marginLeft: 'auto', height: '3em', width: '3em', top: '-0.35em'}
    let errorContainerStyle = {}
    let formContainerStyle = {display: 'flex', alignItems: 'center'}
    return (
      <ListGroupItem style={listGroupItemStyle}>
        <div className="error-list-container" style={errorContainerStyle}>
          <ErrorsListContainer />
        </div>

        <div className="list-form-container" style={formContainerStyle}>
          <form className="list-form" onSubmit={this.handleSubmit} style={formStyle}>
            <input
              className="input"
              ref="title"
              value={this.state.title}
              placeholder="Create list..."
              onChange={this.update('title')}
              />
          </form>
          <Button style={addButtonStyle} type="submit" onClick={this.handleSubmit} className="glyphicon glyphicon-plus-sign" />
        </div>
      </ListGroupItem>
    )
  }
}

export default ListForm
