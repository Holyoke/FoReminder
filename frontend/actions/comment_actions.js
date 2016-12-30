import * as util from '../util/comment_api_util'
import { _setHeaders } from '../util/session_api_util'

import { receiveErrors, clearErrors } from './error_actions'
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'

// async
export const fetchComments = (reminder_id) => {
  return (dispatch) => {
    return util.fetchComments(reminder_id).then(
      comments => dispatch(receiveComments(comments)),
      err => alert(err)
    )
  }
}

export const createComment = (comment, reminder_id) => {
  return (dispatch) => {
    return util.createComment({comment, reminder_id})
               .then(comment => {
                 dispatch(receiveComment(comment))
               })
  }
}

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
})

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
})

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
})
