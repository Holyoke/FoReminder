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

FactoryGirl.define do
  factory :reminder do
    title "MyString"
    body "MyString"
    done false
    remind_date "2016-11-21 16:41:21"
  end
end
