import { RECEIVE_CURRENT_LIST } from '../actions/current_list_actions'

import merge from 'lodash/merge'

const initialState = {
  'id': 'default',
  'title': 'Reminders'
}

const currentListReducer = (state = initialState, action) => {
  Object.freeze(state)
  let newState = {}
  switch (action.type) {
    case RECEIVE_CURRENT_LIST:
      newState = merge({}, state, action.list)
      return newState
    default:
      return state
  }
}

export default currentListReducer
