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
#  user_id     :integer
#

class Reminder < ApplicationRecord
  validates :title, presence: true
  validates :done, inclusion: { in: [true, false] }

  belongs_to :user
  has_many :comments, dependent: :destroy
end
