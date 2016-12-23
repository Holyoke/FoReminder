# == Schema Information
#
# Table name: comments
#
#  id          :integer          not null, primary key
#  body        :string
#  reminder_id :integer
#

class Comment < ApplicationRecord
  validates_presence_of :body
  belongs_to :reminder
end
