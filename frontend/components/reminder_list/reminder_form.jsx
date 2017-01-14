import React from 'react'
import uniqueId from '../../util/id_generator'
import moment from 'moment'
import DatePicker from 'react-datepicker'

// components
import ErrorsListContainer from '../errors_list/errors_list_container'
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem'
import Button from 'react-bootstrap/lib/Button'

import 'react-datepicker/dist/react-datepicker.css'

class ReminderForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      body: '',
      done: false,
      remind_date: moment().add(1, 'hours')
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDataChange = this.handleDataChange.bind(this)
    this.resetForm = this.resetForm.bind(this)
  }

  update (property) {
    return (e) => this.setState({[property]: e.target.value})
  }

  handleSubmit (e) {
    e.preventDefault()
    const reminder = Object.assign({}, this.state, {id: uniqueId()})
    const { createReminder, list_id } = this.props

    //  parse date
    reminder.remind_date = reminder.remind_date.format('LLL')

    createReminder(reminder, list_id).then(this.resetForm())
  }

  handleDataChange (date) {
    this.setState({
      remind_date: date
    })
  }

  resetForm () {
    this.setState({
      title: '',
      body: '',
      remind_date: moment().add(24, 'hours')
    })
  }

  render () {
    return (
      <ListGroupItem>
        <form className="reminder-form" onSubmit={this.handleSubmit}>
          <Button type="submit" onClick={this.handleSubmit} className="glyphicon glyphicon-plus-sign" />
          <ErrorsListContainer />
          <input
            className="input"
            ref="title"
            value={this.state.title}
            placeholder="Create reminder..."
            onChange={this.update('title')}
             />
          <label>
            <DatePicker
              selected={this.state.remind_date}
              onChange={this.handleDataChange} />
          </label>

        </form>
      </ListGroupItem>
    )
  }
}

export default ReminderForm
