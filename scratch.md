Object.keys(reminders).map(id => {
  if (reminders[id].done === true) {
    return reminders[id]
  }
})
