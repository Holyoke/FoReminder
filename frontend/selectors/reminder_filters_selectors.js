export const filters = ({remindersFilter}) => {
  return remindersFilter.filter
}

export const filterCounts = ({reminders}) => {
  const allCount = Object.keys(reminders).length

  let completedCount = 0
  for (let id in reminders) {
    if (reminders[id].done === true) { completedCount += 1 }
  }

  let incompleteCount = allCount - completedCount
  return {
    All: Object.keys(reminders).length,
    Completed: completedCount,
    Incomplete: incompleteCount
  }
}
