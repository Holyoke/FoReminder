import { connect } from 'react-redux'
import ListsList from './lists_list'

// actions
import { fetchLists, createList, updateList } from '../../actions/list_actions'

// selectors
import { getLists, parseErrors } from '../../reducers/selector'

const mapStateToProps = state => ({
  lists: getLists(state),
  errors: parseErrors(state)
})

const mapDispatchToProps = (dispatch, { list }) => ({
  createList: (list) => dispatch(createList({list})),
  fetchLists: () => dispatch(fetchLists()),
  updateList: (list) => dispatch(updateList({list}))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListsList)
