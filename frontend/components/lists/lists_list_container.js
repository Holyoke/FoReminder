import { connect } from 'react-redux'
import ListsList from './lists_list'

// actions
import { fetchList, fetchLists, createList, updateList } from '../../actions/list_actions'

// selectors
import { getLists, parseErrors } from '../../reducers/selector'

const mapStateToProps = state => ({
  lists: getLists(state),
  errors: parseErrors(state)
})

const mapDispatchToProps = (dispatch) => ({
  createList: (list) => dispatch(createList({list})),
  fetchLists: () => dispatch(fetchLists()),
  fetchList: (list) => dispatch(fetchList(list)),
  updateList: (list) => dispatch(updateList({list}))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListsList)
