# == Schema Information
#
# Table name: reminders
#
#  id          :integer          not null, primary key
#  title       :string
#  body        :string
#  done        :boolean
#  remind_date :datetime
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Reminder < ApplicationRecord
  validates :title, presence: true
  validates :done, inclusion: { in: [true, false] }
end
