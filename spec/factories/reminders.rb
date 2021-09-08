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

FactoryBot.define do
  factory :reminder do
    title { Faker::Company.bs }
    body { Faker::Hipster.paragraph }
    done { [true, false, false].sample }
    remind_date { Time.now + 1.hour }
  end
end
