import { RECEIVE_FILTER, receiveFilter } from '../actions/reminder_actions'

import merge from 'lodash/merge'

const initialState = { filter: 'SHOW_ALL'}

const remindersFilterReducer = (state = initialState, action) => {
  Object.freeze(state)
  let newState = {}

  switch (action.type) {
    case RECEIVE_FILTER:
      return (newState, state, {filter: action.filter})
    default:
      return merge({}, state)
  }
}

export default remindersFilterReducer
