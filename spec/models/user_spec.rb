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
#

require 'rails_helper'

RSpec.describe User, type: :model do
  it { should have_many :reminders }
  
  it { should have_many :lists }

  it "should have a default list"  do
    joe = User.new(email: "joe@test.com", password: "passw0rd", password_confirmation: "passw0rd")
    expect(joe.default_list).to be_present
    expect(joe.default_list).to eq(joe.lists.first)
  end

end
