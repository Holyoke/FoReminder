# == Schema Information
#
# Table name: lists
#
#  id      :integer          not null, primary key
#  title   :string
#  user_id :integer
#

class List < ApplicationRecord
  validates :title, presence: true

  belongs_to :user
  has_many :reminders
  has_many :comments, through: :reminders
end
