# == Schema Information
#
# Table name: comments
#
#  id          :integer          not null, primary key
#  body        :string
#  reminder_id :integer
#  active      :boolean          default(FALSE), not null
#

class Comment < ApplicationRecord
  validates_presence_of :body
  belongs_to :reminder
end
