# == Schema Information
#
# Table name: users
#
#  id                     :integer          not null, primary key
#  provider               :string           default("email"), not null
#  uid                    :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  reset_password_token   :string
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default(0), not null
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :string
#  last_sign_in_ip        :string
#  confirmation_token     :string
#  confirmed_at           :datetime
#  confirmation_sent_at   :datetime
#  unconfirmed_email      :string
#  name                   :string
#  nickname               :string
#  image                  :string
#  email                  :string
#  tokens                 :json
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#

FactoryGirl.define do
  factory :user do
    email { Faker::Internet.email }
    password "passw0rd"
    password_confirmation "passw0rd"

    factory :user_with_lists_reminders_comments do
      # posts_count is declared as a transient attribute and available in
      # attributes on the factory, as well as the callback via the evaluator
      transient do
        lists_count 2
        reminders_count 3
        comments_count 3
      end

      after(:create) do |user, evaluator|
        create_list(:list, evaluator.lists_count, user: user)
        user.lists.each do |list|
          create_list(:reminder, evaluator.reminders_count, list: list)
          list.reminders.each do |reminder|
            create_list(:comment, evaluator.comments_count, reminder: reminder)
          end
        end
      end
    end
  end
end
