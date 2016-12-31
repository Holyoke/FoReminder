import { connect } from 'react-redux'
import ReminderFilters from './reminder_filters'

// actions
import { receiveFilter } from '../../actions/reminder_actions'

const mapStateToProps = ({reminderFilter}) => ({
  reminderFilter
})

const mapDispatchToProps = (dispatch) => ({
  receiveFilter: (filter) => dispatch(receiveFilter(filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReminderFilters)
