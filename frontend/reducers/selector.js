export const allReminders = ({reminders}) => Object.keys(reminders).map(id => reminders[id])

export const commentsByReminderId = ({ comments }, reminder_id) => {
  const commentsByReminderId = []
  Object.keys(comments).forEach(commentId => {
    const comment = comments[commentId]
    if (comments[commentId].reminder_id === reminder_id) commentsByReminderId.push(comment)
  })
  return commentsByReminderId
}
