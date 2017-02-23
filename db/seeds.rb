# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#create users
joe = User.create(email: "joe@test.com", password: "passw0rd", password_confirmation: "passw0rd")
jane = User.create(email: "jane@test.com", password: "passw0rd", password_confirmation: "passw0rd")
guest = User.create(email: "guest@remindux.com", password: "guest1234", password_confirmation: "guest1234")

guest.default_list.reminders.create(
  title: "Welcome to Remindux!",
  remind_date: Time.now + 7.days,
  done: false
)

guest.default_list.reminders.create(
  title: "Create a reminder via the form below",
  remind_date: Time.now + 7.days,
  done: false
)

guest.default_list.reminders.create(
  title: "Clicking the boxes toggles reminders and comments",
  remind_date: Time.now + 7.days,
  done: false
)

guest.default_list.reminders.create(
  title: "Click the boxes to toggle reminders and comments",
  remind_date: Time.now + 7.days,
  done: false
)

guest.default_list.reminders.create(
  title: "Click on the titles for more features!",
  remind_date: Time.now + 7.days,
  done: false
)

guest.default_list.reminders.first.comments.create(
  body: "You can also change the reminder title by clicking on it!",
  active: true
)

guest.default_list.reminders.last.comments.create(
  body: "You can also change the reminder title by clicking on it!",
  active: true
)


10.times do |n|
  user = [joe, jane].sample

  user.default_list.reminders.create(
    title: "Reminder ##{n}",
    remind_date: Time.now + n.days,
    done: false,
    body: "Sample body"
  )

  if n == 5
    5.times { |body| user.default_list.reminders.first.comments.create(body: "test comment  #{body} ", active: [true,false].sample) }
  end
end
