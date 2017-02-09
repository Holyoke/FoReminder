// lists
export const getLists = ({lists}) => Object.keys(lists).map(id => lists[id])

//  reminders
export const allReminders = (reminders) => Object.keys(reminders).map(id => reminders[id])

export const completedReminders = (reminders) => {
  let result = []
  for (let id in reminders) {
    if (reminders[id].done === true) { result.push(reminders[id]) }
  }
  return result
}

export const incompleteReminders = (reminders) => {
  let result = []
  for (let id in reminders) {
    if (reminders[id].done === false) { result.push(reminders[id]) }
  }
  return result
}

export const getVisibleReminders = ({reminders, remindersFilter}) => {
  const { filter } = remindersFilter

  switch (filter) {
    case 'SHOW_ALL':
      return allReminders(reminders)
    case 'SHOW_COMPLETED':
      return completedReminders(reminders)
    case 'SHOW_INCOMPLETE':
      return incompleteReminders(reminders)
    case 'SHOW_NONE':
      return []
    default:
      return allReminders(reminders)
  }
}

export const commentsByReminderId = ({ comments }, reminder_id) => {
  const commentsByReminderId = []
  Object.keys(comments).forEach(commentId => {
    const comment = comments[commentId]
    if (comments[commentId].reminder_id === reminder_id) commentsByReminderId.push(comment)
  })
  return commentsByReminderId
}

export const parseErrors = ({ errors }) => {
  // session errors
  switch (errors.reason) {
    case 'Invalid credentials.':
      return errors.data.errors
    case 'Failed to submit email registration.':
      return errors.data.errors.full_messages
  }

  // api resources errors
  switch (errors.statusText) {
    case 'Unauthorized':
      return errors.responseJSON.errors
    case 'Unprocessable Entity':
      return errors.responseJSON
    case 'error':
      return errors.responseJSON || [errors.responseText || errors.statusText]
    case 'Not Found':
      return ['Resource not found']
  }

  return errors
}
