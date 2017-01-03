import { RECEIVE_FILTER, RECEIVE_COUNTS } from '../actions/reminder_actions'

import merge from 'lodash/merge'

const initialState = {
  filter: 'SHOW_ALL',
  counts: {
    'All': 0,
    'Incomplete': 0,
    'Completed': 0
  }
}

const remindersFilterReducer = (state = initialState, action) => {
  Object.freeze(state)
  let newState = {}

  switch (action.type) {
    case RECEIVE_FILTER:
      return merge(newState, state, {filter: action.filter})
    case RECEIVE_COUNTS:
      return merge(newState, state, {counts: action.counts})
    default:
      return merge({}, state)
  }
}

export default remindersFilterReducer
