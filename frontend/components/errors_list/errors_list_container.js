import { connect } from 'react-redux'
import ErrorsList from './errors_list'

// actions
import { clearErrors } from '../../actions/error_actions'

// selectors
import { allReminders, parseErrors } from '../../reducers/selector'

const mapStateToProps = state => ({
  errors: parseErrors(state)
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorsList)
