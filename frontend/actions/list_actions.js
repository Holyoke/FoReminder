export const RECEIVE_LIST = 'RECEIVE_LIST'
export const RECEIVE_LISTS = 'RECEIVE_LISTS'
export const REMOVE_LIST = 'REMOVE_LIST'

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
