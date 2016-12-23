export const allReminders = ({reminders}) => Object.keys(reminders).map(id => reminders[id])

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
    default:
      break
  }

  // api resources errors
  switch (errors.statusText) {
    case 'Unauthorized':
      return errors.responseJSON.errors
    case 'error':
      return errors.responseJSON
  }

  return errors
}
