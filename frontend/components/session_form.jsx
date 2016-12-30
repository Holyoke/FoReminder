import React from 'react'

// components
import ErrorsList from './errors_list/errors_list'

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
    this.props.clearErrors()
  }

  componentWillUnmount () {
    this.props.clearErrors()
  }

  update (property) {
    return e => this.setState({[property]: e.target.value })
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

    return (
      <form className="session-form" onSubmit={this.handleSubmit}>
        <ErrorsList errors={this.props.errors} />
        <label>Email:
          <input
            className="input"
            ref="title"
            value={this.state.email}
            placeholder="Enter email"
            onChange={this.update('email')}
             />
        </label>

        <label>Password:
          <input
            type="password"
            className="input"
            ref="title"
            value={this.state.password}
            placeholder="password"
            onChange={this.update('password')}
             />
        </label>

        {formButton}
      </form>
    )
  }
}

export default SessionForm
