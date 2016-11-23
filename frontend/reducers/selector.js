export const allReminders = ({reminders}) => {
  Object.keys(reminders).map(id => reminders[id])
}
