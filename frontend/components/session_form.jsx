import React from 'react'

// components
import ErrorsList from './errors_list/errors_list'
import FormControl from 'react-bootstrap/lib/FormControl'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormGroup from 'react-bootstrap/lib/FormGroup'

class SessionForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillMount () {
    // this.props.clearErrors()
  }

  componentWillUnmount () {
    // this.props.clearErrors()
  }

  update (property) {
    return (e) => this.setState({[property]: e.target.value })
  }

  handleSubmit (e) {
    e.preventDefault()
    const user = Object.assign({}, this.state)
    this.props.processForm(user).then(() => this.redirect())
  }

  redirect() {
    this.props.router.push("/reminders")
  }

  render () {
    const formButton = <button>{this.props.location.pathname.slice(1)}</button>
    const { errors, clearErrors } = this.props
    // currently clearErrors doesn't work for form errors

    return (
      <form className="session-form" onSubmit={this.handleSubmit}>
        <ErrorsList errors={errors} clearErrors={clearErrors} />
        <FormGroup>
          <ControlLabel>Email: </ControlLabel>
          <FormControl
            type="text"
            value={this.state.email}
            placeholder="Enter email"
            onChange={this.update('email')}
             />

          <ControlLabel>Password: </ControlLabel>
          <FormControl
            type="password"
            value={this.state.password}
            placeholder="Enter password"
            onChange={this.update('password')}
            />

          {formButton}
        </FormGroup>
      </form>
    )
  }
}

export default SessionForm
