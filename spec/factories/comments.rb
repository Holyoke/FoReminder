# == Schema Information
#
# Table name: comments
#
#  id          :integer          not null, primary key
#  body        :string
#  reminder_id :integer
#

FactoryGirl.define do
  factory :comment do
    body "MyString"
    belongs_to ""
  end
end
