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

require 'rails_helper'

RSpec.describe Reminder, type: :model do
  it { should validate_presence_of(:title) }
  it { should belong_to :list }
  it { should have_many :comments }

  it "should default done to false" do
    reminder = Reminder.new(title: "test", remind_date: Date.new)
    expect(reminder.done).to eq false
  end

  it "should default remind_date with no date given" do
    reminder = Reminder.new(title: "test")
    expect(reminder.remind_date).to be_present
  end

  it "shouldn't default remind_date if given a date" do
    reminder = Reminder.new(title: "test", remind_date: Date.new)
    expect(reminder.remind_date).to be_present
  end

  it "should have a user via list"
end
