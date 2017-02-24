import { connect } from 'react-redux'
import Greeting from './greeting'

//  actions
import { logout, login } from '../../actions/session_actions'

const mapStatetoProps = ({session}) => ({
  currentUser: session.currentUser
})

const mapDispatchToProps = (dispatch, { router }) => ({
  logout: () => dispatch(logout()),
  guestLogin: () => {
    let guest = { email: 'guest@remindux.com', password: 'guest1234' }
    const redirect = () => {
      router.push('reminders')
    }
    return dispatch(login(guest)).then(redirect)
  }
})

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(Greeting)
