import { connect } from 'react-redux'
import ReminderFilters from './reminder_filters'
import { filterCounts } from '../../selectors/reminder_filters_selectors'

// actions
import { receiveFilter } from '../../actions/reminder_actions'

const mapStateToProps = (state) => ({
  remindersFilter: state.remindersFilter,
  counts: filterCounts(state)
})

const mapDispatchToProps = (dispatch) => ({
  receiveFilter: (filter) => dispatch(receiveFilter(filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReminderFilters)
