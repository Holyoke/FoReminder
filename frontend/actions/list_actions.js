import * as util from '../util/list_api_util'
import { _setHeaders } from '../util/session_api_util'

import { receiveCurrentList } from './current_list_actions'
import { receiveReminders } from './reminder_actions'
import { receiveErrors, clearErrors } from './error_actions'

export const RECEIVE_LIST = 'RECEIVE_LIST'
export const RECEIVE_LISTS = 'RECEIVE_LISTS'
export const REMOVE_LIST = 'REMOVE_LIST'

// async actions
export const fetchList = (list, success, error) => {
  return (dispatch) => {
    return util.fetchList(list, success, error).then(list => {
      dispatch(receiveReminders(list.reminders))
      dispatch(receiveList(list))
    })
  }
}

export const fetchLists = () => {
  return (dispatch) => {
    return util.fetchLists().then(lists => {
      dispatch(receiveLists(lists))
    })
  }
}

export const createList = list => {
  return dispatch => {
    return util.createList(list)
               .then(list => {
                 dispatch(receiveList(list))
                 dispatch(clearErrors())
               },
                err => dispatch(receiveErrors(err))
              )
  }
}

export const updateList = list => {
  return dispatch => {
    return util.updateList(list)
               .then(list => {
                 dispatch(receiveList(list))
                 dispatch(clearErrors())
               },
                err => dispatch(receiveErrors(err))
              )
  }
}

export const deleteList = list => {
  return dispatch => {
    return util.deleteList(list)
               .then(list => {
                 dispatch(removeList(list))
                 dispatch(clearErrors())
               },
                err => dispatch(receiveErrors(err))
              )
  }
}

// sync actions
export const receiveList = list => ({
  type: RECEIVE_LIST,
  list
})

export const receiveLists = lists => ({
  type: RECEIVE_LISTS,
  lists
})

export const removeList = list => ({
  type: REMOVE_LIST,
  list
})
