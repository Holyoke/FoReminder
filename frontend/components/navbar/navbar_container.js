import { connect } from 'react-redux'
import NavBar from './navbar'

//  actions
import { logout } from '../../actions/session_actions'

const mapStatetoProps = ({session}) => ({
  currentUser: session.currentUser
})

const mapDispatchToProps = (dispatch, { router }) => ({
  logout: () => {
    const redirect = () => {
      router.push('/greeting')
    }
    return dispatch(logout()).then(redirect)
  }
})

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(NavBar)
