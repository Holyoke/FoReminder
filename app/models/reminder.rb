class Reminder < ApplicationRecord
  validates :title, :remind_date, presence: true
  validates :done, inclusion: { in: [true, false] }
end
