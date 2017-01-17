# == Schema Information
#
# Table name: lists
#
#  id      :integer          not null, primary key
#  title   :string
#  user_id :integer
#

class Lists::IndexSerializer < ActiveModel::Serializer
  attributes :id, :title
  attributes :reminders_count, :incomplete_reminders_count

  def reminders_count
    object.reminders.count
  end

  def incomplete_reminders_count
    object.reminders.incomplete.count
  end
end
