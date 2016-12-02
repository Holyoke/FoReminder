import { RECEIVE_COMMENT, RECEIVE_COMMENTS, REMOVE_COMMENT } from '../actions/comment_actions'
import merge from 'lodash/merge'

const commentsReducer = (state = initialState, action) => {
  Object.freeze(state)
  let newState = {}
  switch (action.type) {
    case RECEIVE_COMMENTS:
      action.comments.forEach(comment => newState[comment.id] = comment)
      return newState
    case RECEIVE_COMMENT:
      const newComment = { [action.comment.id]: action.comment }
      newState = merge({}, state, newComment)
      return newState
    case REMOVE_COMMENT:
      newState = merge({}, state)
      delete newState[action.comment.id]
      return newState
    default:
      return state
  }
}

export default commentsReducer
