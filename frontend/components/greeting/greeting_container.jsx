import { connect } from 'react-redux'
import Greeting from './greeting'

//  actions
import { logout } from '../../actions/session_actions'

const mapStatetoProps = ({session}) => ({
  currentUser: session.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
})

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(Greeting)
