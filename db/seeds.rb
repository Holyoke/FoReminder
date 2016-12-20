# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#create users
joe = User.create(email: "joe@foreminder.com", password: "secret123", password_confirmation: "secret123")
jane = User.create(email: "jane@foreminder.com", password: "secret123", password_confirmation: "secret123")

10.times do |n|
  user = [joe, jane].sample

  user.reminders.create(
    title: "Reminder ##{n}",
    remind_date: Date.new + n % 7,
    done: false,
    body: "Sample body"
  )
end
