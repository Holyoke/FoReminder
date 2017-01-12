# == Schema Information
#
# Table name: lists
#
#  id      :integer          not null, primary key
#  title   :string
#  user_id :integer
#

FactoryGirl.define do
  factory :list do
    title { Faker::Company.buzzword }
  end
end
