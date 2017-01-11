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
#  list_id     :integer
#

class Reminder < ApplicationRecord
  validates :title, :remind_date, presence: true
  validates :done, inclusion: { in: [true, false] }

  belongs_to :list
  delegate :user, to: :list

  has_many :comments, dependent: :destroy

  after_initialize :set_default_values

  private
    def set_default_values
      self.done ||= false
      self.remind_date ||= Time.now + 1.day
    end
end
