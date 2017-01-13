import { RECEIVE_LIST, RECEIVE_LISTS, REMOVE_LIST } from '../actions/list_actions'

import merge from 'lodash/merge'

const initialState = {
  '1': {
    id: 1,
    title: 'Etheral List'
  }
}

const listsReducer = (state = initialState, action) => {
  Object.freeze(state)
  let newState = {}
  switch (action.type) {
    case RECEIVE_LISTS:
      action.lists.forEach(list => newState[list.id] = list)
      return newState
    case RECEIVE_LIST:
      const newList = { [action.list.id]: action.list }
      newState = merge({}, state, newList)
      return newState
    case REMOVE_LIST:
      newState = merge({}, state)
      delete newState[action.list.id]
      return newState
    default:
      return state
  }
}

export default listsReducer
